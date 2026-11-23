import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import LeadershipPage from './pages/LeadershipPage';
import PresidencyPage from './pages/PresidencyPage';
import DirectionsPage from './pages/DirectionsPage';
import WebDirectionPage from './pages/WebDirectionPage';
import MobileDirectionPage from './pages/MobileDirectionPage';
import GraphicsDirectionPage from './pages/GraphicsDirectionPage';
import NetworkDirectionPage from './pages/NetworkDirectionPage';
import CurriculumPage from './pages/CurriculumPage';
import DormitoryPage from './pages/DormitoryPage';
import StudentOrganizationsPage from './pages/StudentOrganizationsPage';
import EventsPage from './pages/EventsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import NewsListPage from './pages/NewsListPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith('/al-xorazmiy-fer') && location.pathname !== '/admin-login';
  const isAdminLogin = location.pathname === '/admin-al-xorazmiy-fer-login';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-poppins selection:bg-brand-blue selection:text-white">
      <ScrollToTop />
      
      {/* Hide header and footer in admin panel for a clean professional dashboard experience */}
      {!isAdminDashboard && !isAdminLogin && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Navigate to="/maqsad-vazifalar" replace />} />
          <Route path="/history" element={<Navigate to="/maqsad-vazifalar" replace />} />
          <Route path="/maqsad-vazifalar" element={<MissionPage />} />
          <Route path="/rahbariyat" element={<LeadershipPage />} />
          <Route path="/documents" element={<Navigate to="/maqsad-vazifalar" replace />} />
          <Route path="/fotogalereya" element={<Navigate to="/maqsad-vazifalar" replace />} />
          <Route path="/prezidentlik" element={<PresidencyPage />} />
          <Route path="/fan-yonalishlari" element={<DirectionsPage />} />
          <Route path="/web" element={<WebDirectionPage />} />
          <Route path="/mobil" element={<MobileDirectionPage />} />
          <Route path="/grafika" element={<GraphicsDirectionPage />} />
          <Route path="/tarmoq" element={<NetworkDirectionPage />} />
          <Route path="/oquv-dasturlari" element={<CurriculumPage />} />
          <Route path="/olympics" element={<Navigate to="/fan-yonalishlari" replace />} />
          <Route path="/yotoqxona" element={<DormitoryPage />} />
          <Route path="/oquvchilar-tashkilotlari" element={<StudentOrganizationsPage />} />
          <Route path="/maktab-tadbirlari" element={<Navigate to="/" replace />} />
          <Route path="/qabul-tartibi" element={<AdmissionsPage />} />
          <Route path="/yangiliklar" element={<NewsListPage />} />
          <Route path="/yangiliklar/:id" element={<NewsDetailPage />} />
          <Route path="/kontaktlar" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isAdminDashboard && !isAdminLogin && <Footer />}
    </div>
  );
}
