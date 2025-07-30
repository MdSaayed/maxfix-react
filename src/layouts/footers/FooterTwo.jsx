import React from "react";
import { Link } from "react-router-dom";
import useBackground from "../../hooks/useBackground";
import ScrollToTop from "../../common/ScrollToTop";

const FooterTwo = () => {
  const footerBg = useBackground("./assets/images/shape/footer-shape.png");
  const footerShape = useBackground("./assets/images/shape/footer-shape.png");

  return (
    <footer className="footer footer--two">
      <div className="footer__shape-top" style={footerBg}></div>

      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand-info">
            <Link to="index" className="logo">
              <img
                src="./assets/images/global/logo.png"
                alt="Maxfix Logo"
                className="logo__img"
              />
            </Link>
            <p className="footer__desc">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum a default model text, and a search for will many still
              in versions have evolved.
            </p>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__list">
                <li>
                  <Link to="/about" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="footer__link">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="footer__link">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="footer__link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">Services</h3>
              <ul className="footer__list">
                <li>
                  <Link to="/services" className="footer__link">
                    Brand Identity
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer__link">
                    Digital Printing
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer__link">
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer__link">
                    Product Design
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer__link">
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">Follow Us</h3>
              <ul className="footer__list">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">Contact Us</h3>
              <ul className="footer__list">
                <li className="footer__text">
                  845, King Street Road, Mahattan, <br /> New York - 89654.
                </li>
                <li className="footer__text">+02) 574 - 328 - 301</li>
                <li className="footer__text">
                  <Link className="footer__link" to="mailto:maxfix@gmail.com">
                    maxfix@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__shape-top" style={footerShape}></div>

      <div className="footer__container container">
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

export default FooterTwo;
