import React from 'react'
import {Link} from 'react-router-dom'
import erimg from '../../images/error-404.svg'
import { useLanguage } from '../../contexts/LanguageContext';


const Error = (props) => {
    const { t } = useLanguage();
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding" style={{ backgroundColor: '#f6f1ee' }}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3 style={{ color: '#5C5C5C' }}>{t('oopsPageNotFound')}</h3>
                                <p style={{ color: '#5C5C5C' }}>{t('errorDescription')}</p>
                                <Link onClick={ClickHandler} to="/home" className="theme-btn"> {t('backToHome')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;