import React, { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function PartnersSection() {
  const { t } = useLanguage();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch('/api/partners')
      .then((response) => {
        if (!response.ok) throw new Error(`Partners request failed: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (data.success) setPartners(data.data);
      })
      .catch((error) => console.error('Error fetching partners:', error));
  }, []);

  const midpoint = Math.ceil(partners.length / 2);
  const rows = [partners.slice(0, midpoint), partners.slice(midpoint)];

  const renderPartner = (partner, rowIndex, copyIndex) => (
    <div
      key={`${rowIndex}-${copyIndex}-${partner.id}`}
      className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-sm hover:shadow-xl border border-blue-100 hover:border-brand-blue/40 transition-all duration-300 flex items-center gap-4 min-w-[280px] sm:min-w-[320px] max-w-[340px] group hover:-translate-y-1"
    >
      <div className="relative w-28 h-20 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-slate-100 p-1.5">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logotipi`}
            className="absolute inset-0 m-auto max-w-[104px] max-h-[64px] w-auto h-auto object-contain"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <Building2 className="w-7 h-7 text-slate-300" aria-hidden="true" />
        )}
      </div>
      <div className="space-y-0.5 min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0047AB] transition block">
          {partner.tag}
        </span>
        <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#00265B] transition leading-snug line-clamp-2">
          {partner.name}
        </h4>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f5ff] via-[#e8f0fe] to-[#f0f5ff] border-y border-blue-100 font-poppins overflow-hidden relative">
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

      {partners.length > 0 && (
        <div className="relative w-full overflow-hidden space-y-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#f0f5ff] via-[#f0f5ff]/90 to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#f0f5ff] via-[#f0f5ff]/90 to-transparent z-20"></div>

          {rows.map((row, rowIndex) => (
            row.length > 0 && (
              <div
                key={rowIndex}
                className={`flex gap-5 ${rowIndex === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}
              >
                {[...row, ...row, ...row].map((partner, copyIndex) =>
                  renderPartner(partner, rowIndex, copyIndex)
                )}
              </div>
            )
          ))}
        </div>
      )}
    </section>
  );
}
