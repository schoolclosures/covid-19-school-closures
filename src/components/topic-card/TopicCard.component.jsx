import React from 'react';
import PropTypes from 'prop-types';
import './topic_card.styles.scss';
import DivLink from '../div-link/DivLink.component';

const TopicCard = ({ topic, setCurrentTopicId }) => {
  const { title } = topic;
  return (
    <div className="topic-card row">
      <DivLink path="/articles" buttonText={title} iconType={"arrow-right"} handleClick={(topic_id) => setCurrentTopicId(topic.id)}/>
    </div>
  )
};

TopicCard.propTypes = {
  title: PropTypes.string,
  setCurrentTopicId: PropTypes.func,
};

TopicCard.defaultProps = {
  title: "An topic title",
  setCurrentTopicId: () => {},
};


export default TopicCard;
