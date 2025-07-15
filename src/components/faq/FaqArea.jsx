import React, { useRef, useState } from "react";
import faq_data from "../../data/faq-data";
import FaqItem from "../elements/FaqItem";
import { Link } from "react-router-dom";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";
import ButtonArrow from "../../common/ButtonArrow";

const FaqArea = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Animation Logic
  useGsapAnimations(
    [
      {
        type: "scroll",
        trigger: ".faq__sidebar",
        selector: [".faq__title", ".faq__subtitle", ".faq__button"],
        from: { y: 60, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.25,
        },
      },
      // Loop over FAQ items as individual scroll triggers
      ...faq_data.map((_, index) => ({
        type: "scroll",
        selector: `.faq__item:nth-child(${index + 1})`,
        from: { y: 70, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: index * 0.1,
        },
      })),
    ],
    sectionRef
  );

  return (
    <section className="faq">
      <div className="faq__container container" ref={sectionRef}>
        <div className="faq__sidebar">
          <h2 className="faq__title title-lg">FAQ</h2>
          <div className="faq__sidebar-text-wrap">
            <p className="faq__subtitle">Having Another Question?</p>
            <ButtonArrow
              link="#"
              text="Get In Touch"
              variant="black"
              className="faq__button"
            />
          </div>
        </div>

        <div className="faq__content">
          {faq_data.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
