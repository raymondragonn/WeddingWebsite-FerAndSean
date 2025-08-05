import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import './EventDetails.css';
// Importar las imágenes de eventos
import eventImage1 from '../../images/event/Iglesia.jpeg';
import eventImage2 from '../../images/event/LugarBoda.PNG';
import imgIA from '../../images/IglesiaIA.jpeg'



const ProductSinglePage = (props) => {
    const { slug } = useParams()

    const productsArray = api();
    const Allproduct = productsArray

    // Mapeo de imágenes de eventos
    const eventImages = {
        'the-reception': imgIA,
        'the-ceremony': eventImage2
    };

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const { addToCart } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === String(slug)))
    }, [slug, Allproduct]);

    const item = product[0];
    const isEvent = item && item.type === 'event';
    
    // Obtener la imagen correcta para eventos
    const getEventImage = () => {
        if (isEvent && eventImages[item.slug]) {
            return eventImages[item.slug];
        }
        return item?.proImg;
    };

    return (
        <Fragment>
            <Navbar/>
            <PageTitle 
                pageTitle={isEvent ? 'Event Details' : 'Product Single'} 
                pagesub={isEvent ? 'Event Details' : 'Product Single'} 
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
                                                        <h4 className="event-detail-title">Fecha y Hora</h4>
                                                    </div>
                                                    <p className="event-detail-text primary">{item.eventDate}</p>
                                                    <p className="event-detail-text secondary">{item.eventTime}</p>
                                                </div>

                                                <div className="event-detail-section slide-up">
                                                    <div className="event-detail-header">
                                                        <h4 className="event-detail-title">Ubicación</h4>
                                                    </div>
                                                    <p className="event-detail-text primary">{item.eventLocation}</p>
                                                    <p className="event-detail-text secondary">{item.eventAddress}</p>
                                                    <p className="event-detail-text secondary">{item.eventPhone}</p>
                                                </div>

                                                <div className="event-detail-section slide-up">
                                                    <div className="event-detail-header">
                                                        <h4 className="event-detail-title">Descripción</h4>
                                                    </div>
                                                    <div className="event-description">
                                                        <p className="event-detail-text">{item.description}</p>
                                                    </div>
                                                </div>

                                                {item.details && (
                                                    <div className="event-detail-section slide-up">
                                                        <div className="event-detail-header">
                                                            <h4 className="event-detail-title">Detalles del Evento</h4>
                                                        </div>
                                                        <ul className="event-details-list">
                                                            {item.details.map((detail, index) => (
                                                                <li key={index}>{detail}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {item.mapUrl && (
                                                    <div className="event-detail-section event-map-section slide-up">
                                                        <div className="event-detail-header">
                                                            <h4 className="event-detail-title">Ubicación en el Mapa</h4>
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
                            <h3 className="not-found-title">Contenido no encontrado</h3>
                            <p className="not-found-text">Lo sentimos, no pudimos encontrar la información solicitada.</p>
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
