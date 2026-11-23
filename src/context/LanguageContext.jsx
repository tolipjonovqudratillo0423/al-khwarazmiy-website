import React, { createContext, useContext, useState } from 'react';

const translations = {
  uz: {
    schoolName: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab",
    branchName: "Farg'ona filiali",
    tagline: "Aniq fanlar va zamonaviy axborot texnologiyalari maktabi",
    address: "Farg'ona shahar, Ilg'or MFY, Mustaqillik shoh ko'chasi 1e-uy",
    contactPhone: "+998 (73) 244-01-20",
    email: "info@alxorazmiy-fergana.uz",
    telegramChannel: "@alXorazmiyfargonafiliali",
    menu: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      mission: "Maqsad va vazifalar",
      leadership: "Rahbariyat & Ustozlar",
      gallery: "Fotogalereya",
      specializations: "Yo‘nalishlar",
      web: "Web dasturlash",
      mobile: "Mobil dasturlash",
      graphics: "Kompyuter grafikasi",
      network: "Kompyuter tarmoqlari",
      education: "Ta’lim",
      curriculum: "Ta’lim modeli va dasturlar",
      schoolLife: "Maktab hayoti",
      dormitory: "Yotoqxona",
      clubs: "O‘quvchilar tashkilotlari",
      events: "Maktab tadbirlari",
      admissions: "Qabul",
      gazetteNews: "Yangiliklar",
      contact: "Bog‘lanish"
    },
    hero: {
      slide1Title: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab",
      slide1Subtitle: "Farg'ona filialida matematika, fizika, informatika va ingliz tili chuqurlashtirilgan asosda o'qitiladi.",
      slide2Title: "Kelajak IT muhandislari va Dasturchilar maskani",
      slide2Subtitle: "Web va mobil dasturlash, sun'iy intellekt, robototexnika hamda xalqaro musobaqalar sari mustahkam qadam.",
      slide3Title: "Muhammad al-Xorazmiy — Maktab Yangiliklari",
      slide3Subtitle: "Pedagoglarimizning yuksak yutuqlari, SAT Maxing Club va Raqamli avlod startap loyihalaridan muntazam xabardor bo'ling.",
      admissionBtn: "Qabul tartibi",
      gazetteBtn: "Yangiliklar",
      readMore: "Batafsil ma'lumot"
    },
    stats: {
      students: "O‘quvchilar soni",
      teachers: "Malakali pedagoglar",
      laboratories: "IT va laboratoriyalar",
      olympiadWinners: "Olimpiada sovrindorlari"
    },
    sections: {
      specializationsTitle: "ASOSIY TA'LIM YO'NALISHLARI",
      specializationsSubtitle: "Zamonaviy dunyo talablariga javob beradigan ilg'or texnologik ta'lim",
      gazetteTitle: "MAKTAB YANGILIKLARI",
      gazetteSubtitle: "Maktabimiz hayoti, ilmiy yutuqlar, tadbirlar va e'lonlar bilan tanishing",
      facilitiesTitle: "ZAMONAVIY SHART-SHAROITLAR",
      facilitiesSubtitle: "O'quvchilarning har tomonlama rivojlanishi uchun yaratilgan qulay muhit",
      clubsTitle: "O'QUVCHILAR KLUBI VA TASHABBUSLARI",
      clubsSubtitle: "Kreativlik, jamoaviy ishlash va xalqaro tanlovlarga tayyorgarlik maydoni",
      partnersTitle: "HAMKORLARIMIZ VA TASHKILOTLAR",
      faqTitle: "KO'P BERILADIGAN SAVOLLAR",
      contactTitle: "BIZ BILAN BOG'LANING"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const lang = 'uz';
  const changeLang = () => {};
  const t = translations.uz;

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
