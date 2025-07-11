import React from "react";
import { Link } from "react-router-dom";

const PortfolioItemOne = ({item, index}) => {
  return (
    <div className="portfolio__item">
      <div className="portfolio__thumb-wrap">
        <img className="portfolio__thumb" src={item.image} alt={item.alt} />
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
            {String(index + 1).padStart(2, "0")}
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
  );
};

export default PortfolioItemOne;
