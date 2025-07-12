import React from "react";
import { Link } from "react-router-dom";
import BlogCommentForm from "./BlogCommentFormArea";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <section className="blog blog--details">
        <div className="blog__container container">
          <div className="blog__header">
            <Link to="#" className="blog__category">
              Creative
            </Link>
            <div className="blog__info">
              <span className="blog__date">March 22, 2025</span>
              <span className="blog__comments">Comments (00)</span>
            </div>
            <h1 className="blog__title">
              Why your website’s user experience is its greatest asset
            </h1>
            <div className="blog__meta">
              <div className="blog__author-img-wrapper">
                <img
                  src="./assets/images/global/avatar-1.png"
                  alt="Author"
                  className="blog__author-img"
                />
              </div>
              <div className="blog__author-details">
                <span className="blog__meta-label">Author</span>
                <span className="blog__author-name">Myles Adkler</span>
              </div>
              <div className="blog__published-details">
                <span className="blog__meta-label">Published</span>
                <span className="blog__date">March 15, 2025</span>
              </div>
            </div>
          </div>

          <div className="blog__image">
            <img
              src="./assets/images/blog/blog-details-1.png"
              alt="Laptop on desert"
            />
          </div>

          <div className="blog__content-area">
            <p className="blog__text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit consectetur, adipisci velit, sed quia none
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam voluptatem enim ad minima veniam, quis nostrum
              exercitationem
            </p>

            <p className="blog__text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti corrupti quos dolores
              et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui mollitia animi, id est
              laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita nam libero tempore, cum est eligendi optio cumque nihil
              impedit quo minus id quod
            </p>

            <h2 className="blog__subtitle">Insights and Strategies</h2>
            <p className="blog__text">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.{" "}
            </p>
          </div>

          <div className="blog__gallery blog__gallery--two">
            <div className="blog__gallery-item">
              <img
                src="./assets/images/blog/blog-details-2.png"
                alt="Laptop mockup"
              />
            </div>
            <div className="blog__gallery-item">
              <img
                src="./assets/images/blog/blog-details-3.png"
                alt="Laptop mockup"
              />
            </div>
          </div>

          <div className="blog__content-area">
            <p className="blog__text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit consectetur, adipisci velit, sed quia none
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam voluptatem enim ad minima veniam, quis nostrum
              exercitationem
            </p>

            <p className="blog__text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti corrupti quos dolores
              et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui mollitia animi, id est
              laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita nam libero tempore, cum est eligendi optio cumque nihil
              impedit quo minus id quod
            </p>

            <blockquote className="blog__quote">
              <p className="blog__quote-text">
                Sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, ullam corporis suscipit laboriosam, nisi ut aliquid ex
                ea commodi consequatur
              </p>
            </blockquote>

            <p className="blog__text">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.{" "}
            </p>

            <h2 className="blog__subtitle">
              As have to Achieves Always People
            </h2>

            <p className="blog__text">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.{" "}
            </p>
          </div>

          <div className="blog__gallery blog__gallery--wide">
            <img
              src="./assets/images/blog/blog-details-4.png"
              alt="Laptop mockup"
            />
          </div>

          <div className="blog__content-area">
            <h3 className="blog__subtitle">Drives Higher Conversions</h3>
            <p className="blog__text">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.{" "}
            </p>

            <h3 className="blog__subtitle">How to Update Your Theme</h3>
            <p className="blog__text">
              Will give you a complete account of the system, and expound the
              actual teachings of the great explorer of the truth, the
              master-builder of human happiness. No one rejects, dislikes, or
              avoids pleasure itself, because it is pleasure, but because those
              who do not know how to pursue pleasure rationally encounter
              consequences that are painful. again is there anyone who loves or
              pursues and desires to obtain pain of itself because it is pain,
              but because occur in toil and pain can procure him some great
              pleasure.{" "}
            </p>

            <div className="blog__tags-share">
              <div className="blog__tags-group">
                <h3 className="blog__tags-title">Tags:</h3>
                <div className="blog__tags">
                  <Link to="#" className="blog__tag">
                    Creative
                  </Link>
                  <Link to="#" className="blog__tag">
                    Business
                  </Link>
                </div>
              </div>

              <div className="blog__share-group">
                <h3 className="blog__share-title">Share:</h3>
                <div className="blog__share">
                  <Link to="#" className="blog__share-icon">
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                      <circle
                        cx="23.4015"
                        cy="23.4139"
                        r="22.9015"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M24.9229 25.436V33.5692H21.198V25.436H18.1035V22.1382H21.198V20.9383C21.198 16.4837 23.0533 14.1415 26.9787 14.1415C28.1821 14.1415 28.483 14.3355 29.142 14.4935V17.7554C28.4042 17.6261 28.1964 17.5543 27.43 17.5543C26.5203 17.5543 26.0332 17.8129 25.589 18.323C25.1449 18.8332 24.9229 19.7169 24.9229 20.9814V22.1453H29.142L28.0102 25.4432H24.9229V25.436Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="blog__share-icon">
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                      <circle
                        cx="23.4504"
                        cy="23.4139"
                        r="22.9015"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5562 15.0247H13.2949L20.7187 24.6292L13.7698 32.6862H16.9804L22.236 26.5924L26.9028 32.6302H33.1641L25.5247 22.7466L25.5382 22.7636L32.1159 15.1369H28.9053L24.0206 20.8006L19.5562 15.0247ZM16.7511 16.7067H18.7003L29.708 30.948H27.7588L16.7511 16.7067Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="blog__share-icon">
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none">
                      <circle
                        cx="23.4347"
                        cy="23.4139"
                        r="22.9015"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M18.2454 20.2145H14.209V33.0865H18.2454V20.2145Z"
                        fill="black"
                      />
                      <path
                        d="M29.1638 19.9355C29.015 19.9169 28.8569 19.9076 28.6987 19.8983C26.4387 19.8053 25.1645 21.1446 24.7181 21.7212C24.5972 21.8793 24.5414 21.9723 24.5414 21.9723V20.2517H20.6816V33.1237H24.5414H24.7181C24.7181 31.8123 24.7181 30.5103 24.7181 29.1989C24.7181 28.492 24.7181 27.7852 24.7181 27.0783C24.7181 26.2041 24.653 25.274 25.0901 24.4742C25.4621 23.8045 26.1318 23.4697 26.8851 23.4697C29.1173 23.4697 29.1638 25.4879 29.1638 25.6739C29.1638 25.6832 29.1638 25.6925 29.1638 25.6925V33.1795H33.2002V24.7811C33.2002 21.9072 31.74 20.2145 29.1638 19.9355Z"
                        fill="black"
                      />
                      <path
                        d="M16.2266 18.5496C17.521 18.5496 18.5703 17.5002 18.5703 16.2058C18.5703 14.9114 17.521 13.8621 16.2266 13.8621C14.9321 13.8621 13.8828 14.9114 13.8828 16.2058C13.8828 17.5002 14.9321 18.5496 16.2266 18.5496Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="blog__author-box">
              <div className="blog__author-img-wrap">
                <img
                  src="./assets/images/global/avatar-12.png"
                  alt="Author"
                  className="blog__author-img"
                />
              </div>
              <div className="blog__author-box-content">
                <h4 className="blog__author-name">Alistier Jhane</h4>
                <p className="blog__author-bio">
                  On the other hand, we denounce with righteous indignation...
                </p>
              </div>
            </div>

            <div className="blog__navigation">
              <Link to="#" className="blog__nav blog__nav--prev">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                  <path
                    d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM28 8V9H1V8V7H28V8Z"
                    fill="white"
                  />
                </svg>
                Prev Post
              </Link>
              <Link to="#" className="blog__nav blog__nav--next">
                Next Post
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                  <path
                    d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 8V9H27V8V7H0V8Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <BlogCommentForm />
        </div>
      </section>
      <FooterOne />
    </>
  );
};

export default BlogDetails;
