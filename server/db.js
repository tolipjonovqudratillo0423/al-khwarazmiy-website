const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_FILE = path.join(__dirname, 'data.json');

// Initial seed data with authentic Fergana branch posts, teachers, slides, gallery, events, school info
const getInitialData = () => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('adminXorazmiy2026!', salt);

  return {
    admin: {
      username: 'admin',
      passwordHash: hashedPassword,
      name: 'Bosh Administrator',
      email: 'admin@alxorazmiy-fergana.uz'
    },
    siteInfo: {
      schoolName: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab",
      branchName: "Farg'ona filiali",
      aboutTitle: "Maktab haqida",
      aboutText: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali — zamonaviy texnologiyalar va chuqurlashtirilgan ta'lim uyg'unligiga asoslangan innovatsion davlat ta'lim maskani. Maktabda matematika, fizika, informatika hamda ingliz tili fanlari chuqurlashtirilgan holda oʻtiladi.",
      aboutImage: "",
      address: "Farg'ona shahar, Ilg'or MFY, Mustaqillik shoh ko'chasi 1e-uy",
      phone: "+998 (73) 244-01-20",
      email: "info@alxorazmiy-fergana.uz",
      telegramChannel: "@alXorazmiyfargonafiliali"
    },
    stats: {
      students: '540+',
      teachers: '52+',
      laboratories: '14+',
      olympiadWinners: '68+',
      grantsWon: '15+'
    },
    partners: [
      { id: 'partner-ministry', name: "Maktabgacha va maktab ta'limi vazirligi", tag: 'Vazirlik', logo: '/assets/talim.png' },
      { id: 'partner-agency', name: "Ixtisoslashtirilgan ta'lim muassasalari agentligi", tag: 'Agentlik', logo: '/assets/agentlik.png' },
      { id: 'partner-digital', name: 'Raqamli texnologiyalar vazirligi', tag: 'Vazirlik', logo: '/assets/digitaluz.png' },
      { id: 'partner-itpark', name: 'IT Park Uzbekistan', tag: 'IT ekosistema', logo: '/assets/itpark.png' },
      { id: 'partner-tatu', name: "TATU Farg'ona filiali", tag: "Oliy ta'lim", logo: '' },
      { id: 'partner-fstu', name: "Farg'ona davlat texnika universiteti", tag: "Oliy ta'lim", logo: '/assets/fstu.png' },
      { id: 'partner-guard', name: "Milliy Gvardiya Farg'ona viloyati", tag: 'Hamkorlik', logo: '/assets/gvardiya.jpg' },
      { id: 'partner-youth', name: 'Yoshlar Ittifoqi', tag: 'Jamoat tashkiloti', logo: '' },
      { id: 'partner-university', name: 'Muhammad al-Xorazmiy Universiteti', tag: "Oliy ta'lim", logo: '/assets/aluniversity.png' },
      { id: 'partner-hokimlik', name: "Farg'ona Viloyat Hokimligi", tag: 'Davlat boshqaruvi', logo: '/assets/hokimlik.png' }
    ],
    slides: [
      {
        id: 'slide-1',
        title: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali",
        desc: "Maktabda matematika, fizika, informatika hamda ingliz tili fanlari chuqurlashtirilgan holatda oʻtiladi.",
        image: "/assets/school_building.jpg",
        order: 1
      },
      {
        id: 'slide-2',
        title: "Zamonaviy IT ta'limi va Kelajak dasturchilari maskani",
        desc: "Web va mobil dasturlash, sun'iy intellekt, robototexnika laboratoriyalari va xalqaro olimpiadalarga maqsadli tayyorgarlik.",
        image: "/assets/photos/school_photo_3.jpg",
        order: 2
      },
      {
        id: 'slide-3',
        title: "«Al-Xorazmiy Ziyo» Maktab Gazetasi va Yangiliklari",
        desc: "SAT MAXING CLUB, pedagoglarimizning xalqaro attestatsiya natijalari hamda Raqamli avlod qizlari startap tashabbuslari.",
        image: "/assets/photos/school_photo_7.jpg",
        order: 3
      }
    ],
    teachers: [
      {
        id: 'teacher-1',
        name: "Maktab Rahbariyati",
        role: "Filial Direktori",
        category: "Rahbariyat",
        image: "",
        bio: "Ta'lim boshqaruvi bo'yicha yuqori malakali mutaxassis. Innovatsion ta'lim metodikalari va STEM integratsiyasi tashabbuskori.",
        score: "Oliy toifali mutaxassis",
        badge: "Direktor"
      },
      {
        id: 'teacher-2',
        name: "O'quv ishlari bo'yicha direktor o'rinbosari",
        role: "O'IBDO'",
        category: "Rahbariyat",
        image: "",
        bio: "Chuqurlashtirilgan o'quv rejalari, olimpiada tizimi va o'quv sifatini monitoring qilish bo'yicha mas'ul rahbar.",
        score: "Cambridge dasturlari koordinatori",
        badge: "O'IBDO'"
      },
      {
        id: 'teacher-3',
        name: "Ma'naviy-ma'rifiy ishlar bo'yicha o'rinbosar",
        role: "MMIBDO'",
        category: "Rahbariyat",
        image: "",
        bio: "O'quvchilarning ijtimoiy faolligi, klublar, sport tadbirlari va vatanparvarlik tarbiyasini muvofiqlashtiruvchi rahbar.",
        score: "Yoshlar yetakchisi",
        badge: "MMIBDO'"
      },
      {
        id: 'teacher-4',
        name: "Izzatillo Rahmatov",
        role: "Fizika fani o'qituvchisi",
        category: "Pedagoglar",
        image: "",
        score: "Attestatsiya: 82 ball | Milliy A+ (90+)",
        bio: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali yetakchi fizika ustozi. O'quvchilari respublika va xalqaro fizika olimpiadalari g'oliblari.",
        badge: "Milliy Sertifikat A+"
      },
      {
        id: 'teacher-5',
        name: "Ibrohimjon Umurzaqov",
        role: "Tarix va Tarbiya fani o'qituvchisi",
        category: "Pedagoglar",
        image: "",
        score: "Tarbiya: 92 ball | Tarix: 86 ball",
        bio: "Attestatsiya sinovlarida birdaniga ikki fandan rekord darajadagi 92 va 86 ballik ko'rsatkichlarga erishgan mohir pedagog.",
        badge: "Oliy Natija"
      },
      {
        id: 'teacher-6',
        name: "Informatika va IT Kafedrasi",
        role: "Dasturlash va Sun'iy Intellekt",
        category: "Pedagoglar",
        image: "",
        score: "Python, C++, Web & Robotics",
        bio: "O'quvchilarni ICPC Junior, IOI hamda WRO xalqaro robototexnika musobaqalariga tayyorlaydigan tajribali dasturchi ustozlar jamoasi.",
        badge: "IT Mutaxassis"
      },
      {
        id: 'teacher-7',
        name: "Matematika Kafedrasi Ustozlari",
        role: "Oliy toifali matematika ustozlari",
        category: "Pedagoglar",
        image: "",
        score: "Attestatsiya: 94 ballik yuksak natija",
        bio: "Matematika fanidan mantiqiy va chuqurlashtirilgan mashg'ulotlar mualliflari. SAT Math va milliy sertifikatlar bo'yicha ixtisoslashgan.",
        badge: "94 Ball Natija"
      }
    ],
    gallery: [
      { id: 'gal-1', src: '/assets/school_building.jpg', title: 'Maktab binosi va fasad ko\'rinishi', category: 'Maktab hayoti', date: 'Noyabr 2026' }
    ],
    events: [
      {
        id: 'event-1',
        title: "“Bir Vatan, bir el, bir bayroq!” vatanparvarlik chellenji",
        date: "18-Noyabr, 2026",
        time: "10:00",
        location: "Maktab faollar zali",
        category: "Bayram",
        desc: "Davlat bayrog'i qabul qilingan kun munosabati bilan she'rxonlik, IT grafikasi tanlovi va ma'rifiy tadbir."
      },
      {
        id: 'event-2',
        title: "“Raqamli avlod qizlari” startap loyihalar ko'rgazmasi",
        date: "25-Noyabr, 2026",
        time: "14:00",
        location: "IT Laboratoriya",
        category: "Startap",
        desc: "O'quvchi qizlarimizning ekologiya, sog'liqni saqlash va ta'lim yo'nalishidagi prototiplari taqdimoti."
      }
    ],
    gazettes: [],
    news: [],
    messages: [
      {
        id: 'msg-1',
        name: 'Azizbek Rahmonov',
        phone: '+998 90 123 45 67',
        email: 'azizbek@gmail.com',
        subject: 'Qabul imtihonlari to\'g\'risida',
        message: 'Assalomu alaykum! 7-sinfga qabul imtihonlari qaysi sanalarda o\'tkaziladi va qanday hujjatlar topshirilishi kerak?',
        date: '2026-11-14 10:20',
        read: false
      }
    ]
  };
};

class DB {
  constructor() {
    this.init();
  }

  init() {
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialData();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      this.data = initial;
    } else {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        this.data = JSON.parse(raw);
        // Ensure new collections exist if older DB was created
        const defaults = getInitialData();
        let updated = false;
        ['teachers', 'slides', 'gallery', 'events', 'siteInfo', 'clubs', 'partners'].forEach(k => {
          if (!this.data[k]) {
            this.data[k] = defaults[k];
            updated = true;
          }
        });
        if (updated) this.save();
      } catch (e) {
        console.error('Error reading DB, reinitializing:', e);
        this.data = getInitialData();
        this.save();
      }
    }
  }

  save() {
    fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
  }

  // --- TEACHERS & LEADERSHIP ---
  getTeachers() {
    return this.data.teachers || [];
  }

  getTeacherById(id) {
    return (this.data.teachers || []).find(t => t.id === id);
  }

  addTeacher(item) {
    const list = this.data.teachers || [];
    const newTeacher = {
      id: `teacher-${Date.now()}`,
      name: item.name,
      role: item.role || "O'qituvchi",
      category: item.category || "Pedagoglar",
      image: item.image || "/assets/photos/school_photo_2.jpg",
      bio: item.bio || "",
      score: item.score || "",
      badge: item.badge || ""
    };
    list.push(newTeacher);
    this.data.teachers = list;
    this.save();
    return newTeacher;
  }

  updateTeacher(id, updateData) {
    const index = (this.data.teachers || []).findIndex(t => t.id === id);
    if (index === -1) return null;
    this.data.teachers[index] = { ...this.data.teachers[index], ...updateData, id };
    this.save();
    return this.data.teachers[index];
  }

  deleteTeacher(id) {
    const before = (this.data.teachers || []).length;
    this.data.teachers = (this.data.teachers || []).filter(t => t.id !== id);
    const changed = this.data.teachers.length < before;
    if (changed) this.save();
    return changed;
  }

  // --- SLIDES ---
  getSlides() {
    return this.data.slides || [];
  }

  addSlide(item) {
    const list = this.data.slides || [];
    const newSlide = {
      id: `slide-${Date.now()}`,
      title: item.title,
      desc: item.desc || "",
      image: item.image || "/assets/school_building.jpg",
      order: list.length + 1
    };
    list.push(newSlide);
    this.data.slides = list;
    this.save();
    return newSlide;
  }

  updateSlide(id, updateData) {
    const idx = (this.data.slides || []).findIndex(s => s.id === id);
    if (idx === -1) return null;
    this.data.slides[idx] = { ...this.data.slides[idx], ...updateData, id };
    this.save();
    return this.data.slides[idx];
  }

  deleteSlide(id) {
    this.data.slides = (this.data.slides || []).filter(s => s.id !== id);
    this.save();
    return true;
  }

  // --- GALLERY ---
  getGallery() {
    return this.data.gallery || [];
  }

  addGalleryItem(item) {
    const list = this.data.gallery || [];
    const newItem = {
      id: `gal-${Date.now()}`,
      src: item.src || "/assets/photos/school_photo_1.jpg",
      title: item.title,
      category: item.category || "Darslar",
      date: item.date || "2026-yil"
    };
    list.unshift(newItem);
    this.data.gallery = list;
    this.save();
    return newItem;
  }

  deleteGalleryItem(id) {
    this.data.gallery = (this.data.gallery || []).filter(g => g.id !== id);
    this.save();
    return true;
  }

  // --- EVENTS ---
  getEvents() {
    return this.data.events || [];
  }

  addEvent(item) {
    const list = this.data.events || [];
    const newEvent = {
      id: `event-${Date.now()}`,
      title: item.title,
      date: item.date || "Yaqinda",
      time: item.time || "10:00",
      location: item.location || "Maktab faollar zali",
      category: item.category || "Tadbir",
      desc: item.desc || ""
    };
    list.unshift(newEvent);
    this.data.events = list;
    this.save();
    return newEvent;
  }

  updateEvent(id, updateData) {
    const idx = (this.data.events || []).findIndex(e => e.id === id);
    if (idx === -1) return null;
    this.data.events[idx] = { ...this.data.events[idx], ...updateData, id };
    this.save();
    return this.data.events[idx];
  }

  deleteEvent(id) {
    this.data.events = (this.data.events || []).filter(e => e.id !== id);
    this.save();
    return true;
  }

  // --- SITE INFO ---
  getSiteInfo() {
    return this.data.siteInfo || {};
  }

  updateSiteInfo(newInfo) {
    this.data.siteInfo = { ...this.data.siteInfo, ...newInfo };
    this.save();
    return this.data.siteInfo;
  }

  // --- NEWS ---
  getNews() {
    return this.data.news || [];
  }

  getNewsById(id) {
    return (this.data.news || []).find(n => n.id === id || n.slug === id);
  }

  addNews(item) {
    const news = this.data.news || [];
    const newId = `news-${Date.now()}`;
    const slug = (item.slug || item.title)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 60);

    const newItem = {
      id: newId,
      slug: slug || newId,
      title: item.title,
      category: item.category || 'Gazeta maqolasi',
      date: item.date || new Date().toISOString().split('T')[0],
      author: item.author || 'Administrator',
      coverImage: item.coverImage || '/assets/photos/school_photo_1.jpg',
      excerpt: item.excerpt || (item.content ? item.content.substring(0, 150) + '...' : ''),
      content: item.content || '',
      tags: Array.isArray(item.tags) ? item.tags : (item.tags ? item.tags.split(',').map(t => t.trim()) : ['Gazeta']),
      views: 1,
      featured: Boolean(item.featured)
    };

    news.unshift(newItem);
    this.data.news = news;
    this.save();
    return newItem;
  }

  updateNews(id, updateData) {
    const index = (this.data.news || []).findIndex(n => n.id === id || n.slug === id);
    if (index === -1) return null;

    const existing = this.data.news[index];
    const updated = {
      ...existing,
      ...updateData,
      id: existing.id
    };

    if (updateData.tags && typeof updateData.tags === 'string') {
      updated.tags = updateData.tags.split(',').map(t => t.trim()).filter(Boolean);
    }

    this.data.news[index] = updated;
    this.save();
    return updated;
  }

  deleteNews(id) {
    const beforeCount = (this.data.news || []).length;
    this.data.news = (this.data.news || []).filter(n => n.id !== id && n.slug !== id);
    const deleted = this.data.news.length < beforeCount;
    if (deleted) this.save();
    return deleted;
  }

  incrementNewsViews(id) {
    const item = (this.data.news || []).find(n => n.id === id || n.slug === id);
    if (item) {
      item.views = (item.views || 0) + 1;
      this.save();
    }
  }

  // --- GAZETTES ---
  getGazettes() {
    return this.data.gazettes || [];
  }

  addGazette(item) {
    const newId = `gazette-${Date.now()}`;
    const newGazette = {
      id: newId,
      title: item.title,
      subtitle: item.subtitle || '',
      date: item.date || new Date().toISOString().split('T')[0],
      edition: item.edition || 'Maxsus son',
      coverImage: item.coverImage || '/assets/photos/school_photo_1.jpg',
      description: item.description || '',
      articlesCount: item.articlesCount || 5,
      downloadUrl: item.downloadUrl || '#'
    };
    this.data.gazettes.unshift(newGazette);
    this.save();
    return newGazette;
  }

  deleteGazette(id) {
    this.data.gazettes = (this.data.gazettes || []).filter(g => g.id !== id);
    this.save();
    return true;
  }

  // --- STATS ---
  getStats() {
    return this.data.stats || {};
  }

  updateStats(newStats) {
    this.data.stats = { ...this.data.stats, ...newStats };
    this.save();
    return this.data.stats;
  }

  // --- MESSAGES ---
  getMessages() {
    return this.data.messages || [];
  }

  addMessage(msg) {
    const newMsg = {
      id: `msg-${Date.now()}`,
      name: msg.name,
      phone: msg.phone || '',
      email: msg.email || '',
      subject: msg.subject || 'Saytdan murojaat',
      message: msg.message,
      date: new Date().toLocaleString('uz-UZ'),
      read: false
    };
    this.data.messages.unshift(newMsg);
    this.save();
    return newMsg;
  }

  markMessageRead(id) {
    const msg = (this.data.messages || []).find(m => m.id === id);
    if (msg) {
      msg.read = true;
      this.save();
    }
  }

  deleteMessage(id) {
    this.data.messages = (this.data.messages || []).filter(m => m.id !== id);
    this.save();
  }

  // --- CLUBS & STUDENT ORGANIZATIONS ---
  getClubs() {
    return this.data.clubs || [];
  }

  getClubById(id) {
    return (this.data.clubs || []).find(c => c.id === id);
  }

  addClub(item) {
    const list = this.data.clubs || [];
    const newClub = {
      id: `club-${Date.now()}`,
      title: item.title || "Yangi Klub",
      badge: item.badge || "To'garak",
      category: item.category || "Ijtimoiy",
      founder: item.founder || "Maktab kafedrasi",
      leader: item.leader || "",
      image: item.image || "",
      desc: item.desc || "",
      telegram: item.telegram || "",
      stats: item.stats || "Faoliyatda",
      color: item.color || "from-blue-600 to-sky-500",
      features: Array.isArray(item.features) ? item.features : (item.features ? item.features.split('\n').filter(Boolean) : [])
    };
    list.push(newClub);
    this.data.clubs = list;
    this.save();
    return newClub;
  }

  updateClub(id, updateData) {
    const idx = (this.data.clubs || []).findIndex(c => c.id === id);
    if (idx === -1) return null;
    if (updateData.features && typeof updateData.features === 'string') {
      updateData.features = updateData.features.split('\n').filter(Boolean);
    }
    this.data.clubs[idx] = { ...this.data.clubs[idx], ...updateData, id };
    this.save();
    return this.data.clubs[idx];
  }

  deleteClub(id) {
    const before = (this.data.clubs || []).length;
    this.data.clubs = (this.data.clubs || []).filter(c => c.id !== id);
    const changed = this.data.clubs.length < before;
    if (changed) this.save();
    return changed;
  }

  // --- SCROLL NEWS (Tezkor Gazeta Lentasi) ---
  getScrollNews() {
    return this.data.scrollNews || [];
  }

  addScrollNews(item) {
    const list = this.data.scrollNews || [];
    const newItem = {
      id: `scroll-${Date.now()}`,
      title: item.title || "Yangi Xabar",
      tag: item.tag || "Xorazmiy Ziyo",
      date: item.date || "2026-yil",
      badge: item.badge || "Yangi",
      link: item.link || "/yangiliklar"
    };
    list.push(newItem);
    this.data.scrollNews = list;
    this.save();
    return newItem;
  }

  updateScrollNews(id, updateData) {
    const idx = (this.data.scrollNews || []).findIndex(s => s.id === id);
    if (idx === -1) return null;
    this.data.scrollNews[idx] = { ...this.data.scrollNews[idx], ...updateData, id };
    this.save();
    return this.data.scrollNews[idx];
  }

  deleteScrollNews(id) {
    const before = (this.data.scrollNews || []).length;
    this.data.scrollNews = (this.data.scrollNews || []).filter(s => s.id !== id);
    const changed = this.data.scrollNews.length < before;
    if (changed) this.save();
    return changed;
  }

  getPartners() {
    return this.data.partners || [];
  }

  addPartner(item) {
    const list = this.data.partners || [];
    const newPartner = {
      id: `partner-${Date.now()}`,
      name: item.name,
      tag: item.tag || 'Hamkor',
      logo: item.logo
    };
    list.push(newPartner);
    this.data.partners = list;
    this.save();
    return newPartner;
  }

  updatePartner(id, updateData) {
    const index = (this.data.partners || []).findIndex(partner => partner.id === id);
    if (index === -1) return null;
    this.data.partners[index] = { ...this.data.partners[index], ...updateData, id };
    this.save();
    return this.data.partners[index];
  }

  deletePartner(id) {
    const before = (this.data.partners || []).length;
    this.data.partners = (this.data.partners || []).filter(partner => partner.id !== id);
    const changed = this.data.partners.length < before;
    if (changed) this.save();
    return changed;
  }

  getAdmin() {
    return this.data.admin;
  }

  updateAdminPassword(newPassword) {
    const salt = bcrypt.genSaltSync(10);
    this.data.admin.passwordHash = bcrypt.hashSync(newPassword, salt);
    this.save();
    return true;
  }
}

module.exports = new DB();
