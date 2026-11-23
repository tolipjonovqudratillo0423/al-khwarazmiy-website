import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Shield, Server, Terminal, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function NetworkDirectionPage() {
  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-slate-50 font-poppins min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-blue">Bosh sahifa</Link>
          <span>/</span>
          <Link to="/fan-yonalishlari" className="hover:text-brand-blue">Yo'nalishlar</Link>
          <span>/</span>
          <span className="text-brand-blue font-bold">Kompyuter Tarmoqlari</span>
        </div>

        <ScrollReveal animation="fade-up">
          <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-green-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl mb-12">
            <span className="bg-teal-300 text-teal-950 px-3 py-1 rounded-full text-xs font-black uppercase inline-block mb-4">
              Cisco Networking & Cybersecurity
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Kompyuter Tarmoqlari Yo'nalishi
            </h1>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed max-w-2xl">
              Lokal va global tarmoqlar arxitekturasi, Cisco uskunalarini sozlash, marshrutlash (routing & switching), Linux ma'murligi va tarmoq xavfsizligi.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4 h-full card-hover">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Cisco CCNA Standartlari
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cisco Packet Tracer va real laboratoriya stendlarida tarmoq topologiyalarini qurish va sinovdan o'tkazish.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>OSI va TCP/IP modellari tahlili</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>IPv4/IPv6 subnetting va manzil taqsimoti</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>VLAN, Trunking va OSPF protokollari</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={200}>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-4 h-full card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Kiberxavfsizlik & Linux
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Axborot xavfsizligi tushunchalari, xakerlik hujumlaridan himoyalanish, firewall konfiguratsiyasi va Linux serverlar boshqaruvi.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Linux terminal buyruqlari va skriptlash</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tarmoq trafigini tahlil qilish (Wireshark)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Xavfsizlik devorlari va VPN sozlamalari</span>
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
