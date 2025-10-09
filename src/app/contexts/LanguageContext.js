'use client'; // Add this ONLY if using App Router (Next.js 13+)

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: 'Welcome',
    home: 'Home',
    about: 'About',
  },
  fa: {
    welcome: 'خوش آمدید',
    home: 'خانه',
    about: 'درباره ما',
  }
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [dir, setDir] = useState('ltr');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'fa')) {
      setLocale(saved);
      setDir(saved === 'fa' ? 'rtl' : 'ltr');
    }
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fa' : 'en';
    const newDir = newLocale === 'fa' ? 'rtl' : 'ltr';
    setLocale(newLocale);
    setDir(newDir);
    localStorage.setItem('language', newLocale);
  };

  const t = (key) => translations[locale][key] || key;

  return (
    <LanguageContext.Provider value={{ locale, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}