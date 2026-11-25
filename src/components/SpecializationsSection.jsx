import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Palette, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import FloatingMathBg from './FloatingMathBg';

export default function SpecializationsSection() {
  const { t } = useLanguage();

  const specs = [
    {
      title: "Web dasturlash",
      category: "Frontend & Backend",
      desc: "Zamonaviy veb-saytlar va murakkab axborot tizimlarini ishlab chiqish. HTML5, CSS3, JavaScript, React.js, Node.js va Python dasturlash texnologiyalari.",
      image: "/assets/web.png",
      link: "/web",
      color: "text-blue-600"
    },
    {
      title: "Mobil dasturlash",
      category: "iOS & Android",
      desc: "Smartfonlar uchun qulay va tezkor mobil ilovalar yaratish. Google Flutter, Dart va Kotlin asosida zamonaviy arxitekturadagi loyihalar.",
      image: "/assets/androidios.png",
      link: "/mobil",
      color: "text-purple-600"
    },
    {
      title: "Kompyuter grafikasi",
      category: "UI/UX & 3D Design",
      desc: "Raqamli dizayn, foydalanuvchi tajribasi (UI/UX), 3D vizualizatsiya va animatsiyalar. Figma, Adobe Photoshop va Blender muhitida ishlash.",
      image: "/assets/uxui.png",
      link: "/grafika",
      color: "text-pink-600"
    },
    {
      title: "Kompyuter tarmoqlari",
      category: "Cisco & Kiberxavfsizlik",
      desc: "Lokal va global tarmoqlarni loyihalash, marshrutizatsiya, Cisco uskunalarini boshqarish hamda axborot xavfsizligi asoslari.",
      image: "/assets/cyber.png",
      link: "/tarmoq",
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-[#EEF3FF] font-poppins overflow-hidden relative">
      <FloatingMathBg opacity={0.12} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="text-center mb-12 sm:mb-14">
            <span className="text-xs font-bold text-brand-blue bg-blue-100/70 px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              Ta'lim Yo'nalishlari
            </span>
            <h2 className="text-[#0047AB] font-extrabold text-3xl sm:text-4xl tracking-wide uppercase">
              Yo‘nalishlar
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {specs.map((item, idx) => (
            <ScrollReveal
              key={idx}
              animation={idx % 2 === 0 ? "fade-right" : "fade-left"}
              delay={idx * 120}
              className="h-full"
            >
              <div
                className="relative flex flex-col sm:flex-row items-stretch rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl bg-white group transition-all duration-500 border border-slate-100 h-full hover:-translate-y-1.5"
              >
                {/* Card Image */}
                <div className="sm:w-1/2 relative overflow-hidden bg-slate-900 min-h-[200px] sm:min-h-[220px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/school_building.jpg";
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#00265B] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0047AB] transition">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-auto">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 bg-[#0047AB] hover:bg-blue-900 active:scale-95 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition duration-300 shadow cursor-pointer select-none"
                    >
                      <span>Batafsil</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition duration-300" />
                    </Link>
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
