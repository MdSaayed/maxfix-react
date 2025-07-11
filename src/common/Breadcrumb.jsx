import React from "react";
import { Link, useLocation } from "react-router-dom";
import TrustHighlight from "./TrustHighlight";
import useBackground from "../hooks/useBackground";

const Breadcrumb = ({ text }) => {
  const breadcrumbsBg = useBackground(
    "./assets/images/shape/portfolio-hero-bg.jpg"
  );
  const breadcrumbsImage = useBackground(
    "./assets/images/portfolio/portfolio-hero.png"
  );
  const location = useLocation();

  return (
    <section className="breadcrumbs" style={breadcrumbsBg}>
      <div className="breadcrumbs__container container">
        <div className="breadcrumbs__nav">
          <Link to="/" className="breadcrumbs__item">
            Home
          </Link>
          <span className="breadcrumbs__separator">//</span>
          <Link
            to={location}
            className="breadcrumbs__item breadcrumbs__item--active"
          >
            {text}
          </Link>
        </div>
        <h1 className="breadcrumbs__title title-lg">Services</h1>
      </div>

      <div
        className="breadcrumbs__container-custom container"
        style={breadcrumbsImage}
      >
        <TrustHighlight />
      </div>
    </section>
  );
};

export default Breadcrumb;
