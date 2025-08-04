import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/hero2';
import StorySection4 from '../../components/StorySection4/StorySection4';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection from '../../components/PortfolioSection';
import EventSection from '../../components/EventSection/EventSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import About from '../../components/about/about';
import TeamSection from '../../components/TeamSection/TeamSection';



const HomePage = () => {

    return (
        <Fragment>
            <Navbar />
            <Hero2 />
            <About />
            <PortfolioSection />
            <StorySection2 />
            <EventSection/>
            <PortfolioSection />
            <TeamSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;