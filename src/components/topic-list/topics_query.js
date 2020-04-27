import gql from 'graphql-tag';

export const TEACHER_TOPICS_QUERY = gql`
  query {
    topics (where: { teacherTopic: true }) {
      id
      title
      
      articles {
        id
        title
        articleBody {
          html
        }
      }
    }
  }
`

export const PARENT_TOPICS_QUERY = gql`
  query {
    topics (where: { parentTopic: true }) {
      id
      title
      
      articles {
        id
        title
        articleBody {
          html
        }
      }
    }
  }
`