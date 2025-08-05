import React from 'react'
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";
import Team from '../../api/team'
import SectionTitle from '../SectionTitle';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className="wpo-team-section-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Personas Importantes'} MainTitle={'Personas Importantes'} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.slice(0, 8).map((team, tm) => (
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                                <Slide direction="up" duration={team.animation} triggerOnce="true">
                                    <div className="wpo-team-item">
                                        <Link onClick={ClickHandler} to="/planner" className="wpo-team-img-wrap">
                                            <div className="wpo-team-img">
                                                <div className="wpo-team-img-inner">
                                                    <img src={team.tImg} alt="" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="wpo-team-text">
                                            <h3>{team.name}</h3>
                                            <span>{team.title}</span>
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