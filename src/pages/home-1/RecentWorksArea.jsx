import React, { useState } from "react";
import { Link } from "react-router-dom";
import recent_works from "../../../data/recent-works";
import RecentWorksCard from "../../elements/RecentWorksCard";

const RecentWorksArea = ({
  showTitle = true,
  showFilter = false,
  showBtn = true,
  showItem = 6,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(recent_works);
  const categories = [
    "All",
    ...new Set(recent_works.map((item) => item.category)),
  ];

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(recent_works);
    } else {
      const findItems = recent_works.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <section className="recent-works">
      <div className="recent-work__container container">
        {showTitle && (
          <>
            <div className="recent-works__title-wrap">
              <h2 className="recent-works__title title-gradient">
                RECENT WORKS
              </h2>
            </div>
          </>
        )}

        {showFilter && (
          <>
            <div className="recent-work__filters">
              <ul className="recent-work__filter-list">
                {categories.map((cate, i) => (
                  <li
                    key={i}
                    onClick={() => filterItems(cate)}
                    className={`recent-work__filter-item ${
                      cate === activeCategory ? "filter-active" : ""
                    }`}
                  >
                    {cate}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="recent-works__grid">
          {items?.slice(0, showItem)?.map((item, index) => (
            <RecentWorksCard key={index} item={item} />
          ))}
        </div>

        {showBtn && (
          <>
            <div className="recent-works__cta">
              <div className="recent__button-wrapper btn-circle__wrapper">
                <Link
                  to="./portfolio.html"
                  className="recent-works__cta-button"
                >
                  <span className="recent-works__cta-button-text">
                    See All Our Projects
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RecentWorksArea;
