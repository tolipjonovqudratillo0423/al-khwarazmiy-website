import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award, GraduationCap, Mail, Phone, User, Sparkles, CheckCircle2,
  ChevronRight, Search, BookOpen, Clock, Building, ShieldCheck, MapPin
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function LeadershipPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'Rahbariyat', 'Matematika', 'IT', 'Ingliz tili', 'Fizika', 'Tabiiy fanlar'
  const [searchQuery, setSearchQuery] = useState('');

  // Default Presidential School staff matching tashkentps.uz/uz/staff
  const defaultStaff = [
    // --- RAHBARIYAT (Administration) ---
    {
      id: "lead-1",
      name: "To'ychiyev Jasurbek Ravshanovich",
      role: "Filial Direktori",
      category: "Rahbariyat",
      department: "Boshqaruv",
      toifa: "Oliy toifali rahbar",
      education: "O'zbekiston Milliy Universiteti",
      experience: "16 yil pedagogik va boshqaruv staji",
      score: "IT va ixtisoslashtirilgan ta'lim a'lochisi",
      reception: "Dushanba - Juma: 14:00 - 17:00",
      email: "director@alxorazmiy-fergana.uz",
      phone: "+998 (73) 244-01-20",
      badge: "Direktor",
      image: ""
    },
    {
      id: "lead-2",
      name: "Sobirova Gulnoza Mahmudovna",
      role: "O'quv ishlari bo'yicha direktor o'rinbosari",
      category: "Rahbariyat",
      department: "O'quv bo'limi",
      toifa: "Oliy toifa • Fan nomzodi (PhD)",
      education: "Farg'ona Davlat Universiteti (Magistratura)",
      experience: "14 yil ilmiy-pedagogik faoliyat",
      score: "Cambridge xalqaro ta'lim standarti koordinatori",
      reception: "Seshanba, Payshanba: 15:00 - 17:00",
      email: "oquv@alxorazmiy-fergana.uz",
      phone: "+998 (73) 244-01-21",
      badge: "Direktor o'rinbosari",
      image: ""
    },
    {
      id: "lead-3",
      name: "Rahimov Elyorbek Baxtiyorovich",
      role: "Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari",
      category: "Rahbariyat",
      department: "Tarbiyaviy ishlar",
      toifa: "Oliy toifali mutaxassis",
      education: "Toshkent Davlat Pedagogika Universiteti",
      experience: "11 yil ish staji",
      score: "Yoshlar yetakchisi va ijtimoiy loyihalar kuratori",
      reception: "Dushanba, Chorshanba: 14:00 - 16:30",
      email: "manaviyat@alxorazmiy-fergana.uz",
      phone: "+998 (73) 244-01-22",
      badge: "Direktor o'rinbosari",
      image: ""
    },
    {
      id: "lead-4",
      name: "Qodirov Dilshodbek Olimovich",
      role: "Innovatsion ta'lim va IT bo'limi boshlig'i",
      category: "Rahbariyat",
      department: "IT & Innovatsiyalar",
      toifa: "Bosh mutaxassis",
      education: "TATU Farg'ona filiali",
      experience: "8 yil dasturiy ta'minot va IT boshqaruv tajribasi",
      score: "Cisco & Google Certified Educator",
      reception: "Har kuni: 10:00 - 12:00",
      email: "it@alxorazmiy-fergana.uz",
      phone: "+998 (73) 244-01-23",
      badge: "IT Rahbari",
      image: ""
    },

    // --- USTOZLAR & PEDAGOGLAR (Teaching Staff) ---
    {
      id: "teach-1",
      name: "Ergashev Rustambek Alisherovich",
      role: "Matematika fani katta o'qituvchisi",
      category: "Pedagoglar",
      department: "Matematika",
      toifa: "Oliy toifa • Xalqaro Olimpiada Ustozi",
      education: "O'zMU Mexanika-matematika fakulteti",
      experience: "12 yil ish staji",
      score: "Respublika va xalqaro olimpiada sovrindorlari ustozi",
      badge: "Oliy Toifa",
      bio: "Chuqurlashtirilgan algebra, geometriya va xalqaro olimpiada kombinatorikasi bo'yicha mutaxassis.",
      image: ""
    },
    {
      id: "teach-2",
      name: "Sultonov Muhriddin Botirovich",
      role: "Informatika va Dasturlash o'qituvchisi",
      category: "Pedagoglar",
      department: "IT",
      toifa: "Senior Software Engineer • Bosh o'qituvchi",
      education: "TATU (Axborot xavfsizligi magistri)",
      experience: "9 yil dasturlash va pedagogik staj",
      score: "ICPC & Codeforces xalqaro musobaqalar treneri",
      badge: "Senior IT",
      bio: "Python, C++, algoritmlar, ma'lumotlar tuzilmasi va web dasturlash bo'yicha intensiv kurslar koordinatori.",
      image: ""
    },
    {
      id: "teach-3",
      name: "Usmonova Madinaxon Komiljonovna",
      role: "Ingliz tili va SAT ustozi",
      category: "Pedagoglar",
      department: "Ingliz tili",
      toifa: "IELTS 8.5 • TESOL Certified",
      education: "O'zDJTU (Ingliz filologiyasi)",
      experience: "8 yil xalqaro dasturlar tajribasi",
      score: "SAT Verbal 760+ murabbiyi",
      badge: "IELTS 8.5",
      bio: "SAT Reading & Writing, Academic English hamda xalqaro insho (Personal Statement) bo'yicha mentor.",
      image: ""
    },
    {
      id: "teach-4",
      name: "Rahmatov Izzatillo Xamidovich",
      role: "Fizika fani o'qituvchisi",
      category: "Pedagoglar",
      department: "Fizika",
      toifa: "Oliy toifali o'qituvchi",
      education: "FarDU Fizika-texnika fakulteti",
      experience: "15 yil pedagogik faoliyat",
      score: "Respublika fizika olimpiadasi hakamlar hay'ati a'zosi",
      badge: "Oliy Toifa",
      bio: "Amaliy fizika laboratoriyalari, elektrodinamika, optika va aerodinamika to'garaklari rahbari.",
      image: ""
    },
    {
      id: "teach-5",
      name: "Mirzayeva Nilufar Akbarovna",
      role: "Kimyo va Biologiya fani o'qituvchisi",
      category: "Pedagoglar",
      department: "Tabiiy fanlar",
      toifa: "1-toifali mutaxassis • STEM koordinatori",
      education: "FarDU Tabiiy fanlar fakulteti",
      experience: "10 yil ish staji",
      score: "Milliy sertifikat (A+) • Kimyo olimpiadalari murabbiyi",
      badge: "STEM",
      bio: "Organik va anorganik kimyo, zamonaviy mikroskopiya va biokimyo amaliyotlari ustozi.",
      image: ""
    },
    {
      id: "teach-6",
      name: "Narzullayev Akmalbek Doniyorovich",
      role: "Robototexnika va Sun'iy intellekt ustozi",
      category: "Pedagoglar",
      department: "IT",
      toifa: "Robototexnika muhandisi",
      education: "Turin Politexnika Universiteti bitiruvchisi",
      experience: "6 yil robototexnika sohasida tajriba",
      score: "WRO (World Robot Olympiad) rasmiy murabbiyi",
      badge: "AI & Robototexnika",
      bio: "Arduino, ESP32, Computer Vision va avtonom mobil robotlar konstruksiyasi bo'yicha yetakchi mutaxassis.",
      image: ""
    },
    {
      id: "teach-7",
      name: "Qobilova Shahloxon Shavkatovna",
      role: "Ona tili va Adabiyot fani o'qituvchisi",
      category: "Pedagoglar",
      department: "Ijtimoiy fanlar",
      toifa: "Oliy toifali o'qituvchi",
      education: "FarDU O'zbek filologiyasi",
      experience: "18 yil pedagogik staj",
      score: "\"Yilning eng yaxshi fan ustozi\" tanlovi g'olibi",
      badge: "Oliy Toifa",
      bio: "Notiqlik san'ati, badiiy tahlil, milliy qadriyatlar va 'Ziyo' adabiy klubi rahbari.",
      image: ""
    },
    {
      id: "teach-8",
      name: "Xoliqov Boburjon Tohirovich",
      role: "Matematika va Mantiq fani o'qituvchisi",
      category: "Pedagoglar",
      department: "Matematika",
      toifa: "1-toifali o'qituvchi • SAT Math 800",
      education: "O'zMU Amaliy matematika fakulteti",
      experience: "7 yil repetitorlik va maktab staji",
      score: "Digital SAT Math 800 ballik sertifikat egasi",
      badge: "SAT Math 800",
      bio: "Kengaytirilgan matematika, qiziqarli mantiq va xalqaro Kangourou musobaqasi tayyorgarligi mutaxassisi.",
      image: ""
    }
  ];

  useEffect(() => {
    fetch('/api/teachers')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setTeachers(data.data);
        } else {
          setTeachers(defaultStaff);
        }
      })
      .catch(() => {
        setTeachers(defaultStaff);
      })
      .finally(() => setLoading(false));
  }, []);

  const departmentTabs = [
    { id: 'all', label: 'Barchasi' },
    { id: 'Rahbariyat', label: 'Rahbariyat' },
    { id: 'Matematika', label: 'Matematika' },
    { id: 'IT', label: 'Informatika & IT' },
    { id: 'Ingliz tili', label: 'Ingliz tili & SAT' },
    { id: 'Fizika', label: 'Fizika' },
    { id: 'Tabiiy fanlar', label: 'Tabiiy fanlar' }
  ];

  // Filtering
  const staffList = teachers.length > 0 ? teachers : defaultStaff;

  const filteredStaff = staffList.filter(member => {
    // Tab filter
    const matchesTab = activeTab === 'all'
      ? true
      : activeTab === 'Rahbariyat'
        ? member.category === 'Rahbariyat'
        : member.department === activeTab || (member.category === 'Pedagoglar' && member.role?.toLowerCase().includes(activeTab.toLowerCase()));

    // Search query
    const matchesSearch = searchQuery.trim() === ''
      ? true
      : member.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.toifa?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const leadershipMembers = filteredStaff.filter(m => m.category === 'Rahbariyat');
  const teacherMembers = filteredStaff.filter(m => m.category !== 'Rahbariyat');

  return (
    <div className="pt-36 sm:pt-40 pb-20 bg-[#f8fafd] font-poppins min-h-screen relative overflow-hidden">
      {/* Floating Math background formulas */}
      <FloatingMathBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <ScrollReveal animation="fade-down">
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <Link to="/maqsad-vazifalar" className="hover:text-brand-blue transition">Biz haqimizda</Link>
            <span>/</span>
            <span className="text-brand-blue font-bold">Rahbariyat & Ustozlar</span>
          </div>
        </ScrollReveal>

        {/* Hero Banner styled like tashkentps.uz/uz/staff */}
        <ScrollReveal animation="fade-up">
          <div className="bg-gradient-to-r from-[#00265B] via-[#003882] to-[#0047AB] rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-12 relative overflow-hidden border border-blue-800/40">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="relative z-10 max-w-3xl">
              <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
                Prezident Ta'lim Muassasalari Agentligi
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
                Maktab Jamoasi: Rahbariyat va Pedagoglar
              </h1>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-light">
                Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filialining oliy toifali, milliy va xalqaro sertifikatli, ilg'or ustozlar hamda rahbarlar tarkibi.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Search & Filter Toolbar like Tashkent Presidential School */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-md border border-slate-200/80 mb-12 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ustoz ismi yoki fani bo'yicha qidiruv..."
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-slate-50 focus:bg-white transition"
              />
            </div>

            <span className="text-xs font-semibold text-slate-500 hidden md:block">
              Topildi: <span className="text-brand-blue font-bold">{filteredStaff.length} nafar</span> xodim
            </span>
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {departmentTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#0047AB] text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 1: RAHBARIYAT (Administration) if matching */}
        {leadershipMembers.length > 0 && (
          <div className="mb-16">
            <ScrollReveal animation="fade-down" duration={500}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#0047AB] flex items-center justify-center font-bold shadow-sm">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00265B] tracking-tight">
                    Maktab Rahbariyati
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Ma'muriy boshqaruv, o'quv va tarbiya ishlari bo'yicha mutasaddilar
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {leadershipMembers.map((item, idx) => (
                <ScrollReveal key={item.id || idx} animation="fade-up" delay={idx * 100}>
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 card-hover flex flex-col justify-between group h-full">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
                      {/* Portrait Photo or Elegant Presidential Silhouette */}
                      <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-[#00265B] flex-shrink-0 border-2 border-amber-300/60 shadow-lg flex items-center justify-center relative">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        ) : (
                          <div className="text-center p-3 text-white">
                            <div className="w-14 h-14 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-2 border border-white/20">
                              <User className="w-8 h-8 text-amber-300" />
                            </div>
                            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                              Rahbariyat
                            </span>
                          </div>
                        )}
                        <span className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-[10px] text-white text-center py-0.5 rounded-md font-bold">
                          {item.badge || "Rahbar"}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 text-center sm:text-left space-y-2">
                        <span className="inline-block bg-blue-50 text-[#0047AB] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-blue-200">
                          {item.department || "Ma'muriyat"}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#0047AB] transition">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-brand-sky">
                          {item.role}
                        </p>
                        {item.toifa && (
                          <div className="text-xs text-slate-600 font-medium">
                            <span className="font-bold text-slate-700">Toifasi:</span> {item.toifa}
                          </div>
                        )}
                        {item.education && (
                          <div className="text-xs text-slate-500">
                            <span className="font-semibold text-slate-700">Ma'lumoti:</span> {item.education}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Reception & Contact Footer */}
                    <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      {item.reception && (
                        <div className="flex items-center space-x-2 text-slate-700">
                          <Clock className="w-4 h-4 text-[#0047AB] flex-shrink-0" />
                          <span><strong className="font-bold">Qabul vaqti:</strong> {item.reception}</span>
                        </div>
                      )}
                      <div className="flex flex-wrap items-center gap-4 pt-1">
                        {item.phone && (
                          <a href={`tel:${item.phone}`} className="flex items-center space-x-1.5 text-slate-600 hover:text-[#0047AB] font-semibold">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.phone}</span>
                          </a>
                        )}
                        {item.email && (
                          <a href={`mailto:${item.email}`} className="flex items-center space-x-1.5 text-slate-600 hover:text-[#0047AB] font-semibold">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span className="truncate max-w-[200px]">{item.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: USTOZLAR & PEDAGOGLAR (Teaching Staff) */}
        {teacherMembers.length > 0 && (
          <div>
            <ScrollReveal animation="fade-down" duration={500}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00265B] tracking-tight">
                    Ustozlar va Pedagoglar Tarkibi
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Matematika, informatika, fizika, ingliz tili va fan laboratoriyalari murabbiylari
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Grid styled exactly like presidential staff cards on tashkentps.uz/uz/staff */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teacherMembers.map((teacher, idx) => (
                <ScrollReveal key={teacher.id || idx} animation="fade-up" delay={(idx % 4) * 80}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 card-hover flex flex-col justify-between group h-full">
                    {/* Portrait Frame (3:4 ratio) */}
                    <div className="relative aspect-[3/4] bg-gradient-to-b from-slate-100 via-blue-50/40 to-slate-200 overflow-hidden flex items-center justify-center">
                      {teacher.image ? (
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                          <div className="w-20 h-20 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#0047AB] mb-3 group-hover:scale-110 transition duration-300">
                            <User className="w-10 h-10 opacity-70" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                            {teacher.department || "Ustoz"}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            Muhammad al-Xorazmiy
                          </span>
                        </div>
                      )}

                      {/* Subject Tag */}
                      <div className="absolute top-3 left-3 bg-[#00265B]/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                        {teacher.department || "Pedagog"}
                      </div>

                      {/* Badge (e.g. IELTS 8.5 / Oliy toifa) */}
                      {teacher.badge && (
                        <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-slate-900" />
                          <span>{teacher.badge}</span>
                        </div>
                      )}
                    </div>

                    {/* Teacher Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0047AB] transition leading-snug line-clamp-2">
                          {teacher.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#0047AB]">
                          {teacher.role}
                        </p>

                        {teacher.toifa && (
                          <div className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-lg">
                            {teacher.toifa}
                          </div>
                        )}

                        {teacher.score && (
                          <div className="flex items-start space-x-1.5 text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2 font-medium">{teacher.score}</span>
                          </div>
                        )}

                        {teacher.bio && (
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 pt-1 font-normal">
                            {teacher.bio}
                          </p>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                        <span>Farg'ona filiali</span>
                        <span className="text-[#0047AB] font-bold">Ixtisoslashtirilgan</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Empty state if search returns nothing */}
        {filteredStaff.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-100 shadow-sm space-y-3">
            <User className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Xodim topilmadi</h3>
            <p className="text-xs text-slate-500">
              Qidiruv so'rovi yoki tanlangan kafedra bo'yicha ma'lumot topilmadi.
            </p>
            <button
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-brand-blue hover:underline"
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
