import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import TrustHighlight from "./TrustHighlight";
import useBackground from "../hooks/useBackground";

const Breadcrumb = ({ linkText, title }) => {
  const breadcrumbsBg = useBackground(
    "./assets/images/shape/portfolio-hero-bg.jpg"
  );
  const breadcrumbsImage = useBackground(
    "./assets/images/portfolio/portfolio-hero.png"
  );
  const location = useLocation();

  const breadcrumbsRef = useRef(null);
  const breadcrumbsImageContainerRef = useRef(null);
  const breadcrumbsNavRef = useRef(null);
  const breadcrumbsTitleRef = useRef(null);

  // Animation
  useEffect(() => {
    gsap.fromTo(
      breadcrumbsRef.current,
      { backgroundSize: "110%" },
      {
        backgroundSize: "100%",
        duration: 1.5,
        ease: "power2.out",
      }
    );

    if (breadcrumbsImageContainerRef.current) {
      gsap.fromTo(
        breadcrumbsImageContainerRef.current,
        { opacity: 0, scale: 1.3 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }

    if (breadcrumbsNavRef.current) {
      gsap.fromTo(
        breadcrumbsNavRef.current,
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.6,
        }
      );
    }

    if (breadcrumbsTitleRef.current) {
      gsap.fromTo(
        breadcrumbsTitleRef.current,
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.8,
        }
      );
    }
  }, [breadcrumbsBg, breadcrumbsImage]);

  return (
    <section className="breadcrumbs" style={breadcrumbsBg} ref={breadcrumbsRef}>
      <div className="breadcrumbs__container container">
        <div className="breadcrumbs__nav" ref={breadcrumbsNavRef}>
          <Link to="/" className="breadcrumbs__item">
            Home
          </Link>
          <span className="breadcrumbs__separator">//</span>
          <Link
            to={location}
            className="breadcrumbs__item breadcrumbs__item--active"
          >
            {linkText}
          </Link>
        </div>
        <h1 className="breadcrumbs__title title-lg" ref={breadcrumbsTitleRef}>
          {title}
        </h1>
      </div>

      <div
        className="breadcrumbs__container-custom container"
        style={breadcrumbsImage}
        ref={breadcrumbsImageContainerRef}
      >
        <TrustHighlight />
      </div>
    </section>
  );
};

export default Breadcrumb;
