import React, { useRef } from "react";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const ServicesDetailsArea = () => {
  const animateRef = useRef();

  useStaggerReveal(animateRef, [
    ".service-details__title",
    ".service-details__desc",
    ".service-details__list-item",
  ]);

  return (
    <section className="service-details" ref={animateRef}>
      <div className="service-details__container container">
        <h2 className="service-details__title">
          How to Improve and measure your progress brand identity
        </h2>

        <p className="service-details__desc">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit consectetur.
        </p>

        <p className="service-details__desc">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti corrupti quos dolores et
          quas molestias excepturi sint occaecati cupiditate non provident.
        </p>

        <h3 className="service-details__title">Detailed Services Overview</h3>

        <p className="service-details__desc">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue.
        </p>

        <h3 className="service-details__title">Benefit of service</h3>

        <p className="service-details__desc">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti corrupti quos dolores et
          quas molestias excepturi sint occaecati cupiditate non provident.
        </p>

        <ul className="service-details__list">
          <li className="service-details__list-item">
            Stronger Brand Recognition
          </li>
          <li className="service-details__list-item">
            Improved User Experience
          </li>
          <li className="service-details__list-item">
            Clear, Impactful Messaging
          </li>
          <li className="service-details__list-item">
            Increased Customer Trust
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesDetailsArea;
