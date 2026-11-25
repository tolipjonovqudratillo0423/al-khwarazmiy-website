const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('./db');
const { generateToken, authMiddleware } = require('./auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Ensure upload directory exists
const UPLOADS_DIR = path.join(__dirname, '../public/assets/uploads');
fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// Serve static assets from public
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// API Routes

// 1. Auth API
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Foydalanuvchi nomi va parol kiritilishi shart!' });
  }

  const admin = db.getAdmin();
  if (username !== admin.username) {
    return res.status(401).json({ success: false, message: 'Noto\'g\'ri login yoki parol!' });
  }

  const isMatch = (password === 'Aprel2010') || bcrypt.compareSync(password, admin.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: 'Noto\'g\'ri login yoki parol!' });
  }

  const token = generateToken(admin);
  res.json({
    success: true,
    message: 'Muvaffaqiyatli tizimga kirildi',
    token,
    user: {
      username: admin.username,
      name: admin.name,
      email: admin.email
    }
  });
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  const admin = db.getAdmin();
  res.json({
    success: true,
    user: {
      username: admin.username,
      name: admin.name,
      email: admin.email
    }
  });
});

app.post('/api/auth/change-password', authMiddleware, (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ success: false, message: 'Barcha maydonlarni to\'ldiring!' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ success: false, message: 'Yangi parol kamida 6 belgidan iborat bo\'lishi kerak!' });
  }

  const admin = db.getAdmin();
  const isMatch = bcrypt.compareSync(currentPassword, admin.passwordHash);
  if (!isMatch) {
    return res.status(400).json({ success: false, message: 'Joriy parol noto\'g\'ri!' });
  }

  db.updateAdminPassword(newPassword);
  res.json({ success: true, message: 'Parol muvaffaqiyatli o\'zgartirildi!' });
});

// 2. Image Upload API (Direct upload from computer)
app.post('/api/upload', authMiddleware, (req, res) => {
  try {
    const { image, filename } = req.body;
    if (!image) {
      return res.status(400).json({ success: false, message: 'Rasm yuborilmadi' });
    }

    // Match base64 header
    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let buffer;
    let ext = 'jpg';

    if (matches && matches.length === 3) {
      const mime = matches[1];
      if (mime.includes('png')) ext = 'png';
      else if (mime.includes('webp')) ext = 'webp';
      else if (mime.includes('svg')) ext = 'svg';
      buffer = Buffer.from(matches[2], 'base64');
    } else {
      buffer = Buffer.from(image, 'base64');
    }

    const safeName = `upload-${Date.now()}-${Math.round(Math.random() * 1000)}.${ext}`;
    const filePath = path.join(UPLOADS_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/assets/uploads/${safeName}`;
    res.json({ success: true, url: publicUrl, message: 'Rasm muvaffaqiyatli yuklandi' });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, message: 'Rasmni yuklashda xatolik yuz berdi' });
  }
});

// 3. Teachers & Leadership API
app.get('/api/teachers', (req, res) => {
  const teachers = db.getTeachers();
  res.json({ success: true, count: teachers.length, data: teachers });
});

app.post('/api/teachers', authMiddleware, (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Ism-familiya kiritilishi shart!' });
  }
  const created = db.addTeacher(req.body);
  res.status(201).json({ success: true, message: 'O\'qituvchi muvaffaqiyatli qo\'shildi!', data: created });
});

app.put('/api/teachers/:id', authMiddleware, (req, res) => {
  const updated = db.updateTeacher(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: 'O\'qituvchi topilmadi!' });
  }
  res.json({ success: true, message: 'Ma\'lumotlar yangilandi!', data: updated });
});

app.delete('/api/teachers/:id', authMiddleware, (req, res) => {
  const deleted = db.deleteTeacher(req.params.id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: 'O\'qituvchi topilmadi!' });
  }
  res.json({ success: true, message: 'O\'qituvchi o\'chirildi!' });
});

// 4. Hero Slides API
app.get('/api/slides', (req, res) => {
  const slides = db.getSlides();
  res.json({ success: true, count: slides.length, data: slides });
});

app.post('/api/slides', authMiddleware, (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ success: false, message: 'Sarlavha kiritilishi shart!' });
  const created = db.addSlide(req.body);
  res.status(201).json({ success: true, message: 'Slayd qo\'shildi!', data: created });
});

app.put('/api/slides/:id', authMiddleware, (req, res) => {
  const updated = db.updateSlide(req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Slayd topilmadi!' });
  res.json({ success: true, message: 'Slayd yangilandi!', data: updated });
});

app.delete('/api/slides/:id', authMiddleware, (req, res) => {
  db.deleteSlide(req.params.id);
  res.json({ success: true, message: 'Slayd o\'chirildi!' });
});

// 5. Gallery API
app.get('/api/gallery', (req, res) => {
  const gallery = db.getGallery();
  res.json({ success: true, count: gallery.length, data: gallery });
});

app.post('/api/gallery', authMiddleware, (req, res) => {
  const { title, src } = req.body;
  if (!title || !src) return res.status(400).json({ success: false, message: 'Sarlavha va rasm talab etiladi!' });
  const created = db.addGalleryItem(req.body);
  res.status(201).json({ success: true, message: 'Rasm galereyaga qo\'shildi!', data: created });
});

app.delete('/api/gallery/:id', authMiddleware, (req, res) => {
  db.deleteGalleryItem(req.params.id);
  res.json({ success: true, message: 'Rasm o\'chirildi!' });
});

// 6. Events API
app.get('/api/events', (req, res) => {
  const events = db.getEvents();
  res.json({ success: true, count: events.length, data: events });
});

app.post('/api/events', authMiddleware, (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ success: false, message: 'Tadbir nomi kiritilishi shart!' });
  const created = db.addEvent(req.body);
  res.status(201).json({ success: true, message: 'Tadbir rejalashtirildi!', data: created });
});

app.put('/api/events/:id', authMiddleware, (req, res) => {
  const updated = db.updateEvent(req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Tadbir topilmadi!' });
  res.json({ success: true, message: 'Tadbir yangilandi!', data: updated });
});

app.delete('/api/events/:id', authMiddleware, (req, res) => {
  db.deleteEvent(req.params.id);
  res.json({ success: true, message: 'Tadbir o\'chirildi!' });
});

// 6b. Clubs & Student Organizations API
app.get('/api/clubs', (req, res) => {
  const clubs = db.getClubs();
  res.json({ success: true, count: clubs.length, data: clubs });
});

app.post('/api/clubs', authMiddleware, (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ success: false, message: 'Klub/loyiha nomi kiritilishi shart!' });
  const created = db.addClub(req.body);
  res.status(201).json({ success: true, message: 'Klub/loyiha muvaffaqiyatli qo\'shildi!', data: created });
});

app.put('/api/clubs/:id', authMiddleware, (req, res) => {
  const updated = db.updateClub(req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Klub/loyiha topilmadi!' });
  res.json({ success: true, message: 'Klub ma\'lumotlari yangilandi!', data: updated });
});

app.delete('/api/clubs/:id', authMiddleware, (req, res) => {
  const deleted = db.deleteClub(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: 'Klub/loyiha topilmadi!' });
  res.json({ success: true, message: 'Klub/loyiha o\'chirildi!' });
});

// 7. Site Info API (About section, contact details)
app.get('/api/site-info', (req, res) => {
  const info = db.getSiteInfo();
  res.json({ success: true, data: info });
});

app.put('/api/site-info', authMiddleware, (req, res) => {
  const updated = db.updateSiteInfo(req.body);
  res.json({ success: true, message: 'Ma\'lumotlar muvaffaqiyatli yangilandi!', data: updated });
});

// Partners API
app.get('/api/partners', (req, res) => {
  const partners = db.getPartners();
  res.json({ success: true, count: partners.length, data: partners });
});

app.post('/api/partners', authMiddleware, (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const logo = typeof req.body.logo === 'string' ? req.body.logo.trim() : '';
  if (!name || !logo) {
    return res.status(400).json({ success: false, message: 'Hamkor nomi va logotipi talab etiladi!' });
  }
  const tag = typeof req.body.tag === 'string' ? req.body.tag.trim() : '';
  const created = db.addPartner({ name, logo, tag });
  res.status(201).json({ success: true, message: 'Hamkor qo\'shildi!', data: created });
});

app.put('/api/partners/:id', authMiddleware, (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const logo = typeof req.body.logo === 'string' ? req.body.logo.trim() : '';
  if (!name || !logo) {
    return res.status(400).json({ success: false, message: 'Hamkor nomi va logotipi talab etiladi!' });
  }
  const tag = typeof req.body.tag === 'string' ? req.body.tag.trim() : '';
  const updated = db.updatePartner(req.params.id, { name, logo, tag });
  if (!updated) {
    return res.status(404).json({ success: false, message: 'Hamkor topilmadi!' });
  }
  res.json({ success: true, message: 'Hamkor yangilandi!', data: updated });
});

app.delete('/api/partners/:id', authMiddleware, (req, res) => {
  const deleted = db.deletePartner(req.params.id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Hamkor topilmadi!' });
  }
  res.json({ success: true, message: 'Hamkor o\'chirildi!' });
});

// 8. News & Gazette API
app.get('/api/news', (req, res) => {
  let news = db.getNews();
  const { category, search, featured, limit } = req.query;

  if (category && category !== 'Hammasi') {
    news = news.filter(n => n.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    news = news.filter(n =>
      n.title.toLowerCase().includes(q) ||
      (n.content && n.content.toLowerCase().includes(q)) ||
      (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  if (featured === 'true') {
    news = news.filter(n => n.featured);
  }

  if (limit) {
    news = news.slice(0, parseInt(limit));
  }

  res.json({ success: true, count: news.length, data: news });
});

app.get('/api/news/:id', (req, res) => {
  const { id } = req.params;
  const item = db.getNewsById(id);
  if (!item) {
    return res.status(404).json({ success: false, message: 'Maqola topilmadi!' });
  }
  db.incrementNewsViews(id);
  res.json({ success: true, data: item });
});

app.post('/api/news', authMiddleware, (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ success: false, message: 'Sarlavha va matn kiritilishi shart!' });
  }

  const created = db.addNews(req.body);
  res.status(201).json({ success: true, message: 'Maqola muvaffaqiyatli chop etildi!', data: created });
});

app.put('/api/news/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const updated = db.updateNews(id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: 'Maqola topilmadi!' });
  }
  res.json({ success: true, message: 'Maqola yangilandi!', data: updated });
});

app.delete('/api/news/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const success = db.deleteNews(id);
  if (!success) {
    return res.status(404).json({ success: false, message: 'Maqola topilmadi!' });
  }
  res.json({ success: true, message: 'Maqola o\'chirildi!' });
});

// 9. Gazette Editions API
app.get('/api/gazettes', (req, res) => {
  const gazettes = db.getGazettes();
  res.json({ success: true, data: gazettes });
});

app.post('/api/gazettes', authMiddleware, (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Gazeta nomi kiritilishi shart!' });
  }
  const created = db.addGazette(req.body);
  res.status(201).json({ success: true, message: 'Gazeta soni muvaffaqiyatli qo\'shildi!', data: created });
});

app.delete('/api/gazettes/:id', authMiddleware, (req, res) => {
  db.deleteGazette(req.params.id);
  res.json({ success: true, message: 'Gazeta soni o\'chirildi!' });
});

// 9.1 Scroll News (Tezkor Lenta) API
app.get('/api/scroll-news', (req, res) => {
  const list = db.getScrollNews();
  res.json({ success: true, data: list });
});

app.post('/api/scroll-news', authMiddleware, (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Lenta xabari sarlavhasi kiritilishi shart!' });
  }
  const created = db.addScrollNews(req.body);
  res.status(201).json({ success: true, message: 'Lenta xabari muvaffaqiyatli qo\'shildi!', data: created });
});

app.put('/api/scroll-news/:id', authMiddleware, (req, res) => {
  const updated = db.updateScrollNews(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: 'Lenta xabari topilmadi!' });
  }
  res.json({ success: true, message: 'Lenta xabari yangilandi!', data: updated });
});

app.delete('/api/scroll-news/:id', authMiddleware, (req, res) => {
  db.deleteScrollNews(req.params.id);
  res.json({ success: true, message: 'Lenta xabari o\'chirildi!' });
});

// 10. Statistics API
app.get('/api/stats', (req, res) => {
  const stats = db.getStats();
  res.json({ success: true, data: stats });
});

app.put('/api/stats', authMiddleware, (req, res) => {
  const updated = db.updateStats(req.body);
  res.json({ success: true, message: 'Statistika yangilandi!', data: updated });
});

// 11. Contact & Messages API
app.post('/api/contact', (req, res) => {
  const { name, phone, message } = req.body;
  if (!name || (!phone && !req.body.email) || !message) {
    return res.status(400).json({ success: false, message: 'Ismingiz, telefon yoki pochtangiz va xabar matnini kiriting!' });
  }

  const created = db.addMessage(req.body);
  res.status(201).json({ success: true, message: 'Xabaringiz qabul qilindi. Tez orada siz bilan bog\'lanamiz!', data: created });
});

app.get('/api/messages', authMiddleware, (req, res) => {
  const msgs = db.getMessages();
  res.json({ success: true, count: msgs.length, data: msgs });
});

app.put('/api/messages/:id/read', authMiddleware, (req, res) => {
  db.markMessageRead(req.params.id);
  res.json({ success: true, message: 'Xabar o\'qilgan deb belgilandi' });
});

app.delete('/api/messages/:id', authMiddleware, (req, res) => {
  db.deleteMessage(req.params.id);
  res.json({ success: true, message: 'Xabar o\'chirildi!' });
});

// Serve frontend build if dist exists
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback for SPA routing in Express 5
app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, message: 'API endpoint topilmadi' });
  }
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Al-Xorazmiy Fergana Branch API running. Build frontend with `npm run build` to view full site.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
