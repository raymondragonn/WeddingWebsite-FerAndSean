import React from 'react'
import bg from '../../images/contact/bg.jpg'
import SectionTitle from "../SectionTitle";
import RSVPFrom from '../RSVPFrom/RSVPFrom';

const RsvpSectionS7 = (props) => {
    return (
        <section className="wpo-contact-section-s8 section-padding" id="rsvp" style={{ backgroundColor: '#f6f1ee' }}>
            <div className="wpo-contact-section-inner" style={{ background: `url(${bg}) no-repeat center top / cover` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-lg-12 col-md-12 col-12">
                            <div className="wpo-contact-section-wrapper">
                                <div className="wpo-contact-section-inner">
                                    <div className="wpo-contact-form-area">
                                        <SectionTitle 
                                            subTitle={'Confirma tu asistencia'} 
                                            MainTitle={'¿Vas a Asistir?'} 
                                        />
                                        <RSVPFrom />
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

export default RsvpSectionS7;