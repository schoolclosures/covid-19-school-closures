import React from 'react';
import './team_member.styles.scss';

const TeamMember = ({ teamMember }) => {
  const { fields } = teamMember;

  return (
    <div className="team-member column">
      <div className="team-member-image" 
        style={{
          backgroundImage: 
            `url(${fields["Your photo (please use png or jpeg)"]})`
          }}
        >

      </div>
      <div className="team-member-description column">
          <p>
            { `${fields['First name']} ${fields['Last name']}` }
          </p>
          <p>
            { `${fields['Describe yourself in 1-2 words (This will go under your photo) Example : Teacher, Designer, Developer, Graduate student.']}` }
          </p>
      </div>
    </div>
  )
};

export default TeamMember;
