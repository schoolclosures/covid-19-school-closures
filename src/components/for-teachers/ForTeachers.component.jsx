import React from 'react';
import PropTypes from 'prop-types';
import HeroHeader from '../hero-header/HeroHeader.component';
import ArticleList from '../article-list/ArticleList.component';

const ForTeachers = ( { articles } ) => {
  return (
    <div className="hero-page-section">
      <HeroHeader heroType={ "Teachers" }/>
      <ArticleList articles={articles}/>
    </div>
  )
};

ForTeachers.defaultProps = {
  articles: [{ "": "" }]
};

ForTeachers.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default ForTeachers;
