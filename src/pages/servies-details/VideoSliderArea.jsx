import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSliderArea = () => {
  const videoSliderRef = useRef(null);
  const videoThumbRef = useRef(null);
  const playButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    let lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: false,
      autoplayVideos: false,
    });

    const handleClick = () => {
      // fully destroy and re-initialize lightbox
      lightbox.destroy();
      lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: false,
        autoplayVideos: false,
      });
    };

    // Attach click listener to all glightbox links
    const links = document.querySelectorAll(".glightbox");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // GSAP Animation
    const masterTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: videoSliderRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    if (videoThumbRef.current) {
      masterTl.fromTo(
        videoThumbRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0
      );
    }

    if (playButtonRef.current) {
      masterTl.fromTo(
        playButtonRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        0.5
      );
    }

    if (prevButtonRef.current && nextButtonRef.current) {
      masterTl.fromTo(
        [prevButtonRef.current, nextButtonRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 },
        0.7
      );
    }

    return () => {
      // Clean up
      if (lightbox) lightbox.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);


  return (
    <div className="video-slider" ref={videoSliderRef}>
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
                ref={videoThumbRef}
              />
              <a
                href="https://youtu.be/u31qwQUeGuM?si=x0LncYDOXQSLu_mX"
                className="video-slider__play-btn glightbox"
                ref={playButtonRef}
                data-type="video"
                data-source="youtube"
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
                data-type="video"
                data-source="youtube"
              />
              <a
                href="https://youtu.be/u31qwQUeGuM?si=x0LncYDOXQSLu_mX"
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
          <button
            className="video-slider__nav-btn video-slider__nav-btn--prev"
            ref={prevButtonRef}
          >
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

          <button
            className="video-slider__nav-btn video-slider__nav-btn--next"
            ref={nextButtonRef}
          >
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
