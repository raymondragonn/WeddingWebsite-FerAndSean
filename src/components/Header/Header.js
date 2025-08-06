import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderLanguageToggle from '../LanguageToggle/HeaderLanguageToggle'
import { useLanguage } from '../../contexts/LanguageContext'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";


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
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu/>
                                </div>
                            </div>
                            {/* <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">Fer & Sean</Link>
                                </div>
                            </div> */}
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">Fer & Sean</Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
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
                                                <li><Link onClick={ClickHandler} to="/planner">{t('Damas de Honor')}</Link></li>
                                                {/* <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/story">{t('story')}</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/story">{t('ourStoryStyle1')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-2">{t('ourStoryStyle2')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-3">{t('ourStoryStyle3')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-4">{t('ourStoryStyle4')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-5">{t('ourStoryStyle5')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/story-6">{t('ourStoryStyle6')}</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link onClick={ClickHandler} to="/accomodation">{t('accommodation')}</Link></li>
                                                {/* <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/rsvp">{t('rsvp')}</Link>
                                                    <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/rsvp">{t('rsvpStyle1')}</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/rsvp-2">{t('rsvpStyle2')}</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/rsvp-3">{t('rsvpStyle3')}</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/rsvp-4">{t('rsvpStyle4')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-5">{t('rsvpStyle5')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-6">{t('rsvpStyle6')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/rsvp-7">{t('rsvpStyle7')}</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link onClick={ClickHandler} to="/guadalajara">{t('Guadalajara')}</Link></li>
                                                {/* <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/service">{t('service')}</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/service">{t('service')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-s2">{t('serviceS2')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-s3">{t('serviceS3')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/Wedding-Dress">{t('serviceSingle')}</Link></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/pricing">{t('pricing')}</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/">{t('authPages')}</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/login">{t('login')}</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/register">{t('register')}</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/forgot">{t('forgotPassword')}</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link onClick={ClickHandler} to="/coming">{t('comingSoon')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">{t('error404')}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/gallery">{t('portfolio')}</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/portfolio-grid">{t('portfolioGrid')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio-masonary">{t('portfolioMasonary')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio-masonary-s2">{t('portfolioMasonaryS2')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/portfolio-masonary-s3">{t('portfolioMasonaryS3')}</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-single/James-Amelia">{t('portfolioSingle')}</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/contact">{t('contact')}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <Link onClick={ClickHandler} to="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                    <Link onClick={ClickHandler} to="/cart" className="view-cart-btn">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
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