import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

gsap.registerPlugin(ScrollTrigger);

const BrandLogos = () => {
  const animateRef = useRef(null);
  
  // Animation
  useStaggerReveal(animateRef, [
    ".brand-logos__title",
    ".brand-logos__grid> div",
  ]);

  // Logos
  const brandImages = [
    "./assets/images/brand/brand-1.png",
    "./assets/images/brand/brand-2.png",
    "./assets/images/brand/brand-3.png",
    "./assets/images/brand/brand-4.png",
    "./assets/images/brand/brand-5.png",
    "./assets/images/brand/brand-6.png",
  ];

  return (
    <section className="brand-logos" ref={animateRef}>
      <div className="brand-logos__container container">
        <h2 className="brand-logos__title">
          (Loved by teams around the world)
        </h2>

        <div className="brand-logos__grid">
          {brandImages.map((img, index) => (
            <div className="brand-logos__item" key={index}>
              <img
                src={img}
                alt={`Brand logo ${index + 1}`}
                className="brand-logos__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
