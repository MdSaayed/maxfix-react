import React from 'react';
import { Link } from 'react-router-dom';
import portfolio_data from "../../../data/portfolio-data";

const PortfolioAreaOne = () => {
  return (
    <section className="portfolio portfolio--one">

      <div className="portfolio__container container">
        <h2 className="portfolio__title title">
          Creating virtual emotion in the universe, for the largest brands &
          market since
        </h2>
        <span className="portfolio__year title-gradient">{'{'}2018–2024{'}'}</span>
      </div>

      <div className="portfolio__container-custom container">

        <div className="portfolio__grid">
          {portfolio_data.map((item, index) => (
            <div className="portfolio__item" key={item.id}>
              <div className="portfolio__thumb-wrap">
                <img
                  className="portfolio__thumb"
                  src={item.image}
                  alt={item.alt}
                />
                <span className="portfolio__tag">{item.tags}</span>

                <Link to={item.link} className="portfolio__link-arrow">
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
                    <circle cx="38" cy="38" r="38" fill="white" />
                    <path
                      d="M28 28H47M47 28V47M47 28L28 47"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="portfolio__content-wrap">
                <div className="portfolio__item-title-wrap">
                  <span className="portfolio__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Link to={item.link} className="portfolio__item-link">
                    <h3 className="portfolio__item-title">{item.title}</h3>
                  </Link>
                </div>
                <div className="portfolio__year-tag">
                  <span className="portfolio__year-tag-bullet">•</span>
                  <span className="portfolio__year-tag-text">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__btn-wrap">
          <Link to="/portfolio" className="portfolio__btn btn__bluet">
            <span className="portfolio__btn-bluet bluet"></span>
            <span className="portfolio__btn-text btn-text">See All Our Projects</span>
          </Link>
        </div>
        
      </div>

    </section>
  );
};

export default PortfolioAreaOne;
