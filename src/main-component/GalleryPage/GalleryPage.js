import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import PartnerSection from '../../components/PartnerSection';

const GalleryPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
            <PortfolioSectionS2 prClass={'pb-0 pt-120'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default GalleryPage;
