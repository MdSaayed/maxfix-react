import React from 'react';
import { Link } from 'react-router-dom';
import recent_works from '../../../data/recent-works'; 

const RecentWorksArea = () => {
    return (
        <section className="recent-works">
            <div className="recent-work__container container">

                <div className="recent-works__title-wrap">
                    <h2 className="recent-works__title title-gradient">RECENT WORKS</h2>
                </div>

                <div className="recent-works__grid">
                    {recent_works?.map((item, index) => (
                        <div className="work-card" data-category={item?.category} key={index}>
                            <div className="work-card__image-wrapper">
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="work-card__image"
                                />
                                <Link to="./portfolio-details.html" className="work-card__button">
                                    View
                                </Link>
                                <div className="work-card__tags">
                                    {item?.tags?.map((tag, tagIndex) => (
                                        <span className="work-card__tag" key={tagIndex}>{tagIndex !== 0 ? "// ":""} {tag} </span>
                                    ))}
                                </div>
                            </div>
                            <div className="work-card__content">
                                <Link to="./portfolio-details.html" className="work-card__title-link">
                                    <h3 className="work-card__title">{item?.title}</h3>
                                </Link>
                                <div className="work-card__year-wrap">
                                    <span className="work-card__year">// {item?.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="recent-works__cta">
                    <div className="recent__button-wrapper btn-circle__wrapper">
                        <Link to="./portfolio.html" className="recent-works__cta-button">
                            <span className="recent-works__cta-button-text">See All Our Projects</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default RecentWorksArea;