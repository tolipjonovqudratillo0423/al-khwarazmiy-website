import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('Hammasi');

  const defaultPhotos = [
    {
      id: 'gal-1',
      src: '/assets/school_building.jpg',
      title: "Maktab binosi tashqi ko'rinishi",
      category: 'Maktab hayoti',
      date: 'Noyabr 2026'
    },
    {
      id: 'gal-2',
      src: '/assets/school_building.jpg',
      title: "O'quvchilarimiz yutuqlari va maktab shiori",
      category: 'Tadbirlar',
      date: 'Noyabr 2026'
    }
  ];

  const [photos, setPhotos] = useState(defaultPhotos);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setPhotos(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = ['Hammasi', 'Darslar', 'Laboratoriya', 'Tadbirlar', 'Maktab hayoti'];

  const filteredPhotos = activeTab === 'Hammasi'
    ? photos
    : photos.filter(p => p.category === activeTab);

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span>Maktab hayoti</span>
            <span>/</span>
            <span className="text-brand-blue font-bold">Fotogalereya</span>
          </div>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-10">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Media Markaz
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktab Hayotidan Fotolavhalar
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filialining qaynoq o'quv jarayonlari, laboratoriya mashg'ulotlari, intellektual va sport musobaqalari.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Tab */}
        <ScrollReveal animation="fade-up" duration={500} delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition shadow-sm cursor-pointer active:scale-95 ${
                  activeTab === cat
                    ? 'bg-brand-blue text-white shadow-brand-blue/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <ScrollReveal
              key={photo.id || idx}
              animation="fade-up"
              delay={(idx % 4) * 100}
              className="h-full"
            >
              <div
                onClick={() => setSelectedImage(photo)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col justify-between h-full hover:-translate-y-1.5"
              >
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/school_building.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-brand-navy/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {photo.category}
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 mb-1 group-hover:text-brand-blue transition">
                    {photo.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {photo.date || '2026-yil'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal for Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                  {selectedImage.category} • {selectedImage.date || '2026-yil'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
