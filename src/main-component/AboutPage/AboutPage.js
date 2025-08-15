import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import EventSection from '../../components/EventSection/EventSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar/>
                <PageTitle pageTitle={'About Us'} pagesub={'About'} />
                <EventSection/>
                <Footer footerClass={'wpo-site-footer-s2'} />
                <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
