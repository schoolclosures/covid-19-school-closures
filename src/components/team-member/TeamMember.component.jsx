import React from 'react';
import './team_member.styles.scss';

const TeamMember = ({ teamMember }) => {
  const { attrs } = teamMember;

  return (
    <div className="team-member column">
      <div className="team-member-image" 
        style={{
          backgroundImage: 
            `url(${attrs.photo})`
          }}
        >

      </div>
      <div className="team-member-description column">
          <p>
            { `${attrs.first_name} ${attrs.last_name}` }
          </p>
          <p>
            { `${attrs.description}` }
          </p>
      </div>
    </div>
  )
};

export default TeamMember;
