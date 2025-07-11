import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterTwo from '../../../layouts/footers/footerTwo';
import HeroAreaTwo from './HeroAreaTwo';
import AboutAreaTwo from './AboutAreaTwo';
import PortfolioAreaOne from './PortfolioAreaOne';
import FactArea from '../../fact/FactArea';
import ServicesAreaTwo from './ServicesAreaTwo';
import BrandsArea from '../../brands/BrandsArea';
import InsightsArea from './InsightsArea';
import PricingArea from '../../pricing/PricingArea';
import TeamArea from './TeamArea';
import TestimonialsAreaTwo from '../../testimonials/TestimonialsAreaTwo';
import Keywords from '../../keywords/Keywords';

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <HeroAreaTwo />
            <Keywords />
            <AboutAreaTwo />
            <PortfolioAreaOne />
            <FactArea />
            <ServicesAreaTwo />
            <BrandsArea />
            <TestimonialsAreaTwo /> 
            <TeamArea />
            <PricingArea />
            <InsightsArea />
            <FooterTwo />
        </>
    );
};

export default HomeTwo;