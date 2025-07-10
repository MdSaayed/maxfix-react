// src/components/TeamArea.jsx
import React from 'react';
import team_members from "../../../data/team-members";
import TeamMember from '../../elements/TeamMember';
import useBackground from '../../../hooks/useBackground';
import { Link } from 'react-router-dom';


const TeamArea = () => {
    const bgImage = useBackground("./assets/images/team/team-bg.png");

    return (
        <section className="team team--one">
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

                    <Link to="#" className="team__btn btn__bluet">
                        <span className="team__btn-bluet bluet"></span>
                        <span className="team__btn-text btn-text">meet our team</span>
                    </Link>
                </div>
                </div>
            </div>

            <div className="team__container container">
                {team_members?.slice(0,4)?.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </section>
    );
};

export default TeamArea;
