import React from 'react'
import bg from '../../images/contact/bg2.jpg'
import RSVPFrom3 from '../RSVPFrom3/RSVPFrom3';

const RsvpSectionS8 = (props) => {

    return (
        <section className="wpo-contact-section-s8 section-padding" style={{ background: `url(${bg})no-repeat center top / cover` }}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h2>Make an Inquiry</h2>
                                    </div>
                                    <RSVPFrom3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS8;