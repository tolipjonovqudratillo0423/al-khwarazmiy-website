import React from 'react';
import { Building2, Award, Landmark, Cpu, GraduationCap, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function PartnersSection() {
  const { t } = useLanguage();

  const partnersRow1 = [
    { name: "Maktabgacha va maktab ta'limi vazirligi", tag: "Vazirlik", icon: Landmark, color: "text-blue-600 bg-blue-50" },
    { name: "Ixtisoslashtirilgan ta'lim muassasalari agentligi", tag: "Agentlik", icon: Award, color: "text-indigo-600 bg-indigo-50" },
    { name: "Raqamli texnologiyalar vazirligi", tag: "Vazirlik", icon: Cpu, color: "text-sky-600 bg-sky-50" },
    { name: "IT Park Uzbekistan", tag: "IT Ekosistema", icon: Building2, color: "text-emerald-600 bg-emerald-50" },
    { name: "TATU Farg'ona filiali", tag: "Oliy ta'lim", icon: GraduationCap, color: "text-purple-600 bg-purple-50" }
  ];

  const partnersRow2 = [
    { name: "Farg'ona Politexnika Instituti", tag: "Oliy ta'lim", icon: GraduationCap, color: "text-blue-600 bg-blue-50" },
    { name: "Milliy Gvardiya Farg'ona viloyati", tag: "Hamkorlik", icon: ShieldCheck, color: "text-teal-600 bg-teal-50" },
    { name: "Yoshlar Ittifoqi", tag: "Jamoat tashkiloti", icon: HeartHandshake, color: "text-rose-600 bg-rose-50" },
    { name: "Muhammad al-Xorazmiy Universiteti", tag: "Oliy Ta'lim", icon: Landmark, color: "text-amber-600 bg-amber-50" },
    { name: "Farg'ona Viloyat Hokimligi", tag: "Davlat Boshqaruvi", icon: Compass, color: "text-indigo-600 bg-indigo-50" }
  ];

  // Duplicate for seamless 100% infinite looping
  const doubleRow1 = [...partnersRow1, ...partnersRow1, ...partnersRow1];
  const doubleRow2 = [...partnersRow2, ...partnersRow2, ...partnersRow2];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f5ff] via-[#e8f0fe] to-[#f0f5ff] border-y border-blue-100 font-poppins overflow-hidden relative">
      {/* Background glow dots */}
      <div className="absolute left-1/4 top-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="space-y-2">
            <span className="inline-block bg-white text-[#0047AB] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm border border-blue-200/60">
              {t.sections.partnersTitle}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00265B] tracking-tight">
              Davlat va Xalqaro Hamkor Tashkilotlar
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal">
              Muhammad al-Xorazmiy maktabi Farg'ona filialining yetakchi vazirliklar, oliy o'quv yurtlari va IT tashkilotlar bilan strategik integratsiyasi.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Wrapper with edge fade masks */}
      <div className="relative w-full overflow-hidden space-y-5">
        {/* Left & Right gradient masks for smooth fade-in and fade-out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#f0f5ff] via-[#f0f5ff]/90 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#f0f5ff] via-[#f0f5ff]/90 to-transparent z-20"></div>

        {/* Lenta Track 1 (Left to Right) */}
        <div className="flex animate-marquee gap-5">
          {doubleRow1.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={`r1-${idx}`}
                className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm hover:shadow-xl border border-blue-100 hover:border-brand-blue/40 transition-all duration-300 flex items-center space-x-4 min-w-[280px] sm:min-w-[320px] max-w-[340px] group cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner transition-transform group-hover:scale-110 ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0047AB] transition block">
                    {p.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#00265B] transition leading-snug truncate">
                    {p.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lenta Track 2 (Right to Left - Reverse) */}
        <div className="flex animate-marquee-reverse gap-5">
          {doubleRow2.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={`r2-${idx}`}
                className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm hover:shadow-xl border border-blue-100 hover:border-brand-blue/40 transition-all duration-300 flex items-center space-x-4 min-w-[280px] sm:min-w-[320px] max-w-[340px] group cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner transition-transform group-hover:scale-110 ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0047AB] transition block">
                    {p.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#00265B] transition leading-snug truncate">
                    {p.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}