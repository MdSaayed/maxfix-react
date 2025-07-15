import React, { useRef } from "react";
import fact_data from "../../data/fact-data";
import FactItem from "../elements/FactItem";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const FactArea = () => {
  const sectionRef = useRef(null);

  useGsapAnimations(
    [
      {
        type: "group",
        selector: ".fact__item",
        from: { y: 80, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
        stagger: 0.1,
      },
    ],
    sectionRef
  );

  return (
    <section className="fact" ref={sectionRef}>
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
