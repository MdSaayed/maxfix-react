import React, { useEffect } from "react";
import fact_data from "../../data/fact-data";
import FactItem from "../elements/FactItem";
import { useAnimations } from "../../hooks/useAnimations";

const FactArea = () => {
  const { animateGroupItems } = useAnimations();

  useEffect(() => {
    animateGroupItems(
      ".fact__item",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
      0.1
    );
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
