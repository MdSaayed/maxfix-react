import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAreaHomeOne = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero__image--left", {
        x: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".hero__image--left",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__image--right", {
        x: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".hero__image--right",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__brand", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero__brand",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__video-icon-wrap", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".hero__video-icon-wrap",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__stats", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero__stats",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__tagline", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero__tagline",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__text", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero__text",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Continuous up and down animation for hero__arrow
      const arrowAnimation = gsap.to(".hero__arrow", {
        y: -10, // Move up by 10px
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true, // Go back and forth
        repeat: -1, // Repeat indefinitely
        paused: true, // Start paused
      });

      gsap.from(".hero__arrow", {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".hero__arrow",
          start: "top 95%",
          onEnter: () => arrowAnimation.play(), // Play continuous animation on enter
          onLeave: () => arrowAnimation.pause(), // Pause continuous animation on leave
          onEnterBack: () => arrowAnimation.play(), // Play continuous animation on enter back
          onLeaveBack: () => arrowAnimation.pause(), // Pause continuous animation on leave back
        },
      });

      gsap.from(".hero__line--1", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero__line--1",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__line--2", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero__line--2",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".hero__line--3", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero__line--3",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
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
                  <span className="hero__stats-number">25 k+</span>
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
