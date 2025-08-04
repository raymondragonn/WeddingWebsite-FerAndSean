import React from 'react'
import pImg1 from '../../images/portfolio/1.jpg'
import pImg2 from '../../images/portfolio/2.jpg'
import pImg3 from '../../images/portfolio/3.jpg'
import pImg4 from '../../images/portfolio/4.jpg'
import pImg5 from '../../images/portfolio/5.jpg'
import pImg6 from '../../images/portfolio/6.jpg'
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg from "../../images/ferandsean/background-portfolio.svg";

const PortfolioSection = (props) => {

    return (
<section className="static-hero"
        style={{ 
          width: '100%',
          height: 'auto',
          overflow: 'visible',
          position: 'relative'
        }}>
            <img 
              src={Bg} 
              alt="Portfolio Background" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            <div className="hero-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <div className="wpo-static-hero-inner align-items-center justify-content-center">
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;