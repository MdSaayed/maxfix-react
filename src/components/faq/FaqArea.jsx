import React, { useEffect, useRef, useState } from "react";
import faq_data from "../../data/faq-data";
import FaqItem from "../elements/FaqItem";
import ButtonArrow from "../../common/ButtonArrow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FaqArea = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const sidebarRef = useRef(null);
  const faqItemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, buttonRef.current].filter(
        Boolean
      ),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sidebarRef.current,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animation for FAQ items  
    faqItemRefs.current.forEach((item, index) => {
      if (!item) return;

      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        item,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: index * 0.1,
        }
      );

      ScrollTrigger.create({
        trigger: item,
        start: "top 90%",
        end: "bottom top",
        animation: tl,

        onEnter: () => tl.restart(true),
        onLeaveBack: () => tl.reverse(),

      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <section className="faq">
      <div className="faq__container container">
        <div className="faq__sidebar" ref={sidebarRef}>
          <h2 className="faq__title title-lg" ref={titleRef}>
            FAQ
          </h2>
          <div className="faq__sidebar-text-wrap">
            <p className="faq__subtitle" ref={subtitleRef}>
              Having Another Question?
            </p>
            <ButtonArrow
              link="/contact"
              text="Get In Touch"
              variant="black"
              className="faq__button"
              ref={buttonRef}
            />
          </div>
        </div>

        <div className="faq__content">
          {faq_data.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              ref={(el) => (faqItemRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
