import React from 'react';

const AboutAreaTwo = () => {
    const aboutItems = [
        {
            title: '• // Our Mission',
            text: 'We deliver purposeful design and technology solutions tailored for today’s business challenges',
        },
        {
            title: '• // Our Vision',
            text: 'Our vision is to shape meaningful digital experiences that inspire trust and spark engagement',
        },
        {
            title: '• // Our Awards',
            text: 'Honored with industry recognition for creativity, innovation, and impactful digital solutions',
        },
    ];
    
    return (
      <section className="about about--two">
        <div className="about__container container">

          <div className="about__title-wrap">
            <h2 className="about__title title">
              We are a team of creative professionals dedicated to helping
              businesses thrive in today’s fast-paced, ever-evolving, and highly
              competitive digital-first global market.
            </h2>
          </div>

          <div className="about__item-area">
            {aboutItems?.map((item, index) => (
                <div className="about__item-wrap" key={index}>
                <div className="about__item">
                    <h3 className="about__item-title">{item?.title}</h3>
                    <p className="about__item-text">{item?.text}</p>
                </div>
                </div>
            ))}
          </div>

          <div className="about__image">
            <img src="./assets/images/about/about-3.png" alt="Team illustration"/>
          </div>

        </div>
      </section>
    );
};

export default AboutAreaTwo;