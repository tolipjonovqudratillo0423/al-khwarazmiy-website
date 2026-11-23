import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code, Layers, Server, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function WebDirectionPage() {
  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <Link to="/fan-yonalishlari" className="hover:text-brand-blue transition">Yo'nalishlar</Link>
            <span>/</span>
            <span className="text-brand-blue font-bold">Web Dasturlash</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-gradient-to-r from-brand-navy via-brand-blue to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-brand-sky text-brand-navy px-3.5 py-1 rounded-full text-xs font-black uppercase shadow-sm">
                Full-Stack Web Development
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Web Dasturlash Yo'nalishi
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              HTML5, CSS3, JavaScript, React.js va backend arxitekturalari yordamida zamonaviy, tezkor va xavfsiz veb-saytlar hamda murakkab axborot tizimlarini yaratish.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal animation="fade-right" duration={700} delay={100} className="h-full">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center shadow-sm">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">
                Frontend Dasturlash
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O'quvchilar zamonaviy veb-interfeyslar, adaptiv dizayn, Tailwind CSS, JavaScript (ES6+), React.js va Vite vositalaridan foydalanib, interaktiv foydalanuvchi tajribasini yaratadilar.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Semantik HTML5 & Responsive CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>React komponentlar va State boshqaruvi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>SPA (Single Page Application) arxitekturasi</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" duration={700} delay={200} className="h-full">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-brand-sky flex items-center justify-center shadow-sm">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">
                Backend & Ma'lumotlar Bazasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Server qismi, ma'lumotlar almashinuvi, xavfsizlik va RESTful API ishlab chiqish. Node.js, Express hamda PostgreSQL/MongoDB bilan ishlash malakasi.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  <span>Node.js & Express REST API</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  <span>JWT va autentifikatsiya xavfsizligi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                  <span>SQL va relyatsion ma'lumotlar modellari</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" duration={600} delay={150}>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              Barcha Yo'nalishlarni Ko'rish
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Maktabimizdagi boshqa IT va aniq fan yo'nalishlari bilan tanishing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/mobil" className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-brand-blue hover:text-white text-xs font-bold transition active:scale-95 shadow-sm">
                Mobil Dasturlash →
              </Link>
              <Link to="/grafika" className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-brand-blue hover:text-white text-xs font-bold transition active:scale-95 shadow-sm">
                Kompyuter Grafikasi →
              </Link>
              <Link to="/tarmoq" className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-brand-blue hover:text-white text-xs font-bold transition active:scale-95 shadow-sm">
                Kompyuter Tarmoqlari →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
