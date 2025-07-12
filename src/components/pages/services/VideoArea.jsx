import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const VideoArea = ({
  videoLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  img = "./assets/images/services/video-thumb-bg.png",
}) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="video-area">
      <div className="video-area__container container">
        <div className="video-area__thumb-wrapper">
          <img
            src={img}
            alt="Intro Video"
            className="video-area__thumb"
          />
          <a
            href={videoLink}
            className="video-area__play-btn glightbox"
            data-gallery="video"
          >
            <img
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
