import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../article-card/ArticleCard.component';
import './article_list.styles.scss';
import { Query } from 'react-apollo';
import { teachersArticleQuery, parentsArticleQuery } from './articles_query';

const ArticleList = ({ articles, type, currentTopicId }) => {
  return (
    <div className="article-list column">
      <Query query={type === "teacher" ? teachersArticleQuery : parentsArticleQuery} variables={ { "topicId": currentTopicId.toString() } } >
        {( { loading, error, data } ) => {

          if (loading) return "LOADING....."
          if (error) return `Error: ${error}`

          const articles = data.articles;
          
          return (
            <>
              <h1>{articles.length ? articles[0].title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  title : ""}</h1>
              {articles.map( article => <ArticleCard key={article.id} article={article}/> )}
            </>
          )
        }}
      </Query>
    </div>
  )
};

ArticleList.defaultProps = {
  articles: [{ "": "" }],
  currentTopicId: "",
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(String)),
  currentTopicId: PropTypes.string,
}

export default ArticleList;
