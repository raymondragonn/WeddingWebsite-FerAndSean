import React from 'react'
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom'
import shape1 from '../../images/footer-shape-1.svg'
import shape2 from '../../images/footer-shape-2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Links</h3>
                                </div>
                                <div className="link-wrap">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                                        <li><Link onClick={ClickHandler} to="/rsvp">RSVP</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                        <li><Link onClick={ClickHandler} to="/">Get Quote</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className='logo' onClick={ClickHandler} to="/">Habibi</Link>
                                </div>
                                <p>We can’t wait to see all of our beloved friends
                                    and relative s at our wedding.</p>
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
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <p>Habibi@wpoceans.com</p>
                                    <p>4517 Washington Ave. Manchester,
                                        Kentucky 39495</p>
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
                            <p className="copyright"> &copy; Copyright 2023 | <Link onClick={ClickHandler} to="/">Habibi</Link> | All right
                                reserved.</p>
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