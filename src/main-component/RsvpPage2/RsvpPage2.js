import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useLanguage } from '../../contexts/LanguageContext';

// Import images
import guadalajaraImg from '../../images/guadalajara.jpg';
import iglesia from '../../images/Iglesia.jpg';
import tortaahogada from '../../images/tortaahogada.jpg';

// import tortaAhogadaImg from '../../images/torta-ahogada.jpg';

const RsvpPage2 = () => {
    const { t } = useLanguage();
    
    return (
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={t('discoverGuadalajara')} pagesub={t('pearlTapatia')} />
                
                <section className="wpo-about-section section-padding" style={{ backgroundColor: '#f6f1ee' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="wpo-about-wrap">
                                    <div className="wpo-about-item">
                                        <div className="wpo-about-text">
                                            <h2 style={{ color: '#5C5C5C' }}>{t('welcomeGuadalajara')}</h2>
                                            <p style={{ color: '#5C5C5C' }}>{t('guadalajaraDescription')}</p>
                                            
                                            <h3 style={{ color: '#5C5C5C' }}>{t('whySpecial')}</h3>
                                            <ul className="about-list" style={{ color: '#5C5C5C' }}>
                                                <li><strong>{t('mariachiCradle')}</strong></li>
                                                <li><strong>{t('tequilaCapital')}</strong></li>
                                                <li><strong>{t('culturalHeritage')}</strong></li>
                                                <li><strong>{t('uniqueGastronomy')}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wpo-service-section-s2 section-padding" style={{ backgroundColor: '#f6f1ee' }}>
                    <div className="container">
                        <div className="wpo-section-title">
                            <h2 style={{ color: '#5C5C5C' }}>{t('placesNotToMiss')}</h2>
                            <p style={{ color: '#5C5C5C' }}>{t('placesDescription')}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-church"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2 style={{ color: '#5C5C5C' }}>{t('historicCenter')}</h2>
                                        <p style={{ color: '#5C5C5C' }}>{t('historicCenterDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-music-note"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2 style={{ color: '#5C5C5C' }}>{t('tlaquepaque')}</h2>
                                        <p style={{ color: '#5C5C5C' }}>{t('tlaquepaqueDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-agave"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2 style={{ color: '#5C5C5C' }}>{t('tequilaJalisco')}</h2>
                                        <p style={{ color: '#5C5C5C' }}>{t('tequilaJaliscoDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-restaurant"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2 style={{ color: '#5C5C5C' }}>{t('sanJuanMarket')}</h2>
                                        <p style={{ color: '#5C5C5C' }}>{t('sanJuanMarketDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-theater"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2 style={{ color: '#5C5C5C' }}>{t('degolladoTheater')}</h2>
                                        <p style={{ color: '#5C5C5C' }}>{t('degolladoTheaterDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="wpo-service-item hover-shadow">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-park"></i>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h2 style={{ color: '#5C5C5C' }}>{t('colomosForest')}</h2>
                                        <p style={{ color: '#5C5C5C' }}>{t('colomosForestDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wpo-about-section-s3 section-padding" style={{ backgroundColor: '#f6f1ee' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="wpo-about-wrap">
                                    <div className="wpo-about-item">
                                        <div className="wpo-about-text">
                                            <h2 style={{ color: '#5C5C5C' }}>{t('flavorsThatEnchant')}</h2>
                                            <p style={{ color: '#5C5C5C' }}>{t('gastronomyDescription')}</p>
                                            
                                            <h3 style={{ color: '#5C5C5C' }}>{t('dishesToTry')}</h3>
                                            <ul className="about-list" style={{ color: '#5C5C5C' }}>
                                                <li><i className="fi flaticon-food"></i> <strong>{t('tortaAhogada')}</strong></li>
                                                <li><i className="fi flaticon-food"></i> <strong>{t('birria')}</strong></li>
                                                <li><i className="fi flaticon-food"></i> <strong>{t('carnitas')}</strong></li>
                                                <li><i className="fi flaticon-food"></i> <strong>{t('tejuino')}</strong></li>
                                                <li><i className="fi flaticon-food"></i> <strong>{t('jericalla')}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer footerClass={'wpo-site-footer-s2'}/>
                <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage2;
