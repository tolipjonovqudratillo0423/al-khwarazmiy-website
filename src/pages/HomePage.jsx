import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import SpecializationsSection from '../components/SpecializationsSection';
import NewsGazetteSection from '../components/NewsGazetteSection';
import FacilitiesSection from '../components/FacilitiesSection';
import StudentClubsSection from '../components/StudentClubsSection';
import PartnersSection from '../components/PartnersSection';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  return (
    <div className="font-poppins bg-[#f5f7fb]">
      {/* 1. Hero Section (1 in 1 with al-khwarizmischool.uz, using school building background photo) */}
      <HeroSlider />

      {/* 2. About Section (_06 with Pic 3 collage and 2x2 stats cards) */}
      <AboutSection />

      {/* 3. Specializations (E06 Yo'nalishlar) */}
      <SpecializationsSection />

      {/* 4. News & Gazette Section */}
      <NewsGazetteSection />

      {/* 5. Campus & Facilities */}
      <FacilitiesSection />

      {/* 6. Student Clubs & Initiatives (SAT MAXING, Raqamli Avlod) */}
      <StudentClubsSection />

      {/* 7. FAQ Section (Xh0 with photo + accordion) */}
      <FAQSection />

      {/* 8. Partners Marquee (c16) */}
      <PartnersSection />
    </div>
  );
}
