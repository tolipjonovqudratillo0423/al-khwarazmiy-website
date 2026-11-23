import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Layers, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function MobileDirectionPage() {
  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-blue">Bosh sahifa</Link>
          <span>/</span>
          <Link to="/fan-yonalishlari" className="hover:text-brand-blue">Yo'nalishlar</Link>
          <span>/</span>
          <span className="text-brand-blue font-bold">Mobil Dasturlash</span>
        </div>

        <ScrollReveal animation="fade-up">
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-800 rounded-2xl p-8 sm:p-12 text-white shadow-xl mb-12">
            <span className="bg-purple-300 text-indigo-950 px-3 py-1 rounded-full text-xs font-black uppercase inline-block mb-4">
              iOS & Android Development
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Mobil Dasturlash Yo'nalishi
            </h1>
            <p className="text-sm sm:text-base text-purple-100 leading-relaxed max-w-2xl">
              Google Flutter, Dart va Kotlin asosida smartfonlar uchun qulay, chiroyli va yuqori unumdorlikka ega mobil ilovalarni noldan yaratish va do'konlarga chiqarish.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4 h-full card-hover">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Flutter & Cross-Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bitta kod bazasi bilan ham Android, ham iOS tizimlarida birdek ishlovchi zamonaviy dasturlar yaratish ko'nikmalari.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Dart tilining sintaksisi va OOP asoslari</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Custom Widgetlar va murakkab UI dizayn</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>State management: Provider va BLoC</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4 h-full card-hover">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Firebase & Mobil Arxitektura
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time ma'lumotlar bazasi, push-xabarnomalar, avtorizatsiya va mobil xavfsizlik protokollari bilan ishlash.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Firebase Authentication & Firestore</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Lokal kesh (Hive, SQLite)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Google Play Storega ilova joylashtirish</span>
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
