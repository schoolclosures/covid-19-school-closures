import React from 'react';
import TeamMember from '../../team-member/TeamMember.component';
import PropTypes from 'prop-types';

const TeamMembersList = ({ teamMembers }) => {
  return (
    <>
      <h2 className="heading pink-underline">Who we are</h2>
      <div className="row team-members">
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
        <TeamMember name={"Eric Ries,"} jobDescription={"Entreprenuer"}/>
      </div>
    </>
  )
};

TeamMembersList.defaultProps = {
  teamMembers: [{"": ""}]
};

TeamMembersList.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default TeamMembersList;
