import React from 'react';
import PropTypes from 'prop-types';
import HeroHeader from '../hero-header/HeroHeader.component';
import ArticleList from '../article-list/ArticleList.component';

const ForParents = ( { articles } ) => {
  return (
    <div className="hero-page-section">
      <HeroHeader heroType={ "Parents" }/>
      <ArticleList articles={articles}/>
    </div>
  )
};

ForParents.defaultProps = {
  articles: [{ "": "" }]
};

ForParents.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default ForParents;
