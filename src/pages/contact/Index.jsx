import React from 'react';
import HeaderTwo from '../../layouts/headers/HeaderTwo';
import Breadcrumb from '../../common/Breadcrumb';
import KeywordsArea from '../../components/keywords/KeywordsArea';
import ContactInfoArea from './ContactInfoArea';
import MapArea from './MapArea';
import FooterOne from '../../layouts/footers/FooterOne';

const Contact = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb linkText='Contact' title="Start the Conversation" />   
            <KeywordsArea />
            <ContactInfoArea />
            <MapArea />
            <FooterOne />
        </>
    );
};

export default Contact;