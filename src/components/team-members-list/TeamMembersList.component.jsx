import React, { Component } from 'react';
import TeamMember from '../team-member/TeamMember.component';
import PropTypes from 'prop-types';

class TeamMembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: this.props.teamMembers,
    }
  }

  componentDidMount() {
    const { fetchTeamMembers } = this.props;
    fetchTeamMembers();
  }

  render() {
    const { teamMembers } = this.state;

    return (
      <>
        <h2 className="heading pink-underline">Who we are</h2>
        <div className="row team-members">
          { teamMembers && teamMembers.map( teamMember => <TeamMember key={teamMember.attrs.id} teamMember={teamMember} /> ) }
        </div>
      </>
    )
  }
};

TeamMembersList.defaultProps = {
  teamMembers: [],
  fetchTeamMembers: () => {},
};

TeamMembersList.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.objectOf(String)),
  fetchTeamMembers: PropTypes.func,
}

export default TeamMembersList;
