import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderLanguageToggle from '../LanguageToggle/HeaderLanguageToggle'
import { useLanguage } from '../../contexts/LanguageContext'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import './Header.css'


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);
    const { t } = useLanguage();

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (

        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <HeaderLanguageToggle />
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* Mobile Menu Button - Visible only on mobile */}
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none d-block">
                                <div className="mobail-menu">
                                    <MobileMenu/>
                                </div>
                            </div>
                            
                            {/* Mobile Title - Visible only on mobile */}
                            <div className="col-lg-6 col-md-6 col-6 d-lg-none d-block">
                                <div className="mobile-title">
                                    <Link onClick={ClickHandler} to="/home">FER & SEAN</Link>
                                </div>
                            </div>
                            
                            {/* Logo - Hidden on mobile, visible on desktop */}
                            <div className="col-lg-2 col-md-6 col-6 d-none d-lg-block">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">Fer & Sean</Link>
                                </div>
                            </div>
                            
                            {/* Main Navigation - Hidden on mobile, visible on desktop */}
                            <div className="col-lg-8 col-md-1 col-1 d-none d-lg-block">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link to="/">{t('home')}</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/about">{t('about')}</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/about">{t('Cuándo y Dónde')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/dressCode">{t('Dress Code')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/menu">{t('Menu')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/groom-bride">{t('Damas de Honor')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/accomodation">{t('accommodation')}</Link></li>
                                                {/* <li><Link onClick={ClickHandler} to="/guadalajara">{t('Guadalajara')}</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/coming">{t('comingSoon')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">{t('error404')}</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/gallery">{t('portfolio')}</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/contact">{t('contact')}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header);