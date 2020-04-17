import React from 'react';
import PropTypes from 'prop-types';
import './article_card.styles.scss';
import DivLink from '../div-link/DivLink.component';

const ArticleCard = ({ title, setCurrentArticle }) => {
  return (
    <div className="article-card">
      <DivLink buttonText={title} handleClick={setCurrentArticle} path="/article" />
    </div>
  )
};

ArticleCard.propTypes = {
  title: PropTypes.string,
  setCurrentArticle: PropTypes.func,
};

ArticleCard.defaultProps = {
  title: "An article title",
  setCurrentArticle: () => {},
};


export default ArticleCard;
