import { useEffect, useRef, useState } from "react";

const ScrollToTop = () => {
  const progressPathRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const handleScroll = () => {
      updateProgress();
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer__scroll-top" onClick={scrollToTop}>
      <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
        <circle cx="33" cy="33" r="33" fill="#FFFB1F" />
        <path
          d="M33.0605 22.121L32 21.0605L33.0605 20L34.121 21.0605L33.0605 22.121ZM34.5605 44.621C34.5605 45.0188 34.4025 45.4004 34.1212 45.6817C33.8399 45.963 33.4583 46.121 33.0605 46.121C32.6627 46.121 32.2811 45.963 31.9998 45.6817C31.7185 45.4004 31.5605 45.0188 31.5605 44.621H34.5605ZM23 30.0605L32 21.0605L34.121 23.1815L25.121 32.1815L23 30.0605ZM34.121 21.0605L43.121 30.0605L41 32.1815L32 23.1815L34.121 21.0605ZM34.5605 22.121V44.621H31.5605V22.121H34.5605Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;
