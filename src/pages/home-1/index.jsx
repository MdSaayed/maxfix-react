import React from 'react';
import HeaderOne from '../../../layouts/headers/HeaderOne';
import FooterOne from '../../../layouts/footers/FooterOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaOne from './AboutAreaOne';
import FactArea from '../../fact/FactArea';
import ServicesAreaOne from './ServicesAreaOne';
import ProcessArea from './ProcessArea';
import RecentWorksArea from './RecentWorksArea';
import BrandLogos from '../../brand-logos/BrandLogos';
import BlogArea from '../../blog/BlogArea';
import FaqArea from '../../faq/FaqArea';
import TestimonialsAreaOne from '../../testimonials/TestimonialsAreaOne';
import Keywords from '../../keywords/Keywords';

const HomeOne = () => {

    return (
         <>
            <HeaderOne />
            <HeroAreaHomeOne />
            <Keywords />
            <AboutAreaOne />
            <FactArea />
            <ServicesAreaOne />
            <ProcessArea/>
            <RecentWorksArea />
            <BrandLogos />
            <FaqArea />
            <TestimonialsAreaOne />
            <BlogArea />
            <FooterOne />
         </>
    );
};

export default HomeOne; 