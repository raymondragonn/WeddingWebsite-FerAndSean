import React from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext';
import sImg1 from '../../images/event/1.jpg'
import sImg2 from '../../images/event/2.jpg'
import sImg3 from '../../images/event/3.jpg'
import LocationMap from './Modal'

const EventSection = (props) => {
    const { t } = useLanguage();
    
    const Events = [
        {
            Simg: sImg1,
            title: t('theReception'),
            li1: t('eventDate'),
            li2: t('eventLocation'),
            li3: t('eventPhone'),
            animation:'1200',
        },
        {
            Simg: sImg2,
            title: t('theCeremony'),
            li1: t('eventDate'),
            li2: t('eventLocation'),
            li3: t('eventPhone'),
            animation:'1400',
        },
        {
            Simg: sImg3,
            title: t('theParty'),
            li1: t('eventDate'),
            li2: t('eventLocation'),
            li3: t('eventPhone'),
            animation:'1600',
        },
    ]

    return (
        <section className="wpo-event-section section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={t('ourWedding')} MainTitle={t('whenAndWhere')} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item">
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
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                                <li><LocationMap /></li>
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