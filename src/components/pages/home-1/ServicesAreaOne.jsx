import React, { useState } from "react";
import services_data from "../../../data/services_data";
import ButtonArrow from "../../../common/ButtonArrow";
import Subtitle from "../../../common/Subtitle";
import ServicesItemOne from "../../elements/ServicesItemOne";

const ServicesAreaOne = ({ showHeader = true , customClass=""}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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
              <ButtonArrow link="/services" text="View All Services" />
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
