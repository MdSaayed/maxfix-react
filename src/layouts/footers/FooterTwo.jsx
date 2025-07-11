import React from 'react';
import { Link } from 'react-router-dom';
import useBackground from '../../hooks/useBackground';

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
                            <img src="./assets/images/global/logo.png" alt="Maxfix Logo" className="logo__img"/>
                        </Link>
                        <p className="footer__desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum a default model text, and a search for will many still in versions have evolved.
                        </p>
                    </div>

                    <div className="footer__columns">
                        <div className="footer__column">
                            <h3 className="footer__heading">Quick Links</h3>
                            <ul className="footer__list">
                                <li><Link to="about-us" className="footer__link">About Us</Link></li>
                                <li><Link to="team-member" className="footer__link">Our Team</Link></li>
                                <li><Link to="pricing-plan" className="footer__link">Pricing</Link></li>
                                <li><Link to="blog" className="footer__link">Blog</Link></li>
                                <li><Link to="contact" className="footer__link">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3 className="footer__heading">Services</h3>
                            <ul className="footer__list">
                                <li><Link to="#" className="footer__link">Brand Identity</Link></li>
                                <li><Link to="#" className="footer__link">Digital Printing</Link></li>
                                <li><Link to="#" className="footer__link">Logo Design</Link></li>
                                <li><Link to="#" className="footer__link">Product Design</Link></li>
                                <li><Link to="#" className="footer__link">Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3 className="footer__heading">Follow Us</h3>
                            <ul className="footer__list">
                                <li><Link to="#" className="footer__link">Facebook</Link></li>
                                <li><Link to="#" className="footer__link">Twitter</Link></li>
                                <li><Link to="#" className="footer__link">Instagram</Link></li>
                                <li><Link to="#" className="footer__link">LinkedIn</Link></li>
                                <li><Link to="#" className="footer__link">Dribbble</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h3 className="footer__heading">Contact Us</h3>
                            <ul className="footer__list">
                                <li className="footer__text">
                                    845, King Street Road, Mahattan, <br/> New York - 89654.
                                </li>
                                <li className="footer__text">+02) 574 - 328 - 301</li>
                                <li className="footer__text">
                                    <Link className="footer__link" to="mailto:maxfix@gmail.com">maxfix@gmail.com</Link>
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
                    <Link to="#header" className="footer__scroll-top">
                        <svg
                        width="66"
                        height="66"
                        viewBox="0 0 66 66"
                        fill="none"
                        >
                        <circle cx="33" cy="33" r="33" fill="#FFFB1F" />
                        <path
                            d="M33.0605 22.121L32 21.0605L33.0605 20L34.121 21.0605L33.0605 22.121ZM34.5605 44.621C34.5605 45.0188 34.4025 45.4004 34.1212 45.6817C33.8399 45.963 33.4583 46.121 33.0605 46.121C32.6627 46.121 32.2811 45.963 31.9998 45.6817C31.7185 45.4004 31.5605 45.0188 31.5605 44.621H34.5605ZM23 30.0605L32 21.0605L34.121 23.1815L25.121 32.1815L23 30.0605ZM34.121 21.0605L43.121 30.0605L41 32.1815L32 23.1815L34.121 21.0605ZM34.5605 22.121V44.621H31.5605V22.121H34.5605Z"
                            fill="black"
                        />
                        </svg>
                    </Link>
                    <p className="footer__copyright">
                        © Copyright {new Date().getFullYear()}, All Rights Reserved by Maxfix Themes
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterTwo;