import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterTwo from '../../../layouts/footers/footerTwo';
import HeroAreaTwo from './HeroAreaTwo';
import Keywords from '../../../common/Keywords';
import AboutAreaTwo from './AboutAreaTwo';
import PortfolioAreaOne from './PortfolioAreaOne';
import FactArea from '../../fact/FactArea';
import ServicesAreaTwo from './ServicesAreaTwo';
import BrandsArea from '../../brands/BrandsArea';
import InsightsArea from './InsightsArea';
import PricingArea from '../../pricing/PricingArea';
import TeamArea from './TeamArea';

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
            <TeamArea />
            <PricingArea />
            <InsightsArea />
            <FooterTwo />
        </>
    );
};

export default HomeTwo;