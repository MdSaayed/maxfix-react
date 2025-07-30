import React from "react";
import { Link } from "react-router-dom";
import Subtitle from "../../common/Subtitle";
import BackToTop from "../../common/BackToTop";
import ScrollToTop from "../../common/ScrollToTop";
import ContactForm from "../../components/elements/ContactForm";

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
                <div className="footer__socials">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social">
                    Facebook
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social">
                    Twitter
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social">
                    Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="footer__brand">
          <h2 className="footer__brand-text">MAX STUDIO</h2>
        </div>

        <div className="footer__bottom">
          <ScrollToTop />
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
