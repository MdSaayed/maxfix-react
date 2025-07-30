import React from "react";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterOne from "../../layouts/footers/FooterOne";
import Breadcrumb from "../../common/Breadcrumb";
import Keywords from "../../components/keywords/KeywordsArea";
import FaqArea from "../../components/faq/FaqArea";
import VideoArea from "../services/VideoArea";
import BackToTop from "../../common/BackToTop";

const Faq = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="FAQs" title="Find Quick Answers" />
      <Keywords />
      <FaqArea />
      <VideoArea
        videoLink="https://www.youtube.com/watch?v=RwU7YY6emYc&pp=ygURcGxhY2Vob2xkZXIgdmlkZW8%3D"
        img="./assets/images/services/video-thumb-bg-2.png"
      />
      <FooterOne />
      <BackToTop /> 
    </>
  );
};

export default Faq;
