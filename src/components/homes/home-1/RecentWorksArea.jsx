import React from 'react';
import { Link } from 'react-router-dom';
import recent_works from '../../../data/recent-works'; 
import RecentWorksCard from '../../elements/RecentWorksCard';

const RecentWorksArea = () => {
    return (
        <section className="recent-works">
            <div className="recent-work__container container">

                <div className="recent-works__title-wrap">
                    <h2 className="recent-works__title title-gradient">RECENT WORKS</h2>
                </div>

                <div className="recent-works__grid">
                    {recent_works?.map((item, index) => <RecentWorksCard key={index} item={item} />)}
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