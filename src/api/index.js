import data from './data.json';
import { translateDataArray, getTranslatedItemById, getTranslatedItemsByType } from '../utils/dataUtils';

// Función para obtener todos los datos traducidos
export const getData = (language = 'es') => {
  try {
    return translateDataArray(data, language);
  } catch (error) {
    console.error('Error in getData:', error);
    return data; // Fallback a datos originales
  }
};

// Función para obtener un item específico por ID
export const getItemById = (id, language = 'es') => {
  try {
    return getTranslatedItemById(data, id, language);
  } catch (error) {
    console.error('Error in getItemById:', error);
    return data.find(item => item.id === id) || null;
  }
};

// Función para obtener items por tipo (event, product, etc.)
export const getItemsByType = (type, language = 'es') => {
  try {
    return getTranslatedItemsByType(data, type, language);
  } catch (error) {
    console.error('Error in getItemsByType:', error);
    return data.filter(item => item.type === type);
  }
};

// Función para obtener solo eventos
export const getEvents = (language = 'es') => {
  try {
    return getTranslatedItemsByType(data, 'event', language);
  } catch (error) {
    console.error('Error in getEvents:', error);
    return data.filter(item => item.type === 'event');
  }
};

// Función para obtener solo productos
export const getProducts = (language = 'es') => {
  try {
    return data.filter(item => !item.type || item.type !== 'event').map(item => 
      getTranslatedItemById(data, item.id, language)
    );
  } catch (error) {
    console.error('Error in getProducts:', error);
    return data.filter(item => !item.type || item.type !== 'event');
  }
};

// Función para obtener un evento específico por slug
export const getEventBySlug = (slug, language = 'es') => {
  try {
    const event = data.find(item => item.type === 'event' && item.slug === slug);
    return event ? getTranslatedItemById(data, event.id, language) : null;
  } catch (error) {
    console.error('Error in getEventBySlug:', error);
    return data.find(item => item.type === 'event' && item.slug === slug) || null;
  }
};

// Función para obtener un producto específico por slug
export const getProductBySlug = (slug, language = 'es') => {
  try {
    const product = data.find(item => (!item.type || item.type !== 'event') && item.slug === slug);
    return product ? getTranslatedItemById(data, product.id, language) : null;
  } catch (error) {
    console.error('Error in getProductBySlug:', error);
    return data.find(item => (!item.type || item.type !== 'event') && item.slug === slug) || null;
  }
};

// Exportar la función por defecto para mantener compatibilidad
export default () => {
  return data;
};