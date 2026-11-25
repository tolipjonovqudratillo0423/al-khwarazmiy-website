import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Newspaper, Plus, Edit2, Trash2, BookOpen, Mail, BarChart3, Lock,
  LogOut, ExternalLink, CheckCircle2, AlertCircle, Eye, Search, X, Image as ImageIcon,
  Users, Presentation, Calendar, Settings, Upload, Check, User, Target, Sparkles, Radio, Send, Building2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { user, token, isAuthenticated, logout, changePassword, loading: authLoading } = useAuth();

  const [activeTab, setActiveTab] = useState('teachers');
  const [teacherCategoryFilter, setTeacherCategoryFilter] = useState('all');
  
  // Data states
  const [teachers, setTeachers] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [slides, setSlides] = useState([]);
  const [partners, setPartners] = useState([]);
  const [scrollNews, setScrollNews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [events, setEvents] = useState([]);
  const [siteInfo, setSiteInfo] = useState({
    aboutTitle: '',
    aboutText1: '',
    aboutText2: '',
    aboutImage: '',
    address: '',
    phone: '',
    email: '',
    telegram: ''
  });
  const [news, setNews] = useState([]);
  const [gazettes, setGazettes] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({
    students: '',
    teachers: '',
    laboratories: '',
    olympiadWinners: ''
  });

  // Modal & Edit States
  const [teacherModalOpen, setTeacherModalOpen] = useState(false);
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [teacherForm, setTeacherForm] = useState({
    name: '',
    role: '',
    category: 'Pedagoglar',
    image: '',
    score: '',
    badge: "O'qituvchi",
    bio: ''
  });

  const [clubModalOpen, setClubModalOpen] = useState(false);
  const [editingClubId, setEditingClubId] = useState(null);
  const [clubForm, setClubForm] = useState({
    title: '',
    badge: "To'garak",
    category: 'Ijtimoiy',
    founder: 'Maktab kafedrasi',
    leader: '',
    image: '',
    telegram: '',
    desc: '',
    stats: 'Faoliyatda',
    color: 'from-blue-600 to-sky-500',
    features: ''
  });

  const [scrollNewsModalOpen, setScrollNewsModalOpen] = useState(false);
  const [editingScrollNewsId, setEditingScrollNewsId] = useState(null);
  const [scrollNewsForm, setScrollNewsForm] = useState({
    text: '',
    badge: 'TEZKOR',
    link: ''
  });

  const [slideModalOpen, setSlideModalOpen] = useState(false);
  const [editingSlideId, setEditingSlideId] = useState(null);
  const [slideForm, setSlideForm] = useState({
    title: '',
    desc: '',
    image: '/assets/school_building.jpg',
    order: 1
  });

  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [editingPartnerId, setEditingPartnerId] = useState(null);
  const [partnerForm, setPartnerForm] = useState({ name: '', tag: '', logo: '' });

  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    src: '/assets/school_building.jpg',
    category: 'Darslar',
    date: 'Noyabr 2026'
  });

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '10:00',
    location: 'Maktab binosi',
    category: 'Tadbir',
    desc: ''
  });

  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [newsForm, setNewsForm] = useState({
    title: '',
    category: 'Yangiliklar',
    author: 'Matbuot xizmati',
    coverImage: '/assets/photos/school_photo_1.jpg',
    excerpt: '',
    content: '',
    tags: 'Yangiliklar, Maktab',
    featured: false
  });

  const [gazetteModalOpen, setGazetteModalOpen] = useState(false);
  const [gazetteForm, setGazetteForm] = useState({
    title: 'Al-Xorazmiy Ziyo Gazetasi',
    subtitle: 'Maktab gazetasining maxsus nashri',
    edition: '2026-yil',
    coverImage: '/assets/photos/school_photo_7.jpg',
    description: '',
    articlesCount: 6
  });

  // Password Change State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passMsg, setPassMsg] = useState({ type: '', text: '' });

  // Notifications & Upload State
  const [notification, setNotification] = useState('');
  const [uploading, setUploading] = useState(false);

  // Ready photo options
  const photoOptions = [
    '/assets/school_building.jpg',
    '/assets/school_collage.jpg',
    '/assets/photos/school_photo_1.jpg',
    '/assets/photos/school_photo_2.jpg',
    '/assets/photos/school_photo_3.jpg',
    '/assets/photos/school_photo_4.jpg',
    '/assets/photos/school_photo_5.jpg',
    '/assets/photos/school_photo_6.jpg',
    '/assets/photos/school_photo_7.jpg',
    '/assets/photos/school_photo_8.jpg',
    '/assets/photos/school_photo_9.jpg',
    '/assets/photos/school_photo_10.jpg',
  ];

  // Auth Guard
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/admin-login');
    }
  }, [authLoading, isAuthenticated, navigate]);

  // Load All Data
  const loadAllData = async () => {
    try {
      // Teachers
      const resT = await fetch('/api/teachers');
      const dataT = await resT.json();
      if (dataT.success) setTeachers(dataT.data);

      // Clubs
      const resC = await fetch('/api/clubs');
      const dataC = await resC.json();
      if (dataC.success) setClubs(dataC.data);

      // Slides
      const resS = await fetch('/api/slides');
      const dataS = await resS.json();
      if (dataS.success) setSlides(dataS.data);

      // Partners
      const resP = await fetch('/api/partners');
      const dataP = await resP.json();
      if (dataP.success) setPartners(dataP.data);

      // Gallery
      const resG = await fetch('/api/gallery');
      const dataG = await resG.json();
      if (dataG.success) setGallery(dataG.data);

      // Events
      const resE = await fetch('/api/events');
      const dataE = await resE.json();
      if (dataE.success) setEvents(dataE.data);

      // Site Info
      const resInfo = await fetch('/api/site-info');
      const dataInfo = await resInfo.json();
      if (dataInfo.success && dataInfo.data) setSiteInfo(dataInfo.data);

      // News
      const resNews = await fetch('/api/news');
      const dataNews = await resNews.json();
      if (dataNews.success) setNews(dataNews.data);

      // Scroll News
      const resSN = await fetch('/api/scroll-news');
      const dataSN = await resSN.json();
      if (dataSN.success) setScrollNews(dataSN.data);

      // Gazettes
      const resGaz = await fetch('/api/gazettes');
      const dataGaz = await resGaz.json();
      if (dataGaz.success) setGazettes(dataGaz.data);

      // Stats
      const resStats = await fetch('/api/stats');
      const dataStats = await resStats.json();
      if (dataStats.success) setStats(dataStats.data);

      // Messages (Protected)
      if (token) {
        const resMsg = await fetch('/api/messages', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const dataMsg = await resMsg.json();
        if (dataMsg.success) setMessages(dataMsg.data);
      }
    } catch (err) {
      console.error('Error loading admin data:', err);
    }
  };

  useEffect(() => {
    if (token) {
      loadAllData();
    }
  }, [token]);

  const showNotify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  // Direct file upload to server
  const handleFileUpload = async (file, onUploaded) => {
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Data = reader.result;
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ image: base64Data, filename: file.name })
        });
        const data = await res.json();
        if (data.success && data.url) {
          onUploaded(data.url);
          showNotify("Rasm kompyuterdan muvaffaqiyatli yuklandi!");
        } else {
          alert(data.message || 'Rasm yuklashda xatolik');
        }
      } catch (err) {
        alert('Serverga yuklashda xatolik yuz berdi');
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  // TEACHERS & LEADERSHIP ACTIONS
  const handleOpenAddTeacher = (defaultCategory = 'Pedagoglar') => {
    setEditingTeacherId(null);
    setTeacherForm({
      name: '',
      role: '',
      category: defaultCategory,
      image: '',
      score: '',
      badge: defaultCategory === 'Rahbariyat' ? 'Rahbar' : "O'qituvchi",
      bio: ''
    });
    setTeacherModalOpen(true);
  };

  const handleOpenEditTeacher = (item) => {
    setEditingTeacherId(item.id);
    setTeacherForm({
      name: item.name || '',
      role: item.role || '',
      category: item.category || 'Pedagoglar',
      image: item.image || '',
      score: item.score || '',
      badge: item.badge || "O'qituvchi",
      bio: item.bio || ''
    });
    setTeacherModalOpen(true);
  };

  const handleSaveTeacher = async (e) => {
    e.preventDefault();
    try {
      const url = editingTeacherId ? `/api/teachers/${editingTeacherId}` : '/api/teachers';
      const method = editingTeacherId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(teacherForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingTeacherId ? "Ma'lumotlar yangilandi!" : "Yangi xodim muvaffaqiyatli qo'shildi!");
        setTeacherModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeleteTeacher = async (id, name) => {
    if (!window.confirm(`Haqiqatan ham "${name}"ni o'chirmoqchimisiz?`)) return;
    try {
      const res = await fetch(`/api/teachers/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("O'chirildi!");
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // CLUBS & STUDENT ORGANIZATIONS ACTIONS
  const handleOpenAddClub = () => {
    setEditingClubId(null);
    setClubForm({
      title: '',
      badge: "To'garak",
      category: 'Ijtimoiy',
      founder: 'Maktab kafedrasi',
      leader: '',
      image: '',
      telegram: '',
      desc: '',
      stats: 'Faoliyatda',
      color: 'from-blue-600 to-sky-500',
      features: ''
    });
    setClubModalOpen(true);
  };

  const handleOpenEditClub = (item) => {
    setEditingClubId(item.id);
    setClubForm({
      title: item.title || '',
      badge: item.badge || '',
      category: item.category || 'Ijtimoiy',
      founder: item.founder || '',
      leader: item.leader || '',
      image: item.image || '',
      telegram: item.telegram || '',
      desc: item.desc || '',
      stats: item.stats || '',
      color: item.color || 'from-blue-600 to-sky-500',
      features: Array.isArray(item.features) ? item.features.join('\n') : (item.features || '')
    });
    setClubModalOpen(true);
  };

  const handleSaveClub = async (e) => {
    e.preventDefault();
    try {
      const url = editingClubId ? `/api/clubs/${editingClubId}` : '/api/clubs';
      const method = editingClubId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(clubForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingClubId ? "Klub/loyiha ma'lumotlari yangilandi!" : "Yangi klub/loyiha muvaffaqiyatli qo'shildi!");
        setClubModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeleteClub = async (id, title) => {
    if (!window.confirm(`Haqiqatan ham "${title}" klubini o'chirmoqchimisiz?`)) return;
    try {
      const res = await fetch(`/api/clubs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Klub o'chirildi!");
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // SCROLL NEWS (TEZKOR LENTA) ACTIONS
  const handleOpenAddScrollNews = () => {
    setEditingScrollNewsId(null);
    setScrollNewsForm({ text: '', badge: 'TEZKOR', link: '' });
    setScrollNewsModalOpen(true);
  };

  const handleOpenEditScrollNews = (item) => {
    setEditingScrollNewsId(item.id);
    setScrollNewsForm({
      text: item.text || '',
      badge: item.badge || 'TEZKOR',
      link: item.link || ''
    });
    setScrollNewsModalOpen(true);
  };

  const handleSaveScrollNews = async (e) => {
    e.preventDefault();
    try {
      const url = editingScrollNewsId ? `/api/scroll-news/${editingScrollNewsId}` : '/api/scroll-news';
      const method = editingScrollNewsId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(scrollNewsForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingScrollNewsId ? "Lenta xabari yangilandi!" : "Yangi lenta xabari qo'shildi!");
        setScrollNewsModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeleteScrollNews = async (id) => {
    if (!window.confirm("Haqiqatan ham ushbu lenta xabarini o'chirmoqchimisiz?")) return;
    try {
      const res = await fetch(`/api/scroll-news/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Lenta xabari o'chirildi!");
        loadAllData();
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  // SLIDES ACTIONS
  const handleOpenAddSlide = () => {
    setEditingSlideId(null);
    setSlideForm({
      title: '',
      desc: '',
      image: '/assets/school_building.jpg',
      order: slides.length + 1
    });
    setSlideModalOpen(true);
  };

  const handleOpenEditSlide = (item) => {
    setEditingSlideId(item.id);
    setSlideForm({
      title: item.title || '',
      desc: item.desc || '',
      image: item.image || '/assets/school_building.jpg',
      order: item.order || 1
    });
    setSlideModalOpen(true);
  };

  const handleSaveSlide = async (e) => {
    e.preventDefault();
    try {
      const url = editingSlideId ? `/api/slides/${editingSlideId}` : '/api/slides';
      const method = editingSlideId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(slideForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingSlideId ? "Slayd yangilandi!" : "Yangi slayd qo'shildi!");
        setSlideModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeleteSlide = async (id) => {
    if (!window.confirm("Ushbu slaydni o'chirmoqchimisiz?")) return;
    try {
      const res = await fetch(`/api/slides/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Slayd o'chirildi");
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // PARTNERS ACTIONS
  const handleOpenAddPartner = () => {
    setEditingPartnerId(null);
    setPartnerForm({ name: '', tag: '', logo: '' });
    setPartnerModalOpen(true);
  };

  const handleOpenEditPartner = (partner) => {
    setEditingPartnerId(partner.id);
    setPartnerForm({
      name: partner.name || '',
      tag: partner.tag || '',
      logo: partner.logo || ''
    });
    setPartnerModalOpen(true);
  };

  const handleSavePartner = async (e) => {
    e.preventDefault();
    try {
      const url = editingPartnerId ? `/api/partners/${editingPartnerId}` : '/api/partners';
      const method = editingPartnerId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(partnerForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingPartnerId ? 'Hamkor yangilandi!' : "Yangi hamkor qo'shildi!");
        setPartnerModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeletePartner = async (partner) => {
    if (!window.confirm(`"${partner.name}" hamkorini o'chirmoqchimisiz?`)) return;
    try {
      const res = await fetch(`/api/partners/${partner.id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Hamkor o'chirildi!");
        loadAllData();
      } else {
        alert(data.message || "Hamkorni o'chirib bo'lmadi");
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // GALLERY ACTIONS
  const handleSaveGallery = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(galleryForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Rasm galereyaga qo'shildi!");
        setGalleryModalOpen(false);
        setGalleryForm({ title: '', src: '/assets/school_building.jpg', category: 'Darslar', date: 'Noyabr 2026' });
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeleteGallery = async (id) => {
    if (!window.confirm("Rasmni o'chirmoqchimisiz?")) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Rasm o'chirildi!");
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // EVENTS ACTIONS
  const handleOpenAddEvent = () => {
    setEditingEventId(null);
    setEventForm({
      title: '',
      date: '',
      time: '10:00',
      location: 'Maktab binosi',
      category: 'Tadbir',
      desc: ''
    });
    setEventModalOpen(true);
  };

  const handleOpenEditEvent = (item) => {
    setEditingEventId(item.id);
    setEventForm({
      title: item.title || '',
      date: item.date || '',
      time: item.time || '10:00',
      location: item.location || 'Maktab binosi',
      category: item.category || 'Tadbir',
      desc: item.desc || ''
    });
    setEventModalOpen(true);
  };

  const handleSaveEvent = async (e) => {
    e.preventDefault();
    try {
      const url = editingEventId ? `/api/events/${editingEventId}` : '/api/events';
      const method = editingEventId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(eventForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingEventId ? "Tadbir yangilandi!" : "Yangi tadbir rejalashtirildi!");
        setEventModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm("Tadbirni o'chirmoqchimisiz?")) return;
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Tadbir o'chirildi!");
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // SITE INFO ACTIONS
  const handleSaveSiteInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/site-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(siteInfo)
      });
      const data = await res.json();
      if (data.success) {
        showNotify("Maktab ma'lumotlari muvaffaqiyatli saqlandi!");
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert("Server bilan bog'lanishda xatolik");
    }
  };

  // NEWS ACTIONS
  const handleOpenAddNews = () => {
    setEditingNewsId(null);
    setNewsForm({
      title: '',
      category: 'Yangiliklar',
      author: 'Matbuot xizmati',
      coverImage: '/assets/photos/school_photo_1.jpg',
      excerpt: '',
      content: '',
      tags: 'Yangiliklar, Maktab',
      featured: false
    });
    setNewsModalOpen(true);
  };

  const handleOpenEditNews = (item) => {
    setEditingNewsId(item.id);
    setNewsForm({
      title: item.title,
      category: item.category,
      author: item.author || 'Matbuot xizmati',
      coverImage: item.coverImage || '/assets/photos/school_photo_1.jpg',
      excerpt: item.excerpt || '',
      content: item.content || '',
      tags: Array.isArray(item.tags) ? item.tags.join(', ') : (item.tags || ''),
      featured: Boolean(item.featured)
    });
    setNewsModalOpen(true);
  };

  const handleSaveNews = async (e) => {
    e.preventDefault();
    try {
      const url = editingNewsId ? `/api/news/${editingNewsId}` : '/api/news';
      const method = editingNewsId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newsForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify(editingNewsId ? 'Maqola muvaffaqiyatli yangilandi!' : 'Yangi maqola gazetaga chop etildi!');
        setNewsModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert('Server bilan bog\'lanishda xatolik');
    }
  };

  const handleDeleteNews = async (id, title) => {
    if (!window.confirm(`Haqiqatan ham "${title}" maqolasini o'chirmoqchimisiz?`)) return;
    try {
      const res = await fetch(`/api/news/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify('Maqola o\'chirildi');
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // GAZETTE ACTIONS
  const handleSaveGazette = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/gazettes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(gazetteForm)
      });
      const data = await res.json();
      if (data.success) {
        showNotify('Yangi gazeta soni qo\'shildi!');
        setGazetteModalOpen(false);
        loadAllData();
      } else {
        alert(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  const handleDeleteGazette = async (id) => {
    if (!window.confirm("Gazetaning ushbu sonini o'chirmoqchimisiz?")) return;
    try {
      const res = await fetch(`/api/gazettes/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        showNotify('Gazeta soni o\'chirildi');
        loadAllData();
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // STATS ACTIONS
  const handleSaveStats = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/stats', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(stats)
      });
      const data = await res.json();
      if (data.success) {
        showNotify('Statistika ko\'rsatkichlari yangilandi!');
      }
    } catch (err) {
      alert('Xatolik yuz berdi');
    }
  };

  // PASSWORD CHANGE
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPassMsg({ type: '', text: '' });

    if (newPassword !== confirmPassword) {
      setPassMsg({ type: 'error', text: 'Yangi parollar bir-biriga mos kelmadi!' });
      return;
    }

    const res = await changePassword(currentPassword, newPassword);
    if (res.success) {
      setPassMsg({ type: 'success', text: 'Parol muvaffaqiyatli yangilandi!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setPassMsg({ type: 'error', text: res.message || 'Xatolik yuz berdi' });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center text-white font-poppins">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-brand-sky border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs text-slate-300 font-medium">Boshqaruv paneli yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center text-white font-poppins">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-brand-sky border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs text-slate-300 font-medium">Admin kirish sahifasiga yo'naltirilmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 font-poppins flex flex-col">
      {/* Top Navbar */}
      <header className="bg-brand-navy text-white px-6 py-4 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-sky bg-white">
              <img src="/assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm tracking-wide">Al-Xorazmiy Farg'ona</div>
              <div className="text-[11px] text-brand-sky font-medium">Boshqaruv Paneli (To'liq Admin CMS)</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <Link
              to="/"
              target="_blank"
              className="bg-brand-blue hover:bg-blue-600 px-3.5 py-2 rounded-xl font-semibold flex items-center space-x-1.5 transition"
            >
              <span>Saytni Ko'rish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => {
                logout();
                navigate('/admin-login');
              }}
              className="bg-rose-600 hover:bg-rose-700 px-3.5 py-2 rounded-xl font-semibold flex items-center space-x-1.5 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Chiqish</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        {/* Toast Notification */}
        {notification && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-600 text-white shadow-lg text-xs sm:text-sm font-bold flex items-center space-x-2 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Tab Navigation (Responsive Horizontal Scroll) */}
        <div className="flex overflow-x-auto gap-2 mb-8 bg-white p-2.5 rounded-2xl shadow-sm border border-slate-200">
          <button
            onClick={() => setActiveTab('teachers')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'teachers'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4 text-brand-sky" />
            <span>Ustozlar & Rahbariyat ({teachers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('clubs')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'clubs'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Target className="w-4 h-4 text-pink-500" />
            <span>Klublar & Loyihalar ({clubs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('slides')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'slides'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Presentation className="w-4 h-4 text-emerald-400" />
            <span>Hero Slayder ({slides.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('partners')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'partners'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Hamkorlar ({partners.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('siteInfo')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'siteInfo'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Settings className="w-4 h-4 text-amber-400" />
            <span>Maktab Ma'lumotlari</span>
          </button>

          <button
            onClick={() => setActiveTab('scrollNews')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'scrollNews'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>Tezkor Lenta ({scrollNews.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'news'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Newspaper className="w-4 h-4 text-rose-400" />
            <span>Yangiliklar ({news.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gazettes')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'gazettes'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Gazeta Nashrlari ({gazettes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'stats'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-teal-400" />
            <span>Statistika</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'messages'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Mail className="w-4 h-4 text-yellow-400" />
            <span>Xabarlar ({messages.filter(m => !m.read).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'security'
                ? 'bg-brand-navy text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Lock className="w-4 h-4 text-slate-400" />
            <span>Xavfsizlik</span>
          </button>
        </div>

        {/* TAB 1: TEACHERS & LEADERSHIP */}
        {activeTab === 'teachers' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Maktab Rahbariyati va Ustozlar</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Maktab direktori, o'rinbosarlar yoki pedagoglarni qo'shish, ularning rasmlari, lavozimi va yutuqlarini o'zgartirish yoki o'chirish.
                </p>
                {/* Category Filter Pills */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <button
                    onClick={() => setTeacherCategoryFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      teacherCategoryFilter === 'all'
                        ? 'bg-brand-blue text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Barchasi ({teachers.length})
                  </button>
                  <button
                    onClick={() => setTeacherCategoryFilter('Rahbariyat')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      teacherCategoryFilter === 'Rahbariyat'
                        ? 'bg-brand-blue text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Rahbariyat ({teachers.filter(t => t.category === 'Rahbariyat').length})
                  </button>
                  <button
                    onClick={() => setTeacherCategoryFilter('Pedagoglar')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      teacherCategoryFilter === 'Pedagoglar'
                        ? 'bg-brand-blue text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Ustozlar ({teachers.filter(t => t.category !== 'Rahbariyat').length})
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={() => handleOpenAddTeacher('Rahbariyat')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Yangi Rahbar Qo'shish</span>
                </button>
                <button
                  onClick={() => handleOpenAddTeacher('Pedagoglar')}
                  className="bg-brand-blue hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Yangi Ustoz Qo'shish</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(teacherCategoryFilter === 'all'
                ? teachers
                : teachers.filter(t => t.category === teacherCategoryFilter)
              ).map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden bg-slate-100 relative flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                          <User className="w-12 h-12 text-slate-300 mb-1" />
                          <span className="text-[11px] font-semibold text-slate-400">Rasm yuklanmagan</span>
                        </div>
                      )}
                      <span className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        item.category === 'Rahbariyat' ? 'bg-indigo-700' : 'bg-brand-navy/90'
                      }`}>
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                      <p className="text-xs text-brand-blue font-semibold mt-1">{item.role}</p>
                      {item.score && (
                        <p className="text-[11px] text-slate-600 font-bold bg-slate-50 p-2 rounded-lg mt-2 border border-slate-100">
                          🏆 {item.score}
                        </p>
                      )}
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">{item.bio}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      ID: {item.id}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleOpenEditTeacher(item)}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Tahrirlash</span>
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(item.id, item.name)}
                        className="px-2.5 py-1.5 rounded-lg bg-white border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                        title="O'chirish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>O'chirish</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 1b: CLUBS & STUDENT ORGANIZATIONS */}
        {activeTab === 'clubs' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">O'quvchilar Klublari & Loyihalari</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Bosh sahifadagi «Iqtidorlarni Kengaytirish Klublari» va «O'quvchilar Tashkilotlari» sahifasidagi to'garak va loyihalarni boshqarish.
                </p>
              </div>
              <button
                onClick={handleOpenAddClub}
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Yangi Klub / Loyiha Qo'shish</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {item.badge || "To'garak"}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold">
                        {item.stats || item.founder}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{item.desc}</p>

                    {item.telegram && (
                      <div className="pt-2 flex items-center space-x-1.5 text-xs text-[#0088cc] font-medium bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">
                        <Send className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{item.telegram}</span>
                      </div>
                    )}

                    {item.features && item.features.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Yo'nalishlar:</span>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {(Array.isArray(item.features) ? item.features : []).slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-center space-x-1.5 truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
                              <span className="truncate">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleOpenEditClub(item)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Tahrirlash</span>
                    </button>
                    <button
                      onClick={() => handleDeleteClub(item.id, item.title)}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                      title="O'chirish"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>O'chirish</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HERO SLIDES & BACKGROUND */}
        {activeTab === 'slides' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Bosh Sahifa Hero Slayderi & Asosiy Fon</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Bosh sahifaning eng yuqori qismidagi slaydlar, rasmlar, matnlar va maktab binosi rasmini boshqarish.
                </p>
              </div>
              <button
                onClick={handleOpenAddSlide}
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Yangi Slayd Qo'shish</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slides.map((item, idx) => (
                <div key={item.id || idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-56 overflow-hidden bg-slate-900 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/school_building.jpg";
                        }}
                      />
                      <span className="absolute top-3 left-3 bg-black/60 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                        Slayd #{item.order || idx + 1}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-base leading-snug">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleOpenEditSlide(item)}
                      className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Tahrirlash / Rasmni o'zgartirish</span>
                    </button>
                    {slides.length > 1 && (
                      <button
                        onClick={() => handleDeleteSlide(item.id)}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-rose-50 text-rose-600 text-xs cursor-pointer"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: PARTNERS */}
        {activeTab === 'partners' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Hamkor tashkilotlar</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Saytdagi hamkorlar ro'yxati va ularning logotiplarini boshqaring.
                </p>
              </div>
              <button
                onClick={handleOpenAddPartner}
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Hamkor qo'shish</span>
              </button>
            </div>

            {partners.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-700">Hamkorlar ro'yxati bo'sh</h3>
                <p className="text-xs text-slate-500 mt-1">Birinchi hamkor va uning logotipini qo'shing.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {partners.map((partner) => (
                  <div key={partner.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex items-center gap-4">
                    <div className="w-20 h-16 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-100 bg-white p-2">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logotipi`}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <Building2 className="w-7 h-7 text-slate-300" />
                      )}
                    </div>
                    <div className="min-w-0 flex-grow">
                      <p className="text-sm font-bold text-slate-800 leading-snug">{partner.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{partner.tag || 'Hamkor'}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => handleOpenEditPartner(partner)}
                          className="text-xs font-semibold text-brand-blue hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          Tahrirlash
                        </button>
                        <button
                          onClick={() => handleDeletePartner(partner)}
                          className="text-xs font-semibold text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          O'chirish
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SITE INFO & ABOUT SECTION */}
        {activeTab === 'siteInfo' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Maktab Umumiy Ma'lumotlari va Matnlari</h2>
              <p className="text-xs text-slate-500 mt-1">
                "Maktab haqida" bo'limi matnlari, 3-rasm (scroll kollaji) hamda maktab manzili va aloqa raqamlarini o'zgartirish.
              </p>
            </div>

            <form onSubmit={handleSaveSiteInfo} className="space-y-6">
              <div className="space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-sm text-brand-navy flex items-center space-x-2">
                  <span>1. "Maktab haqida" bo'limi</span>
                </h3>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bo'lim Sarlavhasi</label>
                  <input
                    type="text"
                    value={siteInfo.aboutTitle || ''}
                    onChange={(e) => setSiteInfo({ ...siteInfo, aboutTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">1-Xatboshi (Asosiy ta'rif)</label>
                  <textarea
                    rows={3}
                    value={siteInfo.aboutText1 || ''}
                    onChange={(e) => setSiteInfo({ ...siteInfo, aboutText1: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">2-Xatboshi (Fanlar va yo'nalishlar)</label>
                  <textarea
                    rows={3}
                    value={siteInfo.aboutText2 || ''}
                    onChange={(e) => setSiteInfo({ ...siteInfo, aboutText2: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    3-Rasm: Scroll Kollaji (Markazdagi surat)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="w-32 h-24 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
                      <img
                        src={siteInfo.aboutImage || '/assets/school_collage.jpg'}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow space-y-2 w-full">
                      <input
                        type="text"
                        value={siteInfo.aboutImage || ''}
                        onChange={(e) => setSiteInfo({ ...siteInfo, aboutImage: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                        placeholder="Rasm yo'li yoki URL"
                      />
                      <label className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-light hover:bg-blue-100 text-brand-blue text-xs font-bold rounded-xl cursor-pointer transition">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Kompyuterdan yangi rasm yuklash</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e.target.files[0], (url) => setSiteInfo({ ...siteInfo, aboutImage: url }))}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-sm text-brand-navy flex items-center space-x-2">
                  <span>2. Maktab Aloqa Ma'lumotlari</span>
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Maktab Manzili</label>
                  <input
                    type="text"
                    value={siteInfo.address || ''}
                    onChange={(e) => setSiteInfo({ ...siteInfo, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Telefon</label>
                    <input
                      type="text"
                      value={siteInfo.phone || ''}
                      onChange={(e) => setSiteInfo({ ...siteInfo, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                    <input
                      type="text"
                      value={siteInfo.email || ''}
                      onChange={(e) => setSiteInfo({ ...siteInfo, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Telegram Kanal</label>
                    <input
                      type="text"
                      value={siteInfo.telegram || ''}
                      onChange={(e) => setSiteInfo({ ...siteInfo, telegram: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  O'zgarishlarni Saqlash
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB: SCROLL NEWS (TEZKOR LENTA) */}
        {activeTab === 'scrollNews' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <Radio className="w-5 h-5 text-rose-500 animate-pulse" />
                  <span>Tezkor Gazeta Lentasi (Scroll News)</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Saytning yangiliklar sahifasida doimiy aylanib turuvchi tezkor xabarlar qatori. Agar ushbu ro'yxat bo'sh bo'lsa, saytdagi lenta avtomatik yashiriladi.
                </p>
              </div>
              <button
                onClick={handleOpenAddScrollNews}
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Yangi Lenta Xabari Qo'shish</span>
              </button>
            </div>

            {scrollNews.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <Radio className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-700">Hozircha lenta xabarlari mavjud emas</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Saytdagi yangiliklar lentasi ayni paytda faol emas. Birinchi xabarni qo'shsangiz, u saytda chiroyli aylanuvchi lenta shaklida ko'rinadi.
                </p>
                <button
                  onClick={handleOpenAddScrollNews}
                  className="mt-4 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Xabar Qo'shish
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {scrollNews.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-rose-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex-shrink-0">
                        {item.badge || 'TEZKOR'}
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800">{item.text}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-600 hover:underline flex items-center space-x-1 mt-0.5">
                            <ExternalLink className="w-3 h-3" />
                            <span>{item.link}</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 self-end sm:self-auto flex-shrink-0">
                      <button
                        onClick={() => handleOpenEditScrollNews(item)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Tahrirlash</span>
                      </button>
                      <button
                        onClick={() => handleDeleteScrollNews(item.id)}
                        className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs cursor-pointer"
                        title="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: NEWS & GAZETTE ARTICLES */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Maktab Gazetasi va Yangiliklari</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Saytga yangi maqolalar, SAT yutuqlari, fotolar va maktab yangiliklarini chop etish.
                </p>
              </div>
              <button
                onClick={handleOpenAddNews}
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Yangi Maqola Qo'shish</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden bg-slate-100 relative">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/photos/school_photo_1.jpg";
                        }}
                      />
                      <span className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleOpenEditNews(item)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Tahrirlash</span>
                    </button>
                    <button
                      onClick={() => handleDeleteNews(item.id, item.title)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-rose-50 text-rose-600 text-xs cursor-pointer"
                      title="O'chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: GAZETTES */}
        {activeTab === 'gazettes' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">«Al-Xorazmiy Ziyo» Gazetasi Nashrlari</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Har oylik yoki choraklik rasmiy gazeta sonlarini joylashtirish.
                </p>
              </div>
              <button
                onClick={() => setGazetteModalOpen(true)}
                className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Yangi Gazeta Soni</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gazettes.map((gaz) => (
                <div key={gaz.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-52 overflow-hidden bg-slate-100 relative">
                      <img src={gaz.coverImage} alt={gaz.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                        {gaz.edition}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-base">{gaz.title}</h3>
                      <p className="text-xs text-brand-blue font-semibold mt-1">{gaz.subtitle}</p>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3">{gaz.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => handleDeleteGazette(gaz.id)}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-rose-50 text-rose-600 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>O'chirish</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: STATS */}
        {activeTab === 'stats' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Bosh Sahifadagi Statistika Ko'rsatkichlari</h2>
              <p className="text-xs text-slate-500 mt-1">
                Saytning "Maktab haqida" bo'limidagi 4 ta asosiy kartochka ma'lumotlarini o'zgartirish.
              </p>
            </div>

            <form onSubmit={handleSaveStats} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">O'quvchilar soni</label>
                <input
                  type="text"
                  value={stats.students}
                  onChange={(e) => setStats({ ...stats, students: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, 540+"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pedagoglar va Ustozlar soni</label>
                <input
                  type="text"
                  value={stats.teachers}
                  onChange={(e) => setStats({ ...stats, teachers: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, 52+"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Laboratoriyalar soni</label>
                <input
                  type="text"
                  value={stats.laboratories}
                  onChange={(e) => setStats({ ...stats, laboratories: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, 14+"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Olimpiada sovrindorlari soni</label>
                <input
                  type="text"
                  value={stats.olympiadWinners}
                  onChange={(e) => setStats({ ...stats, olympiadWinners: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, 48+"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition cursor-pointer"
                >
                  Statistikani Yangilash
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 9: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Foydalanuvchilardan Kelgan Murojaatlar</h2>
              <p className="text-xs text-slate-500 mt-1">
                Saytning "Bog'lanish" sahifasi orqali yuborilgan barcha xabarlar va arizalar.
              </p>
            </div>

            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl text-center text-slate-400 text-sm">
                  Hozircha yangi xabarlar yo'q
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-slate-900 text-sm">{msg.name}</div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {new Date(msg.date).toLocaleString('uz-UZ')}
                      </span>
                    </div>
                    <div className="text-xs text-brand-blue font-semibold">
                      📞 {msg.phone} {msg.email && `| ✉️ ${msg.email}`}
                    </div>
                    <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mt-2">
                      {msg.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 10: SECURITY */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-xl mx-auto space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Admin Parolini O'zgartirish</h2>
              <p className="text-xs text-slate-500 mt-1">
                Sayt xavfsizligini ta'minlash uchun kuchli paroldan foydalaning.
              </p>
            </div>

            {passMsg.text && (
              <div
                className={`p-3.5 rounded-xl text-xs font-bold flex items-center space-x-2 ${
                  passMsg.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                }`}
              >
                {passMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{passMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Joriy Parol</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Yangi Parol</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Yangi Parolni Tasdiqlang</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition cursor-pointer"
                >
                  Parolni Yangilash
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* MODAL 1: TEACHER / LEADERSHIP MODAL */}
      {teacherModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setTeacherModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {editingTeacherId ? "Ustoz Ma'lumotlarini Tahrirlash" : "Yangi Ustoz / Rahbar Qo'shish"}
            </h3>

            <form onSubmit={handleSaveTeacher} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ism Familiya *</label>
                  <input
                    type="text"
                    required
                    value={teacherForm.name}
                    onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="masalan, Izzatillo Rahmatov"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Lavozim / Fan *</label>
                  <input
                    type="text"
                    required
                    value={teacherForm.role}
                    onChange={(e) => setTeacherForm({ ...teacherForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="masalan, Fizika fani o'qituvchisi"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kategoriya</label>
                  <select
                    value={teacherForm.category}
                    onChange={(e) => setTeacherForm({ ...teacherForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  >
                    <option value="Rahbariyat">Rahbariyat</option>
                    <option value="Pedagoglar">Pedagoglar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nishon (Badge)</label>
                  <input
                    type="text"
                    value={teacherForm.badge}
                    onChange={(e) => setTeacherForm({ ...teacherForm, badge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="masalan, Milliy Sertifikat A+"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Attestatsiya / Natija</label>
                  <input
                    type="text"
                    value={teacherForm.score}
                    onChange={(e) => setTeacherForm({ ...teacherForm, score: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="Attestatsiya: 82 ball | A+"
                  />
                </div>
              </div>

              {/* Teacher Photo Selection & Direct Upload */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-700">Ustoz Rasmi</label>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 flex-shrink-0">
                    <img
                      src={teacherForm.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow space-y-2 w-full">
                    <input
                      type="text"
                      value={teacherForm.image}
                      onChange={(e) => setTeacherForm({ ...teacherForm, image: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                      placeholder="Rasm yo'li yoki URL"
                    />
                    <label className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-light hover:bg-blue-100 text-brand-blue text-xs font-bold rounded-xl cursor-pointer transition">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{uploading ? "Yuklanmoqda..." : "Kompyuterdan rasm yuklash"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files[0], (url) => setTeacherForm({ ...teacherForm, image: url }))}
                      />
                    </label>
                  </div>
                </div>

                {/* Pre-existing photo pills */}
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block mb-1">Mavjud rasmlardan tanlash:</span>
                  <div className="flex flex-wrap gap-2">
                    {photoOptions.slice(0, 6).map((pic, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setTeacherForm({ ...teacherForm, image: pic })}
                        className={`text-[10px] px-2.5 py-1 rounded-lg border cursor-pointer ${
                          teacherForm.image === pic ? 'bg-brand-navy text-white font-bold' : 'bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Foto {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Qisqacha Tavsif / Biografiya</label>
                <textarea
                  rows={3}
                  value={teacherForm.bio}
                  onChange={(e) => setTeacherForm({ ...teacherForm, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="Ustozning tajribasi, o'quvchilari qo'lga kiritgan natijalar haqida..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setTeacherModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 1b: CLUB / ORGANIZATION MODAL */}
      {clubModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setClubModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {editingClubId ? "Klub / Loyihani Tahrirlash" : "Yangi Klub / Loyiha Qo'shish"}
            </h3>

            <form onSubmit={handleSaveClub} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Klub / Loyiha Nomi *</label>
                <input
                  type="text"
                  required
                  value={clubForm.title}
                  onChange={(e) => setClubForm({ ...clubForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, Robototexnika & AI Hub"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nishon (Badge)</label>
                  <input
                    type="text"
                    value={clubForm.badge}
                    onChange={(e) => setClubForm({ ...clubForm, badge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="masalan, Muhandislik yoki Xalqaro Grantlar"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kategoriya</label>
                  <select
                    value={clubForm.category}
                    onChange={(e) => setClubForm({ ...clubForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                  >
                    <option value="Ijtimoiy">Ijtimoiy</option>
                    <option value="Sport">Sport</option>
                    <option value="Ekologiya">Ekologiya</option>
                    <option value="Fan / IT">Fan / IT</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tashabbuskor / Kafedra (Founder)</label>
                  <input
                    type="text"
                    value={clubForm.founder}
                    onChange={(e) => setClubForm({ ...clubForm, founder: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="masalan, IT Kafedrasi"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Lider / Yetakchi O'quvchi (Leader)</label>
                  <input
                    type="text"
                    value={clubForm.leader}
                    onChange={(e) => setClubForm({ ...clubForm, leader: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="masalan, Komilov Anasxon"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Telegram Kanal Havolasi (Loyiha haqida batafsil ma'lumot va kuzatish uchun)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={clubForm.telegram}
                    onChange={(e) => setClubForm({ ...clubForm, telegram: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="https://t.me/xorazmiy_roboclub yoki @xorazmiy_roboclub"
                  />
                  <Send className="w-4 h-4 text-sky-500 absolute left-3.5 top-3" />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Sayt foydalanuvchilari ushbu tugma orqali loyihaning rasmiy kanaliga to'g'ridan-to'g'ri o'tishlari mumkin bo'ladi.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Klub Ramzi / Rasm Havolasi</label>
                <input
                  type="text"
                  value={clubForm.image}
                  onChange={(e) => setClubForm({ ...clubForm, image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="/assets/logo.jpg yoki internet havolasi"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Qisqa Tavsif</label>
                <textarea
                  rows="3"
                  required
                  value={clubForm.desc}
                  onChange={(e) => setClubForm({ ...clubForm, desc: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="Klubning asosiy maqsadi va vazifalari..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Asosiy yo'nalishlar (Har birini yangi qatordan yozing)
                </label>
                <textarea
                  rows="4"
                  value={clubForm.features}
                  onChange={(e) => setClubForm({ ...clubForm, features: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none font-mono"
                  placeholder="Python va AI loyihalari&#10;3D modellashtirish&#10;WRO olimpiadalariga tayyorgarlik"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setClubModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: HERO SLIDE MODAL */}
      {slideModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSlideModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {editingSlideId ? "Slaydni Tahrirlash" : "Yangi Slayd Qo'shish"}
            </h3>

            <form onSubmit={handleSaveSlide} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Slayd Sarlavhasi *</label>
                <input
                  type="text"
                  required
                  value={slideForm.title}
                  onChange={(e) => setSlideForm({ ...slideForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Qisqacha Tavsif</label>
                <textarea
                  rows={2}
                  value={slideForm.desc}
                  onChange={(e) => setSlideForm({ ...slideForm, desc: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              {/* Slide Image Selection & Direct Upload */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-700">Slayd Rasmi (Fon surati)</label>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-36 h-24 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 flex-shrink-0">
                    <img
                      src={slideForm.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow space-y-2 w-full">
                    <input
                      type="text"
                      value={slideForm.image}
                      onChange={(e) => setSlideForm({ ...slideForm, image: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                      placeholder="Rasm yo'li"
                    />
                    <label className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-light hover:bg-blue-100 text-brand-blue text-xs font-bold rounded-xl cursor-pointer transition">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{uploading ? "Yuklanmoqda..." : "Kompyuterdan yangi rasm yuklash"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files[0], (url) => setSlideForm({ ...slideForm, image: url }))}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setSlideForm({ ...slideForm, image: '/assets/school_building.jpg' })}
                    className="text-[10px] px-2.5 py-1 rounded-lg border bg-white hover:bg-slate-100 font-semibold cursor-pointer"
                  >
                    🏢 Maktab Binosi (school_building.jpg)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSlideForm({ ...slideForm, image: '/assets/school_collage.jpg' })}
                    className="text-[10px] px-2.5 py-1 rounded-lg border bg-white hover:bg-slate-100 font-semibold cursor-pointer"
                  >
                    🏆 Maktab Kollaji (school_collage.jpg)
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setSlideModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PARTNER MODAL */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              type="button"
              onClick={() => setPartnerModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-5">
              {editingPartnerId ? 'Hamkorni tahrirlash' : "Yangi hamkor qo'shish"}
            </h3>

            <form onSubmit={handleSavePartner} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tashkilot nomi *</label>
                <input
                  type="text"
                  required
                  value={partnerForm.name}
                  onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="Tashkilot nomi"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Toifa</label>
                <input
                  type="text"
                  value={partnerForm.tag}
                  onChange={(e) => setPartnerForm({ ...partnerForm, tag: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="Masalan: Oliy ta'lim"
                />
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-700">Logotip *</label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-20 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
                    {partnerForm.logo ? (
                      <img
                        src={partnerForm.logo}
                        alt="Logotip ko'rinishi"
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <Building2 className="w-8 h-8 text-slate-300" />
                    )}
                  </div>
                  <div className="flex-grow space-y-2">
                    <input
                      type="text"
                      required
                      value={partnerForm.logo}
                      onChange={(e) => setPartnerForm({ ...partnerForm, logo: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                      placeholder="/assets/logo.png yoki URL"
                    />
                    <label className={`inline-flex items-center gap-2 px-4 py-2 bg-brand-light text-brand-blue text-xs font-bold rounded-xl transition ${uploading ? 'opacity-60 cursor-wait' : 'hover:bg-blue-100 cursor-pointer'}`}>
                      <Upload className="w-3.5 h-3.5" />
                      <span>{uploading ? 'Yuklanmoqda...' : 'Kompyuterdan yuklash'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploading}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          handleFileUpload(file, (url) => {
                            setPartnerForm((current) => ({ ...current, logo: url }));
                          });
                          e.target.value = '';
                        }}
                      />
                    </label>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Fayl yuklang yoki ommaviy rasm yo'lini kiriting. Logotiplar saytda buzilmasdan, o'z nisbatida ko'rsatiladi.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setPartnerModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-brand-blue hover:bg-blue-600 disabled:opacity-60 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: GALLERY MODAL */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setGalleryModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Galereyaga Yangi Rasm Qo'shish</h3>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Rasm Sarlavhasi *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, Robototexnika mashg'uloti"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kategoriya</label>
                <select
                  value={galleryForm.category}
                  onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                >
                  <option value="Darslar">Darslar</option>
                  <option value="Laboratoriya">Laboratoriya</option>
                  <option value="Tadbirlar">Tadbirlar</option>
                  <option value="Maktab hayoti">Maktab hayoti</option>
                </select>
              </div>

              {/* Gallery Image Upload */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-700">Rasm Manbai</label>
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 flex-shrink-0">
                    <img src={galleryForm.src} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <input
                      type="text"
                      value={galleryForm.src}
                      onChange={(e) => setGalleryForm({ ...galleryForm, src: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    />
                    <label className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-light hover:bg-blue-100 text-brand-blue text-xs font-bold rounded-xl cursor-pointer transition">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Kompyuterdan rasm yuklash</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files[0], (url) => setGalleryForm({ ...galleryForm, src: url }))}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Galereyaga Qo'shish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: EVENT MODAL */}
      {eventModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setEventModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {editingEventId ? "Tadbirni Tahrirlash" : "Yangi Tadbir Rejalashtirish"}
            </h3>

            <form onSubmit={handleSaveEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tadbir Nomi *</label>
                <input
                  type="text"
                  required
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sana *</label>
                  <input
                    type="text"
                    required
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="25-Noyabr, 2026"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Vaqti</label>
                  <input
                    type="text"
                    value={eventForm.time}
                    onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="14:00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">O'tkazilish Joyi</label>
                  <input
                    type="text"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="Faollar zali"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kategoriya</label>
                  <input
                    type="text"
                    value={eventForm.category}
                    onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                    placeholder="Bayram, Startap, Imtihon"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tadbir Haqida Qisqacha</label>
                <textarea
                  rows={3}
                  value={eventForm.desc}
                  onChange={(e) => setEventForm({ ...eventForm, desc: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEventModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: NEWS / GAZETTE ARTICLE MODAL */}
      {newsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setNewsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {editingNewsId ? "Maqolani Tahrirlash" : "Yangi Maqola Chop Etish"}
            </h3>

            <form onSubmit={handleSaveNews} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Sarlavha *</label>
                <input
                  type="text"
                  required
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Rukn / Kategoriya</label>
                  <select
                    value={newsForm.category}
                    onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  >
                    <option value="Yangiliklar">Yangiliklar</option>
                    <option value="Ta'lim va Metodika">Ta'lim va Metodika</option>
                    <option value="IT va Startaplar">IT va Startaplar</option>
                    <option value="Ma'naviyat">Ma'naviyat</option>
                    <option value="Tadbirlar">Tadbirlar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Muallif</label>
                  <input
                    type="text"
                    value={newsForm.author}
                    onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                </div>
              </div>

              {/* News Photo Upload */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-700">Muqova Rasmi</label>
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-20 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 flex-shrink-0">
                    <img src={newsForm.coverImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <input
                      type="text"
                      value={newsForm.coverImage}
                      onChange={(e) => setNewsForm({ ...newsForm, coverImage: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    />
                    <label className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-light hover:bg-blue-100 text-brand-blue text-xs font-bold rounded-xl cursor-pointer transition">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Kompyuterdan rasm yuklash</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e.target.files[0], (url) => setNewsForm({ ...newsForm, coverImage: url }))}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Qisqacha mazmun (Excerpt) *</label>
                <textarea
                  rows={2}
                  required
                  value={newsForm.excerpt}
                  onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">To'liq maqola matni *</label>
                <textarea
                  rows={6}
                  required
                  value={newsForm.content}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none font-sans"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setNewsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Chop Etish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 6: GAZETTE MODAL */}
      {gazetteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setGazetteModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Yangi Gazeta Soni Qo'shish</h3>

            <form onSubmit={handleSaveGazette} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Gazeta Nomi *</label>
                <input
                  type="text"
                  required
                  value={gazetteForm.title}
                  onChange={(e) => setGazetteForm({ ...gazetteForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nashr / Yil</label>
                  <input
                    type="text"
                    value={gazetteForm.edition}
                    onChange={(e) => setGazetteForm({ ...gazetteForm, edition: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Kichik sarlavha</label>
                  <input
                    type="text"
                    value={gazetteForm.subtitle}
                    onChange={(e) => setGazetteForm({ ...gazetteForm, subtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tavsif</label>
                <textarea
                  rows={3}
                  value={gazetteForm.description}
                  onChange={(e) => setGazetteForm({ ...gazetteForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setGazetteModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: SCROLL NEWS (TEZKOR LENTA) MODAL */}
      {scrollNewsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setScrollNewsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
              <Radio className="w-5 h-5 text-rose-500" />
              <span>{editingScrollNewsId ? "Lenta Xabarini Tahrirlash" : "Yangi Lenta Xabari Qo'shish"}</span>
            </h3>

            <form onSubmit={handleSaveScrollNews} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nishon (Badge)</label>
                <input
                  type="text"
                  required
                  value={scrollNewsForm.badge}
                  onChange={(e) => setScrollNewsForm({ ...scrollNewsForm, badge: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, TEZKOR, E'LON, DIQQAT"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Xabar Matni *</label>
                <textarea
                  rows={3}
                  required
                  value={scrollNewsForm.text}
                  onChange={(e) => setScrollNewsForm({ ...scrollNewsForm, text: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, 2026-yilgi Qabul sinovlari ro'yxatdan o'tish boshlandi!"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Batafsil Havola (Ixtiyoriy URL)</label>
                <input
                  type="text"
                  value={scrollNewsForm.link}
                  onChange={(e) => setScrollNewsForm({ ...scrollNewsForm, link: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-blue outline-none"
                  placeholder="masalan, /yangiliklar yoki https://..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setScrollNewsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
