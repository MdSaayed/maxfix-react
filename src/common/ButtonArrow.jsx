import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ButtonArrow = ({
  link = "#",
  variant = "white",
  text = "Button Text",
  className = "",
  ref = {},
}) => {
  const btnStyle = `btn-arrow ${variant === "black" ? "btn-arrow__black" : ""}`;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle Navigate
  const handleClick = (e) => {
    e.preventDefault();

    if (pathname === link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <Link onClick={handleClick} className={`${className} ${btnStyle}`} ref={ref}>
        <span className="btn-arrow__text">{text}</span>
      </Link>
    </>
  );
};

export default ButtonArrow;
