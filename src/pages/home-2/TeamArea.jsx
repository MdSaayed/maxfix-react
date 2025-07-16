// src/components/TeamArea.jsx
import React, { useRef } from "react";
import useBackground from "../../hooks/useBackground";
import { Link } from "react-router-dom";
import TeamGrid from "../../components/elements/TeamGrid";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const TeamArea = ({
  showContent = true,
  className = "team--one",
  showItem = 4,
}) => {
  const bgImage = useBackground("./assets/images/team/team-bg.png");
  const animateRef = useRef();

  // Animation
  useStaggerReveal(animateRef, [".team__title", ".team__desc", ".team__btn"]);

  return (
    <section className={`team ${className}`} ref={animateRef}>
      {showContent && (
        <>
          <div className="team__content" style={bgImage}>
            <div className="team__content-wrap container">
              <h2 className="team__title title">
                Our creative digital studio tells Your story brings emotions our
                team's talent.
              </h2>

              <div className="team__text-group">
                <p className="team__desc">
                  We turn bold ideas into reality with a passionate team that
                  blends strategy, design, and tech to craft meaningful brand
                  experiences that inspire action and drive lasting connections.
                </p>

                <Link to="/team" className="team__btn btn__bluet">
                  <span className="team__btn-bluet bluet"></span>
                  <span className="team__btn-text btn-text">meet our team</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <TeamGrid showItem={showItem} />
    </section>
  );
};

export default TeamArea;
