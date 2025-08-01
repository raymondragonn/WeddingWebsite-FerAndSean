import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './HeaderLanguageToggle.css';

const HeaderLanguageToggle = () => {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button 
      className="header-language-toggle-btn"
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Change language"
    >
      {t('languageButton')}
    </button>
  );
};

export default HeaderLanguageToggle; 