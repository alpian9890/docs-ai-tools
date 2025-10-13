import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    title: 'AI Tools Documentation',
    subtitle: 'Comprehensive guide to leading AI platforms and tools',
    searchPlaceholder: 'Search AI tools...',
    allCategories: 'All Categories',
    readMore: 'Read More',
    backToHome: 'Back to Home',
    toolsPerPage: 'Tools per page:',
    showing: 'Showing',
    of: 'of',
    tools: 'tools',
    category: 'Category',
    officialWebsite: 'Official Website',
    fullDocumentation: 'Full Documentation',
    createdBy: 'Created by @alpian9890',
    noToolsFound: 'No tools found matching your search.',
    tryDifferent: 'Try a different search term or category.',
  },
  id: {
    title: 'Dokumentasi AI Tools',
    subtitle: 'Panduan komprehensif untuk platform dan alat AI terkemuka',
    searchPlaceholder: 'Cari alat AI...',
    allCategories: 'Semua Kategori',
    readMore: 'Baca Selengkapnya',
    backToHome: 'Kembali ke Beranda',
    toolsPerPage: 'Alat per halaman:',
    showing: 'Menampilkan',
    of: 'dari',
    tools: 'alat',
    category: 'Kategori',
    officialWebsite: 'Situs Web Resmi',
    fullDocumentation: 'Dokumentasi Lengkap',
    createdBy: 'Dibuat oleh @alpian9890',
    noToolsFound: 'Tidak ada alat yang ditemukan yang sesuai dengan pencarian Anda.',
    tryDifferent: 'Coba istilah pencarian atau kategori yang berbeda.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
