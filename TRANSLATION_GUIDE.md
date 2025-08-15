# Guía de Traducción - WebBoda

## Descripción General

Este proyecto ha sido adaptado para soportar cambio de idioma dinámico. El sistema permite cambiar entre español (es) e inglés (en) de forma automática, traduciendo tanto los textos estáticos como los datos dinámicos del JSON.

## Estructura de Archivos

### 1. Contexto de Idioma
- **`src/contexts/LanguageContext.js`**: Maneja el estado global del idioma y proporciona las traducciones estáticas.

### 2. Datos Traducidos
- **`src/api/data.json`**: Contiene todos los datos con estructura de traducción (es/en).
- **`src/api/index.js`**: API actualizada con funciones para obtener datos traducidos.
- **`src/utils/dataUtils.js`**: Utilidades para procesar y traducir datos del JSON.

### 3. Hooks Personalizados
- **`src/hooks/useTranslatedData.js`**: Hooks para facilitar el uso de datos traducidos en componentes.

## Cómo Usar el Sistema de Traducción

### 1. En Componentes con Textos Estáticos

```jsx
import { useLanguage } from '../contexts/LanguageContext';

const MiComponente = () => {
  const { t, language, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('miTitulo')}</h1>
      <p>{t('miDescripcion')}</p>
      <button onClick={toggleLanguage}>
        {t('languageButton')}
      </button>
    </div>
  );
};
```

### 2. En Componentes con Datos del JSON

```jsx
import { useTranslatedEvents, useTranslatedProducts } from '../hooks/useTranslatedData';

const MiComponenteEventos = () => {
  const events = useTranslatedEvents(); // Obtiene eventos traducidos
  const products = useTranslatedProducts(); // Obtiene productos traducidos
  
  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### 3. Hooks Disponibles

- `useTranslatedData()`: Todos los datos traducidos
- `useTranslatedEvents()`: Solo eventos traducidos
- `useTranslatedProducts()`: Solo productos traducidos
- `useTranslatedItem(id)`: Item específico por ID
- `useTranslatedEvent(slug)`: Evento específico por slug
- `useTranslatedProduct(slug)`: Producto específico por slug

### 4. Funciones de API Directas

```jsx
import { getEvents, getProducts, getEventBySlug } from '../api';

// Con idioma específico
const events = getEvents('en'); // Eventos en inglés
const products = getProducts('es'); // Productos en español
const event = getEventBySlug('the-reception', 'en'); // Evento específico en inglés
```

## Estructura de Datos Traducidos

### Formato en data.json

```json
{
  "id": 1,
  "title": {
    "es": "Título en Español",
    "en": "Title in English"
  },
  "description": {
    "es": "Descripción en español",
    "en": "Description in English"
  },
  "details": {
    "es": ["Detalle 1", "Detalle 2"],
    "en": ["Detail 1", "Detail 2"]
  },
  "logistics": {
    "arrival": {
      "title": {
        "es": "Llegada",
        "en": "Arrival"
      },
      "details": {
        "es": ["Detalle llegada"],
        "en": ["Arrival detail"]
      }
    }
  }
}
```

## Componentes Actualizados

### EventSection
- ✅ Usa `useTranslatedEvents()` para obtener eventos traducidos
- ✅ Mapea automáticamente las imágenes según el slug del evento
- ✅ Muestra títulos, fechas y ubicaciones traducidas

### Product2
- ✅ Usa `useTranslatedProducts()` para obtener productos traducidos
- ✅ Muestra títulos y descripciones traducidas
- ✅ Mantiene funcionalidad de carrito y wishlist

## Agregar Nuevas Traducciones

### 1. Textos Estáticos (LanguageContext.js)

```javascript
const translations = {
  es: {
    // ... traducciones existentes
    nuevaTraduccion: 'Texto en español'
  },
  en: {
    // ... traducciones existentes
    nuevaTraduccion: 'Text in English'
  }
};
```

### 2. Datos Dinámicos (data.json)

```json
{
  "id": 999,
  "title": {
    "es": "Nuevo Título",
    "en": "New Title"
  },
  "description": {
    "es": "Nueva descripción",
    "en": "New description"
  }
}
```

## Mejores Prácticas

1. **Siempre usa los hooks**: En lugar de importar datos directamente, usa los hooks `useTranslated*`.
2. **Mantén consistencia**: Usa las mismas claves de traducción en ambos idiomas.
3. **Fallback**: El sistema tiene fallback a español si no encuentra una traducción.
4. **Performance**: Los hooks usan `useMemo` para evitar re-renders innecesarios.

## Troubleshooting

### Problema: Los datos no se traducen
- Verifica que estés usando los hooks correctos (`useTranslatedEvents`, `useTranslatedProducts`)
- Asegúrate de que el `LanguageProvider` envuelva tu aplicación

### Problema: Textos estáticos no cambian
- Verifica que estés usando la función `t()` del contexto
- Asegúrate de que la clave de traducción exista en ambos idiomas

### Problema: Componente no se actualiza al cambiar idioma
- Verifica que el componente esté usando los hooks de traducción
- Asegúrate de que el `LanguageProvider` esté en el árbol de componentes

## Ejemplo Completo

```jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslatedEvents } from '../hooks/useTranslatedData';

const EventosComponent = () => {
  const { t, language } = useLanguage();
  const events = useTranslatedEvents();
  
  return (
    <div>
      <h1>{t('itinerary')}</h1>
      <p>{t('itinerarySubtitle')}</p>
      
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <span>{event.eventDate}</span>
          <span>{event.eventLocation}</span>
        </div>
      ))}
    </div>
  );
};
```

Este sistema proporciona una solución completa y escalable para el manejo de idiomas en la aplicación WebBoda.
