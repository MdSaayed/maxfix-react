import React, { useEffect, useRef } from "react";
import GLightbox from "glightbox";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "glightbox/dist/css/glightbox.min.css";

gsap.registerPlugin(ScrollTrigger);

const VideoArea = ({
  videoLink = "https://youtu.be/u31qwQUeGuM?si=x0LncYDOXQSLu_mX",
  img = "./assets/images/services/video-thumb-bg.png",
}) => {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "aria-hidden" &&
          mutation.target.id === "root"
        ) {
          // Remove aria-hidden from root to avoid accessibility conflict
          mutation.target.removeAttribute("aria-hidden");
        }
      });
    });

    const rootEl = document.getElementById("root");
    if (rootEl) {
      observer.observe(rootEl, { attributes: true });
    }

    // GSAP animations
    gsap.fromTo(
      wrapperRef.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(btnRef.current, {
      scale: 1.15,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });

    return () => {
      lightbox.destroy();
      ScrollTrigger.killAll();
      observer.disconnect();
    };
  }, []);


  return (
    <div className="video-area">
      <div className="video-area__container container">
        <div className="video-area__thumb-wrapper" ref={wrapperRef}>
          <img src={img} alt="Intro Video" className="video-area__thumb" />
          <a
            href={videoLink}
            className="video-area__play-btn glightbox"
            data-gallery="video"
          >
            <img
              ref={btnRef}
              src="./assets/images/services/video-play-btn.png"
              alt="Play Button"
              className="video-area__play-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
