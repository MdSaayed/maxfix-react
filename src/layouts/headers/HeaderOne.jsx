import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OffCanvas from '../../common/OffCanvas';
import menu_data from '../../data/menu-data'; 

const HeaderOne = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <header id="header" className="header header--one">
                <div className="header__container container">
                    <div className="header__logo">
                        <Link to="/" className="logo">
                            <img src="/assets/images/global/logo.png" alt="Maxfix Logo" className="logo__img"/>
                        </Link>
                    </div>

                    <ul className="menu main-menu">
                        {menu_data.map((menu, index) => {
                            const isActive = location.pathname === menu.link;

                            return (
                            <li
                                key={index}
                                className={`menu-item ${menu.has_dropdown ? 'menu-item-has-children' : ''} ${isActive ? 'current-menu-item' : ''}`}
                            >
                                <Link to={menu.link}>{menu.title}</Link>

                                {menu.has_dropdown && menu.sub_menus && (
                                <ul className="sub-menu">
                                    {menu.sub_menus.map((sub, subIndex) => {
                                    const isSubActive = location.pathname === sub.link;

                                    return (
                                        <li
                                        key={subIndex}
                                        className={`menu-item ${isSubActive ? 'current-menu-item' : ''}`}
                                        >
                                        <Link to={sub.link}>{sub.title}</Link>
                                        </li>
                                    );
                                    })}
                                </ul>
                                )}
                            </li>
                            );
                        })}
                    </ul>

                    <div className="header__menu-btn">
                        <button className="menu-btn" id="menuToggle" onClick={()=>setIsOpen(!isOpen)}>
                            <span className="menu-btn__text">MENU</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 50 12" fill="none">
                                <line y1="2" x2="50" y2="2" stroke="black" strokeWidth ="1"/>
                                <line y1="10" x2="50" y2="10" stroke="black" strokeWidth ="1"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default HeaderOne;