import React, { useRef } from "react";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import { useZoomReveal } from "../../hooks/useGsapZoom";

const PortfolioDetailsHeroArea = () => {
  const animateRef = useRef(null);

  // Animation
  useStaggerReveal(animateRef, [
    ".portfolio-hero__title",
    ".portfolio-hero__desc",
    ".portfolio-hero__info-item",
  ]);
  useZoomReveal(animateRef, [".portfolio-hero__image-wrap"], { type: "in" });

  return (
    <section
      className="portfolio-hero portfolio-hero--details"
      ref={animateRef}
    >
      <div className="portfolio-hero__container container">
        <div className="portfolio-hero__text-content">
          <h1 className="portfolio-hero__title title-lg">
            Digital Product Design
          </h1>
          <p className="portfolio-hero__desc">
            Nor again is there anyone who loves and pursues or desires to obtain
            pain itself, because it is pain, but because occasionally
            circumstances occur in which toil and can procure him pleasure. To
            take a trivial example, which of ever undertakes laborious physical
            exercise, except to obtain some advantage from it?
          </p>
        </div>

        <ul className="portfolio-hero__info-list">
          <li className="portfolio-hero__info-item">
            <div className="portfolio-hero__info-text">
              <span className="portfolio-hero__info-label">Year</span>
              <span className="portfolio-hero__info-value">@2024</span>
            </div>
          </li>
          <li className="portfolio-hero__info-item">
            <div className="portfolio-hero__info-text">
              <span className="portfolio-hero__info-label">Client</span>
              <span className="portfolio-hero__info-value">
                Beyond the Screen
              </span>
            </div>
          </li>
          <li className="portfolio-hero__info-item">
            <div className="portfolio-hero__info-text">
              <span className="portfolio-hero__info-label">Services</span>
              <span className="portfolio-hero__info-value">
                Branding <span className="portfolio-hero__separator">//</span>
                UI/UX Design{" "}
                <span className="portfolio-hero__separator">//</span>
                Development
              </span>
            </div>
          </li>
        </ul>

        <div className="portfolio-hero__image-wrap">
          <img
            src="./assets/images/portfolio/portfolio-details-1.png"
            alt="Product Mockup"
            className="portfolio-hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailsHeroArea;
