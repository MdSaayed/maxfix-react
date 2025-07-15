import React from "react";
import { Link } from "react-router-dom";

const ButtonArrow = ({
  link = "#",
  variant = "white",
  text = "Button Text",
  className = "",
}) => {
  const btnStyle = `btn-arrow ${variant === "black" ? "btn-arrow__black" : ""}`;

  return (
    <Link to={link} className={`${className} ${btnStyle}`}>
      <span className="btn-arrow__text">{text}</span>
    </Link>
  );
};

export default ButtonArrow;
