import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import WeddingDate2 from '../../components/WeddingDate2/WeddingDate2';
import { useLanguage } from '../../contexts/LanguageContext';

const AccomodationPage =() => {
    const { t } = useLanguage();
    
    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={t('accommodationTitle')} pagesub={t('accommodationSubtitle')}/> 

            <WeddingDate2 pbClass={'pb-120'}/>
            {/* <CoupleSection3 cClass={'pt-160'}/>
            <VideoSection vimg={vImg}/>
            <EventSection/>
            <PartnerSection pClass={'section-padding pt-0'} />  */}
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AccomodationPage;
