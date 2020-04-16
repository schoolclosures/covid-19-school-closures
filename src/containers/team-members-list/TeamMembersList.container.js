import { connect } from 'react-redux';
import TeamMembersList from '../../components/team-members-list/TeamMembersList.component';
import { fetchTeamMembers } from '../../actions/team-members/teamMembers.actions';

const mapStateToProps = state => ({
  teamMembers: state.volunteersReducer.teamMembers,
});

const mapDispatchToProps = dispatch => ({
 fetchTeamMembers: () => dispatch(fetchTeamMembers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembersList)
