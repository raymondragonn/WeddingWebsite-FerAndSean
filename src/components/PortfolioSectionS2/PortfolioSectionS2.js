import React from 'react'
import pImg1 from '../../images/portfolio/FotoColor1.jpeg'
import pImg2 from '../../images/portfolio/FotoNegro1.jpeg'
import pImg3 from '../../images/portfolio/FotoColor2.jpeg'
import pImg4 from '../../images/portfolio/FotoNegro2.jpeg'
import pImg5 from '../../images/portfolio/FotoColor3.jpeg'
import pImg6 from '../../images/portfolio/FotoNegro3.jpeg'
import pImg7 from '../../images/portfolio/FotoBarco.jpeg'
import pImg8 from '../../images/portfolio/FotoBarco2.jpeg'
import pImg9 from '../../images/portfolio/FotoBlancoNegroSemaforo.jpeg'
import pImg10 from '../../images/portfolio/FotoCowboys.jpeg'
import pImg11 from '../../images/portfolio/FotoEdificio.jpeg'
import pImg12 from '../../images/portfolio/FotoElevadorColor.jpeg'
import pImg13 from '../../images/portfolio/FotoEstadio.jpeg'
import pImg14 from '../../images/portfolio/FotoRapidos.jpeg'
import pImg15 from '../../images/portfolio/LasVegas.jpeg'
import pImg16 from '../../images/portfolio/LasVegasCalle.jpeg'
import pImg17 from '../../images/portfolio/LasVegasCasino.jpeg'
import pImg18 from '../../images/portfolio/LasVegasCoche.jpeg'
import pImg19 from '../../images/portfolio/LasVegasElvis.jpeg'
import pImg20 from '../../images/portfolio/LasVegasNewYork.jpeg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Portfolios = [
    {
        Pimg: pImg1,
    },
    {
        Pimg: pImg2,
    },
    {
        Pimg: pImg3,
    },
    {
        Pimg: pImg4,
    },
    {
        Pimg: pImg5,
    },
    {
        Pimg: pImg6,
    },
    {
        Pimg: pImg7,
    },
    {
        Pimg: pImg8,
    },
    {
        Pimg: pImg9,
    },
    {
        Pimg: pImg10,
    },
    {
        Pimg: pImg11,
    },
    {
        Pimg: pImg12,
    },
    {
        Pimg: pImg13,
    },
    {
        Pimg: pImg14,
    },
    {
        Pimg: pImg15,
    },
    {
        Pimg: pImg16,
    },
    {
        Pimg: pImg17,
    },
    {
        Pimg: pImg18,
    },
    {
        Pimg: pImg19,
    },
    {
        Pimg: pImg20,
    },

]

const PortfolioSectionS2 = (props) => {

    const [open, setOpen] = React.useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };

    return (

        <section className={`wpo-portfolio-section-s3 section-padding ${props.prClass}`} id="gallery" style={{ marginBottom: '20px' }}>
            <div className="container-fluid">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                                    <Masonry columnsCount={4} gutter="30px">
                                        {Portfolios.map((image, i) => (
                                            <div className="grid" key={i}>
                                                <div className="img-holder" onClick={() => handleImageClick(i)}>
                                                    <img src={image.Pimg} alt="" className="img img-responsive" />
                                                </div>
                                            </div>
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={selectedImageIndex}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                    { src: pImg7 },
                    { src: pImg8 },
                    { src: pImg9 },
                    { src: pImg10 },
                    { src: pImg11 },
                    { src: pImg12 },
                    { src: pImg13 },
                    { src: pImg14 },
                    { src: pImg15 },
                    { src: pImg16 },
                    { src: pImg17 },
                    { src: pImg18 },
                    { src: pImg19 },
                    { src: pImg20 },    
                ]}
            />
        </section>
    )
}

export default PortfolioSectionS2;