import gql from 'graphql-tag';

export const teachersArticleQuery = gql`
  query content ( $topicId: ID! ) {
    articles (
      where: { topicId: { id_in: [ $topicId ] } }
    ) {
      id
      title
      articleBody {
        html
      }

      topicId {
        ... on Topic {
          title
        }
      }
    }
  }
`

export const parentsArticleQuery = gql`
  query content ( $topicId: ID! ) {
    articles (
      where: { topicId: { id_in: [ $topicId ] } }
    ) {
      id
      title
      
      articleBody {
        html
      }


      topicId {
        ... on Topic {
          title
        }
      }
    }
  }
`