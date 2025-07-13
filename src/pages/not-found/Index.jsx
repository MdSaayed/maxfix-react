import React from "react";
import ErrorArea from "./ErrorArea";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterOne from "../../layouts/footers/FooterOne";
import ErrorMarquee from "./ErrorMarquee";

const NotFound = () => {
  return (
    <>
      <HeaderTwo />
      <ErrorArea />
      <ErrorMarquee />
      <FooterOne />
    </>
  );
};

export default NotFound;
