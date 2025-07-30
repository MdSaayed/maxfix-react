// hooks/useZoomReveal.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useZoomReveal = (sectionRef, selectors = [], options = {}) => {
  useEffect(() => {
    if (!sectionRef?.current) return;

    const defaultOptions = {
      type: "in",
      duration: 1.5,
      ease: "power4.out",
    };

    const config = { ...defaultOptions, ...options };
    const triggers = [];

    selectors.forEach((selector) => {
      const elements = sectionRef.current.querySelectorAll(selector);
      if (!elements.length) return;

      elements.forEach((el) => {
        const fromScale = config.type === "in" ? 0.8 : 1.2;

        // Create a paused timeline for the animation
        const tl = gsap.timeline({ paused: true });

        tl.fromTo(
          el,
          {
            opacity: 0,
            scale: fromScale,
          },
          {
            opacity: 1,
            scale: 1,
            duration: config.duration,
            ease: config.ease,
          }
        );

        // Create ScrollTrigger to control the timeline
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 85%", // When the top of the element is 85% down from the top of the viewport
          end: "bottom top", // Define an end point for the trigger. Important for onLeaveBack.
          animation: tl, // Link the timeline here
          onEnter: () => tl.restart(true), // Play on scroll down, restart from beginning
          onLeaveBack: () => tl.reverse(), // Reverse on scroll up and leave
          toggleActions: "none none none none", // Manual control
          // markers: true, // Uncomment for debugging
        });

        triggers.push(st); // Collect the ScrollTrigger instances
      });
    });

    return () => {
      // Kill all created ScrollTrigger instances on unmount
      triggers.forEach(trigger => trigger.kill());
    };
  }, [sectionRef, selectors, options]);
};