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
        <section className="wpo-team-section-s2 section-padding" style={{backgroundColor: '#f4f2ee'}}>
            <div className="container">
                <SectionTitle subTitle={t('importantPeople')} MainTitle={t('bridesmaids')} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.slice(0, 8).map((team, tm) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                                <Slide direction="up" duration={team.animation} triggerOnce="true">
                                    <div className="wpo-team-item">
                                        <Link onClick={ClickHandler} to="/groom-bride" className="wpo-team-img-wrap">
                                            <div className="wpo-team-img">
                                                <div className="wpo-team-img-inner">
                                                    <img src={team.tImg} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="wpo-team-text">
                                            <h3 style={{ color: '#5C5C5C' }}>{team.name}</h3>
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