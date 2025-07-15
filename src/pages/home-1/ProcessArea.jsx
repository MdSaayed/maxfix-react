import React, { useRef } from "react";
import steps_data from "../../data/steps-data";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import ProcessStep from "../../components/elements/ProcessStep";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const ProcessArea = () => {
  const sectionRef = useRef(null);

  useGsapAnimations(
    [
      {
        type: "scroll",
        selector: ".process__subtitle",
        from: { y: -40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".process__title",
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "scroll",
        selector: ".process__btn",
        from: { scale: 0.9, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 2.2, ease: "power4.out" },
      },
      {
        type: "group",
        selector: ".process__step",
        from: { y: 150, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
        stagger: 0.1,
      },
    ],
    sectionRef
  );

  return (
    <section className="process process--one" ref={sectionRef}> 
      <div className="container__process container">
        <div className="process__content-area">
          <div className="process__intro">
            <div className="process__title-wrap">
              <Subtitle
                variant="secondary"
                text="Our Creative Process"
                subtitleClass="process__subtitle"
              />
              <h2 className="process__title title-lg">
                {" "}
                Behind <br /> Every Pixel{" "}
              </h2>
            </div>

            <div className="process__btn-group">
              <ButtonArrow
                link="#"
                variant="black"
                text="Explore More"
                className="process__btn"
              />
            </div>
          </div>

          <div className="process__steps">
            {steps_data?.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessArea;
