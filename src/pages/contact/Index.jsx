import React from 'react';
import HeaderTwo from '../../../layouts/headers/HeaderTwo';
import Breadcrumb from '../../../common/Breadcrumb';
import Keywords from '../../keywords/Keywords';
import ContactInfoArea from './ContactInfoArea';
import MapArea from './MapArea';
import FooterOne from '../../../layouts/footers/FooterOne';

const Contact = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb linkText='Contact' title="Start the Conversation" />   
            <Keywords />
            <ContactInfoArea />
            <MapArea />
            <FooterOne />
        </>
    );
};

export default Contact;