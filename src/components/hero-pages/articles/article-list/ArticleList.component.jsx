import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../article-card/ArticleCard.component';
import './article_list.styles.scss';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  )
};

ArticleList.defaultProps = {
  articles: [{ "": "" }]
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(String))
}

export default ArticleList;
