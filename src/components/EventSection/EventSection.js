import React from 'react'
import { Slide } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext';
import sImg1 from '../../images/event/Iglesia.jpeg'
import sImg2 from '../../images/event/LugarBoda.PNG'
import sImg3 from '../../images/event/3.jpg'
import LocationMap from './Modal'

const EventSection = (props) => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    
    const Events = [
        {
            Simg: sImg1,
            title: t('theReception'),
            li1: t('eventDate1'),
            li2: t('eventLocation1'),
            li3: t('eventPhone1'),
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
            li3: t('eventPhone2'),
            animation:'1400',
            slug: 'the-ceremony',
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29817.06255800722!2d-103.83386376679846!3d20.906975359972215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84263fc89e7aaf67%3A0x1a490d668cc314e1!2sLa%20Cueva%20de%20la%20Luna!5e0!3m2!1ses!2smx!4v1754147243660!5m2!1ses!2smx",
            proImg: sImg3
        },
        
    ]

    const handleEventClick = (slug) => {
        navigate(`/product-single/${slug}`);
    };

    return (
        <section className="wpo-event-section section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={t('ourWedding')} MainTitle={t('whenAndWhere')} />
                <div className="wpo-event-wrap">
                    <div className="row" style={{ justifyContent: 'center' }}>
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item" 
                                         onClick={() => handleEventClick(event.slug)}
                                         style={{ cursor: 'pointer' }}>
                                        <div className="wpo-event-img">
                                            <div className="wpo-event-img-inner">
                                                <img src={event.Simg} alt="" />
                                            </div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul>
                                                <li style={{ color: '#5C5C5C' }}>{event.li1}</li>
                                                <li style={{ color: '#5C5C5C' }}>{event.li2}</li>
                                                <li style={{ color: '#5C5C5C' }}>{event.li3}</li>
                                                <li style={{ color: '#5C5C5C' }}><LocationMap mapUrl={event.mapUrl} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;