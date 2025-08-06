import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import { useLanguage } from '../../contexts/LanguageContext';


const Contactpage = () => {
    const { t } = useLanguage();

    return(
        <section className="wpo-contact-pg-section section-padding" style={{ backgroundColor: '#f6f1ee' }}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        {/* <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-maps-and-flags"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 style={{ color: '#5C5C5C' }}>{t('address')}</h2>
                                            <p style={{ color: '#5C5C5C' }}>{t('addressText')}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 style={{ color: '#5C5C5C' }}>{t('emailUs')}</h2>
                                            <p style={{ color: '#5C5C5C' }}>Fer & Sean@gmail.com</p>
                                            <p style={{ color: '#5C5C5C' }}>helloyou@gmail.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2 style={{ color: '#5C5C5C' }}>{t('callNow')}</h2>
                                            <p style={{ color: '#5C5C5C' }}>+52 33-1234-5678</p>
                                            <p style={{ color: '#5C5C5C' }}>+52 33-1234-5679</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div> */}
                        <div className="wpo-contact-title">
                            <h2 style={{ color: '#5C5C5C' }}>{t('haveAnyQuestion')}</h2>
                            <p style={{ color: '#5C5C5C' }}>{t('contactDescription')}</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29817.06255800722!2d-103.83386376679846!3d20.906975359972215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84263fc89e7aaf67%3A0x1a490d668cc314e1!2sLa%20Cueva%20de%20la%20Luna!5e0!3m2!1ses!2smx!4v1754147243660!5m2!1ses!2smx"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
