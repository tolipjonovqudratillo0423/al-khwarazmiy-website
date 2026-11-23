import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Calendar, FileText, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function AdmissionsPage() {
  const steps = [
    {
      num: "01",
      title: "Hujjatlarni Onlayn Topshirish",
      desc: "Ixtisoslashtirilgan ta'lim muassasalari agentligining rasmiy arizalar portali (ariza.piima.uz) orqali o'quvchi ma'lumotlari yuklanadi."
    },
    {
      num: "02",
      title: "Kirish Imtihonlari (Test)",
      desc: "Matematika, mantiqiy fikrlash (IQ) va ingliz tili fanlaridan Bilim va malakalarni baholash agentligi nazorati ostida test sinovi."
    },
    {
      num: "03",
      title: "Natijalar va Mandat",
      desc: "Ballar reytingi asosida eng yuqori natija ko'rsatgan nomzodlar Muhammad al-Xorazmiy maktabi Farg'ona filiali 7-sinfiga qabul qilinadi."
    },
    {
      num: "04",
      title: "Maktab O'quvchisiga Aylanish",
      desc: "Hujjatlarning asl nusxalari topshiriladi, bepul yotoqxona va maxsus o'quv qurollari bilan ta'minlanadi."
    }
  ];

  const docs = [
    "Tug'ilganlik haqida guvohnoma nusxasi (elektron nusxa);",
    "3x4 o'lchamdagi 2 dona sifatli fotosurat;",
    "6-sinfni a'lo va yaxshi baholar bilan yakunlagani haqida ma'lumotnoma / tabel;",
    "Ota-onasining pasport (ID-karta) nusxalari va aloqa telefonlari."
  ];

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden relative">
      <FloatingMathBg />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span className="text-brand-blue font-bold">Qabul tartibi</span>
          </div>
        </ScrollReveal>

        {/* Hero banner */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-gradient-to-r from-brand-navy via-brand-blue to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12">
            <div className="inline-block bg-brand-sky text-brand-navy px-3.5 py-1 rounded-full text-xs font-black uppercase mb-4 shadow-sm">
              2026-2027 O'quv Yili Qabuli
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Qabul Tartibi va Sinov Bosqichlari
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filialiga 7-sinfga qabul qilish tartibi, imtihon fanlari va kvota ma'lumotlari.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://ariza.piima.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-sky hover:bg-sky-400 active:scale-95 text-brand-navy font-bold px-7 py-3.5 rounded-2xl text-xs transition shadow-lg flex items-center space-x-2 select-none"
              >
                <span>Agentlik Ariza Portaliga O'tish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Steps */}
        <div className="mb-14">
          <ScrollReveal animation="fade-down" duration={600}>
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">
              Qabul Jarayoni Bosqichlari
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <ScrollReveal
                key={i}
                animation="fade-up"
                delay={i * 100}
                className="h-full"
              >
                <div
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 relative group h-full flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    <div className="text-4xl font-black text-blue-100 group-hover:text-brand-sky transition">
                      {st.num}
                    </div>
                    <h3 className="text-base font-bold text-brand-navy mt-2">
                      {st.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Exam Subjects & Required Docs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Exam Subjects */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5 h-full">
              <h3 className="text-xl font-bold text-brand-navy flex items-center space-x-2">
                <Award className="w-5 h-5 text-brand-blue" />
                <span>Imtihon Fanlari va Baholash</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Matematika</div>
                    <div className="text-slate-500">Mantiqiy masalalar, hisoblash, tenglamalar</div>
                  </div>
                  <span className="font-bold text-brand-blue bg-blue-100 px-3 py-1.5 rounded-xl">30 ta test</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Ingliz tili</div>
                    <div className="text-slate-500">Grammatika, so'z boyligi va matnni tushunish</div>
                  </div>
                  <span className="font-bold text-brand-blue bg-blue-100 px-3 py-1.5 rounded-xl">15 ta test</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">IQ va Tanqidiy Fikrlash</div>
                    <div className="text-slate-500">Fazoviy tasavvur va intellektual mantiq</div>
                  </div>
                  <span className="font-bold text-brand-blue bg-blue-100 px-3 py-1.5 rounded-xl">15 ta savol</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Required Documents */}
          <ScrollReveal animation="fade-left" duration={700} delay={100}>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5 h-full">
              <h3 className="text-xl font-bold text-brand-navy flex items-center space-x-2">
                <FileText className="w-5 h-5 text-brand-blue" />
                <span>Talab Qilinadigan Hujjatlar</span>
              </h3>

              <div className="space-y-3">
                {docs.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 italic">
                * Hujjatlar faqat Agentlikning rasmiy portali orqali elektron qabul qilinadi.
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact CTA */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="bg-brand-light border border-blue-200 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Qabul bo'yicha savollaringiz bormi?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
              Maktabimiz qabul komissiyasi bilan bog'laning yoki to'g'ridan-to'g'ri xabar qoldiring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+998732440120" className="bg-brand-blue text-white px-6 py-3 rounded-2xl text-xs font-bold transition hover:bg-blue-800 active:scale-95 shadow">
                Telefon: +998 (73) 244-01-20
              </a>
              <Link to="/kontaktlar" className="bg-white text-brand-navy border border-slate-200 px-6 py-3 rounded-2xl text-xs font-bold transition hover:bg-slate-50 active:scale-95 shadow-sm">
                Qayta aloqa formasi
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
