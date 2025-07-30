import React from "react";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import BackToTop from "../../common/BackToTop";
import BlogDetailsArea from "./BlogDetailsArea";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <BlogDetailsArea />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default BlogDetails;
