import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { addToCart } from "../../store/actions/action";
import Product from './product'
import { useTranslatedEvent, useTranslatedProduct } from "../../hooks/useTranslatedData";
import { useLanguage } from "../../contexts/LanguageContext";
import ProductTabs from './alltab';
import './EventDetails.css';
// Importar las imágenes de eventos
import eventImage1 from '../../images/event/Iglesia.jpeg';
import eventImage2 from '../../images/event/LugarBoda.PNG';
import imgIA from '../../images/IglesiaIA.jpeg';
import airportImage from '../../images/event/Aeropuerto.webp';
import cantaritosImage from '../../images/event/fondaCholula.jpg';

const ProductSinglePage = (props) => {
    const { slug } = useParams();
    const { t } = useLanguage();

    // Mapeo de imágenes de eventos
    const eventImages = {
        'the-reception': imgIA,
        'the-ceremony': eventImage2,
        'the-arrival': airportImage,
        'Fiesta de bienvenida': cantaritosImage
    };

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const { addToCart } = props;
    const [item, setItem] = useState(null);
    const [isEvent, setIsEvent] = useState(false);

    // Intentar obtener como evento primero
    const event = useTranslatedEvent(slug);
    const product = useTranslatedProduct(slug);

    useEffect(() => {
        if (event) {
            setItem(event);
            setIsEvent(true);
        } else if (product) {
            setItem(product);
            setIsEvent(false);
        } else {
            setItem(null);
            setIsEvent(false);
        }
    }, [event, product]);
    
    // Obtener la imagen correcta para eventos
    const getEventImage = () => {
        if (isEvent && eventImages[item?.slug]) {
            return eventImages[item.slug];
        }
        return item?.proImg;
    };

    return (
        <Fragment>
            <Navbar/>
            <PageTitle 
                pageTitle={isEvent ? t('Event Details') : t('Product Single')} 
                pagesub={isEvent ? t('Event Details') : t('Product Single')} 
            />
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? (
                        isEvent ? (
                            <div className="event-details-container fade-in">
                                <div className="row">
                                    <div className="col col-lg-5 col-12">
                                        <div className="event-image-container slide-up">
                                            <img src={getEventImage()} alt={item.title} className="event-image" />
                                            <div className="event-image-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-7 col-12">
                                        <div className="event-content">
                                            <h2 className="event-title">{item.title}</h2>
                                            
                                            <div className="event-info-grid">

                                                <div className="event-detail-section slide-up">
                                                    <div className="event-detail-header">
                                                        <h4 className="event-detail-title">{t('eventDescription')}</h4>
                                                    </div>
                                                    <div className="event-description">
                                                        <p className="event-detail-text">{item.description}</p>
                                                    </div>
                                                </div>
                                                <div className="event-detail-section slide-up">
                                                    <div className="event-detail-header">
                                                        <h4 className="event-detail-title">{t('eventDate')}</h4>
                                                    </div>
                                                    <p className="event-detail-text primary">{item.eventDate}</p>
                                                    <p className="event-detail-text secondary">{item.eventTime}</p>
                                                </div>

                                                <div className="event-detail-section slide-up">
                                                    <div className="event-detail-header">
                                                        <h4 className="event-detail-title">{t('eventLocation')}</h4>
                                                    </div>
                                                    <p className="event-detail-text primary">{item.eventLocation}</p>
                                                    <p className="event-detail-text secondary">{item.eventAddress}</p>
                                                    <p className="event-detail-text secondary">{item.eventPhone}</p>
                                                </div>
                                                {item.mapUrl && (
                                                    <div className="event-detail-section slide-up">
                                                        <div className="event-detail-header">
                                                            <h4 className="event-detail-title">{t('eventMap') || 'Mapa del Evento'}</h4>
                                                        </div>
                                                        <div className="event-map-container">
                                                            <iframe 
                                                                src={item.mapUrl}
                                                                width="100%" 
                                                                height="400"
                                                                className="event-map-iframe"
                                                                allowFullScreen=""
                                                                loading="lazy"
                                                                referrerPolicy="no-referrer-when-downgrade"
                                                                title={`Mapa de ${item.eventLocation}`}
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                )}

                                                {item.logistics && (
                                                    <div className="event-detail-section slide-up">
                                                        <div className="event-detail-header">
                                                            <h4 className="event-detail-title">{t('eventLogistics')}</h4>
                                                        </div>
                                                        <div className="event-logistics">
                                                            {Object.entries(item.logistics).map(([key, section]) => (
                                                                <div key={key} className="logistics-subsection">
                                                                    <h5 className="logistics-subtitle">{section.title}</h5>
                                                                    <ul className="logistics-details-list">
                                                                        {section.details.map((detail, index) => (
                                                                            <li key={index} className="logistics-detail-item">
                                                                                {detail}
                                                                                {index === 0 && section.bookingLink && (
                                                                                    <a 
                                                                                        href={section.bookingLink}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="theme-btn"
                                                                                        style={{
                                                                                            display: 'inline-block',
                                                                                            padding: '8px 20px',
                                                                                            fontSize: '14px',
                                                                                            textDecoration: 'none',
                                                                                            marginLeft: '10px'
                                                                                        }}
                                                                                    >
                                                                                        {section.bookingText}
                                                                                    </a>
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                

                                                {/* {item.details && (
                                                    <div className="event-detail-section slide-up">
                                                        <div className="event-detail-header">
                                                            <h4 className="event-detail-title">{t('eventDetails')}</h4>
                                                        </div>
                                                    </div>
                                                )} */}  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Product
                                item={item}
                                addToCart={addToCartProduct}
                            />
                        )
                    ) : (
                        <div className="not-found-container fade-in">
                            <h3 className="not-found-title">{t('contentNotFound')}</h3>
                            <p className="not-found-text">{t('contentNotFoundMessage')}</p>
                        </div>
                    )}
                    {!isEvent && <ProductTabs />}
                </div>
            </section>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
