import { connect } from 'react-redux';
import ArticleList from '../../components/article-list/ArticleList.component';

const mapStateToProps = state => ({
  currentTopicId: state.articlesReducer.currentTopicId,
});

export default connect(mapStateToProps)(ArticleList)
