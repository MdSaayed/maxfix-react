import React, { useRef } from "react";
import blog_data from "../../data/blog-data";
import useBackground from "../../hooks/useBackground";
import BlogCard from "../elements/BlogCard";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const BlogArea = () => {
  const animateRef = useRef();
  const bgStyle = useBackground("./assets/images/shape/blog-bg.png");

  // Animation
  useStaggerReveal(animateRef, [
    ".blog__subtitle-wrap",
    ".blog__heading",
    ".blog__btn",
    ".blog__item",
  ]);

  return (
    <section className="blog" style={bgStyle} ref={animateRef}>
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
