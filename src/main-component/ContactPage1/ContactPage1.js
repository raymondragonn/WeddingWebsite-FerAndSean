import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Contactpage1 from '../../components/Contactpage1/Contactpage1';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactPage1 =() => {
    const { t } = useLanguage();
    
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={t('contactUs')} pagesub={t('contact')}/> 
            <Contactpage1/> 
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ContactPage1;
