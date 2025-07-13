import React from "react";
import { Link } from "react-router-dom";
import portfolio_data from "../../data/portfolio-data";
import PortfolioItemOne from "../../components/elements/PortfolioItemOne";

const PortfolioAreaOne = () => {
  return (
    <section className="portfolio portfolio--one">
      <div className="portfolio__container container">
        <h2 className="portfolio__title title">
          Creating virtual emotion in the universe, for the largest brands &
          market since
        </h2>
        <span className="portfolio__year title-gradient">
          {"{"}2018–2024{"}"}
        </span>
      </div>

      <div className="portfolio__container-custom container">
        <div className="portfolio__grid">
          {portfolio_data.map((item, index) => (
            <PortfolioItemOne key={item.id} index={index} item={item} />
          ))}
        </div>

        <div className="portfolio__btn-wrap">
          <Link to="/portfolio" className="portfolio__btn btn__bluet">
            <span className="portfolio__btn-bluet bluet"></span>
            <span className="portfolio__btn-text btn-text">
              See All Our Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaOne;
