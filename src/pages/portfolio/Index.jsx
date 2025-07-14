import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterOne from "../../layouts/footers/FooterOne";
import Breadcrumb from "../../common/Breadcrumb";
import Keywords from "../../components/keywords/KeywordsArea";
import RecentWorksArea from "../home-1/RecentWorksArea";
import BackToTop from "../../common/BackToTop";

const Portfolio = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Portfolio" title="Creative Showcase" />
      <Keywords />
      <RecentWorksArea
        showFilter={true}
        showBtn={false}
        showTitle={false}
        showItem={8}
      />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Portfolio;
