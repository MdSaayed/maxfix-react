import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const VideoSliderArea = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="video-slider">
      <div className="video-slider__container container">
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".video-slider__nav-btn--next",
            prevEl: ".video-slider__nav-btn--prev",
          }}
          className="custom-slider"
        >
          <SwiperSlide className="video-slider__slide">
            <div className="video-slider__inner">
              <img
                src="./assets/images/services/video-thumb.png"
                alt="Video Thumb 1"
                className="video-slider__thumb"
              />
              <a
                href="https://www.w3schools.com/html/mov_bbb.mp4"
                className="video-slider__play-btn glightbox"
              >
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <circle cx="90" cy="90" r="80" fill="white" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="black"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    Play
                  </text>
                </svg>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="video-slider__slide">
            <div className="video-slider__inner">
              <img
                src="./assets/images/services/video-thumb-2.jpg"
                alt="Video Thumb 2"
                className="video-slider__thumb"
              />
              <a
                href="https://youtu.be/szuAo5azIvg?si=UENgGR6v1PakyMvJ"
                className="video-slider__play-btn glightbox"
                data-type="video"
              >
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <circle cx="90" cy="90" r="80" fill="white" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="black"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    Play
                  </text>
                </svg>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="video-slider__nav">
          <button className="video-slider__nav-btn video-slider__nav-btn--prev">
            Prev Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="25"
              viewBox="0 0 17 25"
              fill="none"
            >
              <path
                d="M16.1771 24.2467L1 0.716797C1.94495 2.33995 2.89024 9.19256 1.37829 12.3726"
                stroke="white"
              />
            </svg>
          </button>

          <button className="video-slider__nav-btn video-slider__nav-btn--next">
            Next Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="25"
              viewBox="0 0 17 25"
              fill="none"
            >
              <path
                d="M0.822893 24.2467L16 0.716797C15.0551 2.33995 14.1098 9.19256 15.6217 12.3726"
                stroke="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSliderArea;
