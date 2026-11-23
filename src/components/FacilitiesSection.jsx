import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Laptop, Bot, BookOpen, Utensils, Dumbbell, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function FacilitiesSection() {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: Home,
      title: "Zamonaviy Yotoqxona",
      desc: "Viloyatning barcha tumanlaridan kelgan o'quvchilar uchun to'liq jihozlangan, shinam va xavfsiz turar joy binosi.",
      link: "/yotoqxona",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Laptop,
      title: "Yuqori Tezlikdagi IT Laboratoriyalar",
      desc: "Eng so'nggi rusumdagi kompyuterlar, 1 Gbps optik tolali internet va dasturlash uchun zarur dasturiy ta'minotlar.",
      link: "/fan-yonalishlari",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: Bot,
      title: "Robototexnika & AI Markazi",
      desc: "Arduino, Raspberry Pi, 3D printerlar, sensorlar va mikrosxemalar bilan jihozlangan ixtirochilik maydoni.",
      link: "/fan-yonalishlari",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: BookOpen,
      title: "Raqamli & An'anaviy Kutubxona",
      desc: "Minglab ilmiy, badiiy va IT bo'yicha kitoblar, xalqaro elektron kutubxona bazalariga to'liq bepul kirish.",
      link: "/fan-yonalishlari",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Utensils,
      title: "Sog'lom Ovqatlanish Oshxonasi",
      desc: "Dietologlar tomonidan tasdiqlangan menyu asosida kuniga 3 mahal issiq va to'yimli muvozanatli taomlar.",
      link: "/yotoqxona",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      icon: Dumbbell,
      title: "Yopiq va Ochiq Sport Majmuasi",
      desc: "Futbol, basketbol, voleybol, stol tennisi va shaxmat zallari sog'lom turmush tarzini ta'minlaydi.",
      link: "/fotogalereya",
      color: "text-sky-500",
      bg: "bg-sky-50"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {t.sections.facilitiesTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              O'quvchilar Uchun Yaratilgan Qulayliklar
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600">
              {t.sections.facilitiesSubtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div
                  className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group h-full hover:-translate-y-1.5"
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${fac.bg} ${fac.color} flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-sm`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition mb-2">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {fac.desc}
                    </p>
                  </div>

                  <Link
                    to={fac.link}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue hover:text-brand-navy transition group/btn active:scale-95"
                  >
                    <span>Batafsil tanishish</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition duration-300" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
