import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Award, Clock, Sparkles, Globe, Languages } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function CurriculumPage() {
  const grades = [
    {
      grade: "7-sinf",
      focus: "Fundamental poydevor va IT asoslari",
      subjects: [
        "Chuqurlashtirilgan Matematika (Algebra & Geometriya)",
        "Ingliz tili — Chuqurlashtirilgan ta'lim (A2-B1 Intensive)",
        "Mantiq va Algoritmlar asoslari",
        "Informatika va Kompyuter savodxonligi",
        "Fizika fundamental asoslari",
        "Speaking & Active Vocabulary klubi"
      ]
    },
    {
      grade: "8-sinf",
      focus: "Amaliy dasturlash va Fizika laboratoriyalari",
      subjects: [
        "Chuqurlashtirilgan Algebra va Planimetriya",
        "Ingliz tili — Chuqurlashtirilgan ta'lim (B1-B2 Academic & Tech English)",
        "Fizika laboratoriya va eksperimental mashg'ulotlar",
        "Python dasturlash tili va ma'lumotlar tuzilmasi",
        "Web texnologiyalari (HTML5, CSS3, JavaScript)",
        "English Debate & Public Speaking"
      ]
    },
    {
      grade: "9-sinf",
      focus: "Ixtisoslik tanlovi va Olimpiadalar",
      subjects: [
        "Oliy matematika elementlari va Kombinatorika",
        "Ingliz tili — Chuqurlashtirilgan ta'lim (B2-C1, SAT Reading & Writing asoslari)",
        "Nazariy va amaliy fizika olimpiadalari",
        "Web & Mobil dasturlash (React / Flutter)",
        "Robototexnika va IoT mikrosxemalari",
        "IELTS Foundation kursi"
      ]
    },
    {
      grade: "10-sinf",
      focus: "Loyiha ishlari va Startaplar",
      subjects: [
        "Full-Stack yoki Sun'iy intellekt (AI/ML) dasturlash",
        "Ingliz tili — Chuqurlashtirilgan ta'lim (IELTS 7.5-8.5+ intensiv dasturi)",
        "Digital SAT Math & SAT English Verbal",
        "Amaliy IT startap loyihalari",
        "Xalqaro WRO va fan olimpiadalari",
        "Mustaqil ilmiy tadqiqot ishi"
      ]
    },
    {
      grade: "11-sinf",
      focus: "Xalqaro sertifikatlar va Universitet qabuli",
      subjects: [
        "SAT Mock testlar, tahlil va 1500+ ball strategiyasi",
        "Akademik Ingliz tili — Xalqaro universitetlar esseyi va intervylar",
        "Xalqaro to'liq grantlarga (MIT, Harvard, KAIST) hujjat topshirish",
        "Portfolio va startap loyihasini himoya qilish",
        "Oliy ta'limga maqsadli integratsiya"
      ]
    }
  ];

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden relative">
      <FloatingMathBg />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span>Ta'lim</span>
            <span>/</span>
            <span className="text-brand-blue font-bold">O'quv dasturlari</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-12">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              O'quv Modeli
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktabning Ta'lim Modeli va O'quv Rejalari
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-6">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filialida ta'lim o'quvchilarning yosh xususiyatlari, qobiliyatlari va kelajakdagi kasbiy maqsadlariga moslashtirilgan 5 yillik (7–11-sinflar) uzluksiz tizim asosida qurilgan.
            </p>

            {/* Chet tili (Ingliz tili) chuqur o'rgatilishi haqida maxsus e'lon */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Barcha fanlar qatori Ingliz tili (Chet tili) eng chuqur darajada o'rgatiladi
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    7-sinfdan boshlab o'quvchilarga xalqaro standartlar (CEFR B2/C1, IELTS 7.5–8.5+, SAT English) asosida xorijiy tillar intensiv o'qitiladi hamda fan darslari ingliz tilidagi manbalar orqali olib boriladi.
                  </p>
                </div>
              </div>
              <span className="self-end sm:self-center bg-brand-navy text-amber-300 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-amber-400/30 shadow-sm whitespace-nowrap">
                Chuqurlashtirilgan Ingliz Tili
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {grades.map((item, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 100}
            >
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 mb-4 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-10 h-10 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      {idx + 7}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy">
                        {item.grade}
                      </h3>
                      <span className="text-xs font-semibold text-brand-blue">
                        {item.focus}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {item.subjects.map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
