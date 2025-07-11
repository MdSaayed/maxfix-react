import React from "react";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import Breadcrumb from "../../../common/Breadcrumb";
import FooterOne from "../../../layouts/footers/FooterOne";
import InsightsArea from "../home-2/InsightsArea";
import Keywords from "../../keywords/Keywords";

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb linkText="News & Article" title="Insights & Updates"/>
      <Keywords/>
      <InsightsArea showItem={6} showTitle={false} className="insights--blog" pagination={true} />
      <FooterOne />
    </>
  );
};

export default Blog;
