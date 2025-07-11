import React from "react";
import blog_data from "../../data/blog-data";
import useBackground from "../../hooks/useBackground";
import BlogCard from "../elements/BlogCard";
import ButtonArrow from "../../common/ButtonArrow";
import Subtitle from "../../common/Subtitle";

const BlogArea = () => {
  const bgStyle = useBackground("./assets/images/shape/blog-bg.png");

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
          <ButtonArrow link="/blog" variant="black" text="See All Articles" />
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
