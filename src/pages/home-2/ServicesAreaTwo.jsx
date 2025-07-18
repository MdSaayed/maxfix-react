import React, { useRef, useState } from "react";
import services_data2 from "../../data/services-data2";
import useBackground from "../../hooks/useBackground";
import ServicesTab from "../../components/elements/ServicesTab";
import ServicesItemTwo from "../../components/elements/ServicesItemTwo";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const ServicesAreaTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionBg = useBackground("./assets/images/shape/services-tab-bg.png");
  const animateRef = useRef();

  // Animation
  useStaggerReveal(animateRef, [".fade-up", ".services__tabs > button"]);

  return (
    <section
      className="services services--two"
      style={sectionBg}
      ref={animateRef}
    >
      <div className="services__container container">
        <p className="services__text title fade-up">
          {" "}
          We provide the best digital solutions tailored to elevate brands,
          drive and create lasting impact.{" "}
        </p>
        <h2 className="services__title title-gradient fade-up">SERVICES</h2>

        <div className="services__box">
          <div className="services__tabs">
            {services_data2?.map((item, index) => (
              <ServicesTab
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          <div className="services__contents">
            {services_data2?.map((item, index) => (
              <ServicesItemTwo
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaTwo;
