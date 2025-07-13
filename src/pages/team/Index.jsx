import React from "react";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import Breadcrumb from "../../../common/Breadcrumb";
import FooterOne from "../../../layouts/footers/FooterOne";
import Keywords from "../../keywords/Keywords";
import TeamAbout from "./TeamAbout";
import BrandsArea from "../../brands/BrandsArea";
import WhyChooseArea from "../about/WhyChooseArea";
import FaqArea from "../../faq/FaqArea";
import TeamArea from "../home-2/TeamArea";

const Team = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Team members" title="Our Talented Team" />
      <Keywords />
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
    </>
  );
};

export default Team;
