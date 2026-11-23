import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Sparkles, Cpu, Award, CheckCircle2, FolderGit2, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function StudentOrganizationsPage() {
  const defaultClubs = [
    {
      id: "club-1",
      title: "SAT MAXING CLUB",
      founder: "Chet tillari kafedrasi",
      desc: "Xalqaro oliygohlar talabasi bo'lishni xohlovchi o'quvchilar uchun SAT Math va Reading & Writing darslari, Mock testlar va grant arizalarini to'ldirish bo'yicha mentorlik.",
      features: [
        "SAT Math masalalari yechish metodlari",
        "SAT Reading & Writing lug'at boyligi",
        "Haqiqiy raqamli Digital SAT sinovlari",
        "Ivy League va xalqaro universitetlar konsultatsiyasi"
      ],
      badge: "Eng Faol Klub"
    },
    {
      id: "club-2",
      title: "Raqamli Avlod Qizlari Startap Klubi",
      founder: "Innovatsiyalar bo'limi",
      desc: "Qizlarning IT va tadbirkorlik tashabbuslarini qo'llab-quvvatlash, prototiplar ishlab chiqish, mentorlik va investitsiya taqdimotlariga tayyorgarlik.",
      features: [
        "Yashil iqtisodiyot va ekologiya loyihalari",
        "Ta'lim (EdTech) mobil ilovalari",
        "Sun'iy intellekt va avtomatlashtirish",
        "Pitching va loyihani himoya qilish san'ati"
      ],
      badge: "Startap & Innovatsiya"
    },
    {
      id: "club-3",
      title: "Robototexnika & AI Muhandislar Klubi",
      founder: "IT Kafedrasi",
      desc: "Robotlarni loyihalash, dasturlash va sensorlar bilan ishlash. O'quvchilar WRO (World Robot Olympiad) saralashlarida ishtirok etadilar.",
      features: [
        "Arduino va ESP32 mikrokontrollerlari",
        "Python va Computer Vision loyihalari",
        "3D modellash va mexanika",
        "Xalqaro Robofest musobaqalari"
      ],
      badge: "Xalqaro Tanlovlar"
    },
    {
      id: "club-4",
      title: "O'quvchilar Kengashi (Student Council)",
      founder: "Yoshlar ittifoqi",
      desc: "Maktab o'quvchilarining o'zini o'zi boshqarish organi. Madaniy-ma'rifiy tadbirlar, chellenjlar va jamoatchilik loyihalarini tashkil etadi.",
      features: [
        "Maktab tadbirlarini rejalashtirish",
        "O'quvchilar taklif va g'oyalarini ko'rib chiqish",
        "Xayriya va ijtimoiy aksiyalar",
        "Fan to'garaklari orasidagi musobaqalar"
      ],
      badge: "Yetakchilik"
    }
  ];

  const [clubs, setClubs] = useState(defaultClubs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clubs')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setClubs(data.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

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
            <span className="text-brand-blue font-bold">O'quvchilar tashkilotlari</span>
          </div>
        </ScrollReveal>

        {/* Hero Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-blue rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <span className="bg-brand-sky/20 text-brand-sky border border-brand-sky/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4">
                Yoshlar Faolligi
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
                O'quvchilar Tashkilotlari va Tashabbuslari
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                Muhammad al-Xorazmiy maktabi Farg'ona filialida o'quvchilarning yetakchilik qobiliyatlarini rivojlantirish, startap loyihalarini yaratish va xalqaro tanlovlarga tayyorgarlik markazlari.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Clubs Grid */}
        <div className="space-y-8 mb-12">
          {clubs.map((club, idx) => (
            <ScrollReveal
              key={club.id || idx}
              animation="fade-up"
              delay={idx * 80}
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-brand-blue block mb-1">
                      {club.founder || "Maktab tashabbusi"}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {club.title}
                    </h2>
                  </div>
                  {club.badge && (
                    <span className="self-start sm:self-auto bg-blue-50 text-brand-blue border border-blue-200 px-3 py-1 rounded-full text-xs font-bold">
                      {club.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {club.desc}
                </p>

                {club.telegram && (
                  <div className="mb-6">
                    <a
                      href={club.telegram.startsWith('http') ? club.telegram : `https://t.me/${club.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-bold transition shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Telegram Kanalga A'zo Bo'lish / Kuzatish</span>
                    </a>
                  </div>
                )}

                {club.features && Array.isArray(club.features) && club.features.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Asosiy faoliyat yo'nalishlari:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {club.features.map((item, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
            <Link to="/" className="text-brand-blue font-bold text-xs hover:underline inline-flex items-center space-x-1.5 btn-hover">
              <span>← Bosh sahifaga qaytish</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}