import React from "react";
import HeaderOne from "../../layouts/headers/HeaderOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import KeywordsArea from "../../components/keywords/KeywordsArea";
import AboutAreaOne from "./AboutAreaOne";
import FactArea from "../../components/fact/FactArea";
import ServicesAreaOne from "./ServicesAreaOne";
import RecentWorksArea from "./RecentWorksArea";
import BrandLogos from "../../components/brand-logos/BrandLogos";
import FaqArea from "../../components/faq/FaqArea";
import TestimonialsAreaOne from "../../components/testimonials/TestimonialsAreaOne";
import BlogArea from "../../components/blog/BlogArea";
import FooterOne from "../../layouts/footers/FooterOne";
import ProcessArea from "./ProcessArea";
import BackToTop from "../../common/BackToTop";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeOne />
      <KeywordsArea />
      <AboutAreaOne />
      <FactArea />
      <ServicesAreaOne />
      <ProcessArea />
      <RecentWorksArea />
      <BrandLogos />
      <TestimonialsAreaOne /> 
      <FaqArea />
      <BlogArea />
      <FooterOne />
      <BackToTop /> 
    </>
  );
};

export default HomeOne;
