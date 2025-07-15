import React, { useRef } from "react";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const BrandLogos = () => {
  const sectionRef = useRef(null);

  useGsapAnimations(
    [
      {
        type: "scroll",
        selector: ".brand-logos__title",
        from: { y: -40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
      },
      {
        type: "group",
        selector: ".brand-logos__item",
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
        stagger: 0.2,
      },
    ],
    sectionRef
  );

  return (
    <section className="brand-logos" ref={sectionRef}>
      <div className="brand-logos__container container">
        <h2 className="brand-logos__title">
          (Loved by teams around the world)
        </h2>

        <div className="brand-logos__grid">
          <div className="brand-logos__item">
            <img
              src="./assets/images/brand/brand-1.png"
              alt="Logo 2"
              className="brand-logos__image"
            />
          </div>
          <div className="brand-logos__item">
            <img
              src="./assets/images/brand/brand-2.png"
              alt="Logo 3"
              className="brand-logos__image"
            />
          </div>
          <div className="brand-logos__item">
            <img
              src="./assets/images/brand/brand-3.png"
              alt="Logo 4"
              className="brand-logos__image"
            />
          </div>
          <div className="brand-logos__item">
            <img
              src="./assets/images/brand/brand-4.png"
              alt="Logo 5"
              className="brand-logos__image"
            />
          </div>
          <div className="brand-logos__item">
            <img
              src="./assets/images/brand/brand-5.png"
              alt="Logo 6"
              className="brand-logos__image"
            />
          </div>
          <div className="brand-logos__item">
            <img
              src="./assets/images/brand/brand-6.png"
              alt="Logo 6"
              className="brand-logos__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
