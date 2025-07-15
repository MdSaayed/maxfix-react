import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimations } from "../../hooks/useAnimations";

gsap.registerPlugin(ScrollTrigger);

const BrandLogos = () => {
  // Animation
  const itemsRef = useRef([]);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const { animateRepeatedly } = useAnimations();

  useEffect(() => {
    const title = titleRef.current;
    const items = itemsRef.current;
    const grid = gridRef.current;

    animateRepeatedly(
      title,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }
    );

    const trigger = ScrollTrigger.create({
      trigger: grid,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          items,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
          }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          items,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
          }
        );
      },
    });

    return () => trigger.kill();
  }, [animateRepeatedly]);

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
    <section className="brand-logos">
      <div className="brand-logos__container container">
        <h2 className="brand-logos__title" ref={titleRef}>
          (Loved by teams around the world)
        </h2>

        <div className="brand-logos__grid" ref={gridRef}>
          {brandImages.map((img, index) => (
            <div
              className="brand-logos__item"
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
            >
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
