import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useBackground from "../../hooks/useBackground";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import { useZoomReveal } from "../../hooks/useGsapZoom";

const HeroAboutArea = () => {
  const animateRef = useRef(null);
  const heroBg = useBackground("./assets/images/about/about-hero-bg.jpg");

  // Animation
  useStaggerReveal(animateRef, [".hero__title", ".hero__btn", ".hero__desc"]);
  useZoomReveal(animateRef, [".hero__container-custom"], { type: "in" });

  return (
    <section className="hero hero--about" ref={animateRef}>
      <div className="hero__container container" style={heroBg}>
        <h1 className="hero__title title-lg">
          We're Creating Cutting-edge digital user experiences.
        </h1>

        <div className="hero__actions">
          <Link to="/portfolio" className="hero__btn btn-arrow">
            <span className="btn-arrow__text">See All Our Projects</span>
          </Link>

          <div className="hero__btn hero__btn--image">
            <img
              src="./assets/images/about/btn.png"
              alt="Button Image"
              className="hero__btn-img"
            />
          </div>

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
