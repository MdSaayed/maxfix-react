import React from 'react';

const HeroAreaHomeOne = () => {

    return (
        <section className="hero hero--one" >
            <div className="hero__container container">
                <div className="hero__content-area">
                    <div className="hero__image hero__image--left">
                        <img className="hero__image" src="./assets/images/hero/hero-img-1.png" alt="Hero image left"/>
                    </div>
                    
                    <div className="hero__content">
                        <h1 className="hero__title">
                            <span className="hero__header-group">
                                <span className="hero__brand">Maxfix</span>
                                <span className="hero__video-icon-wrap">
                                    <img className="hero__video-icon" src="./assets/images/hero/hero-intro-video-icon.png" alt="video icon"/>
                                </span>

                                <span className="hero__stats">
                                    <span className="hero__stats-number">25 k+</span>
                                    <span className="hero__stats-text">Projects completed successfully</span>
                                </span>
                            </span>

                            <span className="hero__tagline">digital studio</span>
                        </h1>

                        <div className="hero__bottom">
                            <div className="hero__desc">
                                <p className="hero__text">
                                    We craft innovative digital solutions that help businesses grow and succeed in a fast-paced world. Trusted by clients worldwide.
                                </p>
                                <img className="hero__arrow" src="./assets/images/hero/hero-down-arrow.png" alt="arrow"/>
                            </div>

                            <div className="hero__image hero__image--right">
                                <img className="hero__image"  src="./assets/images/hero/hero-img-2.png" alt="Hero image right"/>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hero__line hero__line--1"></div>
                <div className="hero__line hero__line--2"></div>
                <div className="hero__line hero__line--3"></div>
            </div>
        </section>
    );
};

export default HeroAreaHomeOne;