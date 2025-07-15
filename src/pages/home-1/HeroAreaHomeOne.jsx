import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAreaHomeOne = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const createScrollAnimation = (selector, fromVars, toVars) => {
        gsap.fromTo(selector, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: selector,
            start: "top 85%",
            toggleActions: "play reset play reset",
          },
        });
      };

      createScrollAnimation(
        ".hero__image--left",
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      createScrollAnimation(
        ".hero__brand",
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      createScrollAnimation(
        ".hero__video-icon-wrap",
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      createScrollAnimation(
        ".hero__stats",
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      createScrollAnimation(
        ".hero__tagline",
        { scale: 0.8, opacity: 0, transformOrigin: "left center" },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      createScrollAnimation(
        ".hero__text",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      createScrollAnimation(
        ".hero__image--right",
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );

      gsap.utils.toArray(".hero__line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { scaleY: 0, opacity: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play reset play reset",
            },
          }
        );
      });

      ScrollTrigger.create({
        trigger: ".hero__arrow",
        start: "top 90%",
        toggleActions: "play reset play reset",
        onEnter: () => {
          gsap.fromTo(
            ".hero__arrow",
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power4.out",
              onComplete: () => {
                gsap.to(".hero__arrow", {
                  y: 30,
                  repeat: -1,
                  yoyo: true,
                  duration: 1.2,
                  ease: "sine.inOut",
                });
              },
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero hero--one" ref={sectionRef}>
      <div className="hero__container container">
        <div className="hero__content-area">
          <div className="hero__image hero__image--left">
            <img
              className="hero__image"
              src="./assets/images/hero/hero-img-1.png"
              alt="Hero image left"
            />
          </div>

          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__header-group">
                <span className="hero__brand">Maxfix</span>
                <span className="hero__video-icon-wrap">
                  <img
                    className="hero__video-icon"
                    src="./assets/images/hero/hero-intro-video-icon.png"
                    alt="video icon"
                  />
                </span>

                <span className="hero__stats">
                  <span className="hero__stats-number">25 k+</span>
                  <span className="hero__stats-text">
                    Projects completed successfully
                  </span>
                </span>
              </span>

              <span className="hero__tagline">digital studio</span>
            </h1>

            <div className="hero__bottom">
              <div className="hero__desc">
                <p className="hero__text">
                  We craft innovative digital solutions that help businesses
                  grow and succeed in a fast-paced world. Trusted by clients
                  worldwide.
                </p>
                <img
                  className="hero__arrow"
                  src="./assets/images/hero/hero-down-arrow.png"
                  alt="arrow"
                />
              </div>

              <div className="hero__image hero__image--right">
                <img
                  className="hero__image"
                  src="./assets/images/hero/hero-img-2.png"
                  alt="Hero image right"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero__line hero__line--1"></div>
        <div className="hero__line hero__line--2"></div>
        <div className="hero__line hero__line--3"></div>
      </div>
    </section>
  );
};

export default HeroAreaHomeOne;
