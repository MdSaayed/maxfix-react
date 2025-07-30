import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import HeroAboutArea from "./HeroAboutArea";
import AboutAreaThree from "./AboutAreaThree";
import FactArea from "../../components/fact/FactArea";
import BrandsArea from "../../components/brands/BrandsArea";
import WhyChooseArea from "./WhyChooseArea";
import TestimonialsAreaOne from "../../components/testimonials/TestimonialsAreaOne";
import TeamArea from "../home-2/TeamArea";
import AwardsArea from "./AwardsArea";
import FaqArea from "../../components/faq/FaqArea";
import FooterOne from "../../layouts/footers/FooterOne";
import BackToTop from "../../common/BackToTop";

const About = () => {
  return (
    <>
      <HeaderTwo /> 
      <HeroAboutArea />
      <AboutAreaThree />
      <FactArea />
      <BrandsArea />
      <WhyChooseArea />
      <TestimonialsAreaOne />
      <TeamArea />
      <AwardsArea />
      <FaqArea />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default About;
