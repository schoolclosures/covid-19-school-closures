import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import './article_card.styles.scss';

const ArticleCard = ({ article }) => {
  const { title, articleBody: { html } } = article;
  const [articleIsOpen, setArticleIsOpen] = useState(false);

  const toggelArticleState = () => {
    if (articleIsOpen) {
      setArticleIsOpen(false) ;
      return;
    } 

    setArticleIsOpen(true);
  }

  const openArticleStyle = {
    height: "inherit",
    display: "block",
  }

  const closedArticleStyle = {
    height: 0,
    display: "none",
  }

  return (
    <div className="article-card">
      <div className="article-card-header row">
        <p>{title}</p>
        <button className="no-bg-btn" onClick={ () => toggelArticleState() }>
          <i className="plus-icon" ></i>
        </button>
      </div>
      <div className="article-body" style={ articleIsOpen ? openArticleStyle : closedArticleStyle }>
        {ReactHtmlParser(html)}
      </div> 
    </div>
  )
};

ArticleCard.propTypes = {
  title: PropTypes.string,
};

ArticleCard.defaultProps = {
  title: "An article title",
};


export default ArticleCard;
