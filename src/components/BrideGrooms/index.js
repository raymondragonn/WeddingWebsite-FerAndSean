import React from "react";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import timg1 from '../../images/team/DamaDeHonor1.jpeg'
import timg2 from '../../images/team/DamaDeHonor2.jpeg'
import timg3 from '../../images/team/DamaDeHonor3.jpeg'
import timg4 from '../../images/team/DamaDeHonor4.jpeg'
import timg5 from '../../images/team/DamaDeHonor5.jpeg'
import timg6 from '../../images/team/DamaDeHonor6.jpeg'
import timg7 from '../../images/team/DamoDeHonor1.jpeg'



const Brides = [
  {
    id: '1',
    tImg: timg1,
    name: 'María Elena',
    title: 'Dama de Honor',
    animation:'1000'
  },
  {
    id: '2',
    tImg: timg2,
    name: 'Lupita Quintero',
    title: 'Dama de Honor',
    animation:'1200'
  },
  {
    id: '3',
    tImg: timg3,
    name: 'Camila Rincón',
    title: 'Dama de Honor',
    animation:'1400'
  },
  {
    id: '4',
    tImg: timg4,  
    name: 'Ana Sofía',
    title: 'Dama de Honor',
    animation:'1600'
  },
  {
    id: '5',
    tImg: timg5,  
    name: 'Lili Yepez',
    title: 'Dama de Honor',
    animation:'1800'
  },
  {
    id: '6',
    tImg: timg6,  
    name: 'Roberto Luis',
    title: 'Dama de Honor',
    animation:'2000'
  },
  {
    id: '7',
    tImg: timg7,  
    name: 'Roberto Luis',
    title: 'Caballero de Honor',
    animation:'2000'
  }
]

const BrideGrooms = (props) => {
  return (
    <section className={`wpo-team-section section-padding ${props.brClass}`} style={{ backgroundColor: 'rgb(246, 241, 238)' }}>
      <div className="container">
        <SectionTitle 
          subTitle={'Personas Importantes'} 
          MainTitle={'Damas de Honor y Caballero de Honor'} 
        />
        <div className="wpo-team-wrap" style={{ marginTop: '60px' }}>
          <div className="row justify-content-center">
            {Brides.slice(0, 8).map((Bride, tm) => (
              <div className="col col-lg-3 col-md-4 col-sm-6 col-12" key={tm} style={{ marginBottom: '40px' }}>
                <Slide direction="up" duration={Bride.animation} triggerOnce="true">
                  <div className="wedding-team-card" style={{
                    textAlign: 'center',
                    padding: '25px 20px',
                    backgroundColor: '#d4c4b0',
                    boxShadow: '0 8px 25px rgba(45, 36, 32, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(45, 36, 32, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(45, 36, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(45, 36, 32, 0.1)';
                  }}>
                    <div className="wedding-team-image" style={{
                      width: '140px',
                      height: '140px',
                      margin: '0 auto 20px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <img 
                        src={Bride.tImg} 
                        alt={Bride.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                    <div className="wedding-team-info">
                      <h3 style={{
                        color: '#2d2420',
                        fontSize: '22px',
                        fontWeight: '600',
                        margin: '0 0 8px',
                        fontFamily: '"Playfair Display", serif'
                      }}>
                        {Bride.name}
                      </h3>
                      <p style={{
                        color: '#2d2420',
                        fontSize: '14px',
                        fontWeight: '400',
                        margin: '0',
                        textTransform: 'capitalize',
                        letterSpacing: '0.5px'
                      }}>
                        {Bride.title}
                      </p>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      width: '25px',
                      height: '25px',
                      backgroundColor: 'rgb(88, 81, 71)',
                      borderRadius: '0 15px 0 15px',
                      opacity: '0.3'
                    }}></div>
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

export default BrideGrooms;