import React from 'react'
import { Slide } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext';
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
    
    const Events = [
        {
            Simg: sImg4,
            title: t('Llegada'),
            li1: t('llegada'),
            li2: t('aeropuerto'),
            animation:'1400',
            slug: 'the-arrival',
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.528613136687!2d-103.31221792493336!3d20.525541481000804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4daad5240069%3A0x4c14fc392e7d6f9d!2sAeropuerto%20Internacional%20de%20Guadalajara!5e0!3m2!1ses!2smx!4v1754950324746!5m2!1ses!2smx" ,
            proImg: sImg4
        },
        {
            Simg: sImg5,
            title: t('Cantaritos'),
            li1: t('fechacantaritos'),
            li2: t('lugarCantaritos'),
            animation:'1400',
            slug: 'los-cantaritos',
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.3884844163513!2d-103.76710147492405!3d20.856386180750192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8426170566424a4b%3A0x68d0a3b104ded7bf!2sCantaritos%20el%20G%C3%BCero%20%231!5e0!3m2!1ses!2smx!4v1754950821218!5m2!1ses!2smx",
            proImg: sImg5
        },
        {
            Simg: sImg1,
            title: t('theReception'),
            li1: t('eventDate1'),
            li2: t('eventLocation1'),
            animation:'1200',
            slug: 'the-reception',
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8368.382838205276!2d-103.83853937824018!3d20.884509581819902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842615dd4bd04cf9%3A0x8980ab78799224e9!2sParroquia%20Santiago%20Ap%C3%B3stol!5e0!3m2!1ses!2smx!4v1754148173128!5m2!1ses!2smx",
            proImg: sImg3
        },
        {
            Simg: sImg2,
            title: t('theCeremony'),
            li1: t('eventDate2'),
            li2: t('eventLocation2'),
            animation:'1400',
            slug: 'the-ceremony',
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29817.06255800722!2d-103.83386376679846!3d20.906975359972215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84263fc89e7aaf67%3A0x1a490d668cc314e1!2sLa%20Cueva%20de%20la%20Luna!5e0!3m2!1ses!2smx!4v1754147243660!5m2!1ses!2smx",
            proImg: sImg3
        }
        
    ]

    const handleEventClick = (slug) => {
        navigate(`/product-single/${slug}`);
    };

    const handleLocationClick = (e) => {
        e.stopPropagation(); // Prevenir que se ejecute el onClick del contenedor
    };

    return (
        <section className="wpo-event-section section-padding" id="event" style={{backgroundColor: '#f6f1ee'}}>
            <div className="container">
                <SectionTitle 
                    subTitle={'Te invitamos a celebrar con nosotros en estos lugares especiales'} 
                    MainTitle={'Itinerario'} 
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
                                                    {/* <div className="info-item">
                                                        <i className="fa fa-phone"></i>
                                                        <span>{event.li3}</span>
                                                    </div> */}
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