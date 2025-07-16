import { useEffect } from "react";
import { gsap } from "gsap";

export const useStaggerReveal = (sectionRef, selectors = [], options = {}) => {
  useEffect(() => {
    if (!sectionRef?.current || !Array.isArray(selectors)) return;

    const ctx = gsap.context(() => {
      selectors.forEach((selector) => {
        const elements = sectionRef.current.querySelectorAll(selector);
        if (!elements.length) return;

        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.20, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: options.duration || 1,
              ease: options.ease || "power2.out",
              scrollTrigger: {
                trigger: el,
                start: options.start || "top 90%",
                toggleActions: "play none none reset",
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, selectors, options]);
};
