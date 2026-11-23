import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', telegram: '', subject: '', message: '' });
      } else {
        setError(data.message || 'Xatolik yuz berdi');
      }
    } catch (err) {
      setError('Server bilan bog\'lanishda xatolik yuz berdi');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden relative">
      <FloatingMathBg />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span className="text-brand-blue font-bold">Aloqa</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-12">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Qayta Aloqa
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktab Bilan Bog'lanish
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Savollaringiz, takliflaringiz yoki qabul bo'yicha murojaatingiz bormi? Bizga xabar qoldiring yoki aloqa vositalarimiz orqali bog'laning.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {/* Contact Details Card */}
          <ScrollReveal animation="fade-right" duration={700} delay={100}>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-brand-navy border-b border-slate-100 pb-4">
                  Aloqa Ma'lumotlari
                </h3>

                <div className="space-y-5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Manzilimiz:</div>
                      <div>Farg'ona shahar, Ilg'or MFY, Mustaqillik shoh ko'chasi 1e-uy</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Telefon:</div>
                      <a href="tel:+998732440120" className="hover:text-brand-blue font-semibold">
                        +998 (73) 244-01-20
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Elektron pochta:</div>
                      <a href="mailto:info@alxorazmiy-fergana.uz" className="hover:text-brand-blue font-semibold">
                        info@alxorazmiy-fergana.uz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 text-brand-sky flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Telegram:</div>
                      <a href="https://t.me/alXorazmiyfargonafiliali" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sky font-semibold">
                        @alXorazmiyfargonafiliali
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="https://t.me/alXorazmiyfargonafiliali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#0088cc] hover:bg-[#0077b5] active:scale-95 text-white py-3.5 px-4 rounded-2xl text-xs font-bold transition shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>Rasmiy Telegram Kanal</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="fade-left" duration={700} delay={150} className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                Onlayn Xabar Yuborish
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Quyidagi formani to'ldiring, maktab mutasaddilari tez orada siz bilan bog'lanadilar.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Rahmat! Xabaringiz muvaffaqiyatli qabul qilindi. Tez orada siz bilan bog'lanamiz.
                  </span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ism va familiyangiz *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masalan: Sardor Aliyev"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefon raqamingiz *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telegram username <span className="text-slate-400 font-normal">(ixtiyoriy)</span>
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      placeholder="@foydalanuvchi"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mavzu
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Qabul, o'quv dasturi..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Xabaringiz matni *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Savolingiz yoki fikringizni yozing..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-brand-blue hover:bg-blue-900 active:scale-95 text-white font-bold px-8 py-3.5 rounded-2xl text-xs sm:text-sm transition duration-300 shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 select-none cursor-pointer"
                  >
                    <span>{submitting ? 'Yuborilmoqda...' : 'Xabarni Yuborish'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
