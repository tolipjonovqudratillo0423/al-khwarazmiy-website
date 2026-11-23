import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ScrollReveal from '../components/ScrollReveal';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // If already authenticated, redirect to /admin
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(username, password);
    setLoading(false);

    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.message || 'Noto\'g\'ri login yoki parol!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-slate-900 to-brand-blue flex items-center justify-center p-4 font-poppins">
      <ScrollReveal animation="zoom-in" duration={600} className="max-w-md w-full">
        <div className="w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-slate-100 relative">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-brand-blue transition mb-6 btn-hover"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Bosh sahifaga qaytish</span>
          </Link>

          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-light border-2 border-brand-blue flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-md">
              <img 
                src="/assets/logo.jpg" 
                alt="Muhammad al-Xorazmiy maktabi" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=100&q=80";
                }}
              />
            </div>
            <h1 className="text-2xl font-black text-brand-navy tracking-tight">
              Admin Boshqaruv Paneli
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Muhammad al-Xorazmiy maktabi Farg'ona filiali
            </p>
          </div>

          {/* Security Warning Notice */}
          <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-xl text-[11px] text-blue-900 flex items-start space-x-2">
            <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
            <span>
              Ushbu bo'lim faqat vakolatli maktab ma'muriyati va tahririyat xodimlari uchun himoyalangan.
            </span>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Foydalanuvchi nomi (Login)
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-slate-50"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Maxfiy Parol
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-slate-50"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-navy hover:bg-brand-blue text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition shadow-lg flex items-center justify-center space-x-2 disabled:opacity-60 btn-hover"
              >
                <Lock className="w-4 h-4 text-brand-sky" />
                <span>{loading ? 'Tekshirilmoqda...' : 'Tizimga Kirish'}</span>
              </button>
            </div>
          </form>

          <div className="mt-8 pt-4 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              Standart login: <span className="font-mono text-slate-600 font-bold">admin</span> | Parol: <span className="font-mono text-slate-600 font-bold">adminXorazmiy2026!</span>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
