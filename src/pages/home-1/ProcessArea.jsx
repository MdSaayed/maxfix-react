import React, { useEffect, useRef } from "react";
import steps_data from "../../data/steps-data";
import Subtitle from "../../common/Subtitle";
import ButtonArrow from "../../common/ButtonArrow";
import ProcessStep from "../../components/elements/ProcessStep";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
gsap.registerPlugin(ScrollTrigger);

const ProcessArea = () => {
  const introRef = useRef();

  // Animation
  useEffect(() => {
    const factItems = gsap.utils.toArray(".process__steps > div");

    factItems.forEach((item, i) => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        item,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: i * 0.1,
        }
      );

      ScrollTrigger.create({
        trigger: item,
        start: "top 90%",
        onEnter: () => tl.restart(true), 
        onLeaveBack: () => tl.reverse(), 
        toggleActions: "none none none none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Text animation
  useStaggerReveal(introRef, [
    ".process__subtitle-wrap",
    ".process__title",
    ".process__btn",
  ]);


  return (
    <section className="process process--one">
      <div className="container__process container">
        <div className="process__content-area">
          <div className="process__intro" ref={introRef}>
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
                link="/about"
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
