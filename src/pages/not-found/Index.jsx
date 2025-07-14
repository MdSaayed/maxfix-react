import React from "react";
import ErrorArea from "./ErrorArea";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterOne from "../../layouts/footers/FooterOne";
import ErrorMarquee from "./ErrorMarquee";
import BackToTop from "../../common/BackToTop";

const NotFound = () => {
  return (
    <>
      <HeaderTwo />
      <ErrorArea />
      <ErrorMarquee />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default NotFound;
