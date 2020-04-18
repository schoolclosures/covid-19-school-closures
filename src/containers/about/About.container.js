import { connect } from 'react-redux';
import About from '../../components/about/About.component';
import { fetchTeamMembers } from '../../actions/team-members/teamMembers.actions';

const mapDispatchToProps = dispatch => ({
 fetchTeamMembers: () => dispatch(fetchTeamMembers()),
});

export default connect(null, mapDispatchToProps)(About)
