import React from "react";
import { Link } from "react-router-dom";
import useBackground from "../../../hooks/useBackground";

const HeroAboutArea = () => {
  const heroBg = useBackground("./assets/images/about/about-hero-bg.jpg");

  return (
    <section className="hero hero--about">
      <div className="hero__container container" style={heroBg}>
        <h1 className="hero__title title-lg">
          We're Creating Cutting-edge digital user experiences.
        </h1>

        <div className="hero__actions">
          <Link to="/portfolio.html" className="hero__btn btn-arrow">
            <span className="btn-arrow__text">See All Our Projects</span>
          </Link>

          <Link to="#" className="hero__btn hero__btn--image">
            <img
              src="./assets/images/about/btn.png"
              alt="Button Image"
              className="hero__btn-img"
            />
          </Link>

          <p className="hero__desc">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla excepteur sint occaecat cupidatat
            culpa in officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="hero__container-custom container">
        <div className="hero__img-wrap">
          <img
            src="./assets/images/about/about-4.png"
            alt=""
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAboutArea;
