// Función para obtener el valor traducido de un campo del JSON
export const getTranslatedValue = (field, language = 'es') => {
  if (!field) return '';
  
  // Si el campo es un objeto con traducciones
  if (typeof field === 'object' && field.es && field.en) {
    return field[language] || field.es; // Fallback a español si no existe la traducción
  }
  
  // Si es un string simple, devolverlo tal como está
  if (typeof field === 'string') {
    return field;
  }
  
  // Si es un array simple, devolverlo tal como está
  if (Array.isArray(field)) {
    return field;
  }
  
  // Si es un objeto con estructura anidada (como logistics)
  if (typeof field === 'object' && !field.es) {
    const translatedObject = {};
    Object.keys(field).forEach(key => {
      translatedObject[key] = getTranslatedValue(field[key], language);
    });
    return translatedObject;
  }
  
  return field;
};

// Función para procesar un objeto completo del JSON y traducirlo
export const translateDataItem = (item, language = 'es') => {
  if (!item) return item;
  
  const translatedItem = { ...item };
  
  // Campos que necesitan traducción
  const translatableFields = [
    'title', 'description', 'eventDate', 'eventTime', 'eventLocation', 
    'eventAddress', 'details', 'stock', 'logistics'
  ];
  
  translatableFields.forEach(field => {
    if (translatedItem[field]) {
      translatedItem[field] = getTranslatedValue(translatedItem[field], language);
    }
  });
  
  return translatedItem;
};

// Función para procesar todo el array de datos
export const translateDataArray = (dataArray, language = 'es') => {
  if (!Array.isArray(dataArray)) return dataArray;
  
  return dataArray.map(item => translateDataItem(item, language));
};

// Función para obtener un item específico por ID y traducirlo
export const getTranslatedItemById = (dataArray, id, language = 'es') => {
  const item = dataArray.find(item => item.id === id);
  return item ? translateDataItem(item, language) : null;
};

// Función para obtener items por tipo y traducirlos
export const getTranslatedItemsByType = (dataArray, type, language = 'es') => {
  const items = dataArray.filter(item => item.type === type);
  return translateDataArray(items, language);
};
