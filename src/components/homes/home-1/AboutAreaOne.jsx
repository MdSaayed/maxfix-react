import React from 'react';

const AboutAreaOne = () => {
    
    return (
        <section className="about about--one">
            <div className="about__container container">

                <div className="about__title-wrap">
                    <div className="about__subtitle-wrap subtitle-wrap">
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                            <path d="M17.82 13.02C17.6326 12.8337 17.3792 12.7292 17.115 12.7292C16.8508 12.7292 16.5974 12.8337 16.41 13.02C16.2237 13.2074 16.1192 13.4608 16.1192 13.725C16.1192 13.9892 16.2237 14.2426 16.41 14.43L20.2 18.22H2V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18.22C0 18.7504 0.210714 19.2591 0.585786 19.6342C0.960859 20.0093 1.46957 20.22 2 20.22H20.15L16.41 23.97C16.2237 24.1574 16.1192 24.4108 16.1192 24.675C16.1192 24.9392 16.2237 25.1926 16.41 25.38C16.5963 25.5647 16.8477 25.6689 17.11 25.67C17.2416 25.6708 17.3721 25.6455 17.4939 25.5958C17.6157 25.546 17.7266 25.4727 17.82 25.38L24 19.22L17.82 13.02Z" fill="#FFFB1F"/>
                        </svg>
                        <span className="about__subtitle subtitle">Let's talk</span>
                    </div>
                    <h2 className="about__title title">
                        We create digital designs that help brands move faster & convert better. Your business deserves 
                        more than just a website. It needs results.
                    </h2>
                </div>

                <div className="about__content-wrap">
                    <div className="about__col about__col--left">
                        <div className="about__testimonial-wrap">
                            <p className="about__desc">We combine strategy, creativity, and technology to craft digital experiences that are meaningful and measurable. Our solutions are tailored to drive your business forward — not just visually, but functionally.</p>
                            <div className="about__testimonial">
                                <div className="about__testimonial-avatar-wrap">
                                    <img src="./assets/images/global/avatar-1.png" alt="Client photo" className="about__testimonial-avatar"/>
                                </div>
                                <div className="about__testimonial-info">
                                    <div className="about__testimonial-rating">5.0/5 ⭐⭐⭐⭐⭐</div>
                                    <p className="about__testimonial-quote"> Truly seamless experience — professional, quick, and on point.</p>
                                    <p className="about__testimonial-name"><strong>Sarah & John</strong>, Newlyweds</p>
                                </div>
                            </div>
                        </div>
                        <div className="about__image-wrap about__image-wrap--left">
                            <img src="./assets/images/about/about-1.png" alt="Team working" className="about__image about__image--left"/>
                        </div>
                    </div>

                    <div className="about__col about__col--right">
                        <div className="about__image-wrap about__image-wrap--right">
                            <img src="./assets/images/about/about-2.png" alt="Designer at work" className="about__image about__image--right"/>
                        </div>
                        <div className="about__button-wrapper btn-circle__wrapper">
                            <a to="#" className="about__button">
                                <span className="about__button-text">Explore<br/>Our Company</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <img src="./assets/images/hero/creative-hand.png" alt="Pointing hand" className="about__hand"/>
            </div>
        </section>
    );
};

export default AboutAreaOne;