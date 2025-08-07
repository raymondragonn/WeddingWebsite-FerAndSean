import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

const DressCodePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Dress Code'} pagesub={'Dress Code'}/> 
            <ProjectSection/>
            {/* <PartnerSection pClass={'pb-120'}/> */}
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DressCodePage;
