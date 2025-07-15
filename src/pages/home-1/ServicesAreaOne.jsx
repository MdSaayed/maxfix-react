import React, { useEffect, useRef, useState } from "react";
import services_data from "../../data/services_data";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import ServicesItemOne from "../../components/elements/ServicesItemOne";
import { useAnimations } from "../../hooks/useAnimations";

const ServicesAreaOne = ({ showHeader = true, customClass = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Animation
  const { animateRepeatedly, animateGroupItems } = useAnimations();
  const duration = 2.1;
  const ease = "power4.out";

  useEffect(() => {
    animateRepeatedly(
      ".services__subtitle-wrap",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".services__title",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".services__btn",
      { opacity: 0 },
      { opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".services__desc",
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".services__image",
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration, ease }
    );

    animateGroupItems(
      ".services__item",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration, ease },
      0.05
    );
  }, []);

  return (
    <section className={`services services--one ${customClass}`}>
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
