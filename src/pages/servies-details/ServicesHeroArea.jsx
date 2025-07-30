import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import GLightbox from "glightbox";

gsap.registerPlugin(ScrollTrigger);

const ServicesHeroArea = () => {
  const animateRef = useRef();
  const sliderRef = useRef();

  useStaggerReveal(animateRef, [".hero__title", ".hero__tag"]);

  useEffect(() => {
    // GLightbox
    const lightbox = GLightbox({ selector: ".glightbox" });

    // ScrollTrigger animation for zoom-out thumbnail
    gsap.fromTo(
      sliderRef.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      lightbox.destroy();
      ScrollTrigger.killAll();
    };
  }, []);
  return (
    <section className="hero hero--services-details" ref={animateRef}>
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title title-lg">Brand Identity</h1>
          <p className="hero__tags">
            <span className="hero__tag">Corporate Identity</span>
            <span className="hero__tag">Copywriting</span>
            <span className="hero__tag">Wireframes</span>
            <span className="hero__tag">Packaging Design</span>
            <span className="hero__tag">Functional</span>
            <span className="hero__tag">Impactful</span>
          </p>
        </div>

        <div className="hero__slider" ref={sliderRef}>
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".hero__slider-button-next",
              prevEl: ".hero__slider-button-prev",
            }}
            className="hero__slider-wrap"
          >
            <SwiperSlide className="hero__slide">
              <img
                src="./assets/images/services/services-slider-1.png"
                alt="Mockup 1"
              />
            </SwiperSlide>
            <SwiperSlide className="hero__slide">
              <img
                src="./assets/images/services/services-slider-2.png"
                alt="Mockup 2"
              />
            </SwiperSlide>
          </Swiper>

          <div className="hero__slider-button-prev">
            <FaArrowLeft />
          </div>
          <div className="hero__slider-button-next">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroArea;
