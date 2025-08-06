import React from 'react'
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg from "../../images/ferandsean/background-portfolio.svg";
import "./PortfolioSection.css";

const PortfolioSection = (props) => {

    return (
<div className="portfolio-section-fix">
    <div className="custom-portfolio-section"
            style={{ 
              width: '100%',
              height: 'auto',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'transparent',
              display: 'block'
            }}>
                <img 
                  src={Bg} 
                  alt="Portfolio Background" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    backgroundColor: 'transparent',
                    verticalAlign: 'top'
                  }}
                />
                <div className="custom-hero-container" style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%',
                  backgroundColor: 'transparent'
                }}>
                    <div className="custom-hero-inner" style={{ backgroundColor: 'transparent' }}>
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
            </div>
</div>
    )
}

export default PortfolioSection;