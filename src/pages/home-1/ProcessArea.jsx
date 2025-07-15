import React, { useEffect } from "react";
import steps_data from "../../data/steps-data";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import ProcessStep from "../../components/elements/ProcessStep";
import { useAnimations } from "../../hooks/useAnimations";

const ProcessArea = () => {
  // Animation
  const duration = 2.2;
  const ease = "power4.out";
  const { animateRepeatedly, animateGroupItems } = useAnimations();

  useEffect(() => {
    animateRepeatedly(
      ".process__subtitle-wrap",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".process__title",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration, ease }
    );

    animateRepeatedly(
      ".process__btn",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration, ease }
    );

    animateGroupItems(
      ".process__step",
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease },
      0.1
    );
  }, []);

  return (
    <section className="process process--one">
      <div className="container__process container">
        <div className="process__content-area">
          <div className="process__intro">
            <div className="process__title-wrap">
              <Subtitle
                variant="secondary"
                text="Our Creative Process"
                wrapperClass="process__subtitle-wrap"
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
