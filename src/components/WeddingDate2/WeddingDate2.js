import React, { useState } from 'react';
import './WeddingDate2.css';

const WeddingDate2 = (props) => {
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    const hotels = [
        {
            id: 1,
            name: 'Hotel Elegance',
            address: 'Av. Principal 123, Centro Histórico',
            phone: '+52 (55) 1234-5678',
            email: 'reservas@hotelelegance.com',
            website: 'www.hotelelegance.com',
            description: 'Hotel boutique con elegancia clásica y servicio personalizado',
            images: [
                require('../../images/event/1.jpg'),
                require('../../images/event/2.jpg'),
                require('../../images/event/3.jpg')
            ]
        },
        {
            id: 2,
            name: 'Resort Paradise',
            address: 'Boulevard Costero 456, Zona Hotelera',
            phone: '+52 (55) 9876-5432',
            email: 'info@resortparadise.com',
            website: 'www.resortparadise.com',
            description: 'Resort frente al mar con todas las comodidades para tu estancia',
            images: [
                require('../../images/event/4.jpg'),
                require('../../images/event/5.jpg'),
                require('../../images/event/6.jpg')
            ]
        },
        {
            id: 3,
            name: 'Casa Boutique Inn',
            address: 'Calle Romántica 789, Barrio Colonial',
            phone: '+52 (55) 5555-1234',
            email: 'contacto@casaboutiqueinn.com',
            website: 'www.casaboutiqueinn.com',
            description: 'Ambiente íntimo y acogedor en el corazón de la ciudad',
            images: [
                require('../../images/event/7.jpg'),
                require('../../images/event/8.jpg'),
                require('../../images/event/9.jpg')
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
        <section className={`hotels-section ${props.pbClass || ''}`}>
            <div className="container">
                <div className="hotels-header">
                    <h2 className="hotels-title">Hoteles Recomendados</h2>
                    <p className="hotels-subtitle">
                        Hemos seleccionado estos hoteles para que tengas una estancia perfecta durante nuestra celebración
                    </p>
                </div>
                
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
                                        aria-label="Imagen anterior"
                                    >
                                        ‹
                                    </button>
                                    <button 
                                        className="carousel-btn next-btn"
                                        onClick={() => nextImage(hotel.id, hotel.images.length)}
                                        aria-label="Siguiente imagen"
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
                                                aria-label={`Ir a imagen ${index + 1}`}
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
                                        <span className="detail-text">{hotel.address}</span>
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
                                    
                                    <div className="hotel-detail">
                                        <span className="detail-icon">🌐</span>
                                        <a 
                                            href={`https://${hotel.website}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="detail-link"
                                        >
                                            {hotel.website}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="hotel-actions">
                                    <a 
                                        href={`tel:${hotel.phone}`} 
                                        className="btn-call"
                                    >
                                        Llamar
                                    </a>
                                    <a 
                                        href={`https://${hotel.website}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn-website"
                                    >
                                        Reservar
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