import React, { useRef } from "react";
import team_members from "../../data/team-members";
import TeamMember from "./TeamMember";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";

const TeamGrid = ({ showItem }) => {
  const animateRef = useRef();

  // Animation
  useStaggerReveal(animateRef, [".team__container> div"]);

  return (
    <div className="team__container container" ref={animateRef}>
      {team_members?.slice(0, showItem)?.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamGrid;
