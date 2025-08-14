import React from 'react'
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";
import Team from '../../api/team'
import SectionTitle from '../SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    const { t } = useLanguage();
    
    return (
        <section className="wpo-team-section-s2 section-padding" style={{backgroundColor: '#f6f1ee'}}>
            <div className="container">
                <SectionTitle subTitle={t('importantPeople')} MainTitle={t('bridesmaids')} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.slice(0, 8).map((team, tm) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                                <Slide direction="up" duration={team.animation} triggerOnce="true">
                                    <div className="wpo-team-item" style={{ 
                                        background: '#d4c4b0', 
                                        borderRadius: '8px',
                                        padding: '20px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        border: '1px solid #e9e9e9',
                                        marginBottom: '30px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => { 
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                    }}>
                                        <Link onClick={ClickHandler} to="/groom-bride" className="wpo-team-img-wrap">
                                            <div className="wpo-team-img-inner" style={{
                                                width: '100%',
                                                height: '300px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <img 
                                                    src={team.tImg} 
                                                    alt={team.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'center',
                                                        display: 'block'
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                        <div className="wpo-team-text" style={{ paddingTop: '20px' }}>
                                            <h3 style={{ 
                                                color: '#2c2c2c',
                                                fontSize: '18px',
                                                fontWeight: '600',
                                                marginBottom: '0',
                                                letterSpacing: '0.5px'
                                            }}>{team.name}</h3>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;