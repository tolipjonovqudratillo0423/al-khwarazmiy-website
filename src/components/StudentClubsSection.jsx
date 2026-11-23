import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Sparkles, Cpu, BrainCircuit, Users, ArrowRight, Award, Compass, Heart, Trophy, Globe, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import FloatingMathBg from './FloatingMathBg';

export default function StudentClubsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('Hammasi');

  const defaultClubs = [
    {
      id: "club-presidency",
      title: "IT-School Presidency",
      category: "Ijtimoiy",
      founder: "Muhammadjonov Abdulla",
      leader: "Abdumanabov Sardorbek",
      desc: "Maktab o'quvchilarining o'zini o'zi boshqarish tizimi, yoshlar prezidentligi, vazirliklar faoliyatini muvofiqlashtirish va umumta'lim tashabbuslari.",
      image: "/assets/logo.jpg",
      isEmblem: true,
      badge: "Prezidentlik",
      color: "from-blue-700 to-indigo-800"
    },
    {
      id: "club-volunteers",
      title: "Al-Khwarizmi Volunteers",
      category: "Ijtimoiy",
      founder: "Abdumanabov Sardorbek",
      leader: "Sayfutdinova Sevinch",
      desc: "Ijtimoiy yordam, xayriya tadbirlari, ixtiyoriy ko'ngillilar harakati hamda maktab miqyosidagi yirik tadbirlarni tashkillashtirish.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80",
      badge: "Volontyorlik",
      color: "from-sky-500 to-blue-600"
    },
    {
      id: "club-zakovat",
      title: "Zakovat klubi",
      category: "Sport",
      founder: "Doniyor Kamoliddinov",
      leader: "Komilov Anasxon",
      desc: "Mantiqiy intellektual o'yinlar, 'Zakovat' intellektual ringi, breyn-ring va olimpiada savollari bo'yicha doimiy bellashuvlar klubi.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80",
      badge: "Intellektual",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "club-sat",
      title: "SAT MAXING CLUB",
      category: "Ijtimoiy",
      founder: "Chet tillari kafedrasi",
      leader: "Olimov Sardorbek",
      desc: "Top jahon universitetlariga (MIT, Harvard, KAIST) 1500+ SAT balli bilan to'liq grant yutishni maqsad qilgan iqtidorli yoshlar jamiyati.",
      badge: "Xalqaro Grant",
      color: "from-blue-600 to-sky-500"
    },
    {
      id: "club-girls",
      title: "Raqamli Avlod Qizlari",
      category: "Ekologiya",
      founder: "Innovatsiyalar bo'limi",
      leader: "Nozimova Shukrona",
      desc: "Maktabimiz o'quvchi qizlarining yashil iqtisodiyot, ekologik monitoring va EdTech startap loyihalarini hayotga tatbiq etish markazi.",
      badge: "Startap & Ekologiya",
      color: "from-pink-500 to-purple-600"
    },
    {
      id: "club-robotics",
      title: "Robototexnika & AI Hub",
      category: "Sport",
      founder: "IT Kafedrasi",
      leader: "Tolibjonov Qudratjon",
      desc: "Xalqaro WRO (World Robot Olympiad) musobaqalari, avtonom tizimlar, dronlar dasturlash va sun'iy intellekt laboratoriyasi.",
      badge: "Muhandislik",
      color: "from-emerald-600 to-teal-500"
    }
  ];

  const [clubs, setClubs] = useState(defaultClubs);

  useEffect(() => {
    fetch('/api/clubs')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setClubs(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    { name: 'Hammasi', icon: Users },
    { name: 'Ijtimoiy', icon: Heart },
    { name: 'Sport', icon: Trophy },
    { name: 'Ekologiya', icon: Compass }
  ];

  const filteredClubs = activeCategory === 'Hammasi'
    ? clubs
    : clubs.filter(c => c.category === activeCategory || (activeCategory === 'Ijtimoiy' && !c.category));

  return (
    <section className="py-20 bg-[#f8fafd] font-poppins relative overflow-hidden">
      {/* Floating math formulas in the background like in photo 1 */}
      <FloatingMathBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="inline-block bg-blue-50 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm">
              {t.sections.clubsTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Iqtidorlarni Kengaytirish Klublari
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600">
              O'quvchilar tashabbuslari, ilmiy to'garaklar va yoshlar prezidentligi loyihalari
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills matching photo 1 */}
        <ScrollReveal animation="fade-up" duration={500} delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#0047AB] text-white shadow-md shadow-blue-200'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Clubs Grid matching photo 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClubs.map((c, i) => (
            <ScrollReveal
              key={c.id || i}
              animation="fade-up"
              delay={i * 80}
              className="h-full"
            >
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group h-full relative"
              >
                {/* Top Media / Banner */}
                <div className="h-44 sm:h-48 bg-gradient-to-br from-blue-900 via-indigo-900 to-brand-navy relative overflow-hidden flex items-center justify-center p-4">
                  {c.isEmblem ? (
                    <div className="w-28 h-28 rounded-full border-4 border-amber-300/80 shadow-2xl overflow-hidden bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <img src={c.image || "/assets/logo.jpg"} alt={c.title} className="w-full h-full object-cover" />
                    </div>
                  ) : c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/school_building.jpg";
                      }}
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Target className="w-12 h-12 text-brand-sky" />
                    </div>
                  )}

                  {c.badge && (
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00265B] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {c.badge}
                    </span>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue transition mb-2">
                      {c.title}
                    </h3>

                    {/* Founder & Leader details like photo 1 */}
                    <div className="space-y-1 text-xs text-slate-500 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {c.founder && (
                        <div>
                          <span className="font-semibold text-slate-700">Founder:</span> {c.founder}
                        </div>
                      )}
                      {c.leader && (
                        <div>
                          <span className="font-semibold text-slate-700">Leader:</span> {c.leader}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">
                      {c.stats || 'Faoliyatda'}
                    </span>
                    <div className="flex items-center space-x-2">
                      {c.telegram && (
                        <a
                          href={c.telegram.startsWith('http') ? c.telegram : `https://t.me/${c.telegram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0088cc]/10 hover:bg-[#0088cc] text-[#0088cc] hover:text-white px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center space-x-1"
                          title="Telegram kanali"
                        >
                          <Send className="w-3 h-3" />
                          <span>Kanal</span>
                        </a>
                      )}
                      <Link
                        to="/oquvchilar-tashkilotlari"
                        className="text-brand-blue hover:text-brand-navy text-xs font-bold inline-flex items-center space-x-1 group-hover:translate-x-1 transition select-none"
                      >
                        <span>Batafsil</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
