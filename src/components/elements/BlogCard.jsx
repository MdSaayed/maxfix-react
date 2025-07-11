import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({post, index}) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";

        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <article className="blog__item" key={index}>
            <Link to={post?.link} className="blog__link">
                <div className="blog__image-wrapper">
                <img
                    src={post?.image}
                    alt={post?.alt}
                    className="blog__image"
                />
                </div>
            </Link>
            <div className="blog__content">
                <div className="blog__meta">
                    <span className="blog__meta-date">
                        {formatDate(post?.date)}
                    </span>
                    <span className="blog__meta-reading-time">
                        {post?.readingTime}
                    </span>
                </div>
                <div className="blog__text">
                    <h3 className="blog__title">
                        <Link to={post?.link} className="blog__link">
                            {post?.title}
                        </Link>
                    </h3>
                    <p className="blog__excerpt">{post?.excerpt}</p>
                </div>
            </div>
            <button className="blog__icon">+</button>
        </article>
    );
};

export default BlogCard;