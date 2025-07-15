import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = (animations = [], ref = null) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animations.forEach(
        ({ type, selector, from, to, delay = 0, stagger = 0 }) => {
          if (!document.querySelector(selector)) return;

          const baseOptions = {
            trigger: selector,
            start: "top 85%",
            toggleActions: "play reset play reset", // animate every time
          };

          switch (type) {
            case "scroll":
              gsap.fromTo(selector, from, {
                ...to,
                scrollTrigger: baseOptions,
              });
              break;

            case "repeated":
              gsap.fromTo(selector, from, {
                ...to,
                scrollTrigger: baseOptions,
              });
              break;

            case "group":
              gsap.utils.toArray(selector).forEach((el, i) => {
                gsap.fromTo(el, from, {
                  ...to,
                  delay: delay + i * stagger,
                  scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play reset play reset",
                  },
                });
              });
              break;

            default:
              break;
          }
        }
      );
    }, ref);

    return () => ctx.revert(); // clean up
  }, [animations, ref]);
};
