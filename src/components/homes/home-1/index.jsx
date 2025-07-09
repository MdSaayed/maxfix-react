import React from 'react';
import HeaderOne from '../../../layouts/headers/HeaderOne';
import FooterOne from '../../../layouts/footers/FooterOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import Keywords from '../../../common/Keywords';
import AboutAreaOne from './AboutAreaOne';
import FactArea from '../../fact/FactArea';
import ServicesAreaOne from './ServicesAreaOne';

const HomeOne = () => {

    return (
         <>
            <HeaderOne />
            <HeroAreaHomeOne />
            <Keywords />
            <AboutAreaOne />
            <FactArea />
            <ServicesAreaOne />
            <FooterOne />
         </>
    );
};

export default HomeOne;