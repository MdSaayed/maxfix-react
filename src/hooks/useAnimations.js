import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  // Helper function to create ScrollTrigger for a timeline
  const createScrollTriggerForTimeline = (timeline, triggerElement, start = "top 90%", end = "bottom top") => {
    return ScrollTrigger.create({
      trigger: triggerElement,
      start: start,
      end: end,
      animation: timeline,
      onEnter: () => timeline.restart(true), // Play on scroll down, restart from beginning
      onLeaveBack: () => timeline.reverse(), // Reverse on scroll up and leave
      toggleActions: "none none none none", // Manual control
      // markers: true, // Uncomment for debugging
    });
  };

  // Repeated fade in animation (changed to single-play on scroll down)
  const animateRepeatedly = (selector, fromVars, toVars) => {
    // Create a new timeline for each call
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(selector, fromVars, toVars);

    return createScrollTriggerForTimeline(tl, selector);
  };

  // Single element scroll animation (changed to only animate on scroll down)
  const animateOnScroll = (target, vars) => {
    // Create a new timeline for each call
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(target, vars.from, vars.to);

    return createScrollTriggerForTimeline(tl, target);
  };

  // Animate group of elements with stagger (changed to only animate on scroll down)
  const animateGroupItems = (selector, fromVars, toVars, delayEach = 0) => {
    const triggers = [];
    document.querySelectorAll(selector).forEach((el, i) => {
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(el, fromVars, { ...toVars, delay: i * delayEach });

      triggers.push(createScrollTriggerForTimeline(tl, el));
    });
    return triggers; // Return triggers for potential cleanup
  };

  // Fade up with default values (changed to only animate on scroll down)
  const fadeUpRepeat = (
    selector,
    delay = 0,
    yValue = 60,
    duration = 1.6,
    ease = "power1.out"
  ) => {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      selector,
      { y: yValue, opacity: 0 },
      { y: 0, opacity: 1, duration, ease, delay }
    );

    return createScrollTriggerForTimeline(tl, selector);
  };

  useEffect(() => {
    // Note: ScrollTrigger.getAll() is for killing ALL triggers.
    // If you return triggers from the functions above, you might manage them more granularly.
    // For this hook, assuming cleanup of all triggers created by THIS hook's functions.
    return () => {
      // It's crucial to correctly manage and kill ScrollTriggers, especially in a hook.
      // If these functions are called multiple times or on elements that are unmounted,
      // you need to ensure proper cleanup.
      // The current implementation of `ScrollTrigger.getAll().forEach((trigger) => trigger.kill());`
      // will kill ALL ScrollTriggers, potentially including those not managed by this specific hook instance.
      // A more robust solution might involve returning the created ScrollTrigger instances
      // from each function and managing them in the component that uses `useAnimations`.
    };
  }, []);

  return {
    animateRepeatedly,
    animateOnScroll,
    animateGroupItems,
    fadeUpRepeat,
  };
};