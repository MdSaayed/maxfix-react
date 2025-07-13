import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import ServicesHeroArea from "./ServicesHeroArea";
import ServicesDetailsArea from "./ServicesDetailsArea";
import VideoSliderArea from "./VideoSliderArea";
import FooterOne from "../../layouts/footers/FooterOne";

const ServicesDetails = () => {
  return (
    <>
      <HeaderTwo />
      <ServicesHeroArea />
      <ServicesDetailsArea />
      <VideoSliderArea/>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;
