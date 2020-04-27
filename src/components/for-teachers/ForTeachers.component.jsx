import React from 'react';
import PropTypes from 'prop-types';
import HeroHeader from '../hero-header/HeroHeader.component';
import TopicList from '../topic-list/TopicList.component';

const ForTeachers = ( { topics } ) => {
  return (
    <div className="hero-page-section">
      <HeroHeader heroType={ "Teachers" }/>
      <TopicList topics={topics} type={"teacher"}/>
    </div>
  )
};

ForTeachers.defaultProps = {
  topics: [{ "": "" }]
};

ForTeachers.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default ForTeachers;
