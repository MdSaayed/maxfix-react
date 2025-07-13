import React from "react";
import Subtitle from "../../common/Subtitle";

const PortfolioDetailsArea = () => {
  return (
    <section className="portfolio-details">
      <div className="portfolio-details__container container">
        <div className="portfolio-details__header">
          <div className="portfolio-details__content-wrap">
            <div className="portfolio-details__author-info">
              <p className="portfolio-details__author-desc">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat
              </p>

              <div className="portfolio-details__author">
                <div className="portfolio-details__author-img-wrap">
                  <img
                    src="./assets/images/global/avatar-11.png"
                    alt="Author"
                    className="portfolio-details__author-avatar"
                  />
                </div>
                <div className="portfolio-details__author-meta">
                  <h4 className="portfolio-details__author-name">
                    Natalie Jones
                  </h4>
                  <p className="portfolio-details__author-role">
                    Member of XYZ Team
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-details__summary">
              <p className="portfolio-details__summary-text">
                This project reinforced the importance of building user-centered
                features that offer value beyond aesthetics, especially in
                social networking. The app’s launch exceeded initial user growth
                targets, & the client received positive feedback on the app’s
                intuitive design and ad-free experience.
              </p>
            </div>
          </div>

          <div className="portfolio-details__cover-image">
            <img
              src="./assets/images/portfolio/portfolio-details-2.png"
              alt="Main Showcase"
              className="portfolio-details__image"
            />
          </div>
        </div>

        <div className="portfolio-details__section">
          <div className="portfolio-details__text-block">
            <Subtitle text="Challenge" />

            <div className="portfolio-details__text-wrap">
              <p className="portfolio-details__title">
                User-focused digital product design blends usability,
                aesthetics, & functionality to create seamless, engaging
                experiences across web and mobile platforms.
              </p>
              <p className="portfolio-details__text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                voluptates repudiandae sint et molestiae non recusandae. Itaque
                earum rerum hic tenetur a sapiente electus, and aut reiciendis
                voluptatibus maiores alias consequatur aut erferendis doloribus
                asperiores repellat.
              </p>
            </div>
          </div>

          <div className="portfolio-details__image-group">
            <img
              src="./assets/images/portfolio/portfolio-details-3.png"
              alt="Design 1"
              className="portfolio-details__image"
            />
            <img
              src="./assets/images/portfolio/portfolio-details-4.png"
              alt="Design 2"
              className="portfolio-details__image"
            />
            <img
              src="./assets/images/portfolio/portfolio-details-5.png"
              alt="Design 3"
              className="portfolio-details__image"
            />
          </div>
        </div>

        <div className="portfolio-details__section">
          <div className="portfolio-details__text-block">
            <Subtitle text="User experience focus" />

            <div className="portfolio-details__text-wrap">
              <p className="portfolio-details__title">
                A key challenge was balancing privacy controls with a
                user-friendly interface. To solve this, our team designed an
                intuitive settings menu that empowers users to manage their
                visibility without confusion or clutter, or compromise.
              </p>

              <p className="portfolio-details__text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                molestias a excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est,
              </p>

              <p className="portfolio-details__text">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a account of the system, and expound the actual teachings of
                the great explorer of the truth, the master-builder of human
                happiness. No one avoids itself because it is pleasure, but
                because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is
                there anyone who loves or pursues or desires
              </p>
            </div>
          </div>

          <div className="portfolio-details__image-group">
            <img
              src="./assets/images/portfolio/portfolio-details-3.png"
              alt="Design Repeat"
              className="portfolio-details__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailsArea;
