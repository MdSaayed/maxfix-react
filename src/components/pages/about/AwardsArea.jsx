import React from "react";
import awards_data from "../../../data/awards-data";
import AwardItem from "../../elements/AwardItem";

const AwardsArea = () => {
  return (
    <section className="awards">
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
