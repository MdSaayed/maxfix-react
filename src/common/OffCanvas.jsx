import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu_data from '../data/menu-data'; 

const OffCanvas = ({ isOpen, setIsOpen }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="mobileMenu" className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
            <div className="main-nav__logo">
            <Link to="/" className="logo">
                <img src="./assets/images/global/logo.png" alt="Maxfix Logo" className="logo__img" />
            </Link>
            </div>
            <div id="closeMobile" className="mobile-menu__close" onClick={() => setIsOpen(false)}>✕</div>
        </div>

        <ul className="mobile-menu__list">
            {menu_data.map((item, index) => (
                <li
                key={index}
                className={`menu-item ${item.has_dropdown ? 'menu-item-has-children' : ''} ${
                    openMenus[index] ? 'open' : ''
                }`}
                >
                <Link
                    to={item.link}
                    onClick={(e) => {
                    if (item.has_dropdown) {
                        e.preventDefault();
                        toggleSubMenu(index);
                    }
                    }}
                >
                    {item.title}
                </Link>

                {item.has_dropdown && openMenus[index] && item.sub_menus && (
                    <ul className="sub-menu">
                    {item.sub_menus.map((sub, subIndex) => (
                        <li key={subIndex} className="menu-item">
                        <Link to={sub.link}>{sub.title}</Link>
                        </li>
                    ))}
                    </ul>
                )}
                </li>
            ))}
        </ul>

        <div className="mobile-menu__contact">
            <Link to="#" className="mobile-menu__contact-link">
            <span className="icon-wrap"><i className="fa-solid fa-location-dot"></i></span>
            <span>Dhaka, Bangladesh</span>
            </Link>
            <Link to="mailto:hello@cruvagency.com" className="mobile-menu__contact-link">
            <span className="icon-wrap"><i className="fa-solid fa-envelope"></i></span>
            <span>hello@maxfix.com</span>
            </Link>
            <Link to="tel:5055550125" className="mobile-menu__contact-link">
            <span className="icon-wrap"><i className="fa-solid fa-phone"></i></span>
            <span>(505) 555-0125</span>
            </Link>
        </div>
    </div>
  );
};

export default OffCanvas;
