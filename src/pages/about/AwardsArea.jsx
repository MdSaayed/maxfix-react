import React, { useRef } from "react";
import awards_data from "../../data/awards-data";
import AwardItem from "../../components/elements/AwardItem";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const AwardsArea = () => {
  const animateRef = useRef(null);

  // Animation
  useStaggerReveal(animateRef, [".awards__row", ".awards__title"]);
  
  return (
    <section className="awards" ref={animateRef}>
      <div className="awards__container container">
        <h2 className="awards__title title-lg">
          Excellence That Earns Recognition
        </h2>

        <div className="awards__table">
          {awards_data.map((award, index) => (
            <AwardItem key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsArea;
