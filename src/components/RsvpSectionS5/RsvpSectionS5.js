import React from 'react'
import SectionTitle from "../SectionTitle";
import RSVPFrom from '../RSVPFrom/RSVPFrom';
import cimg from '../../images/contact/img-1.jpg';
import cimg2 from '../../images/contact/img-2.jpg';

const RsvpSectionS5 = (props) => {
    return (
        <section className="wpo-contact-section-s6 section-padding" id="rsvp" style={{ backgroundColor: '#f6f1ee' }}>
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
            <div className="left-img"><img src={cimg} alt="" /></div>
            <div className="right-img"><img src={cimg2} alt="" /></div>
        </section>

    )
}

export default RsvpSectionS5;