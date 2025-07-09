import React from 'react';
import HeaderOne from '../../../layouts/headers/HeaderOne';
import FooterOne from '../../../layouts/footers/FooterOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import Keywords from '../../../common/Keywords';
import AboutAreaOne from './AboutAreaOne';
import FactArea from '../../fact/FactArea';
import ServicesAreaOne from './ServicesAreaOne';
import ProcessArea from './ProcessArea';
import RecentWorksArea from './RecentWorksArea';

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
            <FooterOne />
         </>
    );
};

export default HomeOne;