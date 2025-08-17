import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslatedEvents } from '../../hooks/useTranslatedData';
import './ItineraryBanner.css';

const ItineraryBanner = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const events = useTranslatedEvents();

    const handleEventClick = (slug) => {
        navigate(`/product-single/${slug}`);
    };

    return (
        <div className="itinerary-banner">
            <div className="banner-content">
                <div className="banner-header">
                    <h3 className="banner-title">{t('itinerary')}</h3>
                    <p className="banner-subtitle">{t('itinerarySubtitle')}</p>
                </div>
                
                <div className="itinerary-summary">
                    <div className="summary-grid">
                        {events.slice(0, 4).map((event, index) => (
                            <div 
                                className="summary-item" 
                                key={index}
                                onClick={() => handleEventClick(event.slug)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="item-number">{index + 1}</div>
                                <div className="item-content">
                                    <h4 className="item-title">{event.title}</h4>
                                    <p className="item-date">{event.eventDate}</p>
                                    <p className="item-location">{event.eventLocation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryBanner;
