import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Search, Calendar, Eye, ArrowRight, BookOpen, Tag, Sparkles } from 'lucide-react';
import MovingNewspaperBg from '../components/MovingNewspaperBg';
import FloatingMathBg from '../components/FloatingMathBg';

export default function NewsListPage() {
  const [news, setNews] = useState([]);
  const [gazettes, setGazettes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hammasi');
  const [loading, setLoading] = useState(true);

  const categories = ['Hammasi', 'Yangiliklar', 'Attestatsiya', 'IT & Startap', 'Tadbirlar'];

  const fetchArticles = async () => {
    setLoading(true);
    try {
      let query = [];
      if (selectedCategory !== 'Hammasi') {
        query.push(`category=${encodeURIComponent(selectedCategory)}`);
      }
      if (search.trim()) {
        query.push(`search=${encodeURIComponent(search.trim())}`);
      }
      const url = `/api/news${query.length ? '?' + query.join('&') : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setNews(data.data);
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [selectedCategory]);

  useEffect(() => {
    fetch('/api/gazettes')
      .then(r => r.json())
      .then(d => { if (d.success) setGazettes(d.data); })
      .catch(console.error);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchArticles();
  };

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen relative overflow-hidden">
      {/* Moving non-readable newspaper background */}
      <MovingNewspaperBg opacity={0.16} />
      <FloatingMathBg opacity={0.2} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-blue">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-brand-blue font-bold">Maktab Gazetasi & Yangiliklar</span>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Al-Xorazmiy Ziyo Matbuoti</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight">
                Maktab Gazetasi va Yangiliklar
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali gazetasining barcha maqolalari, ilmiy yangiliklar, pedagoglar yutuqlari va e'lonlar.
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearchSubmit} className="flex-shrink-0 w-full md:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Maqolalarni qidirish..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-slate-50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-800 transition"
                >
                  Qidirish
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Gazette Editions Spotlight */}
        {gazettes.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-brand-blue" />
              <span>«Al-Xorazmiy Ziyo» Gazetasi Sonlari</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gazettes.map((gaz) => (
                <div
                  key={gaz.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="w-full sm:w-36 h-44 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={gaz.coverImage}
                      alt={gaz.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80";
                      }}
                    />
                  </div>
                  <div className="space-y-2.5 flex-grow">
                    <div className="flex items-center space-x-2">
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                        {gaz.edition}
                      </span>
                      <span className="text-xs text-slate-400">{gaz.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy leading-snug">
                      {gaz.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {gaz.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded">
                        {gaz.articlesCount || 8} ta maqola jamlangan
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-400 font-medium">
            Yangiliklar yuklanmoqda...
          </div>
        ) : news.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center text-slate-500 border border-slate-100 max-w-lg mx-auto space-y-3">
            <h3 className="text-base font-bold text-slate-800">Hozircha yangiliklar kiritilmagan</h3>
            <p className="text-xs text-slate-500">
              Yangi maqolalar va gazeta nashrlari tez orada maktab ma'muriyati tomonidan chop etiladi.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-blue/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                        {item.category}
                      </span>
                    </div>
                  </div>

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

                <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.author || 'Matbuot xizmati'}
                  </span>
                  <Link
                    to={`/yangiliklar/${item.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-brand-blue hover:text-brand-navy transition group/link"
                  >
                    <span>To'liq o'qish</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
