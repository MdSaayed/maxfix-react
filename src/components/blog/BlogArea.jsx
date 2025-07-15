import React, { useEffect, useRef } from "react";
import blog_data from "../../data/blog-data";
import useBackground from "../../hooks/useBackground";
import BlogCard from "../elements/BlogCard";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";
import { useAnimations } from "../../hooks/useAnimations";

const BlogArea = () => {
  const bgStyle = useBackground("./assets/images/shape/blog-bg.png");

  // Animation
  const { fadeUpRepeat, animateGroupItems } = useAnimations();
  const ease = "power4.out";
  useEffect(() => {
    fadeUpRepeat(".blog__subtitle-wrap", 0);

    fadeUpRepeat(".blog__heading", 0.1);

    fadeUpRepeat(".blog__btn", 0.2);

    animateGroupItems(
      ".blog__item",
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease },
      0.1
    );
  }, []);

  return (
    <section className="blog" style={bgStyle}>
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
