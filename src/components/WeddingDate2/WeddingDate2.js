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
            name: 'Hotel Solar de las Ánimas',
            address: 'Calle Ramón Corona, 86 Colonia Centro , 46400 Jalisco, México',
            phone: ' +(52) 374 742 67 00',
            email: 'info@solardelasanimas.com',
            website: 'www.hotelsolardelasanimas.com',
            description: 'Hotel con arquitectura típica mexicana del siglo XVII. Ofrece 93 habitaciones con diseño virreinal, combinando confort moderno con historia y tradiciones de más de 490 años.',
            images: [
                require('../../images/event/SolarDeLasAnimas1.jpg'),
                require('../../images/event/SolarDeLasAnimas2.webp'),
                require('../../images/event/SolarDeLasAnimas3.jpg'),
                require('../../images/event/SolarDeLasAnimas4.jpg')

            ]
        },
        {
            id: 2,
            name: 'Hotel Plaza Jardín',
            address: 'José Cuervo 13, La Villa, 46400 Tequila, Jal.',
            phone: '+523747420061',
            email: 'NA',
            website: 'www.hotelplazajardin.com',
            description: 'Ubicado en el centro de Tequila, este hotel ofrece un marco rústico y elegante con auténtico encanto mexicano. El lugar perfecto para construir historias inolvidables.',
            images: [
                require('../../images/event/PlazaJardin1.jpg'),
                require('../../images/event/PlazaJardin2.webp'),
                require('../../images/event/PlazaJardin3.JPEG'),
                require('../../images/event/PlazaJardin4.jpg')
            ]
        },
        {
            id: 3,
            name: 'Nueve Agaves Hotel',
            address: 'Francisco Javier Sauza Mora 21, La Villa, 46400 Tequila, Jal.',
            phone: '+523861003407',
            email: 'NA',
            website: 'www.nueveagaveshotel.com.mx',
            description: 'Hotel enfocado en brindar servicio de hospedaje cálido y confortable. Promueve la cultura y tradiciones del pueblo mágico de Tequila, garantizando una experiencia única.',
            images: [
                require('../../images/event/NueveAgaves1.webp'),
                require('../../images/event/NueveAgaves2.JPEG'),
                require('../../images/event/NueveAgaves3.JPEG'),
                require('../../images/event/NueveAgaves4.JPEG')
            ]
        },
        {
            id: 4,
            name: 'Casa Tahona',
            address: 'C. Luis Navarro 28, Centro, 46400 Tequila, Jal.',
            phone: '+523331710731',
            email: 'NA',
            description: 'Casa boutique ubicada en el centro del pueblo mágico de Tequila. A solo una cuadra de las principales atracciones, destilerías y todo lo que deseas visitar.',
            images: [
                require('../../images/event/casaTahona1.avif'),
                require('../../images/event/casaTahona2.avif'),
                require('../../images/event/casaTahona3.jpg')
            ]
        },
        {
            id: 5,
            name: 'Hotel Casa La Gran Señora',
            address: 'Nicolás Bravo No. 72, Centro, 46400 Tequila, Jal.',
            phone: '+523747423300',
            email: 'hotelcasalagransenora@hotmail.com',
            description: 'Hotel acogedor ubicado en el centro de Tequila. Un lugar donde los huéspedes pueden descansar y disfrutar plenamente su estadía en el Paisaje Agavero.',
            images: [
                require('../../images/event/HotelCasaLaGranSeñora.JPEG'),
                require('../../images/event/HotelCasaLaGranSeñora2.JPEG'),
                require('../../images/event/HotelCasaLaGranSeñora3.JPEG'),
                require('../../images/event/HotelCasaLaGranSeñora4.JPEG')
            ]
        },
        {
            id: 6,
            name: 'Hotel de Barricas',
            address: 'La Cofradía 1297 La Cofradía, 46400 Tequila, Jal.',
            phone: '+523747426800',
            email: 'atencionespecializadacofradia@gmail.com',
            description: 'Complejo turístico único donde cada detalle está creado para una experiencia auténtica. Hospedaje especial, sabores conectados con la tierra y momentos inolvidables.',
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