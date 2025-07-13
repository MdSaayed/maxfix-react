import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import PortfolioDetailsHeroArea from "./PortfolioDetailsHeroArea";
import PortfolioDetailsArea from "./PortfolioDetailsArea";
import FooterOne from "../../layouts/footers/FooterOne";

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
