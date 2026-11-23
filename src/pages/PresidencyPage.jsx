import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, X, ZoomIn } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

const ministries = [
  {
    name: "Tashqi ishlar vazirligi",
    image: "/assets/presidency/tashqi-ishlar.jpg"
  },
  {
    name: "Sport vazirligi",
    image: "/assets/presidency/sport.jpg"
  },
  {
    name: "Madaniyat vazirligi",
    image: "/assets/presidency/madaniyat.jpg"
  },
  {
    name: "Media va axborot vazirligi",
    image: "/assets/presidency/media.jpg"
  },
  {
    name: "Ta'lim vazirligi",
    image: "/assets/presidency/talim.jpg"
  },
  {
    name: "Raqamli Texnologiyalar Vazirligi",
    image: "/assets/presidency/raqamli.jpg"
  },
  {
    name: "Ijtimoiy tashabbuslar Vazirligi",
    image: "/assets/presidency/ijtimoiy.jpg"
  },
  {
    name: "Qizlar qo'mitasi",
    image: "/assets/presidency/qizlar.jpg"
  }
];

export default function PresidencyPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-36 sm:pt-40 pb-20 bg-[#f8fafd] font-poppins min-h-screen overflow-hidden relative">
      {/* Active Floating Math Background */}
      <FloatingMathBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <ScrollReveal animation="fade-down">
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span>Maktab hayoti</span>
            <span>/</span>
            <span className="text-brand-blue font-bold">Prezidentlik</span>
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm">
              <Crown className="w-4 h-4 text-amber-500" />
              <span>O'quvchilar Boshqaruvi</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00265B] tracking-tight">
              al-Xorazmiy Presidency
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali Prezidentligi va Vazirliklar tarkibi
            </p>
          </div>
        </ScrollReveal>

        {/* 1. PRESIDENT & VITSE-PREZIDENT (ONE PHOTO) */}
        <div className="mb-16">
          <ScrollReveal animation="zoom-in" duration={700}>
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-4">
                <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00265B] via-[#0047AB] to-[#00265B] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider border border-amber-400/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prezident va Vitse-prezident</span>
                </span>
              </div>

              {/* One single complete poster for President & Vice-President */}
              <div
                onClick={() => setSelectedImage('/assets/presidency/president.jpg')}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-blue-900/40 bg-[#0a1628] group cursor-pointer"
              >
                <img
                  src="/assets/presidency/president.jpg"
                  alt="al-Xorazmiy Presidency - Saydullayev Nuriddin va Azimjonov Firdavs"
                  className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center space-x-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                    <span>Kattalashtirib ko'rish</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. VAZIRLIKLAR (ONE PHOTO OF EACH VAZIRLIK) */}
        <div className="mb-14">
          <ScrollReveal animation="fade-down" duration={600}>
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-50 text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 mb-2">
                Vazirliklar
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00265B] tracking-tight">
                Maktab Prezidentligi Vazirliklari
              </h2>
            </div>
          </ScrollReveal>

          {/* Responsive 2-column grid: One complete photo per ministry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {ministries.map((m, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                <div
                  onClick={() => setSelectedImage(m.image)}
                  className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-blue-950/20 bg-[#0d1f3c] group cursor-pointer"
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center space-x-1.5 shadow-lg">
                      <ZoomIn className="w-4 h-4 text-amber-400" />
                      <span>Kattalashtirib ko'rish</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Back button */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 text-center max-w-md mx-auto shadow-sm">
            <Link
              to="/"
              className="text-brand-blue font-bold text-xs sm:text-sm hover:underline inline-flex items-center space-x-1.5 btn-hover"
            >
              <span>← Bosh sahifaga qaytish</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox / Full-screen Zoom Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn cursor-pointer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition active:scale-90"
            aria-label="Yopish"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Presidency Poster"
            className="max-w-full max-h-[92vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
