import React, { useRef, useState } from "react";
import services_data from "../../data/services_data";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import ServicesItemOne from "../../components/elements/ServicesItemOne";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const ServicesAreaOne = ({ showHeader = true, customClass = "" }) => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Animation

  useGsapAnimations(
    [
      {
        type: "scroll",
        selector: ".services__subtitle-wrap",
        from: { y: -40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.1, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".services__title",
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.1, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".services__btn",  
        from: { opacity: 0 },
        to: { opacity: 1, duration: 2.1, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".services__desc",
        from: { x: -60, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 2.1, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".services__image",
        from: { x: 60, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 2.1, ease: "power4.out" },
      },
      {
        type: "group",
        selector: ".services__item",
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.1, ease: "power4.out" },
        stagger: 0.05,
      },
    ],
    sectionRef
  );

  return (
    <section
      className={`services services--one ${customClass}`}
      ref={sectionRef}
    >
      <div className="services__container container">
        {showHeader && (
          <>
            <div className="services__title-wrap title-wrap__flex">
              <Subtitle
                text="What We Offer"
                wrapperClass="services__subtitle-wrap"
                subtitleClass="services__subtitle"
              />
              <h2 className="services__title title-lg">Our Services</h2>
              <ButtonArrow
                link="/services"
                text="View All Services"
                className="services__btn"
              />
            </div>

            <div className="services__content">
              <p className="services__desc title">
                We provide top-tier digital services designed to elevate our
                brand and drive measurable results. Our offerings include custom
                web design and development,
              </p>
              <img
                src="./assets/images/services/services-1.png"
                alt="Services image"
                className="services__image"
              />
            </div>
          </>
        )}

        <div className="services__list">
          {services_data?.map((service, index) => (
            <ServicesItemOne
              key={index}
              index={index}
              service={service}
              activeIndex={activeIndex}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaOne;
