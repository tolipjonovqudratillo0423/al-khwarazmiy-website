import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Tag, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function EventsPage() {
  const defaultEvents = [
    {
      id: 'event-1',
      title: "“Bir Vatan, bir el, bir bayroq!” vatanparvarlik chellenji",
      date: "18-Noyabr, 2026",
      time: "10:00",
      location: "Maktab faollar zali",
      category: "Bayram",
      desc: "Davlat bayrog'i qabul qilingan kun munosabati bilan she'rxonlik, IT grafikasi tanlovi va ma'rifiy tadbir."
    },
    {
      id: 'event-2',
      title: "“Raqamli avlod qizlari” startap loyihalar ko'rgazmasi",
      date: "25-Noyabr, 2026",
      time: "14:00",
      location: "IT Laboratoriya",
      category: "Startap",
      desc: "O'quvchi qizlarimizning ekologiya, sog'liqni saqlash va ta'lim yo'nalishidagi prototiplari taqdimoti."
    },
    {
      id: 'event-3',
      title: "Milliy gvardiya harbiy qismiga ochiq eshiklar kuni safari",
      date: "O'tkazildi (13-Noyabr)",
      time: "Kun davomida",
      location: "Harbiy qism, Farg'ona",
      category: "Ekskursiya",
      desc: "Yoshlarda harbiy-vatanparvarlik tuyg'ularini yuksaltirishga bag'ishlangan amaliy tanishuv sayohati."
    },
    {
      id: 'event-4',
      title: "SAT Maxing Club birinchi ochiq Mock Test sinovi",
      date: "30-Noyabr, 2026",
      time: "09:00",
      location: "Kompyuter zali",
      category: "Imtihon",
      desc: "9–11-sinf o'quvchilari uchun Digital SAT Math va Reading & Writing real vaqt sinovi."
    }
  ];

  const [events, setEvents] = useState(defaultEvents);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setEvents(data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down" duration={500}>
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-brand-blue transition">Bosh sahifa</Link>
            <span>/</span>
            <span>Maktab hayoti</span>
            <span>/</span>
            <span className="text-brand-blue font-bold">Maktab tadbirlari</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={700}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 mb-10">
            <div className="inline-block bg-brand-light text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Maktab Taqvimi
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">
              Maktab Tadbirlari va E'lonlar
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filialida o'tkaziladigan ilmiy anjumanlar, ko'rgazmalar, intellektual turnirlar va ma'naviy tadbirlar rejasi.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <ScrollReveal
              key={event.id || idx}
              animation="fade-up"
              delay={idx * 100}
            >
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:-translate-y-1"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">
                      {event.category || 'Tadbir'}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.desc}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="https://t.me/alXorazmiyfargonafiliali"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-700 px-5 py-3 rounded-2xl transition-all active:scale-95 shadow-sm"
                  >
                    <span>Telegramda ko'rish</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
