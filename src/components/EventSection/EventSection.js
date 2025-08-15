import React from 'react'
import { Slide } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslatedEvents } from '../../hooks/useTranslatedData';
import sImg1 from '../../images/event/Iglesia.jpeg'
import sImg2 from '../../images/event/LugarBoda.PNG'
import sImg3 from '../../images/event/3.jpg'
import sImg4 from '../../images/event/Aeropuerto.webp'
import sImg5 from '../../images/event/cantaritos.jpg'

import LocationMap from './Modal'
import './EventSection.css'

const EventSection = (props) => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const events = useTranslatedEvents();
    
    // Mapear los eventos del JSON a la estructura del componente
    const Events = events.map((event, index) => {
        // Mapear las imágenes según el slug del evento
        let eventImage;
        switch(event.slug) {
            case 'the-arrival':
                eventImage = sImg4;
                break;
            case 'los-cantaritos':
                eventImage = sImg5;
                break;
            case 'the-reception':
                eventImage = sImg1;
                break;
            case 'the-ceremony':
                eventImage = sImg2;
                break;
            default:
                eventImage = sImg3;
        }

        return {
            Simg: eventImage,
            title: event.title,
            li1: event.eventDate,
            li2: event.eventLocation,
            animation: (1200 + (index * 200)).toString(),
            slug: event.slug,
            mapUrl: event.mapUrl,
            proImg: eventImage
        };
    });

    const handleEventClick = (slug) => {
        navigate(`/product-single/${slug}`);
    };

    const handleLocationClick = (e) => {
        e.stopPropagation(); // Prevenir que se ejecute el onClick del contenedor
    };

    return (
        <section className="wpo-event-section" id="event" style={{backgroundColor: '#f6f1ee'}}>
            <div className="container">
                <SectionTitle 
                    subTitle={t('itinerarySubtitle')} 
                    MainTitle={t('itinerary')} 
                />
                <div className="timeline-container">
                    <div className="timeline">
                        {Events.map((event, eitem) => (
                            <div className={`timeline-item ${eitem % 2 === 0 ? 'timeline-left' : 'timeline-right'}`} key={eitem}>
                                <Slide direction={eitem % 2 === 0 ? "left" : "right"} duration={event.animation} triggerOnce="true">
                                    <div className="timeline-content" 
                                         onClick={() => handleEventClick(event.slug)}
                                         style={{ cursor: 'pointer' }}>
                                        <div className="timeline-icon">
                                            <div className="timeline-number">{eitem + 1}</div>
                                        </div>
                                        
                                        <div className="timeline-card">
                                            <div className="timeline-image">
                                                <img src={event.Simg} alt={event.title} />
                                            </div>
                                            
                                            <div className="timeline-details">
                                                <h3 className="timeline-title">{event.title}</h3>
                                                <div className="timeline-info">
                                                    <div className="info-item">
                                                        <i className="fa fa-calendar"></i>
                                                        <span>{event.li1}</span>
                                                    </div>
                                                    <div className="info-item">
                                                        <i className="fa fa-map-marker"></i>
                                                        <span>{event.li2}</span>
                                                    </div>
                                                    <div className="info-item location-map" onClick={(e) => handleLocationClick(e)}>
                                                        <i className="fa fa-map"></i>
                                                        <LocationMap mapUrl={event.mapUrl} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;