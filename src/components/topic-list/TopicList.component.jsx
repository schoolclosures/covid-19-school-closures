import React from 'react';
import PropTypes from 'prop-types';
import './topic_list.styles.scss';
import { Query } from 'react-apollo';
import { TEACHER_TOPICS_QUERY, PARENT_TOPICS_QUERY } from './topics_query';
import TopicCard from '../../containers/topic-card/TopicCard.container';
import './topic_list.styles.scss';

const TopicList = ({ topics, type }) => {
  return (
    <div className="topic-list">
      <Query query={type === "teacher" ? TEACHER_TOPICS_QUERY : PARENT_TOPICS_QUERY} >
        {( { loading, error, data } ) => {

          if (loading) return "LOADING....."
          if (error) return `Error: ${error}`
          const topics = data.topics;
          
          return (
            topics.map( topic => <TopicCard key={topic.id} topic={topic} /> )
          )
        }}
      </Query>
    </div>
  )
};

TopicList.defaultProps = {
  topics: [{ "": "" }]
};

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default TopicList;
