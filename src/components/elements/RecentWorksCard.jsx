import React from 'react';
import { Link } from 'react-router-dom';

const RecentWorksCard = ({item}) => {
    return (
        <div className="work-card" data-category={item?.category}>
            <div className="work-card__image-wrapper">
                <img
                    src={item?.image}
                    alt={item?.title}
                    className="work-card__image"
                />
                <Link to="/portfolio-details" className="work-card__button">
                    View
                </Link>
                <div className="work-card__tags">
                    {item?.tags?.map((tag, tagIndex) => (
                        <span className="work-card__tag" key={tagIndex}>{tagIndex !== 0 ? "// ":""} {tag} </span>
                    ))}
                </div>
            </div>
            <div className="work-card__content">
                <Link to="/portfolio-details" className="work-card__title-link">
                    <h3 className="work-card__title">{item?.title}</h3>
                </Link>
                <div className="work-card__year-wrap">
                    <span className="work-card__year">// {item?.year}</span>
                </div>
            </div>
        </div>
    );
};

export default RecentWorksCard;