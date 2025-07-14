import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import Breadcrumb from "../../common/Breadcrumb";
import KeywordsArea from "../../components/keywords/KeywordsArea";
import TeamAbout from "./TeamAbout";
import TeamArea from "../home-2/TeamArea";
import BrandsArea from "../../components/brands/BrandsArea";
import WhyChooseArea from "../about/WhyChooseArea";
import FaqArea from "../../components/faq/FaqArea";
import FooterOne from "../../layouts/footers/FooterOne";
import BackToTop from "../../common/BackToTop";

const Team = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Team members" title="Our Talented Team" />
      <KeywordsArea />
      <TeamAbout />
      <TeamArea
        showContent={false}
        className="team--one team--member-page"
        showItem={8}
      />
      <BrandsArea />
      <WhyChooseArea />
      <FaqArea />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Team;
