import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import testimonials_data from "../../data/testimonials-data";
import TestimonialsItemOne from "../elements/TestimonialsItemOne";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsAreaOne = () => {
  const listRef = useRef(null);
  const cardRefs = useRef([]);
  const lastCardRef = useRef(null);
  const titleWrapRef = useRef(null);
  const labelRef = useRef(null);
  const buttonRef = useRef(null);
  const animateRef = useRef(null);

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
  useStaggerReveal(animateRef, [
    ".testimonials__title-wrap",
    ".testimonials__title",
    ".testimonials__btn",
  ]);

  useEffect(() => {
    const factItems = gsap.utils.toArray(".testimonials__list > div");

    factItems.forEach((item, i) => {
      if (!item) return;

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        item,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: i * 0.1,
        }
      );

      ScrollTrigger.create({
        trigger: item,
        start: "top 90%",
        end: "bottom top",
        animation: tl,

        onEnter: () => tl.restart(true),
        onLeaveBack: () => tl.reverse(),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <section className="testimonials testimonials--one" ref={animateRef}>
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
          <h2 className="testimonials__title title-lg">Clients Reviews</h2>
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
