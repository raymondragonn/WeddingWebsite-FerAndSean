import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Contactpage from '../../components/Contactpage/Contactpage';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactPage =() => {
    const { t } = useLanguage();
    
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={t('contactUs')} pagesub={t('contact')}/> 
            <Contactpage/> 
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ContactPage;

