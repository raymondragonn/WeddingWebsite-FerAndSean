import React, { Fragment } from "react";
import WeddingCountdown from "../../components/WeddingCountdown/WeddingCountdown";
import LanguageToggle from "../../components/LanguageToggle/LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";
import Bg from "../../images/ferandsean/background-coming.svg";
// import frame1 from '../../images/slider/shape13.svg'
// import frame2 from '../../images/slider/shape14.svg'

// import shape1 from '../../images/slider/corner1.svg'
// import shape2 from '../../images/slider/corner2.svg'
// import shape3 from '../../images/slider/corner3.svg'
// import shape4 from '../../images/slider/corner4.svg'

const ComingSoonPage = () => {
  const { t } = useLanguage();
  
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <LanguageToggle />
      <section
        className="wpo-coming-soon-area"
        style={{ 
          background: `url(${Bg}) no-repeat center center / cover`,
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <div className="hero-container">
          <div className="hero-inner">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="wpo-event-wrap">
                    <div className="wpo-event-item">
                      <div className="coming-soon-section align-items-center">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 ">
                            <div className="coming-soon-text">
                              <h2>{t('names')}</h2>
                              <h3>{t('date')}</h3>
                              <p 
                                className="location-name clickable"
                                onClick={() =>
                                  window.open(
                                    "https://www.google.com/maps/place/La+Cueva+de+la+Luna/@20.9069754,-103.8353949,17z/data=!3m1!4b1!4m6!3m5!1s0x84263fc89e7aaf67:0x1a490d668cc314e1!8m2!3d20.9069754!4d-103.8338638!16s%2Fg%2F11hfpzjrd8?hl=es&entry=ttu",
                                    "_blank"
                                  )
                                }
                                style={{ cursor: 'pointer' }}
                              >
                                {t('venue')}
                              </p>
                              <p className="location-address">
                                {t('location')}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="wpo-wedding-date">
                              <h2 className="hidden">some</h2>
                              <div className="clock-grids">
                                <div id="clock">
                                  <WeddingCountdown />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="coming-soon-note">
                              <p>{t('comingSoonNote')}</p>
                            </div>
                          </div>
                          {/* <div className="col-lg-12">
                                                        <div className="wpo-coming-contact">
                                                            <form method="post" onSubmit={SubmitHandler} className="contact-validation-active" id="contact-form-main">
                                                                <div className="row justify-content-center">
                                                                    <div className="col-lg-5 col-sm-6 col-12">
                                                                        <input type="text" className="form-control" name="name" id="name"
                                                                            placeholder="Nombre*" />
                                                                    </div>
                                                                    <div className="col-lg-5 col-sm-6 col-12">
                                                                        <input type="email" className="form-control" name="email" id="email"
                                                                            placeholder="Correo electrónico" />
                                                                    </div>
                                                                    <div className="col-lg-2 col-sm-4 col-6">
                                                                        <div className="submit-area">
                                                                            <button type="submit">Notificarme</button>
                                                                            <div id="loader">
                                                                                <i className="ti-reload"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div> */}
                        </div>
                      </div>
                      {/* <div className="shape-1"><img src={shape1} alt="" /></div>
                                            <div className="shape-2"><img src={shape2} alt="" /></div>
                                            <div className="shape-3"><img src={shape3} alt="" /></div>
                                            <div className="shape-4"><img src={shape4} alt="" /></div> */}
                    </div>
                    {/* <div className="frame-shape-1"><img src={frame1} alt="" />
                                        </div>
                                        <div className="frame-shape-2"><img src={frame2} alt="" />
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ComingSoonPage;
