import React from "react";
import { Link } from "react-router-dom";

const TrustHighlight = () => {
  return (
    <div className="avatar-card">
      <div className="hero__avatars avatars">
        <img
          src="./assets/images/global/avatar-2.png"
          alt="User"
          className="hero__avatar avatar"
        />
        <img
          src="./assets/images/global/avatar-3.png"
          alt="User"
          className="hero__avatar avatar"
        />
        <img
          src="./assets/images/global/avatar-4.png"
          alt="User"
          className="hero__avatar avatar"
        />
        <img
          src="./assets/images/global/avatar-5.png"
          alt="Icon"
          className="hero__avatar avatar hero__avatar--icon"
        />
      </div>

      <div className="avatar-fact">
        <span className="avatar-stat">19k+</span>
        <span className="avatar-text">Trusted customers world-wide</span>

        <Link className="avatar-btn">
          <span className="avatar-btn-icon"></span>
          <span className="avatar-btn-text">GET SERVICES</span>
        </Link>
      </div>
    </div>
  );
};

export default TrustHighlight;
