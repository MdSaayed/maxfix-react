import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterOne from '../../../layouts/footers/FooterOne';
import FaqArea from '../../faq/FaqArea';
import TeamArea from '../home-2/TeamArea';
import TestimonialsAreaOne from '../../testimonials/TestimonialsAreaOne';
import AwardsArea from './AwardsArea';
import WhyChooseArea from './WhyChooseArea';
import BrandsArea from '../../brands/BrandsArea';
import FactArea from '../../fact/FactArea';
import AboutAreaThree from './AboutAreaThree';
import HeroAboutArea from './HeroAboutArea';

const About = () => {
    return (
        <>
            <HeaderTwo />
            <HeroAboutArea />
            <AboutAreaThree />
            <FactArea />
            <BrandsArea />
            <WhyChooseArea />
            <TestimonialsAreaOne />
            <TeamArea />
            <AwardsArea />
            <FaqArea />
            <FooterOne />
        </>
    );
};

export default About;