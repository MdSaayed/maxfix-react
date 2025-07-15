import React, { useEffect, useRef } from "react";
import testimonials_data from "../../data/testimonials-data";
import TestimonialsItemOne from "../elements/TestimonialsItemOne";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const TestimonialsAreaOne = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const lastCardRef = useRef(null);

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

  //   Animation
  // ✅ Animation Setup
  useGsapAnimations(
    [
      {
        type: "scroll",
        selector: [
          ".testimonials__label",
          ".testimonials__title",
          ".testimonials__button",
        ],
        trigger: ".testimonials__title-wrap",
        from: { y: 40, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.25,
        },
      },
      {
        type: "group",
        selector: ".testimonial-card",
        from: { scale: 0.8, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 1.6, ease: "power4.out" },
        stagger: 0.2,
      },
    ],
    sectionRef
  );

  return (
    <section className="testimonials testimonials--one" ref={sectionRef}>
      <div className="testimonials__container container">
        <div className="testimonials__title-wrap title-wrap__flex">
          <Subtitle
            text="Testimonials"
            wrapperClass="testimonials__label-wrap subtitle-wrap"
            subtitleClass="testimonials__label"
          />
          <h2 className="testimonials__title title-lg">Clients Reviews</h2>
          <ButtonArrow
            link="/services"
            text="View All Services"
            className="testimonials__btn"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAreaOne;
