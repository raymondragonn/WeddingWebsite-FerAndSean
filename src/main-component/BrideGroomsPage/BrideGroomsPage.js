import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import BrideGrooms from '../../components/BrideGrooms';
import { useLanguage } from '../../contexts/LanguageContext';

const BrideGroomsPage = () => {
    const { t } = useLanguage();
    
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={t('Bridesmaids and Groomsmen')} pagesub={t('Bridesmaids and Groomsmen')} />
            <BrideGrooms brClass={'pt-120'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default BrideGroomsPage;
