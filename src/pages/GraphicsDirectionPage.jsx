import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Box, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function GraphicsDirectionPage() {
  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-blue">Bosh sahifa</Link>
          <span>/</span>
          <Link to="/fan-yonalishlari" className="hover:text-brand-blue">Yo'nalishlar</Link>
          <span>/</span>
          <span className="text-brand-blue font-bold">Kompyuter Grafikasi</span>
        </div>

        <ScrollReveal animation="fade-up">
          <div className="bg-gradient-to-r from-pink-900 via-rose-700 to-red-800 rounded-2xl p-8 sm:p-12 text-white shadow-xl mb-12">
            <span className="bg-pink-300 text-pink-950 px-3 py-1 rounded-full text-xs font-black uppercase inline-block mb-4">
              UI/UX & 3D Visualization
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Kompyuter Grafikasi Yo'nalishi
            </h1>
            <p className="text-sm sm:text-base text-pink-100 leading-relaxed max-w-2xl">
              Raqamli dizayn, foydalanuvchi interfeyslari (UI/UX), brending, 3D modellashtirish va animatsiya bo'yicha ijodiy hamda texnik ta'lim.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4 h-full card-hover">
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                UI/UX Dizayn & Figma
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Foydalanuvchilarga qulay va estetik raqamli mahsulotlar yaratish. Veb-saytlar va mobil ilovalar prototiplarini Figma dasturida loyihalash.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>Wireframing va Prototyping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>Ranglar nazariyasi va Tipografika</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  <span>Interaktiv animatsiyalar</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4 h-full card-hover">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3D Modellashtirish & Blender
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Blender muhitida 3D obyektlar, personajlar yaratish, teksturalash, yoritish va renderlash jarayonlari.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>Polygonli modellashtirish</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>Materiallar va Shading</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                  <span>O'yinlar va media uchun 3D modellar</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={250}>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
            <Link to="/fan-yonalishlari" className="text-brand-blue font-bold text-xs hover:underline inline-flex items-center space-x-1.5 btn-hover">
              <span>← Barcha fan yo'nalishlariga qaytish</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
