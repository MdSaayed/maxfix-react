import React from 'react';
import blog_data from '../../data/blog-data'; 
import useBackground from '../../hooks/useBackground';
import BlogCard from '../elements/BlogCard';
import { Link } from 'react-router-dom';


const BlogArea = () => {
    const bgStyle = useBackground("./assets/images/shape/blog-bg.png");

    return (
        <section className="blog" style={bgStyle}>
            <div className="blog__container container">

                <div className="blog__title-wrap title-wrap__flex">
                    <div className="blog__subtitle-wrap subtitle-wrap">
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                        <path d="M17.82 13.02C17.6326 12.8337 17.3792 12.7292 17.115 12.7292C16.8508 12.7292 16.5974 12.8337 16.41 13.02C16.2237 13.2074 16.1192 13.4608 16.1192 13.725C16.1192 13.9892 16.2237 14.2426 16.41 14.43L20.2 18.22H2V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18.22C0 18.7504 0.210714 19.2591 0.585786 19.6342C0.960859 20.0093 1.46957 20.22 2 20.22H20.15L16.41 23.97C16.2237 24.1574 16.1192 24.4108 16.1192 24.675C16.1192 24.9392 16.2237 25.1926 16.41 25.38C16.5963 25.5647 16.8477 25.6689 17.11 25.67C17.2416 25.6708 17.3721 25.6455 17.4939 25.5958C17.6157 25.546 17.7266 25.4727 17.82 25.38L24 19.22L17.82 13.02Z" fill="black"/>
                        </svg>
                        <p className="blog__subtitle subtitle">Our Perspectives</p>
                    </div>
                    <h2 className="blog__heading title-lg">Latest Insights</h2>
                    <Link to="#" className="blog__btn btn btn-arrow btn-arrow__black">
                        <span className="blog__btn-text btn-arrow__text">See All Articles</span>
                    </Link>
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