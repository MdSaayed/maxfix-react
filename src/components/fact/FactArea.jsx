import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fact_data from "../../data/fact-data";
import FactItem from "../elements/FactItem";

gsap.registerPlugin(ScrollTrigger);

const FactArea = () => {

  // Animation
  useEffect(() => {
    const factItems = gsap.utils.toArray(".fact__item");

    factItems.forEach((item, i) => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        item,
        { y: 80, opacity: 0 },
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

  return (
    <section className="fact">
      <div className="fact__container container">
        <h2 className="fact__title visually-hidden">Fact</h2>
        <div className="fact__grid">
          {fact_data?.map((item, index) => (
            <FactItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactArea;
