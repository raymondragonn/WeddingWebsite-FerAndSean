import React from 'react'
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext';
import shape1 from '../../images/footer-shape-1.svg'
import shape2 from '../../images/footer-shape-2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    const { t } = useLanguage();
    
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{t('links')}</h3>
                                </div>
                                <div className="link-wrap">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">{t('about')}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">{t('services')}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/rsvp">RSVP</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/gallery">{t('gallery')}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/">{t('getQuote')}</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">{t('contact')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className='logo' onClick={ClickHandler} to="/">Fer & Sean</Link>
                                </div>
                                <p>{t('footerDescription')}</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>{t('footerContact')}</h3>
                                </div>
                                <div className="contact-ft">
                                    <p>{t('footerEmail')}</p>
                                    <p>{t('footerAddress')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">{t('copyright')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-shape-1">
                <Slide direction="left" duration="1000" triggerOnce="true">
                    <img src={shape1} alt="" />
                </Slide>
            </div>
            <div className="ft-shape-2">
            <Slide direction="right" duration="1200" triggerOnce="true">
                    <img src={shape2} alt="" />
                </Slide>
            </div>
        </footer>
    )
}

export default Footer;