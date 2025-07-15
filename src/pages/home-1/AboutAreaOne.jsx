import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Subtitle from "../../common/Subtitle";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const AboutAreaOne = () => {
  const sectionRef = useRef(null);

  useGsapAnimations(
    [
      {
        type: "scroll",
        selector: ".about__subtitle-wrap",
        from: { y: -30, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".about__title",
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".about__desc",
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".about__testimonial",
        from: { x: -60, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".about__image--left",
        from: { x: -150, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".about__image--right",
        from: { x: 150, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".about__button",
        from: { y: 40, scale: 0.8, opacity: 0 },
        to: {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 2.2,
          ease: "power4.out",
          onComplete: () => {
            gsap.to(".about__button", {
              scale: 1.05,
              repeat: -1,
              yoyo: true,
              duration: 1.8,
              ease: "sine.inOut",
            });
          },
        },
      },
      {
        type: "scroll",
        selector: ".about__hand",
        from: { y: 30, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power4.out",
          onComplete: () => {
            gsap.to(".about__hand", {
              y: 10,
              repeat: -1,
              yoyo: true,
              duration: 2.4,
              ease: "sine.inOut",
            });
          },
        },
      },
    ],
    sectionRef
  );

  return (
    <section className="about about--one" ref={sectionRef}>
      <div className="about__container container">
        <div className="about__title-wrap">
          <Subtitle text="Let's talk" />
          <h2 className="about__title title">
            We create digital designs that help brands move faster & convert
            better. Your business deserves more than just a website. It needs
            results.
          </h2>
        </div>

        <div className="about__content-wrap">
          <div className="about__col about__col--left">
            <div className="about__testimonial-wrap">
              <p className="about__desc">
                We combine strategy, creativity, and technology to craft digital
                experiences that are meaningful and measurable. Our solutions
                are tailored to drive your business forward — not just visually,
                but functionally.
              </p>
              <div className="about__testimonial">
                <div className="about__testimonial-avatar-wrap">
                  <img
                    src="./assets/images/global/avatar-1.png"
                    alt="Client photo"
                    className="about__testimonial-avatar"
                  />
                </div>
                <div className="about__testimonial-info">
                  <div className="about__testimonial-rating">
                    5.0/5 ⭐⭐⭐⭐⭐
                  </div>
                  <p className="about__testimonial-quote">
                    {" "}
                    Truly seamless experience — professional, quick, and on
                    point.
                  </p>
                  <p className="about__testimonial-name">
                    <strong>Sarah & John</strong>, Newlyweds
                  </p>
                </div>
              </div>
            </div>
            <div className="about__image-wrap about__image-wrap--left">
              <img
                src="./assets/images/about/about-1.png"
                alt="Team working"
                className="about__image about__image--left"
              />
            </div>
          </div>

          <div className="about__col about__col--right">
            <div className="about__image-wrap about__image-wrap--right">
              <img
                src="./assets/images/about/about-2.png"
                alt="Designer at work"
                className="about__image about__image--right"
              />
            </div>
            <div className="about__button-wrapper btn-circle__wrapper">
              <Link to="#" className="about__button">
                <span className="about__button-text">
                  Explore
                  <br />
                  Our Company
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <img
          src="./assets/images/hero/creative-hand.png"
          alt="Pointing hand"
          className="about__hand"
        />
      </div>
    </section>
  );
};

export default AboutAreaOne;
