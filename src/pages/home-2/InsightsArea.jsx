import React, { useRef } from "react";
import articles_data from "../../data/articles-data";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import InsightsItem from "../../components/elements/InsightsItem";
import Subtitle from "../../common/Subtitle";
import { Link } from "react-router-dom";

const InsightsArea = ({
  showItem = 3,
  pagination = false,
  showTitle = false,
  className = "",
}) => {
  const animateRef = useRef();

  // Animation
  useStaggerReveal(animateRef, [
    ".insights__subtitle-wrap",
    ".insights__title",
    ".insights__articles > div",
    ".pagination__item",
  ]);

  return (
    <section className={`insights ${className}`} ref={animateRef}>
      <div className="insights__container container">
        {showTitle && (
          <>
            <div className="insights__title-wrap">
              <Subtitle
                text="Latest Insights"
                wrapperClass="insights__subtitle-wrap"
              />
              <h2 className="insights__title title-gradient">ARTICLES</h2>
            </div>
          </>
        )}

        <div className={`insights__articles`}>
          {articles_data.slice(0, showItem).map((article, index) => (
            <div key={index}>
              <InsightsItem article={article} />
            </div>
          ))}
        </div>

        {pagination && (
          <>
            <div className="insights__pagination pagination">
              <ul className="pagination__list">
                <li className="pagination__item">
                  <Link
                    to="/blog-details"
                    className="pagination__link pagination__link--active"
                  >
                    1
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link to="/blog-details" className="pagination__link">
                    2
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link to="/blog-details" className="pagination__link">
                    3
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link
                    to="/blog-details"
                    className="pagination__link pagination__link--arrow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="21"
                      viewBox="0 0 12 21"
                      fill="none"
                    >
                      <path
                        d="M0.608381 1.35179C0.338891 1.62136 0.1875 1.98693 0.1875 2.3681C0.1875 2.74927 0.338891 3.11484 0.608381 3.38441L7.72401 10.5L0.608381 17.6157C0.346529 17.8868 0.201636 18.2499 0.204911 18.6268C0.208186 19.0037 0.359367 19.3643 0.625891 19.6308C0.892416 19.8973 1.25296 20.0485 1.62987 20.0518C2.00677 20.055 2.36989 19.9101 2.64101 19.6483L10.7729 11.5164C11.0424 11.2468 11.1938 10.8812 11.1938 10.5C11.1938 10.1189 11.0424 9.7533 10.7729 9.48373L2.64101 1.35179C2.37143 1.0823 2.00587 0.930908 1.62469 0.930908C1.24352 0.930908 0.877952 1.0823 0.608381 1.35179Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InsightsArea;
