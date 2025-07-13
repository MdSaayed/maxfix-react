import React from "react";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterOne from "../../../layouts/footers/FooterOne";
import PortfolioDetailsHeroArea from "./PortfolioDetailsHeroArea";
import PortfolioDetailsArea from "./PortfolioDetailsArea";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderTwo />
      <PortfolioDetailsHeroArea />
      <PortfolioDetailsArea />
      <FooterOne />
    </>
  );
};

export default PortfolioDetails;
