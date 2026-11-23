import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Cpu, Trophy, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function QuickStats() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    students: '540+',
    teachers: '52+',
    laboratories: '14+',
    olympiadWinners: '68+'
  });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setStats(data.data);
        }
      })
      .catch(err => console.log('Stats fetch error:', err));
  }, []);

  const statItems = [
    {
      icon: Users,
      value: stats.students || '540+',
      label: t.stats.students,
      desc: '7-11 sinf iqtidorli yoshlar',
      color: 'from-blue-600 to-sky-500'
    },
    {
      icon: GraduationCap,
      value: stats.teachers || '52+',
      label: t.stats.teachers,
      desc: 'Oliy toifali va xalqaro sertifikatli',
      color: 'from-indigo-600 to-blue-500'
    },
    {
      icon: Cpu,
      value: stats.laboratories || '14+',
      label: t.stats.laboratories,
      desc: 'Robototexnika, AI, VR & Tarmoq',
      color: 'from-cyan-600 to-teal-500'
    },
    {
      icon: Trophy,
      value: stats.olympiadWinners || '68+',
      label: t.stats.olympiadWinners,
      desc: 'Respublika va xalqaro g\'oliblar',
      color: 'from-amber-500 to-yellow-400'
    }
  ];

  return (
    <section className="relative -mt-12 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100 flex items-center space-x-5 group card-hover h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 transition duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight group-hover:text-brand-blue transition">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 tracking-wide">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {item.desc}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
