import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  getData, 
  getItemById, 
  getItemsByType, 
  getEvents, 
  getProducts, 
  getEventBySlug, 
  getProductBySlug 
} from '../api';

// Hook para obtener todos los datos traducidos
export const useTranslatedData = () => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getData(language);
    } catch (error) {
      console.error('Error in useTranslatedData:', error);
      return [];
    }
  }, [language]);
};

// Hook para obtener un item específico por ID
export const useTranslatedItem = (id) => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getItemById(id, language);
    } catch (error) {
      console.error('Error in useTranslatedItem:', error);
      return null;
    }
  }, [id, language]);
};

// Hook para obtener items por tipo
export const useTranslatedItemsByType = (type) => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getItemsByType(type, language);
    } catch (error) {
      console.error('Error in useTranslatedItemsByType:', error);
      return [];
    }
  }, [type, language]);
};

// Hook para obtener solo eventos
export const useTranslatedEvents = () => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getEvents(language);
    } catch (error) {
      console.error('Error in useTranslatedEvents:', error);
      return [];
    }
  }, [language]);
};

// Hook para obtener solo productos
export const useTranslatedProducts = () => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getProducts(language);
    } catch (error) {
      console.error('Error in useTranslatedProducts:', error);
      return [];
    }
  }, [language]);
};

// Hook para obtener un evento específico por slug
export const useTranslatedEvent = (slug) => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getEventBySlug(slug, language);
    } catch (error) {
      console.error('Error in useTranslatedEvent:', error);
      return null;
    }
  }, [slug, language]);
};

// Hook para obtener un producto específico por slug
export const useTranslatedProduct = (slug) => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    try {
      return getProductBySlug(slug, language);
    } catch (error) {
      console.error('Error in useTranslatedProduct:', error);
      return null;
    }
  }, [slug, language]);
};
