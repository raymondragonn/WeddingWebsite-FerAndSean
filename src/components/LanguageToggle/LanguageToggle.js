import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button 
      className="language-toggle-btn"
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Change language"
    >
      {t('languageButton')}
    </button>
  );
};

export default LanguageToggle; 