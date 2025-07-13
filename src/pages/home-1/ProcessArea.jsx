import React from "react";
import steps_data from "../../data/steps-data";
import { Link } from "react-router-dom";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import ProcessStep from "../../components/elements/ProcessStep";

const ProcessArea = () => {
  return (
    <section className="process process--one">
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
