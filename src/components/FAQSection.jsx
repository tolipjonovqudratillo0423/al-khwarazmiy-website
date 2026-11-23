import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Maktabga qabul qaysi sinflardan amalga oshiriladi?",
      a: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filialiga o'quvchilar 5-sinfdan boshlab davlat imtihonlari natijalari asosida qabul qilinadi. Kirish imtihonlari Ixtisoslashtirilgan ta'lim muassasalari agentligi tomonidan o'tkaziladi."
    },
    {
      q: "O'quv jarayonida qaysi fanlar chuqurlashtirilgan tarzda o'qitiladi?",
      a: "Maktabimizda aniq va tabiiy fanlar — matematika, fizika, informatika (IT va dasturlash) hamda ingliz tili fanlari chuqurlashtirilgan o'quv dasturlari asosida o'rgatiladi."
    },
    {
      q: "Uzoq tumanlardan kelgan o'quvchilar uchun yotoqxona bormi?",
      a: "Ha, maktab hududida zamonaviy sharoitlarga ega, 3 mahal issiq ovqat bilan ta'minlangan, qulay va xavfsiz o'quvchilar turar joyi (yotoqxona) faoliyat yuritadi."
    },
    {
      q: "Qo'shimcha to'garaklar va laboratoriyalar mavjudmi?",
      a: "Albatta. Maktabimizda Robototexnika, Sun'iy Intellekt, Digital SAT Maxing Club, Sport to'garaklari, Munozara klublari va xalqaro olimpiadalarga tayyorgarlik laboratoriyalari bepul tashkil etilgan."
    },
    {
      q: "Ta'lim tili va o'qitish metodikasi qanday?",
      a: "Ta'lim o'zbek tilida olib boriladi, shuningdek, Cambridge standartlari bo'yicha xorijiy adabiyotlar va zamonaviy interaktiv raqamli vositalardan keng foydalaniladi."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold text-brand-blue bg-blue-100/70 px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              Ko'p so'raladigan savollar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Savollaringiz bormi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Qabul, o'quv jarayoni va yashash sharoitlari haqida tez-tez beriladigan savollarga javoblar
            </p>
          </div>
        </ScrollReveal>

        {/* Two Columns (1 in 1 with al-khwarizmischool.uz Xh0) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic School Building Photo */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[360px] sm:h-[480px] bg-slate-900 border border-slate-200 group">
              <img
                src="/assets/school_building.jpg"
                alt="Muhammad al-Xorazmiy ixtisoslashtirilgan maktabi Farg'ona filiali binosi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/school_building.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00265B]/90 via-transparent to-transparent flex items-end p-6 sm:p-8 text-white">
                <div>
                  <span className="text-xs font-bold text-brand-sky bg-blue-900/60 px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                    Farg'ona Filiali
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">Ixtisoslashtirilgan Ta'lim</h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1">
                    Kelajak avlod uchun zamonaviy ilm-fan maskani
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Accordion Questions */}
          <ScrollReveal animation="fade-left" duration={700} delay={150}>
            <div className="space-y-3.5 sm:space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-brand-blue/30"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-brand-blue transition cursor-pointer select-none active:bg-slate-50"
                    >
                      <span className="flex items-center space-x-3">
                        <span className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand-blue' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
