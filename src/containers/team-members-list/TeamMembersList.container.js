import { connect } from 'react-redux';
import TeamMembersList from '../../components/team-members-list/TeamMembersList.component';

const mapStateToProps = state => ({
  teamMembers: state.volunteersReducer.teamMembers,
});

export default connect(mapStateToProps)(TeamMembersList)
