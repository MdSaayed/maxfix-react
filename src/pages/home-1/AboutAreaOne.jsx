import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Subtitle from "../../common/Subtitle";

gsap.registerPlugin(ScrollTrigger);

const AboutAreaOne = () => {
  const ease = "power4.out";

  // Animation
  useEffect(() => {
    gsap.fromTo(
      ".about__title-wrap",
      { opacity: 0, y: 90 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: ease,
        scrollTrigger: {
          trigger: ".about__title-wrap",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".about__col--left .about__desc, .about__testimonial",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: ease,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about__col--left",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".about__image--left",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: ease,
        scrollTrigger: {
          trigger: ".about__image--left",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".about__image--right",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: ease,
        scrollTrigger: {
          trigger: ".about__image--right",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".about__button",
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: ease,
        scrollTrigger: {
          trigger: ".about__button",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".about__hand",
      { opacity: 0, x: 100, rotate: 45 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.5,
        ease: ease,
        scrollTrigger: {
          trigger: ".about__hand",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="about about--one">
      <div className="about__container container">
        <div className="about__title-wrap">
          <Subtitle text="Let's talk" wrapperClass="about__subtitle-wrap" />
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
