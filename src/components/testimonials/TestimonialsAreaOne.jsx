import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import testimonials_data from "../../data/testimonials-data";
import TestimonialsItemOne from "../elements/TestimonialsItemOne";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";
import { useAnimations } from "../../hooks/useAnimations";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsAreaOne = () => {
  const listRef = useRef(null);
  const cardRefs = useRef([]);
  const lastCardRef = useRef(null);
  const titleWrapRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  // Responsive transform for last card
  useEffect(() => {
    const handleResize = () => {
      if (lastCardRef.current) {
        lastCardRef.current.style.transform =
          window.innerWidth >= 1190 ? "translateY(-150px)" : "translateY(0)";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse interaction
  const handleMouseEnter = (index) => {
    if (listRef.current) listRef.current.style.marginTop = "-7.5rem";
    if (index === testimonials_data.length - 1 && lastCardRef.current) {
      lastCardRef.current.style.transform = "translateY(0)";
    }
  };

  const handleMouseLeave = (index) => {
    if (listRef.current) listRef.current.style.marginTop = "0";
    if (index === testimonials_data.length - 1 && lastCardRef.current) {
      lastCardRef.current.style.transform =
        window.innerWidth >= 1190 ? "translateY(-150px)" : "translateY(0)";
    }
  };

  //Animations
  const { animateRepeatedly, fadeUpRepeat } = useAnimations();
  const duration = 2.1;
  const ease = "power4.out";

  useEffect(() => {
    animateRepeatedly(
      ".testimonials__label-wrap",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".testimonials__title",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease }
    );

    fadeUpRepeat(".blog__btn", 0.2);

    // Animate testimonial cards
    cardRefs.current.forEach((card, i) => {
      animateRepeatedly(
        card,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          delay: i * 0.2,
        }
      );
    });
  }, [animateRepeatedly]);

  return (
    <section className="testimonials testimonials--one">
      <div className="testimonials__container container">
        <div
          className="testimonials__title-wrap title-wrap__flex"
          ref={titleWrapRef}
        >
          <Subtitle
            text="Testimonials"
            wrapperClass="testimonials__label-wrap subtitle-wrap"
            subtitleClass="testimonials__label"
            subtitleRef={labelRef}
          />
          <h2 className="testimonials__title title-lg" ref={titleRef}>
            Clients Reviews
          </h2>
          <ButtonArrow
            link="/services"
            text="View All Services"
            className="testimonials__btn"
            btnRef={buttonRef}
          />
        </div>

        <div className="testimonials__list" ref={listRef}>
          {testimonials_data.map((testimonial, index) => (
            <TestimonialsItemOne
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isLast={index === testimonials_data.length - 1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              lastCardRef={lastCardRef}
              cardRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAreaOne;
