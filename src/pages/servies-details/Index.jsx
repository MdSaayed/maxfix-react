import React from "react";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import FooterOne from "../../../layouts/footers/FooterOne";
import ServicesHeroArea from "./ServicesHeroArea";
import ServicesDetailsArea from "./ServicesDetailsArea";
import VideoSliderArea from "./VideoSliderArea";

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
