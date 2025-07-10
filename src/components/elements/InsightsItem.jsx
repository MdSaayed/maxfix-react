import React from 'react';
import useBackground from '../../hooks/useBackground';
import { Link } from 'react-router-dom';

const InsightsItem = ({article,index}) => {
    const separatorBg = useBackground("./assets/images/shape/footer-shape.png" );

    return (
        <article className="insight-card" key={index}>
            <div className="insight-card__image">
                <img src={article.image} alt={article.alt} />
                <Link to={article.link} className="insight-card__link-arrow">
                    <svg
                        width="76"
                        height="76"
                        viewBox="0 0 76 76"
                        fill="none"
                        >
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
            <div className="insight-card__content">
                <p className="insight-card__meta">
                    {article.tag} <span>//</span> {article.date}
                </p>
                <Link to={article.link} className="insight-card__title-link">
                    <h3 className="insight-card__title">{article.title}</h3>
                </Link>
            <div className="insight-card__separator" style={separatorBg}></div>
            <div className="insight-card__author">
                <div className="insight-card__author-img-wrap">
                    <img className="insight-card__avatar" src={article.authorImg} alt={article.authorName} />
                </div>
                <div>
                    <span className="insight-card__name">{article.authorName}</span>
                    <span className="insight-card__readtime">{article.readTime}</span>
                </div>
            </div>
            </div>
        </article>
    );
};

export default InsightsItem;