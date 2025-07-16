import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useBackground from "../../hooks/useBackground";
import TrustHighlight from "../../common/TrustHighlight";

gsap.registerPlugin(ScrollTrigger);

const HeroAreaTwo = () => {
  const animateRef = useRef();
  const sectionBg = useBackground("./assets/images/hero/hero-home2.png");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero__title-text", {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "bottom center",
        skewY: 10,
      });
      gsap.set(".hero__image", {
        opacity: 0,
        scale: 1.2,
        y: 80,
        rotation: -10,
      });
      gsap.set(".hero__video-thumb", {
        opacity: 0,
        y: 60,
        scale: 0.7,
        rotation: 10,
      });
      gsap.set(".hero__video-thumb img", {
        scale: 1.2,
        transformOrigin: "center center",
      });
      gsap.set(".hero__subtitle", { opacity: 0, y: 40 });
      gsap.set(".hero__bg-img", { opacity: 0, scale: 1.1 });
      gsap.set(".hero__video-icon circle", {
        scale: 0,
        transformOrigin: "center center",
      });
      gsap.set(".hero__video-icon path", { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
      });

      tl.to(
        ".hero__title-text",
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          skewY: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "back.out(1.5)",
        },
        0
      ) // Start at time 0
        .to(
          ".hero__image",
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.6)",
          },
          0
        ) // Start at time 0
        .to(
          ".hero__video-thumb",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "back.out(2)",
          },
          0
        ) // Start at time 0
        .to(
          ".hero__video-thumb img",
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          0
        ) // Start at time 0
        .to(
          ".hero__subtitle",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          0
        ) // Start at time 0
        .to(
          ".hero__bg-img",
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power2.out",
          },
          0
        ) // Start at time 0
        .to(
          ".hero__video-icon circle",
          {
            scale: 1,
            duration: 0.7,
            ease: "back.out(2)",
          },
          0
        ) // Start at time 0
        .to(
          ".hero__video-icon path",
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          0.2
        );

      // 🔁 Create ScrollTrigger to control the timeline
      ScrollTrigger.create({
        trigger: animateRef.current,
        start: "top 90%",
        end: "bottom top",
        onEnter: () => tl.restart(true),
        onEnterBack: () => tl.restart(true),
        onLeave: () => tl.progress(0).pause(),
        onLeaveBack: () => tl.progress(0).pause(),
      });

      const bounds = animateRef.current.getBoundingClientRect();
      const isInView = bounds.top < window.innerHeight && bounds.bottom > 0;
      if (isInView) {
        tl.play();
      }
    }, animateRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero hero--two" ref={animateRef}>
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
