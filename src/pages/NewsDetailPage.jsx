import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Eye, User, Tag, Share2, Printer, ArrowLeft, Send, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import MovingNewspaperBg from '../components/MovingNewspaperBg';

export default function NewsDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/news/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setArticle(data.data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    // Fetch sidebar recent news
    fetch('/api/news?limit=5')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setRecentNews(data.data || []);
        }
      })
      .catch(console.error);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareTelegram = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article ? article.title : 'Al-Xorazmiy maktabi yangiligi');
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  if (loading) {
    return (
      <div className="py-24 text-center text-slate-400 font-medium">
        Maqola yuklanmoqda...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4 font-poppins">
        <ScrollReveal animation="zoom-in">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Maqola topilmadi
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Siz qidirayotgan yangilik yoki xabar mavjud emas yoki o'chirilgan bo'lishi mumkin.
            </p>
            <Link
              to="/yangiliklar"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center space-x-2 btn-hover"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Barcha yangiliklar ro'yxatiga qaytish</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  const otherNews = recentNews.filter(n => n.id !== article.id);

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen relative overflow-hidden">
      <MovingNewspaperBg opacity={0.12} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <ScrollReveal animation="fade-down">
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue">Bosh sahifa</Link>
            <span>/</span>
            <Link to="/yangiliklar" className="hover:text-brand-blue">Gazeta & Yangiliklar</Link>
            <span>/</span>
            <span className="text-brand-blue font-bold truncate max-w-xs">{article.title}</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Article Content */}
          <ScrollReveal animation="fade-right" className="lg:col-span-2">
            <article className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-sm">
              {/* Category & Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-6">
                <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-md">
                  {article.category}
                </span>

                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{article.views || 0} marta o'qildi</span>
                  </span>
                  <span className="flex items-center space-x-1.5 hidden sm:flex">
                    <User className="w-3.5 h-3.5" />
                    <span>{article.author || 'Matbuot xizmati'}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight leading-snug mb-6">
                {article.title}
              </h1>

              {/* Cover Image */}
              {article.coverImage && (
                <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-auto max-h-[480px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1000&q=80";
                    }}
                  />
                </div>
              )}

              {/* Content Body */}
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
                {article.content}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 mr-2 flex items-center space-x-1">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Teglar:</span>
                  </span>
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Bar: Share & Print */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-slate-500">Ulashish:</span>
                  <button
                    onClick={handleShareTelegram}
                    className="bg-[#0088cc] text-white p-2 rounded-lg text-xs font-medium hover:bg-[#0077b5] transition flex items-center space-x-1 btn-hover"
                    title="Telegram orqali ulashish"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-200 transition flex items-center space-x-1 btn-hover"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Havola nusxalandi!' : 'Nusxalash'}</span>
                  </button>
                </div>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-600 hover:text-brand-navy p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition btn-hover"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Chop etish</span>
                </button>
              </div>
            </article>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal animation="fade-left" delay={150} className="space-y-6">
            {/* Back button */}
            <Link
              to="/yangiliklar"
              className="inline-flex items-center space-x-2 text-xs font-bold text-brand-blue hover:text-brand-navy transition bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm w-full justify-center btn-hover"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Barcha xabarlarga qaytish</span>
            </Link>

            {/* Recent News Widget */}
            {otherNews.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-base font-bold text-brand-navy mb-4 pb-3 border-b border-slate-100">
                  So'nggi Gazeta Xabarlari
                </h3>

                <div className="space-y-4">
                  {otherNews
                    .slice(0, 4)
                    .map((item) => (
                      <Link
                        key={item.id}
                        to={`/yangiliklar/${item.id}`}
                        className="group flex gap-3 items-start card-hover rounded-lg p-1.5"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                          <img
                            src={item.coverImage}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&q=80";
                            }}
                          />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-slate-800 group-hover:text-brand-blue transition line-clamp-2 leading-snug">
                            {item.title}
                          </h4>
                          <span className="text-[10px] text-slate-400 block">
                            {item.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            )}

            {/* Telegram Channel Card */}
            <div className="bg-gradient-to-br from-[#0088cc] to-blue-700 rounded-2xl p-6 text-white shadow-lg space-y-3 card-hover">
              <div className="text-lg font-bold">
                Telegram Kanalimiz
              </div>
              <p className="text-xs text-blue-100 leading-relaxed">
                Maktab hayotidagi barcha yangiliklar, attestatsiya natijalari va fotolavhalardan birinchilardan bo'lib xabardor bo'ling.
              </p>
              <a
                href="https://t.me/alXorazmiyfargonafiliali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-[#0088cc] font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-blue-50 transition shadow btn-hover"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kanalga a'zo bo'lish</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
