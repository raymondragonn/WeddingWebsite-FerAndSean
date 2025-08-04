import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import './guadalajara-page.css'

// Import images
import guadalajaraImg from '../../images/guadalajara.jpg';
import iglesia from '../../images/Iglesia.jpg';
import tortaahogada from '../../images/tortaahogada.jpg';

// import tortaAhogadaImg from '../../images/torta-ahogada.jpg';

const RsvpPage2 = () => {
    return (
        <Fragment>
            <div className="guadalajara-page">
                <Navbar/>
                <PageTitle pageTitle={'Descubre Guadalajara'} pagesub={'Tu Guía de la Perla Tapatía'} />
                
                {/* Sección Principal de Guadalajara */}
                <section className="wpo-about-section section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-wrap">
                                    <div className="wpo-about-item">
                                        <div className="wpo-about-text">
                                            <h2>¡Bienvenidos a Guadalajara!</h2>
                                            <p>La "Perla Tapatía" te espera con los brazos abiertos. Guadalajara es la segunda ciudad más grande de México y la cuna de tradiciones que han conquistado el mundo: el mariachi, el tequila y la charrería. Una ciudad que combina perfectamente la historia colonial con la modernidad, ofreciendo experiencias únicas para todos nuestros queridos invitados.</p>
                                            
                                            <h3>¿Por qué es especial Guadalajara?</h3>
                                            <ul className="about-list">
                                                <li><i className="fi flaticon-heart"></i> <strong>Cuna del Mariachi:</strong> Aquí nació la música que representa a México en el mundo</li>
                                                <li><i className="fi flaticon-heart"></i> <strong>Capital del Tequila:</strong> Rodeada por los agaves que producen nuestra bebida nacional</li>
                                                <li><i className="fi flaticon-heart"></i> <strong>Patrimonio Cultural:</strong> Centro histórico declarado Patrimonio de la Humanidad</li>
                                                <li><i className="fi flaticon-heart"></i> <strong>Gastronomía única:</strong> Hogar de la torta ahogada, las carnitas y mucho más</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img hover-scale">
                                    <img src={iglesia} alt="Catedral de Guadalajara" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Lugares Imperdibles */}
                <section className="wpo-service-section-s2 section-padding">
                    <div className="container">
                        <div className="wpo-section-title">
                            <h2>Lugares que No Te Puedes Perder</h2>
                            <p>Descubre los tesoros que Guadalajara tiene para ofrecerte durante tu visita</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-church"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>Centro Histórico</h2>
                                        <p>Camina por las calles empedradas, visita la majestuosa Catedral y disfruta de la Plaza de Armas. El corazón de la ciudad donde late la historia de México.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-music-note"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>Tlaquepaque</h2>
                                        <p>Pueblo mágico lleno de arte, artesanías y mariachis. Perfecto para llevarte un recuerdo auténtico de México y disfrutar de la cultura local.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-agave"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>Tequila, Jalisco</h2>
                                        <p>A solo una hora de la ciudad, descubre los campos de agave azul y las destilerías donde nace el tequila. Una experiencia única e imperdible.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-restaurant"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>Mercado San Juan de Dios</h2>
                                        <p>El mercado cubierto más grande de Latinoamérica. Aquí encontrarás desde comida tradicional hasta artesanías típicas de la región.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-theater"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>Teatro Degollado</h2>
                                        <p>Joya arquitectónica del siglo XIX donde podrás disfrutar de espectáculos de mariachi, ballet folclórico y ópera en un ambiente sublime.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-park"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2>Bosque Colomos</h2>
                                        <p>Escápate del bullicio de la ciudad en este hermoso parque lleno de vegetación, lagos y espacios perfectos para relajarse y conectar con la naturaleza.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Gastronomía */}
                <section className="wpo-about-section-s3 section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-img hover-scale">
                                    <img src={tortaahogada} alt="Gastronomía tapatía" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-about-wrap">
                                    <div className="wpo-about-item">
                                        <div className="wpo-about-text">
                                            <h2>Sabores que Enamoran</h2>
                                            <p>La gastronomía tapatía es una experiencia que despierta todos los sentidos. Cada platillo cuenta una historia, cada sabor es una tradición que se ha pasado de generación en generación.</p>
                                            
                                            <h3>Platillos que debes probar:</h3>
                                            <ul className="about-list">
                                                <li><i className="fi flaticon-food"></i> <strong>Torta Ahogada:</strong> El ícono gastronómico de Guadalajara</li>
                                                <li><i className="fi flaticon-food"></i> <strong>Birria:</strong> Guiso tradicional perfecto para cualquier hora</li>
                                                <li><i className="fi flaticon-food"></i> <strong>Carnitas:</strong> Carne de cerdo cocida en su propia grasa</li>
                                                <li><i className="fi flaticon-food"></i> <strong>Tejuino:</strong> Bebida refrescante hecha de maíz fermentado</li>
                                                <li><i className="fi flaticon-food"></i> <strong>Jericalla:</strong> Postre cremoso que te robará el corazón</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Consejos Prácticos */}
                <section className="wpo-contact-section section-padding">
                    <div className="container">
                        <div className="wpo-section-title">
                            <h2>Consejos Prácticos para tu Visita</h2>
                            <p>Información útil para que disfrutes al máximo tu estancia en Guadalajara</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-contact-item">
                                    <h3>🌤️ Clima</h3>
                                    <p>Guadalajara disfruta de un clima semicálido y semiseco. Las temperaturas oscilan entre 10°C y 30°C. Te recomendamos traer ropa ligera para el día y una chamarra para las noches.</p>
                                    
                                    <h3>🚗 Transporte</h3>
                                    <p>La ciudad cuenta con sistema de transporte público (Macrobús y tren ligero), Uber, Didi, y taxis. El aeropuerto está a 20 minutos del centro de la ciudad.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-contact-item">
                                    <h3>💱 Moneda</h3>
                                    <p>La moneda oficial es el peso mexicano (MXN). Puedes cambiar dinero en bancos, casas de cambio o usar cajeros automáticos que se encuentran por toda la ciudad.</p>
                                    
                                    <h3>🗣️ Idioma</h3>
                                    <p>El español es el idioma oficial, pero en zonas turísticas y hoteles también se habla inglés. Los tapatíos son muy amables y siempre dispuestos a ayudar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer footerClass={'wpo-site-footer-s2'}/>
                <Scrollbar />
            </div>
        </Fragment>
    )
};

export default RsvpPage2;
