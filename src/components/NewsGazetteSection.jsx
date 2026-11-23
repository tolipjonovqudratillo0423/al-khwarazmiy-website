import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Newspaper, Calendar, Eye, ArrowRight, BookOpen, ChevronRight,
  BellRing, FileText, Feather, Quote, Sparkles, Bookmark, Flame
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import MovingNewspaperBg from './MovingNewspaperBg';

export default function NewsGazetteSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('Hammasi');
  const [news, setNews] = useState([]);
  const [gazettes, setGazettes] = useState([]);
  const [scrollNews, setScrollNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['Hammasi', 'Yangiliklar', 'Attestatsiya', 'IT & Startap', 'Tadbirlar'];

  const defaultGazetteFeeds = [
    {
      id: "gaz-1",
      tag: "Xorazmiy Ziyo • 12-son",
      title: "Xalqaro matematika va informatika olimpiadasida o'quvchilarimiz mutloq g'alaba qozondi!",
      date: "Noyabr 2026",
      badge: "Yangi Son",
      category: "Olimpiada"
    },
    {
      id: "gaz-2",
      tag: "Xorazmiy Times • SAT 1500+",
      title: "SAT MAXING CLUB a'zolari 1500+ ball bilan xalqaro top universitetlar grantini qo'lga kiritdi",
      date: "Noyabr 2026",
      badge: "Xalqaro Grant",
      category: "Ta'lim"
    },
    {
      id: "gaz-3",
      tag: "Maktab Matbuoti • Saylov",
      title: "Maktab Prezidentligi va Vazirliklar tarkibi rasman e'lon qilindi va qasamyod qabul qilindi",
      date: "Noyabr 2026",
      badge: "Prezidentlik",
      category: "Maktab hayoti"
    },
    {
      id: "gaz-4",
      tag: "Maxsus Nashr • Robofest",
      title: "Robototexnika va sun'iy intellekt laboratoriyasidan xalqaro WRO musobaqasiga yo'llanma",
      date: "Noyabr 2026",
      badge: "Robototexnika",
      category: "IT & Startap"
    },
    {
      id: "gaz-5",
      tag: "Startaplar • Qizlar IT",
      title: "\"Raqamli avlod qizlari\" startap loyihalari taqdimoti: Yashil iqtisodiyot va EdTech platformalari",
      date: "Noyabr 2026",
      badge: "Startap",
      category: "Innovatsiya"
    }
  ];

  useEffect(() => {
    // Fetch news
    const fetchNews = async () => {
      try {
        const url = activeCategory === 'Hammasi'
          ? '/api/news?limit=6'
          : `/api/news?category=${encodeURIComponent(activeCategory)}&limit=6`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setNews(data.data);
        } else {
          setNews([]);
        }
      } catch (err) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeCategory]);

  useEffect(() => {
    // Fetch gazette issues
    fetch('/api/gazettes')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setGazettes(data.data);
        }
      })
      .catch(() => {});

    // Fetch scroll news (lentadagi yangiliklar)
    fetch('/api/scroll-news')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setScrollNews(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const doubleGazetteFeeds = [...defaultGazetteFeeds, ...defaultGazetteFeeds, ...defaultGazetteFeeds];

  return (
    <section className="py-20 bg-white font-poppins relative overflow-hidden">
      {/* Moving non-readable newspaper background */}
      <MovingNewspaperBg opacity={0.07} />
      {/* Background Gazette Floating Animations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Floating Typography */}
        <span
          className="absolute -top-6 left-10 text-[90px] font-black text-slate-900/[0.02] tracking-widest uppercase font-serif"
        >
          THE GAZETTE
        </span>
        <span
          className="absolute top-1/2 -right-16 text-[110px] font-black text-blue-900/[0.02] tracking-widest uppercase font-serif"
        >
          XORAZMIY TIMES
        </span>
        <span
          className="absolute -bottom-8 left-1/4 text-[80px] font-black text-slate-900/[0.02] tracking-wider uppercase font-serif"
        >
          ZIYO PRESS
        </span>

        {/* Floating Icons & Newspaper elements */}
        <div className="absolute top-12 left-16 animate-gazette-float text-brand-blue/10">
          <Newspaper className="w-16 h-16" />
        </div>
        <div className="absolute top-1/3 right-12 animate-gazette-float text-amber-500/10" style={{ animationDelay: '-2s' }}>
          <Feather className="w-14 h-14" />
        </div>
        <div className="absolute bottom-20 left-12 animate-gazette-float text-sky-500/10" style={{ animationDelay: '-4s' }}>
          <BookOpen className="w-14 h-14" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-gazette-float text-brand-navy/10" style={{ animationDelay: '-3s' }}>
          <Quote className="w-12 h-12" />
        </div>
        <div className="absolute top-24 right-1/3 animate-gazette-float text-blue-400/10" style={{ animationDelay: '-5s' }}>
          <FileText className="w-10 h-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-light text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200 shadow-sm">
                <Newspaper className="w-3.5 h-3.5 text-brand-blue" />
                <span>{t.sections.gazetteTitle}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                Maktab Gazetasi va Yangiliklar
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
                Maktab hayoti, ilmiy nashrlar, iqtidorli o'quvchilar yutuqlari va rasmiy gazeta maqolalari
              </p>
            </div>

            <Link
              to="/yangiliklar"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-navy transition group active:scale-95 select-none"
            >
              <span>Barcha maqolalar</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Fast Gazette Scroll Lenta - ONLY works when added by admin */}
        {scrollNews && scrollNews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-3">
              <span className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#00265B] via-[#0047AB] to-[#00265B] text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-sm border border-blue-400/30">
                <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Tezkor Gazeta Lentasi</span>
              </span>
              <span className="text-xs text-slate-400">
                (To'xtatish uchun kursor ustiga olib boring)
              </span>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d1f3c] via-[#0d2a52] to-[#0d1f3c] p-3 shadow-xl border border-blue-900/40">
              {/* Left & Right gradient fade masks */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d1f3c] to-transparent z-20"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d1f3c] to-transparent z-20"></div>

              {/* Fast animated ribbon */}
              <div className="flex animate-gazette-scroll gap-4 py-1">
                {[...scrollNews, ...scrollNews, ...scrollNews].map((feed, idx) => (
                  <Link
                    key={`feed-${idx}`}
                    to={feed.link || "/yangiliklar"}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl px-5 py-3 border border-white/15 flex items-center space-x-4 min-w-[320px] sm:min-w-[380px] max-w-[420px] group transition-all duration-300 flex-shrink-0"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                          {feed.tag || 'Xorazmiy Ziyo'}
                        </span>
                        <span className="text-[10px] text-white/50">• {feed.date || '2026-yil'}</span>
                      </div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-white group-hover:text-amber-200 transition leading-snug truncate">
                        {feed.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gazette Spotlight Banner if available */}
        {gazettes.length > 0 && (
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="mb-12 bg-gradient-to-r from-brand-navy via-brand-blue to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="bg-amber-400 text-slate-900 px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider">
                      Yangi Nashr
                    </span>
                    <span className="text-xs text-slate-300">
                      {gazettes[0].edition || '2026-yil'}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {gazettes[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {gazettes[0].description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/yangiliklar"
                    className="bg-brand-sky hover:bg-sky-400 active:scale-95 text-brand-navy font-bold px-6 py-3 rounded-2xl text-xs shadow-md transition flex items-center space-x-2 cursor-pointer select-none"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Gazetani mutolaa qilish</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Category Filter Tabs */}
        <ScrollReveal animation="fade-up" duration={500} delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* News Cards Grid or Clean Empty State */}
        {loading ? (
          <div className="text-center py-16 text-slate-400 font-medium text-sm animate-pulse">
            Yangiliklar yuklanmoqda...
          </div>
        ) : news.length === 0 ? (
          <ScrollReveal animation="fade-up" duration={600} delay={150}>
            <div className="text-center py-16 px-6 bg-slate-50 rounded-3xl border border-dashed border-slate-200 max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue mx-auto flex items-center justify-center">
                <BellRing className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Hozircha yangiliklar kiritilmagan</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Maktab hayoti, e'lonlar va rasmiy gazeta maqolalari tez orada maktab ma'muriyati tomonidan chop etiladi.
              </p>
              <div className="pt-2">
                <a
                  href="https://t.me/alXorazmiyfargonafiliali"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-blue-900 active:scale-95 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow transition"
                >
                  <span>Telegram kanalida kuzatib boring</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full">
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                      {item.coverImage ? (
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs">
                          Rasm yuklanmagan
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-brand-blue/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-medium">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{item.views || 0}</span>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-blue transition line-clamp-2 leading-snug mb-3">
                        <Link to={`/yangiliklar/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {item.author || 'Matbuot xizmati'}
                    </span>
                    <Link
                      to={`/yangiliklar/${item.id}`}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-brand-blue hover:text-brand-navy transition group/link active:scale-95"
                    >
                      <span>O'qish</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
