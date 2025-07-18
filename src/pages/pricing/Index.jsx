import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterOne from "../../layouts/footers/FooterOne";
import Breadcrumb from "../../common/Breadcrumb";
import Keywords from "../../components/keywords/KeywordsArea";
import PricingArea from "../../components/pricing/PricingArea";
import FaqArea from "../../components/faq/FaqArea";
import BackToTop from "../../common/BackToTop";

const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Pricing plans" title="Flexible Pricing" />
      <Keywords />
      <PricingArea />
      <FaqArea />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Pricing;
