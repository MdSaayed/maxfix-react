import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import Breadcrumb from "../../common/Breadcrumb";
import KeywordsArea from "../../components/keywords/KeywordsArea";
import ContactInfoArea from "./ContactInfoArea";
import MapArea from "./MapArea";
import FooterOne from "../../layouts/footers/FooterOne";
import BackToTop from "../../common/BackToTop";

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Contact" title="Start the Conversation" />
      <KeywordsArea />
      <ContactInfoArea />
      <MapArea />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Contact;
