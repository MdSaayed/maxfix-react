import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OffCanvas from '../../common/OffCanvas';
import menu_data from '../../data/menu-data'; 

const HeaderTwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <header id="header" className="header header--two">
                <div className="header__container container">
                    <div className="header__content-area">
                        <div className="header__logo">
                            <Link to="/" className="logo">
                                <img src="./assets/images/global/logo.png" alt="Maxfix Logo" className="logo__img" />
                            </Link>
                        </div>

                        <ul className="menu main-menu">
                            {menu_data.map((menu) => (
                                <li
                                key={menu.id}
                                className={`menu-item ${menu.has_dropdown ? 'menu-item-has-children' : ''}`}
                                >
                                <Link to={menu.link}>{menu.title}</Link>

                                {menu.has_dropdown && (
                                    <ul className="sub-menu">
                                    {menu.sub_menus.map((sub, subIndex) => (
                                        <li
                                        key={subIndex}
                                        className={`menu-item ${sub.inner_submenu ? 'menu-item-has-children' : ''}`}
                                        >
                                        <Link to={sub.link}>{sub.title}</Link>

                                        {sub.inner_submenu && sub.sub_menu && (
                                            <ul className="sub-menu">
                                            {sub.sub_menu.map((inner, innerIndex) => (
                                                <li key={innerIndex} className="menu-item">
                                                <Link to={inner.link}>{inner.title}</Link>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                        </li>
                                    ))}
                                    </ul>
                                )}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="header__menu-btn">
                            <Link to="/contact" className="menu-btn">
                                <span className="menu-btn__icon"></span> 
                                <span className="menu-btn__text">GET IN TOUCH</span>
                            </Link>
                        </div>

                        <div className="header__toggle-wrap" id="menuToggle" onClick={()=> setIsOpen(!isOpen)}>
                            <svg width="40" height="12" viewBox="0 0 50 12" fill="none">
                                <line y1="2" x2="50" y2="2" stroke="black" strokeWidth ="1"/>
                                <line y1="10" x2="50" y2="10" stroke="black" strokeWidth ="1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default HeaderTwo;