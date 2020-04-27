import { connect } from 'react-redux';
import TopicCard from '../../components/topic-card/TopicCard.component';
import { setCurrentTopicId } from '../../actions/articles/articles.actions';

const mapDispatchToProps = dispatch => ({
  setCurrentTopicId: (topicId) => dispatch(setCurrentTopicId(topicId)),
});

export default connect(null, mapDispatchToProps)(TopicCard)
