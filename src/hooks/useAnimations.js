// hooks/useAnimations.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  // Repeated fade in animation
  const animateRepeatedly = (selector, fromVars, toVars) => {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () => gsap.fromTo(selector, fromVars, toVars),
      onEnterBack: () => gsap.fromTo(selector, fromVars, toVars),
    });
  };

  // Single element scroll animation
  const animateOnScroll = (target, vars) => {
    ScrollTrigger.create({
      trigger: target,
      start: "top 90%",
      onEnter: () => gsap.fromTo(target, vars.from, vars.to),
      onEnterBack: () => gsap.fromTo(target, vars.from, vars.to),
    });
  };

  // Animate group of elements with stagger
  const animateGroupItems = (selector, fromVars, toVars, delayEach = 0) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      gsap.set(el, fromVars); // Set initial state

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          gsap.set(el, fromVars);
          gsap.to(el, { ...toVars, delay: i * delayEach });
        },
        onEnterBack: () => {
          gsap.set(el, fromVars);
          gsap.to(el, { ...toVars, delay: i * delayEach });
        },
      });
    });
  };

  // Fade up with default values
  const fadeUpRepeat = (
    selector,
    delay = 0,
    yValue = 60,
    duration = 1.6,
    ease = "power1.out"
  ) => {
    ScrollTrigger.create({
      trigger: selector,
      start: "top 90%",
      onEnter: () =>
        gsap.fromTo(
          selector,
          { y: yValue, opacity: 0 },
          { y: 0, opacity: 1, duration, ease, delay }
        ),
      onEnterBack: () =>
        gsap.fromTo(
          selector,
          { y: yValue, opacity: 0 },
          { y: 0, opacity: 1, duration, ease, delay }
        ),
    });
  };

  useEffect(() => {
    // Optional cleanup
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return {
    animateRepeatedly,
    animateOnScroll,
    animateGroupItems,
    fadeUpRepeat,
  };
};
