import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Network, Calculator, ArrowRight, CheckCircle2, Award, Languages } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FloatingMathBg from '../components/FloatingMathBg';

export default function DirectionsPage() {
  const directions = [
    {
      id: 'web',
      icon: Globe,
      title: "Web Dasturlash (Full-Stack)",
      desc: "HTML5, modern CSS3, Tailwind CSS, JavaScript ES6+, React.js va backend uchun Node.js, Express hamda Python asoslari.",
      path: "/web",
      gradient: "from-blue-600 to-sky-500",
      skills: ["Frontend ishlab chiqish", "REST API & Serverlar", "Ma'lumotlar bazalari (SQL, NoSQL)", "Vercel & Git deployment"]
    },
    {
      id: 'mobil',
      icon: Smartphone,
      title: "Mobil Dasturlash (Android & iOS)",
      desc: "Cross-platform mobil ilovalar yaratish, Google Flutter & Dart texnologiyalari, Android Native (Kotlin) hamda mobil UX dizayn.",
      path: "/mobil",
      gradient: "from-indigo-600 to-purple-500",
      skills: ["Flutter & Dart freymvorki", "Mobil arxitektura (BLoC, Provider)", "Firebase integratsiyasi", "Play Store & App Store tayyorgarligi"]
    },
    {
      id: 'grafika',
      icon: Palette,
      title: "Kompyuter Grafikasi & UI/UX",
      desc: "Raqamli dizayn san'ati, foydalanuvchi tajribasi (UX), interfeys dizayni (UI), Figma, Adobe Illustrator va 3D Blender modellashtirish.",
      path: "/grafika",
      gradient: "from-pink-500 to-rose-500",
      skills: ["Figma bilan professional dizayn", "Vektorli grafika & Brending", "3D modellashtirish va animatsiya", "Dizayn-tizimlar (Design Systems)"]
    },
    {
      id: 'tarmoq',
      icon: Network,
      title: "Kompyuter Tarmoqlari & Kiberxavfsizlik",
      desc: "Cisco uskunalari, tarmoq protokollari (TCP/IP, DNS, DHCP), marshrutizatorlar konfiguratsiyasi, Linux ma'murligi va tarmoq himoyasi.",
      path: "/tarmoq",
      gradient: "from-emerald-600 to-teal-500",
      skills: ["Cisco CCNA darajasi", "Linux serverlar boshqaruvi", "Kiberxavfsizlik asoslari", "Lokal va global tarmoqlar"]
    },
    {
      id: 'stem',
      icon: Calculator,
      title: "Aniq Fanlar: Matematika & Fizika",
      desc: "O'quvchilar mantiqiy tafakkuri va muammolarni hal qilish salohiyatini shakllantiruvchi chuqurlashtirilgan nazariya va laboratoriya.",
      path: "/oquv-dasturlari",
      gradient: "from-amber-600 to-orange-500",
      skills: ["Olimpiada masalalari", "SAT Math imtihoniga tayyorgarlik", "Fizika laboratoriya tajribalari", "Milliy A+ toifa darajasi"]
    },
    {
      id: 'english',
      icon: Languages,
      title: "Ingliz Tili (Chet Tili) — Chuqurlashtirilgan Ta'lim",
      desc: "Xalqaro CEFR va Cambridge standartlari, IELTS 7.5–8.5+, SAT Verbal & Reading, akademik yozuv hamda so'zlashuv intensiv amaliyotlari chuqur o'rgatiladi.",
      path: "/oquv-dasturlari",
      gradient: "from-sky-600 to-blue-700",
      skills: ["IELTS 7.5+ & CEFR C1 tayyorgarligi", "SAT Reading & Writing", "Xalqaro debatlar va notiqlik", "Akademik ingliz tili (Academic English)"]
    }
  ];

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden relative">
      <FloatingMathBg />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span className="text-brand-blue font-bold">Fan yo'nalishlari</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-12">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Ixtisosliklar
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktabimizning Asosiy Ta'lim Yo'nalishlari
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              Muhammad al-Xorazmiy maktabi Farg'ona filiali ta'lim dasturi zamonaviy IT bozorining eng talabgir sohalari va fundamental aniq fanlar uyg'unligiga asoslangan.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8">
          {directions.map((dir, idx) => {
            const Icon = dir.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 100}
              >
                <div
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dir.gradient} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <div className="space-y-3 max-w-xl">
                      <h2 className="text-2xl font-bold text-brand-navy">
                        {dir.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {dir.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {dir.skills.map((s, sIdx) => (
                          <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <Link
                      to={dir.path}
                      className="w-full lg:w-auto inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-brand-blue hover:text-white active:scale-95 text-slate-800 font-bold px-6 py-3.5 rounded-2xl text-xs transition duration-300"
                    >
                      <span>Batafsil ma'lumot</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
