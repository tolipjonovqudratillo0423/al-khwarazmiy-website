import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Cpu, Trophy, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import FloatingMathBg from './FloatingMathBg';

export default function AboutSection() {
  const { t } = useLanguage();
  const [siteInfo, setSiteInfo] = useState({
    aboutTitle: "Maktab haqida",
    aboutText1: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali — zamonaviy texnologiyalar va chuqurlashtirilgan ta'lim uyg'unligiga asoslangan innovatsion davlat ta'lim maskani.",
    aboutText2: "Maktabda matematika, fizika, informatika hamda ingliz tili fanlari chuqurlashtirilgan holda oʻqitiladi. Shuningdek, o'quvchilar xalqaro SAT, WRO robototexnika va fan olimpiadalariga professional ustozlar tomonidan tayyorlanadi.",
    aboutImage: ""
  });

  const [stats, setStats] = useState({
    students: "540+",
    teachers: "52+",
    laboratories: "14+",
    olympiadWinners: "48+"
  });

  useEffect(() => {
    fetch('/api/site-info')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setSiteInfo(prev => ({ ...prev, ...data.data }));
        }
      })
      .catch(() => {});

    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setStats(data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="about" className="w-full bg-white py-20 px-4 sm:px-6 md:px-12 font-poppins overflow-hidden relative">
      <FloatingMathBg opacity={0.08} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_30%_30%] gap-8 md:gap-10 items-center relative z-10">
        {/* Left Column: Heading + Description + Button */}
        <ScrollReveal animation="fade-right" duration={700}>
          <div className="space-y-6">
            <div className="inline-block bg-blue-50 text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Biz haqimizda
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 tracking-tight">
              {siteInfo.aboutTitle || "Maktab haqida"}
            </h2>
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
              <p>
                {siteInfo.aboutText1}
              </p>
              {siteInfo.aboutText2 && (
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  {siteInfo.aboutText2}
                </p>
              )}
            </div>

            <Link to="/maqsad-vazifalar" className="inline-block pt-2">
              <button className="bg-[#0047AB] hover:bg-blue-900 active:scale-95 text-white font-semibold px-7 sm:px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-200 flex items-center gap-2.5 transition-all duration-300 text-sm cursor-pointer group select-none">
                <span>Batafsil ma'lumot</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition duration-300" />
              </button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Center Column: Photo or Clean Placeholder Frame */}
        <ScrollReveal animation="zoom-in" duration={800} delay={150}>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 bg-slate-50 min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
            {siteInfo.aboutImage ? (
              <img
                src={siteInfo.aboutImage}
                alt="Muhammad al-Xorazmiy Farg'ona filiali"
                className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400 space-y-3">
                <div className="w-24 h-24 rounded-3xl bg-white shadow-md border border-slate-200 flex items-center justify-center text-brand-blue/60 group-hover:scale-110 transition duration-300">
                  <ImageIcon className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-600">Maktab Fotosurati O'rni</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-[200px]">
                    Admin paneldan fotosurat yuklanganda bu yerda ko'rinadi
                  </p>
                </div>
              </div>
            )}

            {/* Subtle bottom tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white flex items-center justify-between">
              <span className="text-xs font-bold text-[#00265B]">Iqtidorli Yoshlar Maskani</span>
              <span className="text-[11px] font-bold text-[#0047AB] bg-blue-50 px-2.5 py-0.5 rounded-full">Farg'ona</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: 4 Stat Cards in 2x2 Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full">
          {/* Card 1: Students */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-white text-[#004AAD] rounded-3xl p-5 sm:p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-[#0047AB]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00265B]">{stats.students || '540+'}</h3>
              <p className="text-xs sm:text-sm font-medium mt-1 text-gray-600">O'quvchilar soni</p>
            </div>
          </ScrollReveal>

          {/* Card 2: Teachers */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 text-center">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-[#3BAAFF]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{stats.teachers || '52+'}</h3>
              <p className="text-xs sm:text-sm font-medium mt-1 text-blue-100">Pedagoglar</p>
            </div>
          </ScrollReveal>

          {/* Card 3: Laboratories */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="bg-white text-[#004AAD] rounded-3xl p-5 sm:p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center">
              <Cpu className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-[#0047AB]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00265B]">{stats.laboratories || '14+'}</h3>
              <p className="text-xs sm:text-sm font-medium mt-1 text-gray-600">Laboratoriyalar</p>
            </div>
          </ScrollReveal>

          {/* Card 4: Olympiad Winners */}
          <ScrollReveal animation="fade-up" delay={500}>
            <div className="bg-white text-[#004AAD] rounded-3xl p-5 sm:p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 text-center">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-[#0047AB]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00265B]">{stats.olympiadWinners || '48+'}</h3>
              <p className="text-xs sm:text-sm font-medium mt-1 text-gray-600">Olimpiada sovrindorlari</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
