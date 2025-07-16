import React, { useRef } from "react";
import articles_data from "../../data/articles-data";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import InsightsItem from "../../components/elements/InsightsItem";

const InsightsArea = () => {
  const animateRef = useRef();

  // Animation
  useStaggerReveal(animateRef, [".insights__articles > div"]);

  return (
    <section ref={animateRef}>
      <div className="container">
        <div className="insights__articles">
          {articles_data.slice(0, 3).map((article, index) => (
            <div key={index}>
              <InsightsItem article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsArea;
