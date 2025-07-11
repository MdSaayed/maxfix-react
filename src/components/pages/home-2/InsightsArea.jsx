import React from "react";
import articles_data from "../../../data/articles-data";
import InsightsItem from "../../elements/InsightsItem";
import Subtitle from "../../../common/Subtitle";

const InsightsArea = () => {
  return (
    <section className="insights">
      <div className="container">
        <div className="insights__title-wrap">
          <Subtitle
            text="Latest Insights"
            wrapperClass="insights__subtitle-wrap"
            subtitleClass="insights__tagline"
          />
          <h2 className="insights__title title-gradient">ARTICLES</h2>
        </div>

        <div className="insights__articles">
          {articles_data.map((article, index) => (
            <InsightsItem key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsArea;
