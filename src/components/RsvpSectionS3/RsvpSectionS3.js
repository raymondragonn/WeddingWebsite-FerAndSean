import React from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import RSVPFrom from '../RSVPFrom/RSVPFrom'


const RsvpSectionS3 = (props) => {
    return (
        <section className={`wpo-contact-section-s4 section-padding ${props.rClass}`} id="rsvp" style={{ backgroundColor: '#f6f1ee' }}>
            <div className="wpo-contact-section-inner" style={{ background: `url(${props.bg}) no-repeat center top / cover` }}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col col-xl-5 col-lg-5 col-md-12 col-12">
                            <Slide direction="left" duration="1000" triggerOnce="true">
                                <div className="wpo-contact-section-wrapper">
                                    <div className="wpo-contact-form-area">
                                        <SectionTitle 
                                            subTitle={'Confirma tu asistencia'} 
                                            MainTitle={'¿Vas a Asistir?'} 
                                        />
                                        <RSVPFrom />
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS3;