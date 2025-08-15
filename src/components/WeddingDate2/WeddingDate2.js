import React, { useState } from 'react';
import './WeddingDate2.css';
import SectionTitle from '../SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';

const WeddingDate2 = (props) => {
    const { t } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    const hotels = [
        {
            id: 1,
            name: t('hotelSolarAnimas'),
            address: t('hotelSolarAnimasAddress'),
            phone: '+(52) 374 742 67 00',
            email: 'info@solardelasanimas.com',
            website: 'www.hotelsolardelasanimas.com',
            description: t('hotelSolarAnimasDescription'),
            images: [
                require('../../images/event/SolarDeLasAnimas1.jpg'),
                require('../../images/event/SolarDeLasAnimas2.webp'),
                require('../../images/event/SolarDeLasAnimas3.jpg'),
                require('../../images/event/SolarDeLasAnimas4.jpg')

            ]
        },
        {
            id: 2,
            name: t('hotelPlazaJardin'),
            address: t('hotelPlazaJardinAddress'),
            phone: '+(52) 374 742 00 61',
            email: 'NA',
            website: 'www.hotelplazajardin.com',
            description: t('hotelPlazaJardinDescription'),
            images: [
                require('../../images/event/PlazaJardin1.jpg'),
                require('../../images/event/PlazaJardin2.webp'),
                require('../../images/event/PlazaJardin3.JPEG'),
                require('../../images/event/PlazaJardin4.jpg')
            ]
        },
        {
            id: 3,
            name: t('hotelNueveAgaves'),
            address: t('hotelNueveAgavesAddress'),
            phone: '+(52) 386 100 34 07',
            email: 'NA',
            website: 'www.nueveagaveshotel.com.mx',
            description: t('hotelNueveAgavesDescription'),
            images: [
                require('../../images/event/NueveAgaves1.webp'),
                require('../../images/event/NueveAgaves2.JPEG'),
                require('../../images/event/NueveAgaves3.JPEG'),
                require('../../images/event/NueveAgaves4.JPEG')
            ]
        },
        {
            id: 4,
            name: t('casaTahona'),
            address: t('casaTahonaAddress'),
            phone: '+(52) 333 171 07 31',
            email: 'NA',
            description: t('casaTahonaDescription'),
            images: [
                require('../../images/event/casaTahona1.avif'),
                require('../../images/event/casaTahona2.avif'),
                require('../../images/event/casaTahona3.jpg')
            ]
        },
        {
            id: 5,
            name: t('hotelCasaGranSenora'),
            address: t('hotelCasaGranSenoraAddress'),
            phone: '+(52) 374 742 33 00',
            email: 'hotelcasalagransenora@hotmail.com',
            description: t('hotelCasaGranSenoraDescription'),
            images: [
                require('../../images/event/HotelCasaLaGranSeñora.JPEG'),
                require('../../images/event/HotelCasaLaGranSeñora2.JPEG'),
                require('../../images/event/HotelCasaLaGranSeñora3.JPEG'),
                require('../../images/event/HotelCasaLaGranSeñora4.JPEG')
            ]
        },
        {
            id: 6,
            name: t('hotelBarricas'),
            address: t('hotelBarricasAddress'),
            phone: '+(52) 374 742 68 00',
            email: 'atencionespecializadacofradia@gmail.com',
            description: t('hotelBarricasDescription'),
            images: [
                require('../../images/event/HotelBarricas1.webp'),
                require('../../images/event/HotelBarricas2.webp'),
                require('../../images/event/HotelBarricas3.JPEG'),
                require('../../images/event/HotelBarricas4.JPEG')
            ]
        }
    
    ];

    const nextImage = (hotelId, imagesLength) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [hotelId]: ((prev[hotelId] || 0) + 1) % imagesLength
        }));
    };

    const prevImage = (hotelId, imagesLength) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [hotelId]: ((prev[hotelId] || 0) - 1 + imagesLength) % imagesLength
        }));
    };

    const goToImage = (hotelId, index) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [hotelId]: index
        }));
    };

    return (
        <section className={`hotels-section ${props.pbClass || ''}`} style={{ backgroundColor: '#f6f1ee' }}>
            <div className="container">
                <SectionTitle 
                    subTitle={t('hotelsSubtitle')} 
                    MainTitle={t('recommendedHotels')} 
                />
                
                <div className="hotels-grid">
                    {hotels.map((hotel) => (
                        <div key={hotel.id} className="hotel-card">
                            {/* Image Carousel */}
                            <div className="hotel-carousel">
                                <div className="carousel-container">
                                    <img 
                                        src={hotel.images[currentImageIndex[hotel.id] || 0]}
                                        alt={`${hotel.name} - Imagen ${(currentImageIndex[hotel.id] || 0) + 1}`}
                                        className="carousel-image"
                                    />
                                    
                                    {/* Navigation Arrows */}
                                    <button 
                                        className="carousel-btn prev-btn"
                                        onClick={() => prevImage(hotel.id, hotel.images.length)}
                                        aria-label={t('previousImage')}
                                    >
                                        ‹
                                    </button>
                                    <button 
                                        className="carousel-btn next-btn"
                                        onClick={() => nextImage(hotel.id, hotel.images.length)}
                                        aria-label={t('nextImage')}
                                    >
                                        ›
                                    </button>
                                    
                                    {/* Dots Indicator */}
                                    <div className="carousel-dots">
                                        {hotel.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`dot ${(currentImageIndex[hotel.id] || 0) === index ? 'active' : ''}`}
                                                onClick={() => goToImage(hotel.id, index)}
                                                aria-label={`${t('goToImage')} ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="hotel-content">
                                <h3 className="hotel-name">{hotel.name}</h3>
                                <p className="hotel-description">{hotel.description}</p>
                                
                                <div className="hotel-details">
                                    <div className="hotel-detail">
                                        <span className="detail-icon">📍</span>
                                        <a 
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="detail-link"
                                        >
                                            {hotel.address}
                                        </a>
                                    </div>
                                    
                                    <div className="hotel-detail">
                                        <span className="detail-icon">📞</span>
                                        <a href={`tel:${hotel.phone}`} className="detail-link">
                                            {hotel.phone}
                                        </a>
                                    </div>
                                    
                                    <div className="hotel-detail">
                                        <span className="detail-icon">✉️</span>
                                        <a href={`mailto:${hotel.email}`} className="detail-link">
                                            {hotel.email}
                                        </a>
                                    </div>
                                    
                                </div>
                                
                                <div className="hotel-actions">
                                    
                                    <a 
                                        href={`https://${hotel.website}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn-website"
                                    >
                                        {t('bookButton')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeddingDate2;