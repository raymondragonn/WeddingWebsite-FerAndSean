import React from 'react'
import SectionTitle from "../SectionTitle";
import sign from '../../images/about/signature.png'
import abimg from "../../images/ferandsean/photo1-onepage.svg";
import abimg2 from "../../images/ferandsean/photo2-onepage.svg";
import { useLanguage } from '../../contexts/LanguageContext';

const About = (props) => {
    const { t } = useLanguage();

    return (
        <section className="wpo-about-section section-padding" style={{backgroundColor: '#f4f2ee'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-12">
                        <SectionTitle subTitle={t('aboutDate')} MainTitle={t('aboutMainTitle')} />
                    </div>
                </div>
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                            <p style={{ color: '#333' }}>
                             <small style={{ color: '#333' }}>{t('aboutDescription').charAt(0)}</small>{t('aboutDescription').slice(1)}
                            </p>
                                <div className="about-info">
                                    <h5>{t('aboutSignature')}</h5>
                                </div>
                                {/* <div className="about-sign">
                                    <img src={sign} alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <div className="about-right-img">
                                    <img src={abimg2} alt="" />

                                    <div className="about-right-img-inner">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;