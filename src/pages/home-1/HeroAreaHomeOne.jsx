import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAreaHomeOne = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Helper function to create ScrollTrigger with desired behavior (only on scroll down, reverse on scroll up)
      const createScrollAnimation = (selector, vars) => {
        const tl = gsap.timeline({ paused: true });
        tl.from(selector, vars);

        ScrollTrigger.create({
          trigger: selector,
          start: "top 85%", // Adjusted start for hero section elements
          end: "bottom top", // Important for onLeaveBack to work
          animation: tl,
          onEnter: () => tl.restart(true), // Play on scroll down, restart from beginning
          onLeaveBack: () => tl.reverse(), // Reverse on scroll up and leave
          toggleActions: "none none none none", // Manual control
          // markers: true, // Uncomment for debugging
        });
      };

      // Apply the custom ScrollTrigger behavior to each element
      createScrollAnimation(".hero__image--left", {
        x: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      createScrollAnimation(".hero__image--right", {
        x: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      createScrollAnimation(".hero__brand", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      createScrollAnimation(".hero__video-icon-wrap", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(2)",
      });

      createScrollAnimation(".hero__stats", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      createScrollAnimation(".hero__tagline", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      createScrollAnimation(".hero__text", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Continuous up and down animation for hero__arrow (always animate when in viewport)
      const arrowAnimation = gsap.to(".hero__arrow", {
        y: -10, // Move up by 10px
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true, // Go back and forth
        repeat: -1, // Repeat indefinitely
        paused: true, // Start paused
      });

      // Initial fade-in and scale for the arrow, then control the continuous animation
      const arrowInitialAnimation = gsap.timeline({ paused: true });
      arrowInitialAnimation.from(".hero__arrow", {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "bounce.out",
      });

      ScrollTrigger.create({
        trigger: ".hero__arrow",
        start: "top 95%",
        end: "bottom top", // Ensure it has an end point to determine leave
        animation: arrowInitialAnimation, // Initial animation
        onEnter: () => {
          arrowInitialAnimation.restart(true); // Restart initial animation
          arrowAnimation.play(); // Play continuous animation
        },
        onLeave: () => arrowAnimation.pause(), // Pause continuous animation when scrolling DOWN and leaving
        onEnterBack: () => {
          arrowInitialAnimation.play(); // Play initial animation when scrolling UP and re-entering
          arrowAnimation.play(); // Play continuous animation
        },
        onLeaveBack: () => arrowAnimation.pause(), // Pause continuous animation when scrolling UP and leaving
        toggleActions: "none none none none",
        // markers: true, // Uncomment for debugging
      });

      // Line animations
      createScrollAnimation(".hero__line--1", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
      });

      createScrollAnimation(".hero__line--2", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
      });

      createScrollAnimation(".hero__line--3", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power2.out",
      });
    }, heroRef); // Context for all animations within heroRef

    return () => ctx.revert(); // Revert all GSAP animations and ScrollTriggers on unmount
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
