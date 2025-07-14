import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import Breadcrumb from "../../common/Breadcrumb";
import KeywordsArea from "../../components/keywords/KeywordsArea";
import ServicesAreaOne from "../home-1/ServicesAreaOne";
import VideoArea from "./VideoArea";
import BrandsArea from "../../components/brands/BrandsArea";
import TestimonialsAreaOne from "../../components/testimonials/TestimonialsAreaOne";
import FactArea from "../../components/fact/FactArea";
import FaqArea from "../../components/faq/FaqArea";
import FooterOne from "../../layouts/footers/FooterOne";
import BackToTop from "../../common/BackToTop";

const Services = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Services" title="Services" />
      <KeywordsArea />
      <ServicesAreaOne showHeader={false} customClass="services--services" />
      <VideoArea />
      <BrandsArea />
      <TestimonialsAreaOne />
      <FactArea />
      <FaqArea />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Services;
