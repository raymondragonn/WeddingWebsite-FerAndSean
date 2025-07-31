import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const translations = {
    es: {
      names: 'Fer & Sean',
      date: '18 abril 2026',
      venue: '"La Cueva de la Luna"',
      location: 'Tequila Jalisco, México',
      days: 'Días',
      hours: 'Horas',
      minutes: 'Min',
      seconds: 'Seg',
      comingSoonNote: 'Próximamente se presentará el sitio web con toda la información relacionada',
      languageButton: 'EN'
    },
    en: {
      names: 'Fer & Sean',
      date: 'April 18, 2026',
      venue: '"La Cueva de la Luna"',
      location: 'Tequila Jalisco, Mexico',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Min',
      seconds: 'Sec',
      comingSoonNote: 'The website with all related information will be presented soon',
      languageButton: 'ES'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 