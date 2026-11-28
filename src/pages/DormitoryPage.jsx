import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Utensils, Clock, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function DormitoryPage() {
  const schedule = [
    { time: "07:00", activity: "Uyqudan turish, badantarbiya va shaxsiy gigiyena" },
    { time: "07:45 – 08:15", activity: "Nonushta (Maktab oshxonasida)" },
    { time: "08:30 – 14:00", activity: "Asosiy o'quv dars mashg'ulotlari" },
    { time: "14:15 – 15:00", activity: "Tushlik va dam olish" },
    { time: "15:30 – 17:30", activity: "Ixtisoslashtirilgan to'garaklar, IT laboratoriyalari, SAT klubi" },
    { time: "17:30 – 18:30", activity: "Sport to'garaklari va ochiq havoda sayr" },
    { time: "18:45 – 19:30", activity: "Kechki ovqat" },
    { time: "19:45 – 21:30", activity: "Mustaqil dars tayyorlash (Self-study) va kutubxona" },
    { time: "22:00", activity: "Uyquga tayyorgarlik va orom olish" }
  ];

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden relative">
      <FloatingMathBg />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span>Maktab hayoti</span>
            <span>/</span>
            <span className="text-brand-blue font-bold">Yotoqxona</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-12">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Sizning Ikkinchi Uyingiz
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktab-Internat Yotoqxonasi va Qulayliklar
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali yotoqxonasida o'quvchilarning xavfsiz, qulay va mazmunli yashashi uchun barcha zamonaviy shart-sharoitlar yaratilgan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ScrollReveal animation="fade-up" delay={100} className="h-full">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 h-full hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Shinam Xonalar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                3-4 kishilik keng, yorug' xonalar, shaxsiy dars tayyorlash stollari, kiyim javonlari va doimiy isitish/sovutish tizimi.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200} className="h-full">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 h-full hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-sm">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">5 Mahal Ovqat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To'liq bepul, o'quvchi yoshlar ratsioni va tibbiy me'yorlar asosida tayyorlanadigan vitaminlarga boy issiq taomlar.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="h-full">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 h-full hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">24/7 Xavfsizlik & Tibbiyot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Videokuzatuv tizimi, tajribali tarbiyachilar nazorati, malakali shifokor va hamshiralar xizmati tun-u kun faoliyat ko'rsatadi.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Daily Schedule */}
        <ScrollReveal animation="fade-up" duration={700} delay={200}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-brand-blue" />
              <h3 className="text-2xl font-bold text-brand-navy">
                Yotoqxona O'quvchilarining Kun Tartibi
              </h3>
            </div>

            <div className="space-y-3">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100/80 gap-2 hover:bg-blue-50/50 transition"
                >
                  <span className="font-bold text-xs text-brand-blue sm:w-36 flex-shrink-0">
                    {item.time}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 flex-grow">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
