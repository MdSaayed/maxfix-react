import React from "react";
import { Link } from "react-router-dom";
import Subtitle from "../../common/Subtitle";

const FooterOne = () => {
  return (
    <footer className="footer footer--one">
      <div className="footer__container container">
        <div className="footer__contact">
          <div className="footer__info">
            <div className="footer__title-wrap">
                <Subtitle text="Let’s talk" />
                <h3 className="footer__title title">
                  Got a project in mind?
                  <br />
                  From websites to SEO
                  <br />
                  & marketing campaigns,
                  <br />
                  let’s bring it to life.
                </h3>
            </div>

            <div className="footer__text">
              <Link
                to="mailto:maxfix@gmail.com"
                className="footer__email title"
              >
                maxfix@gmail.com
              </Link>
              <div className="footer__socials">
                <Link to="#" className="footer__social">
                  Facebook
                </Link>
                <Link to="#" className="footer__social">
                  Twitter
                </Link>
                <Link to="#" className="footer__social">
                  Instagram
                </Link>
                <Link to="#" className="footer__social">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <form className="footer__form">
            <span className="footer__form-subtitle">maxfix</span>
            <h4 className="footer__form-title title">
              Have a project in mind?
            </h4>
            <input
              type="text"
              className="footer__input"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="footer__input"
              placeholder="Your Email"
            />
            <textarea
              className="footer__textarea"
              placeholder="Write Your Message"
              rows="70"
            ></textarea>
            <button
              type="submit"
              className="footer__submit btn btn-arrow btn-arrow__black"
            >
              <span className="footer__submit-text btn-arrow__text">
                Submit Message
              </span>
            </button>
          </form>
        </div>

        <div className="footer__brand">
          <h2 className="footer__brand-text">MAX STUDIO</h2>
        </div>

        <div className="footer__bottom">
          <Link to="#header" className="footer__scroll-top">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
              <circle cx="33" cy="33" r="33" fill="#FFFB1F" />
              <path
                d="M33.0605 22.121L32 21.0605L33.0605 20L34.121 21.0605L33.0605 22.121ZM34.5605 44.621C34.5605 45.0188 34.4025 45.4004 34.1212 45.6817C33.8399 45.963 33.4583 46.121 33.0605 46.121C32.6627 46.121 32.2811 45.963 31.9998 45.6817C31.7185 45.4004 31.5605 45.0188 31.5605 44.621H34.5605ZM23 30.0605L32 21.0605L34.121 23.1815L25.121 32.1815L23 30.0605ZM34.121 21.0605L43.121 30.0605L41 32.1815L32 23.1815L34.121 21.0605ZM34.5605 22.121V44.621H31.5605V22.121H34.5605Z"
                fill="black"
              />
            </svg>
          </Link>
          <p className="footer__copyright">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Maxfix Themes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
