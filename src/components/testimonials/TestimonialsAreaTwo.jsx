import React, { useRef, useState } from "react";
import testimonials_data2 from "../../data/testimonials-data2";
import useBackground from "../../hooks/useBackground";
import TestimonialsItemTwo from "../elements/TestimonialsItemTwo";
import Subtitle from "../../common/Subtitle";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

const TestimonialsAreaTwo = () => {
  const animateRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionBg = useBackground("./assets/images/shape/testimonial-bg.png");

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  };

  //   Animation
  useStaggerReveal(animateRef, [".fade-up", ".testimonials__list> div"]);

  return (
    <section
      className="testimonials testimonials--two"
      style={sectionBg}
      ref={animateRef}
    >
      <div className="testimonials__container container">
        <Subtitle text="Testimonials" wrapperClass="fade-up" />
        <h2 className="testimonials__title title-gradient fade-up">Reviews</h2>

        <div className="testimonials__list">
          {testimonials_data2.map((testimonial, i) => {
            const isActive = activeIndex === i;
            return (
              <TestimonialsItemTwo
                key={i}
                isActive={isActive}
                index={i}
                testimonial={testimonial}
                handleToggle={handleToggle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAreaTwo;
