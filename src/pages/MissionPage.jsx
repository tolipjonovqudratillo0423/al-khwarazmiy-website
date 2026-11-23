import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, Shield, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function MissionPage() {
  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden relative">
      <FloatingMathBg />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span>Biz haqimizda</span>
            <span>/</span>
            <span className="text-brand-blue font-bold">Maqsad va vazifalar</span>
          </div>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-10">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Strategik Maqsad
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktab Missiyasi va Asosiy Vazifalari
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bizning bosh maqsadimiz — yangi O'zbekistonning intellektual salohiyatini yuksaltirish, har bir o'quvchining ichki iqtidorini aniqlab, ularni zamonaviy fan va axborot texnologiyalari sohasida raqobatbardosh liderlar qilib voyaga yetkazishdir.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal animation="fade-right" duration={700} delay={100} className="h-full">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center mb-5 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Maktabimiz Missiyasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O'quvchilarda ilmiy dunyoqarash, tanqidiy va mantiqiy fikrlash, axborot madaniyati hamda zamonaviy IT ko'nikmalarini shakllantirish. Matematika, fizika va chet tillarini xalqaro darajada o'rgatish orqali xalqaro reytinglardagi nufuzli oliy ta'lim muassasalariga yo'l ochish.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" duration={700} delay={200} className="h-full">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-sky flex items-center justify-center mb-5 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Maktabimiz Qarashlari (Vision)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Farg'ona vodiysida aniq fanlar va dasturlash bo'yicha namunaviy innovatsion ta'lim markazi bo'lish. O'quvchilarimiz nafaqat bilim oladi, balki startaplar, sun'iy intellekt dasturlari va muhandislik mahsulotlarini yaratish orqali jamiyat rivojiga hissa qo'shadilar.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Objectives List */}
        <ScrollReveal animation="fade-up" duration={700} delay={150}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">
              Maktab Oldiga Qo'yilgan Asosiy Vazifalar:
            </h3>

            <div className="space-y-4">
              {[
                "Umumiy o'rta ta'limning davlat ta'lim standartlari asosida matematika, fizika, informatika va ingliz tili fanlarini chuqurlashtirilgan holda o'qitish;",
                "O'quvchilarda dasturlash, algoritmik fikrlash, robototexnika va axborot xavfsizligi bo'yicha amaliy ko'nikmalarni shakllantirish;",
                "Iqtidorli o'quvchilarni xalqaro va respublika fan olimpiadalari, xalqaro musobaqalar hamda robototexnika chempionatlariga tizimli tayyorlash;",
                "O'quvchilarni xalqaro SAT, IELTS va milliy sertifikatlarga bosqichma-bosqich yo'naltirish;",
                "Ta'lim jarayoniga xorijiy tajribalarni tatbiq etish, zamonaviy laboratoriya jihozlari va raqamli resurslardan keng foydalanish;",
                "O'quvchilarda yuksak ma'naviy-axloqiy fazilatlar, vatanparvarlik va faol fuqarolik pozitsiyasini tarbiyalash."
              ].map((task, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {task}
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
