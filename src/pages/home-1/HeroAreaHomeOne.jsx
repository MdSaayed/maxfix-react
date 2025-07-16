import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAreaHomeOne = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== SET initial hidden states =====
      gsap.set(".hero__image--left", { x: -100, opacity: 0 });
      gsap.set([".hero__brand", ".hero__video-icon-wrap", ".hero__stats"], { y: 50, opacity: 0 });
      gsap.set(".hero__tagline", { y: 40, opacity: 0 });
      gsap.set(".hero__text", { y: 30, opacity: 0 });
      gsap.set(".hero__arrow", { y: 20, opacity: 0 });
      gsap.set(".hero__image--right", { x: 100, opacity: 0 });

      // ===== Animate on scroll (every time) =====
      gsap.to(".hero__image--left", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero__image--left",
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });

      gsap.to([".hero__brand", ".hero__video-icon-wrap", ".hero__stats"], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero__brand",
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });

      gsap.to(".hero__tagline", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero__tagline",
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });

      gsap.to(".hero__text", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero__text",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      });

      gsap.to(".hero__arrow", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hero__arrow",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      });

      gsap.to(".hero__image--right", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero__image--right",
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });

      // ===== Arrow bounce animation (infinite) =====
      gsap.to(".hero__arrow", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
        delay: 2, // optional: wait before bouncing starts
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero hero--one" ref={heroRef}>
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
