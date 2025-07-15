import React from "react";
import { Link } from "react-router-dom";

const ButtonArrow = ({
  link = "#",
  variant = "white",
  text = "Button Text",
  className = "",
  ref = {},
}) => {
  const btnStyle = `btn-arrow ${variant === "black" ? "btn-arrow__black" : ""}`;

  return (
    <Link to={link} className={`${className} ${btnStyle}`} ref={ref}>
      <span className="btn-arrow__text">{text}</span>
    </Link>
  );
};

export default ButtonArrow;
