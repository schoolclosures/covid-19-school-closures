import React from 'react';
import PropTypes from 'prop-types';
import HeroHeader from '../hero-header/HeroHeader.component';
import TopicList from '../topic-list/TopicList.component';

const ForParents = ( { topics } ) => {
  return (
    <div className="hero-page-section">
      <HeroHeader heroType={ "Parents" }/>
      <TopicList topics={topics}/>
    </div>
  )
};

ForParents.defaultProps = {
  topics: [{ "": "" }]
};

ForParents.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default ForParents;
