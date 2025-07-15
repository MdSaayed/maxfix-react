import React, { useRef } from "react";
import blog_data from "../../data/blog-data";
import useBackground from "../../hooks/useBackground";
import BlogCard from "../elements/BlogCard";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";

const BlogArea = () => {
  const bgStyle = useBackground("./assets/images/shape/blog-bg.png");
  const sectionRef = useRef(null);

  useGsapAnimations(
    [
      {
        type: "scroll",
        trigger: ".blog__title-wrap",
        selector: ".blog__subtitle-wrap",
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
        delay: 0,
      },
      {
        type: "scroll",
        trigger: ".blog__title-wrap",
        selector: ".blog__heading",
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
        delay: 0.1,
      },
      {
        type: "scroll",
        trigger: ".blog__title-wrap",
        selector: ".blog__btn",
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" },
        delay: 0.2,
      },
      {
        type: "scroll",
        selector: ".blog__item",
        from: { y: 150, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
        stagger: 0.3,
        group: true,
      },
    ],
    sectionRef
  );

  return (
    <section className="blog" style={bgStyle} ref={sectionRef}>
      <div className="blog__container container">
        <div className="blog__title-wrap title-wrap__flex">
          <Subtitle
            text="Our Perspectives"
            variant="secondary"
            wrapperClass="blog__subtitle-wrap"
            subtitleClass="blog__subtitle"
          />
          <h2 className="blog__heading title-lg">Latest Insights</h2>
          <ButtonArrow
            link="/blog"
            variant="black"
            text="See All Articles"
            className="blog__btn"
          />
        </div>

        <div className="blog__grid">
          {blog_data?.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
