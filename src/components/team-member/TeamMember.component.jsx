import React from 'react';
import './team_member.styles.scss';

const TeamMember = ({ name, jobDescription }) => {
  return (
    <div className="team-member column">
      <div className="team-member-image" 
        style={{
          backgroundImage: 
            `url(${"https://images.unsplash.com/photo-1586014434742-26eb13938dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"})`
          }}
        >

      </div>
      <div className="team-member-description column">
          <p>
            { name }
          </p>
          <p>
            { jobDescription }
          </p>
      </div>
    </div>
  )
};

export default TeamMember;
