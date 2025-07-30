import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

export const useStaggerReveal = (sectionRef, selectors = [], options = {}) => {
  useEffect(() => {
    if (!sectionRef?.current || !Array.isArray(selectors)) return;

    const ctx = gsap.context(() => {
      selectors.forEach((selector) => {
        const elements = sectionRef.current.querySelectorAll(selector);
        if (!elements.length) return;

        elements.forEach((el) => {
          const tl = gsap.timeline({ paused: true });

          tl.fromTo(
            el,
            { opacity: 0.20, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: options.duration || 1,
              ease: options.ease || "power2.out",
            }
          );

          ScrollTrigger.create({
            trigger: el,
            start: options.start || "top 90%",
            end: "bottom top",
            animation: tl,
            onEnter: () => tl.restart(true), 
            onLeaveBack: () => tl.reverse(), 
            toggleActions: "none none none none", 
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, selectors, options]);
};