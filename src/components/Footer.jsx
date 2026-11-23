import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, Award, Shield, Lock, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t-4 border-brand-blue font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          {/* Col 1: About School */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-sky bg-white p-0.5 flex-shrink-0">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Muhammad al-Xorazmiy maktabi" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=100&q=80";
                  }}
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">
                  Muhammad al-Xorazmiy
                </h3>
                <p className="text-xs text-brand-sky font-medium">
                  Farg'ona filiali
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi huzuridagi Ixtisoslashtirilgan ta'lim muassasalari agentligi tizimidagi zamonaviy ta'lim dargohi.
            </p>

            <div className="pt-2">
              <span className="inline-block bg-brand-blue/40 text-brand-sky px-2.5 py-1 rounded text-[11px] font-semibold border border-brand-blue">
                Matematika • Fizika • IT • Ingliz tili
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-sky"></span>
              <span>Tezkor havolalar</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>{t.menu.home}</span>
                </Link>
              </li>
              <li>
                <Link to="/rahbariyat" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>{t.menu.leadership}</span>
                </Link>
              </li>
              <li>
                <Link to="/fan-yonalishlari" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>{t.menu.specializations}</span>
                </Link>
              </li>
              <li>
                <Link to="/qabul-tartibi" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>{t.menu.admissions}</span>
                </Link>
              </li>
              <li>
                <Link to="/yangiliklar" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>Maktab Gazetasi va Yangiliklar</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Life & Projects */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-sky"></span>
              <span>Maktab hayoti & Loyihalar</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/yotoqxona" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>{t.menu.dormitory}</span>
                </Link>
              </li>
              <li>
                <Link to="/oquvchilar-tashkilotlari" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>SAT MAXING CLUB</span>
                </Link>
              </li>
              <li>
                <Link to="/oquvchilar-tashkilotlari" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>Raqamli avlod qizlari startaplari</span>
                </Link>
              </li>
              <li>
                <Link to="/prezidentlik" className="hover:text-brand-sky transition flex items-center space-x-1.5">
                  <span>›</span> <span>Prezidentlik</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Telegram */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-sky"></span>
              <span>Bog'lanish</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-sky flex-shrink-0 mt-0.5" />
                <span>Farg'ona shahar, Ilg'or MFY, Mustaqillik shoh ko'chasi 1e-uy</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a href="tel:+998732440120" className="hover:text-white transition">
                  +998 (73) 244-01-20
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a href="mailto:info@alxorazmiy-fergana.uz" className="hover:text-white transition">
                  info@alxorazmiy-fergana.uz
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Send className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a href="https://t.me/xorazmiyfergana" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Murojaat uchun: @xorazmiyfergana
                </a>
              </div>

              <div className="pt-3">
                <a 
                  href="https://t.me/alXorazmiyfargonafiliali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-3.5 py-2 rounded-lg text-xs font-medium transition shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Rasmiy Telegram Kanal</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with discrete Admin Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <div>
            © 2026 Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali. Barcha huquqlar himoyalangan.
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/kontaktlar" className="hover:text-white transition">
              Qayta aloqa
            </Link>
            <span>•</span>
            {/* Direct discrete link for admins as requested */}
            <Link 
              to="/admin-login" 
              className="text-slate-400 hover:text-brand-sky transition flex items-center space-x-1"
              title="Maktab xodimlari va administratorlar uchun"
            >
              <Lock className="w-3 h-3" />
              <span>Admin kirish</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
