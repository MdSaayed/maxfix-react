import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import FooterOne from '../../../layouts/footers/FooterOne';
import Breadcrumb from '../../../common/Breadcrumb';
import Keywords from '../../keywords/Keywords';
import FaqArea from '../../faq/FaqArea';
import VideoArea from '../services/VideoArea';

const Faq = () => {
    return (
        <>
            <HeaderTwo/>
            <Breadcrumb linkText="FAQs" title="Find Quick Answers" />
            <Keywords />
            <FaqArea/>
            <VideoArea videoLink='https://www.youtube.com/watch?v=dQw4w9WgXcQ' img='./assets/images/services/video-thumb-bg-2.png'/>
            <FooterOne />   
        </>
    );
};

export default Faq;