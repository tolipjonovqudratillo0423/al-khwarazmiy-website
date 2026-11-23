import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-4 font-poppins">
      <ScrollReveal animation="zoom-in" duration={500} className="max-w-md w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-100 shadow-xl space-y-4">
          <div className="text-6xl font-black text-brand-blue">404</div>
          <h1 className="text-2xl font-bold text-brand-navy">Sahifa topilmadi</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="bg-brand-navy hover:bg-brand-blue text-white px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition shadow btn-hover"
            >
              <Home className="w-4 h-4" />
              <span>Bosh sahifaga qaytish</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
