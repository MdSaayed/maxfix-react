import React from "react";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterOne from "../../../layouts/footers/FooterOne";
import Breadcrumb from "../../../common/Breadcrumb";
import Keywords from "../../keywords/Keywords";
import PricingArea from "../../pricing/PricingArea";
import FaqArea from "../../faq/FaqArea";

const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="Pricing plans" title="Flexible Pricing" />
      <Keywords />
      <PricingArea />
      <FaqArea />
      <FooterOne />
    </>
  );
};

export default Pricing;
