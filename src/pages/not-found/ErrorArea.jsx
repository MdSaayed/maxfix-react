import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../../common/ButtonArrow";

const ErrorArea = () => {
  return (
    <div className="error">
      <div className="error__container container">
        <div className="error__image">
          <img
            src="./assets/images/global/404.png"
            alt="404 Error"
            className="error__image-img"
          />
        </div>
        <p className="error__message title-lg">Page Not Found</p>

        <ButtonArrow link="/" text="Back To Home Page" />
      </div>
    </div>
  );
};

export default ErrorArea;
