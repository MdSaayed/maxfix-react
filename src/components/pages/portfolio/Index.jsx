import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterOne from '../../../layouts/footers/FooterOne';
import Breadcrumb from '../../../common/Breadcrumb';
import Keywords from '../../keywords/Keywords';
import RecentWorksArea from '../home-1/RecentWorksArea';

const Portfolio = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb linkText="Portfolio" title='Creative Showcase' />
            <Keywords />
            <RecentWorksArea showFilter={true} showBtn={false} showTitle={false} showItem={8}/>
            <FooterOne />   
        </>
    );
};

export default Portfolio;