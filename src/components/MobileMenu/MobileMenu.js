import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link }  from "react-router-dom";
import { useLanguage } from '../../contexts/LanguageContext';
import './style.css';

const MobileMenu = () => {
    const [openId, setOpenId] = useState(2); // Inicializar con el ID de About (2) para que esté abierto
    const [menuActive, setMenuState] = useState(false);
    const { t } = useLanguage();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        setMenuState(false); // Cerrar menú al hacer clic
    }

    const menus = [
        {
            id: 1,
            title: t('home'),
            link: '/',
            hasSubmenu: false
        },
        {
            id: 2,
            title: t('about'),
            link: '/about',
            hasSubmenu: true,
            submenu: [
                {
                    id: 21,
                    title: t('Itinerario'),
                    link: '/about'
                },
                {
                    id: 22,
                    title: t('Dress Code'),
                    link: '/dressCode'
                },
                {
                    id: 23,
                    title: t('Menu'),
                    link: '/menu'
                },
                {
                    id: 24,
                    title: t('Damas de Honor'),
                    link: '/groom-bride'
                },
                {
                    id: 25,
                    title: t('accommodation'),
                    link: '/accomodation'
                },
            ]
        },
        {
            id: 3,
            title: t('portfolio'),
            link: '/gallery',
            hasSubmenu: false
        },
        {
            id: 4,
            title: t('contact'),
            link: '/contact',
            hasSubmenu: false
        }
    ];

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`} style={{backgroundColor: '#534334'}}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.hasSubmenu ? (
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                            {item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler}
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                ) : (
                                    <Link onClick={ClickHandler} to={item.link}>{item.title}</Link>
                                )}
                            </ListItem>
                        )
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;