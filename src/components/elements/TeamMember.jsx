// src/components/elements/TeamMember.jsx
import React from "react";
import { Link } from "react-router-dom";

const TeamMember = ({ name, role, image, socials }) => {
  return (
    <div className="team__member">
      <div className="team__photo-wrap">
        <img src={image} alt={name} className="team__photo" />
      </div>
      <div className="team__overlay">
        <div className="team__info">
          <div className="team__details">
            <h3 className="team__name">{name}</h3>
            <p className="team__role">{role}</p>
          </div>
          <div className="team__socials">
            {socials?.map(({ iconClass, url }, index) => (
              <a
                href={url}
                className="team__social"
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
