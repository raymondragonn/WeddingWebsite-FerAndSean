import React from 'react'
import abimg from '../../images/about/img-3.jpg'
import abimg2 from '../../images/about/img-4.jpg'
import sign from '../../images/about/signature.png'

const About2 = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h2>Planning Your Dreamy Luxury Weddings</h2>
                                <p><small>M</small>ignissim adipiscing pretium libero at tristique. Diam sit mauris a
                                    interdum. In tristique eu vestibulum id amet malesuada. Quis morbi morbi sed
                                    volutpat tristique. Lacinia praesent dictum morbi et fermentum. Blandit cras ut sed
                                    quisque pellentesque iaculis elit. Lectus adipiscing semper odio lacus urna. Sit a
                                    sit ac blandit. Cursus donec mollis elit arcu donec aliquam.</p>
                                <div className="about-info-wrap">
                                    <div className="about-info">
                                        <h5>Kristin Watson</h5>
                                        <span>- CEO of the company</span>
                                    </div>
                                    <div className="about-sign">
                                        <img src={sign} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <div className="wpo-about-img-items">
                                    <div className="wpo-about-img-item">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                                <div className="wpo-about-img-topper">
                                    <img src={abimg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;