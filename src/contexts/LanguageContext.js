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
      languageButton: 'EN',
      // Header translations
      home: 'Inicio',
      about: 'Acerca de',
      portfolio: 'Galería',
      contact: 'Contacto',
      story: 'Nuestra Historia',
      accommodation: 'Alojamiento',
      rsvp: 'RSVP',
      gallery: 'Galería',
      planners: 'Planners',
      service: 'Servicio',
      pricing: 'Precios',
      authPages: 'Páginas de Auth',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
      forgotPassword: 'Olvidé Contraseña',
      comingSoon: 'Próximamente',
      error404: 'Error 404',
      portfolioGrid: 'Portafolio Grid',
      portfolioMasonary: 'Portafolio Masonary',
      portfolioMasonaryS2: 'Portafolio Masonary S2',
      portfolioMasonaryS3: 'Portafolio Masonary S3',
      portfolioSingle: 'Portafolio Single',
      ourStory: 'Nuestra Historia',
      ourStoryStyle1: 'Nuestra Historia Estilo 1',
      ourStoryStyle2: 'Nuestra Historia Estilo 2',
      ourStoryStyle3: 'Nuestra Historia Estilo 3',
      ourStoryStyle4: 'Nuestra Historia Estilo 4',
      ourStoryStyle5: 'Nuestra Historia Estilo 5',
      ourStoryStyle6: 'Nuestra Historia Estilo 6',
      rsvpStyle1: 'RSVP Estilo 1',
      rsvpStyle2: 'RSVP Estilo 2',
      rsvpStyle3: 'RSVP Estilo 3',
      rsvpStyle4: 'RSVP Estilo 4',
      rsvpStyle5: 'RSVP Estilo 5',
      rsvpStyle6: 'RSVP Estilo 6',
      rsvpStyle7: 'RSVP Estilo 7',
      bridesGrooms: 'Novias y Novios',
      serviceS2: 'Servicio S2',
      serviceS3: 'Servicio S3',
      serviceSingle: 'Servicio Single',
      plannerSingle: 'Planner Single',
      // Nuevas traducciones para el menú About
      'Cuándo y Dónde': 'Cuándo y Dónde',
      'Damas de Honor': 'Damas de Honor',
      'Guadalajara': 'Guadalajara',
      // Story section translations
      ourStory: 'Nuestra Historia',
      howItHappened: '¿Cómo Sucedió?',
             howWeMeet: '¿Cómo nos conocimos?',
       howWeMeetDescription: '"Nuestra historia comenzó con un mensaje y se convirtió en toda una vida. En solo tres años, hemos enfrentado tanto juntos, y cada desafío solo ha hecho nuestro amor más fuerte y nuestro vínculo inquebrantable. Todo lo que hemos planeado hasta ahora ha funcionado a nuestro favor, y apreciamos convertir cada momento que compartimos en algo especial. Nos sentimos verdaderamente bendecidos de que desde el principio, ambas familias nos han amado y apoyado en cada paso del camino."',
       // Event section translations
       ourWedding: 'Nuestra Boda',
       whenAndWhere: 'Cuándo y Dónde',
       theReception: 'La Misa',
       theCeremony: 'La Ceremonia',
       theParty: 'La Fiesta',
       // Misa event
       eventDate1: 'Sábado, 18 Abr. 2026 - 5:00 PM',
       eventLocation1: 'Misa en Parroquia Santiago Apóstol (Sixto Gorjón 16, Centro, 46400 Tequila, Jal., Mexico)',
       
       eventPhone1: '+52 33-1234-5678',
       // Ceremonia event
       eventDate2: 'Sábado, 18 Abr. 2026 - 1:00 PM',
       eventLocation2: 'Cueva de la Luna en Tequila Jalisco ( Camino a la Toma No. 3, 46400 Tequila, Jal., Mexico)',
       eventPhone2: '+52 33-1234-5679',
       // Fiesta event
       eventDate3: 'Sábado, 18 Abr. 2026 - 8:00 PM',
       eventLocation3: 'Salón de Eventos "El Jardín"',
       eventPhone3: '+52 33-1234-5680',
       // Modal translations
       seeLocation: 'Ver Ubicación',
       // Footer translations
       links: 'Enlaces',
       about: 'Acerca de',
       services: 'Servicios',
       gallery: 'Galería',
       getQuote: 'Obtener Cotización',
       contact: 'Contacto',
       footerDescription: 'No podemos esperar a ver a todos nuestros queridos amigos y familiares en nuestra boda.',
       footerContact: 'Contacto',
       footerEmail: 'Fer & Sean@wpoceans.com',
       footerAddress: 'Tequila Jalisco, México',
       copyright: '© Copyright 2025 | Fer & Sean | Todos los derechos reservados.',
       copyrightYear: '© 2025',
       madeBy: 'Made by Kodeo'
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
      languageButton: 'ES',
      // Header translations
      home: 'Home',
      about: 'About',
      portfolio: 'Gallery',
      contact: 'Contact',
      story: 'Our Story',
      accommodation: 'Accommodation',
      rsvp: 'RSVP',
      gallery: 'Gallery',
      planners: 'Planners',
      service: 'Service',
      pricing: 'Pricing',
      authPages: 'Auth Pages',
      login: 'Login',
      register: 'Register',
      forgotPassword: 'Forgot Password',
      comingSoon: 'Coming Soon',
      error404: '404 Error',
      portfolioGrid: 'Portfolio Grid',
      portfolioMasonary: 'Portfolio Masonary',
      portfolioMasonaryS2: 'Portfolio Masonary S2',
      portfolioMasonaryS3: 'Portfolio Masonary S3',
      portfolioSingle: 'Portfolio Single',
      ourStory: 'Our Story',
      ourStoryStyle1: 'Our Story Style 1',
      ourStoryStyle2: 'Our Story Style 2',
      ourStoryStyle3: 'Our Story Style 3',
      ourStoryStyle4: 'Our Story Style 4',
      ourStoryStyle5: 'Our Story Style 5',
      ourStoryStyle6: 'Our Story Style 6',
      rsvpStyle1: 'RSVP Style 1',
      rsvpStyle2: 'RSVP Style 2',
      rsvpStyle3: 'RSVP Style 3',
      rsvpStyle4: 'RSVP Style 4',
      rsvpStyle5: 'RSVP Style 5',
      rsvpStyle6: 'RSVP Style 6',
      rsvpStyle7: 'RSVP Style 7',
      bridesGrooms: 'Brides & Grooms',
      serviceS2: 'Service S2',
      serviceS3: 'Service S3',
      serviceSingle: 'Service Single',
      plannerSingle: 'Planner Single',
      // Nuevas traducciones para el menú About
      'Cuándo y Dónde': 'When & Where',
      'Damas de Honor': 'Bridesmaids',
      'Guadalajara': 'Guadalajara',
      // Story section translations
      ourStory: 'Our Story',
      howItHappened: 'How it Happened',
             howWeMeet: 'How we meet',
       howWeMeetDescription: '"Our story started with a message and turned into a lifetime. In just three years, we\'ve faced so much together, and every challenge has only made our love stronger and our bond unbreakable. Everything we\'ve planned so far has worked in our favor, and we cherish turning every moment we share into something special. We feel truly blessed that from the very beginning, both of our families have loved and supported us every step of the way."',
       // Event section translations
       ourWedding: 'Our Wedding',
       whenAndWhere: 'When & Where',
       theReception: 'The Mass',
       theCeremony: 'The Ceremony',
       theParty: 'The Party',
       // Mass event
       eventDate1: 'Saturday, Apr 18, 2026 - 5:00 PM',
       eventLocation1: 'Mass at Santiago Apóstol Parish (Sixto Gorjón 16, Centro, 46400 Tequila, Jalisco, Mexico)',
       eventPhone1: '+52 33-1234-5678',
       // Ceremony event
       eventDate2: 'Saturday, Apr 18, 2026 - 1:00 PM',
       eventLocation2: 'Cave of the Moon in Tequila, Jalisco (Camino a la Toma No. 3, 46400 Tequila, Jalisco, Mexico)',
       eventPhone2: '+52 33-1234-5679',
       // Party event
       eventDate3: 'Saturday, Apr 18, 2026 - 8:00 PM',
       eventLocation3: '"El Jardín" Event Hall',
       eventPhone3: '+52 33-1234-5680',
       // Modal translations
       seeLocation: 'See Location',
       // Footer translations
       links: 'Links',
       about: 'About',
       services: 'Services',
       gallery: 'Gallery',
       getQuote: 'Get Quote',
       contact: 'Contact',
       footerDescription: 'We can\'t wait to see all of our beloved friends and relatives at our wedding.',
       footerContact: 'Contact',
       footerEmail: 'Fer & Sean@wpoceans.com',
       footerAddress: 'Tequila Jalisco, Mexico',
       copyright: '© Copyright 2025 | Fer & Sean | All rights reserved.',
       copyrightYear: '© 2025',
       madeBy: 'Made by Kodeo'
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