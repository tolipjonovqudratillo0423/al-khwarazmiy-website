import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone, Mail, Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setHoveredMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
  };

  const toggleMobileSubmenu = (menuName) => {
    setMobileExpanded(prev => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const menuItems = [
    {
      name: t.menu.about,
      links: [
        { label: t.menu.leadership, to: '/rahbariyat' },
        { label: t.menu.mission, to: '/maqsad-vazifalar' }
      ]
    },
    {
      name: t.menu.admissions,
      links: [
        { label: t.menu.admissions, to: '/qabul-tartibi' }
      ]
    },
    {
      name: t.menu.education,
      links: [
        { label: t.menu.curriculum, to: '/oquv-dasturlari' },
        { label: "Barcha yo'nalishlar", to: '/fan-yonalishlari' }
      ]
    },
    {
      name: t.menu.schoolLife,
      links: [
        { label: t.menu.dormitory, to: '/yotoqxona' },
        { label: t.menu.clubs, to: '/oquvchilar-tashkilotlari' },
        { label: 'Prezidentlik', to: '/prezidentlik' }
      ]
    },
    {
      name: t.menu.specializations,
      links: [
        { label: t.menu.web, to: '/web' },
        { label: t.menu.mobile, to: '/mobil' },
        { label: t.menu.graphics, to: '/grafika' },
        { label: t.menu.network, to: '/tarmoq' }
      ]
    },
    {
      name: t.menu.gazetteNews,
      links: [
        { label: "Maktab Yangiliklari", to: '/yangiliklar' }
      ]
    },
    {
      name: t.menu.contact,
      links: [
        { label: t.menu.contact, to: '/kontaktlar' }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-poppins tracking-tight transition-all duration-500 ease-in-out">
      {/* Top Bar */}
      <div
        className={`hidden xl:flex justify-between items-center px-6 lg:px-12 transition-all duration-500 ${
          scrolled
            ? 'h-0 opacity-0 -translate-y-4 pointer-events-none'
            : 'h-11 bg-[#00265B] text-white translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center gap-6 text-[13px] text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#3BAAFF]" />
            <a href="tel:+998732440120" className="hover:text-[#3BAAFF] transition">
              +998 (73) 244-01-20
            </a>
          </div>
          <span className="text-white/30">|</span>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#3BAAFF]" />
            <a href="mailto:info@alxorazmiy-fergana.uz" className="hover:text-[#3BAAFF] transition">
              info@alxorazmiy-fergana.uz
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://t.me/alXorazmiyfargonafiliali"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-white/90 hover:text-[#3BAAFF] transition text-xs font-medium"
          >
            <Send className="w-3.5 h-3.5 text-[#3BAAFF]" />
            <span>@alXorazmiyfargonafiliali</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'shadow-lg bg-white/95 backdrop-blur-md py-0 border-b border-gray-100'
            : 'bg-white py-0 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 xl:px-10 h-[72px] sm:h-[78px]">
          {/* Logo Brand: NO IT-STEM badge */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden border-2 border-[#0047AB] bg-white shadow-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo.jpg"
                alt="Muhammad al-Xorazmiy maktabi Farg'ona filiali"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=100&q=80";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] sm:text-[17px] leading-tight text-[#00265B] tracking-tight group-hover:text-[#0047AB] transition whitespace-nowrap">
                Muhammad al-Xorazmiy
              </span>
              <span className="font-bold text-[12px] sm:text-[13px] leading-tight text-[#0047AB] whitespace-nowrap">
                Farg'ona filiali
              </span>
            </div>
          </Link>

          {/* Desktop Menu with HOVER DROPDOWN */}
          <ul className="hidden xl:flex items-center gap-4 2xl:gap-7 text-[13.5px] 2xl:text-[14.5px] text-gray-800 font-medium">
            {menuItems.map((item, idx) => {
              const isDropdown = item.links.length > 1;
              const isHovered = hoveredMenu === item.name;

              if (!isDropdown) {
                return (
                  <li key={idx} className="relative py-6">
                    <Link
                      to={item.links[0].to}
                      className="hover:text-[#0047AB] transition-colors py-2 font-medium whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={idx}
                  className="relative py-6"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 hover:text-[#0047AB] transition-colors py-2 font-medium cursor-pointer whitespace-nowrap">
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${isHovered ? 'rotate-180 text-[#0047AB]' : ''}`} />
                  </button>

                  {/* Dropdown Menu (on hover) */}
                  <div
                    className={`absolute left-0 top-[68px] pt-1 z-50 transition-all duration-200 ${
                      isHovered
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="w-56 bg-white shadow-2xl rounded-2xl py-2.5 border border-gray-100">
                      {item.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.to}
                          className="block px-5 py-2.5 text-[13.5px] text-gray-700 hover:text-[#0047AB] hover:bg-[#EEF4FF] transition font-medium whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Admission Button */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/qabul-tartibi"
              className="bg-[#0047AB] hover:bg-blue-900 active:scale-95 text-white px-5 2xl:px-6 py-2.5 rounded-xl font-bold text-xs 2xl:text-[13px] tracking-wide shadow-md transition-all whitespace-nowrap btn-hover"
            >
              Qabul 2026-2027
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/qabul-tartibi"
              className="bg-[#0047AB] text-white px-3.5 py-2 rounded-xl font-bold text-xs shadow-sm transition whitespace-nowrap btn-hover"
            >
              Qabul
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition active:scale-90 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 max-h-[85vh] overflow-y-auto px-6 py-6 shadow-2xl space-y-4">
          <div className="space-y-2 text-sm font-medium">
            {menuItems.map((item, idx) => {
              const isDropdown = item.links.length > 1;
              const isExpanded = mobileExpanded[item.name];

              if (!isDropdown) {
                return (
                  <div key={idx} className="border-b border-gray-50 pb-2">
                    <Link
                      to={item.links[0].to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gray-800 hover:text-[#0047AB] text-sm font-semibold"
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={idx} className="border-b border-gray-50 pb-2">
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gray-800 hover:text-[#0047AB] cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180 text-[#0047AB]' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 space-y-1.5 pb-2 pt-1">
                      {item.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-xs text-gray-600 hover:text-[#0047AB] font-medium"
                        >
                          • {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/qabul-tartibi"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#0047AB] active:scale-95 text-white text-center py-3 rounded-2xl font-bold text-xs block shadow transition select-none btn-hover"
            >
              Qabul 2026-2027
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}