import React, { useRef } from "react";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import { useZoomReveal } from "../../hooks/useGsapZoom";

// Data array
const reasons = [
  {
    title: "Results-Driven Approach",
    text: "We focus on measurable outcomes that drive growth and help clients achieve sustainable success across all digital channels.",
  },
  {
    title: "Full-Service Expertise",
    text: "Our team delivers end-to-end solutions with deep knowledge in design, development, and digital marketing strategies.",
  },
  {
    title: "Tailored Strategies",
    text: "Every project is unique, and we create personalized plans that align with client goals, industry needs, and market trends.",
  },
  {
    title: "Fast & Reliable Execution",
    text: "We deliver quality work within deadlines, ensuring smooth processes, clear communication, and dependable outcomes.",
  },
];

const WhyChooseArea = () => {
  const animateRef = useRef();

  // Animation
  useStaggerReveal(animateRef, [
    ".why-choose__subtitle-wra",
    ".why-choose__title",
    ".why-choose__btn",
    ".why-choose__item",
  ]);

  useZoomReveal(animateRef, [".why-choose__image"], { type: "in" });

  return (
    <section className="why-choose why-choose--one" ref={animateRef}>
      <div className="why-choose__container container">
        <div className="why-choose__header title-wrap__flex">
          <Subtitle
            text="Why Work With Us"
            wrapperClass="why-choose__subtitle-wrap"
          />
          <h2 className="why-choose__title title-lg">Why Choose Us?</h2>
          <ButtonArrow link="/services" text="View All Services" className="why-choose__btn" />
        </div>

        <div className="why-choose__content">
          <div className="why-choose__list">
            {reasons.map((reason, index) => (
              <div className="why-choose__item" key={index}>
                <h3 className="why-choose__item-title">{reason.title}</h3>
                <p className="why-choose__item-text">{reason.text}</p>
              </div>
            ))}
          </div>

          <div className="why-choose__image">
            <img
              src="./assets/images/why-choose-us/why-choose-1.png"
              alt="Team working together"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseArea;
