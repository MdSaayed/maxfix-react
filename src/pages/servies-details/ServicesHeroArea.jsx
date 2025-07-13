import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ServicesHeroArea = () => {
  return (
    <section className="hero hero--services-details">
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

        <div className="hero__slider">
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
