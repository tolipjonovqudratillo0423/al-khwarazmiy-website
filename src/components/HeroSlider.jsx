import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import FloatingMathBg from './FloatingMathBg';

export default function HeroSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultSlides = [
    {
      id: 'slide-1',
      title: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali",
      desc: "Maktabda matematika, fizika, informatika hamda ingliz tili fanlari chuqurlashtirilgan holatda oʻtiladi.",
      image: "/assets/school_building.jpg"
    },
    {
      id: 'slide-2',
      title: "Zamonaviy IT ta'limi va Kelajak dasturchilari maskani",
      desc: "Web va mobil dasturlash, sun'iy intellekt, robototexnika laboratoriyalari va xalqaro olimpiadalarga maqsadli tayyorgarlik.",
      image: "/assets/school_building.jpg"
    }
  ];

  const [slides, setSlides] = useState(defaultSlides);

  useEffect(() => {
    fetch('/api/slides')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setSlides(data.data);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide] || slides[0] || defaultSlides[0];

  return (
    <section className="font-poppins bg-[#f5f7fb] pt-44 md:pt-48 pb-14 md:pb-20 overflow-hidden relative">
      {/* Floating Math Formulas in Background */}
      <FloatingMathBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Top Text & Controls Row (exactly like al-khwarizmischool.uz) */}
        <div className="flex lg:flex-row flex-col justify-between gap-6 lg:gap-8 mb-8 sm:mb-10">
          {/* Left Title */}
          <ScrollReveal animation="fade-right" duration={700} className="lg:min-h-[130px] flex items-center flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-[#1c1e26] leading-snug md:leading-tight max-w-xl transition-all duration-500">
              {slide.title}
            </h1>
          </ScrollReveal>

          {/* Right Description & Buttons */}
          <ScrollReveal animation="fade-left" duration={700} delay={150} className="flex flex-col justify-between lg:min-h-[130px] lg:max-w-md text-gray-700 text-sm sm:text-base md:text-lg">
            <p className="leading-relaxed text-[#4b4b4b] text-sm sm:text-[15px] md:text-base">
              {slide.desc}
            </p>

            <div className="flex flex-row items-center gap-4 pt-4 sm:pt-5 justify-between">
              <button
                onClick={() => {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0047AB] hover:bg-blue-900 active:scale-95 text-white px-7 sm:px-8 py-3 font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-200 text-xs sm:text-sm cursor-pointer select-none"
              >
                Batafsil
              </button>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  onClick={prevSlide}
                  aria-label="Oldingi slayd"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-white hover:bg-slate-100 active:scale-90 text-[#1c1e26] shadow-sm border border-gray-200 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Keyingi slayd"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-white hover:bg-slate-100 active:scale-90 text-[#1c1e26] shadow-sm border border-gray-200 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Banner Image */}
        <ScrollReveal animation="zoom-in" duration={800} delay={200}>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[400px] md:h-[500px] lg:h-[540px] bg-slate-900 border border-slate-200 group">
            <img
              key={slide.image || slide.id}
              src={slide.image || "/assets/school_building.jpg"}
              alt={slide.title}
              className="w-full h-full object-cover object-center animate-fadeIn transition-transform duration-700 group-hover:scale-102"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/school_building.jpg";
              }}
            />

            {/* Slide Indicator Dots */}
            {slides.length > 1 && (
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentSlide === idx ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-white' : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
