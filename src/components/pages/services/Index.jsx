import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterOne from '../../../layouts/footers/FooterOne';
import Breadcrumb from '../../../common/Breadcrumb';
import FaqArea from '../../faq/FaqArea';
import FactArea from '../../fact/FactArea';
import TestimonialsAreaOne from '../../testimonials/TestimonialsAreaOne';
import BrandsArea from '../../brands/BrandsArea';
import Keywords from '../../keywords/Keywords';
import VideoArea from './VideoArea';
import ServicesAreaOne from '../home-1/ServicesAreaOne';

const Services = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb linkText="Services" title="Services" />
            <Keywords />
            <ServicesAreaOne showHeader={false} customClass='services--services'/>
            <VideoArea />
            <BrandsArea />
            <TestimonialsAreaOne />
            <FactArea />
            <FaqArea />
            <FooterOne />   
        </>
    );
};

export default Services;