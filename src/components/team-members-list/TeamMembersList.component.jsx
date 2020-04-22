import React                                            from 'react';
import TeamMember from '../team-member/TeamMember.component';
import PropTypes from 'prop-types';
import './team_member_list.styles.scss';

const TeamMembersList = ( { teamMembers } ) => {

    return (
      <>
        <h2 className="sub-heading pink-underline">Who we are</h2>
        <div className="row-with-wrap team-members-list">
          { teamMembers && teamMembers.map( teamMember => <TeamMember key={teamMember.attrs.id} teamMember={teamMember} /> ) }
        </div>
      </>
    )
};

TeamMembersList.defaultProps = {
  teamMembers: [],
};

TeamMembersList.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.objectOf(String)),
}

export default TeamMembersList;
