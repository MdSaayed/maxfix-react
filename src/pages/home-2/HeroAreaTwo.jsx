import React from "react";
import { Link } from "react-router-dom";
import useBackground from "../../hooks/useBackground";
import TrustHighlight from "../../common/TrustHighlight";

const HeroAreaTwo = () => {
  const sectionBg = useBackground("./assets/images/hero/hero-home2.png");

  return (
    <section className="hero hero--two">
      <div className="hero__container container">
        <div className="hero__title-wrap">
          <h1 className="hero__title">
            <span className="hero__title-text">Partnering</span>
            <span className="hero__title-text hero__title-text-small">
              Brands in the
            </span>
          </h1>
          <div className="hero__image-wrap">
            <img
              className="hero__image"
              src="./assets/images/hero/hero-home2-1.png"
              alt="Digital Sphere"
            />
          </div>
        </div>

        <div className="hero__subtitle-wrap">
          <div className="hero__video-thumb">
            <img
              src="./assets/images/hero/hero-home2-video.png"
              alt="Play Video"
            />
            <Link
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="hero__video-icon glightbox"
            >
              <svg width="40" height="40" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="white" />
                <path
                  d="M45.25 35.433C45.5833 35.2406 45.5833 34.7594 45.25 34.567L30.25 25.9067C29.9167 25.7143 29.5 25.9548 29.5 26.3397V43.6603C29.5 44.0452 29.9167 44.2857 30.25 44.0933L45.25 35.433Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <span className="hero__subtitle">Digital Age</span>
        </div>
      </div>

      <div
        className="hero__container-custom container hero__bg-img"
        style={sectionBg}
      >
        <TrustHighlight />
      </div>
    </section>
  );
};

export default HeroAreaTwo;
