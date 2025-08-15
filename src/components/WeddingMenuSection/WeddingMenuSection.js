import React from 'react';
import './WeddingMenuSection.css';
import SectionTitle from '../SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';

const WeddingMenuSection = () => {
    const { t } = useLanguage();
    const regularMenu = [
        {
            name: t('entrada'),
            dish: t('ensaladaCesar'),
            description: t('ensaladaCesarDesc')
        },
        {
            name: t('platoPrincipal'),
            dish: t('salmonParrilla'),
            description: t('salmonParrillaDesc')
        },
        {
            name: t('acompanamiento'),
            dish: t('verdurasMediterraneas'),
            description: t('verdurasMediterraneasDesc')
        },
        {
            name: t('postre'),
            dish: t('tartaChocolate'),
            description: t('tartaChocolateDesc')
        }
    ];

    const glutenFreeMenu = [
        {
            name: t('entrada'),
            dish: t('ensaladaQuinoa'),
            description: t('ensaladaQuinoaDesc')
        },
        {
            name: t('platoPrincipal'),
            dish: t('polloMediterraneo'),
            description: t('polloMediterraneoDesc')
        },
        {
            name: t('acompanamiento'),
            dish: t('arrozPilaf'),
            description: t('arrozPilafDesc')
        },
        {
            name: t('postre'),
            dish: t('pannacottaVainilla'),
            description: t('pannacottaVainillaDesc')
        }
    ];

    return (
        <section className="wedding-menu-section" style={{ backgroundColor: '#f6f1ee' }}>
            <div className="container">
                <SectionTitle 
                    subTitle={t('weddingMenuSubtitle')}
                    MainTitle={t('weddingMenuTitle')} 
                />

                {/* Menú Regular */}
                <div className="row menu-section-wrapper">
                    <div className="col-lg-6 col-md-12">
                        <div className="menu-card regular-menu">
                            <div className="menu-header">
                                <h3 className="menu-title">{t('mainMenu')}</h3>
                                <div className="menu-icon">
                                    <i className="fi flaticon-restaurant"></i>
                                </div>
                            </div>
                            <div className="menu-content">
                                {regularMenu.map((item, index) => (
                                    <div key={index} className="menu-item">
                                        <div className="menu-item-header">
                                            <span className="course-type">{item.name}</span>
                                            <div className="menu-divider"></div>
                                        </div>
                                        <h4 className="dish-name">{item.dish}</h4>
                                        <p className="dish-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Menú Sin Gluten */}
                    <div className="col-lg-6 col-md-12">
                        <div className="menu-card gluten-free-menu">
                            <div className="menu-header">
                                <h3 className="menu-title">{t('glutenFreeMenu')}</h3>
                                <div className="menu-icon gluten-free">
                                    <i className="fi flaticon-leaf"></i>
                                </div>
                                <span className="special-badge">{t('glutenFreeBadge')}</span>
                            </div>
                            <div className="menu-content">
                                {glutenFreeMenu.map((item, index) => (
                                    <div key={index} className="menu-item">
                                        <div className="menu-item-header">
                                            <span className="course-type">{item.name}</span>
                                            <div className="menu-divider"></div>
                                        </div>
                                        <h4 className="dish-name">{item.dish}</h4>
                                        <p className="dish-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="menu-note">
                            <p>
                                <strong>{t('menuNote')}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingMenuSection;
