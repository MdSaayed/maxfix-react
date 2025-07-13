import React from "react";
import team_members from "../../data/team-members";
import TeamMember from "./TeamMember";

const TeamGrid = ({ showItem}) => {
  return (
    <div className="team__container container">
      {team_members?.slice(0, showItem)?.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamGrid;
