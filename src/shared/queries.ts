import gql from 'graphql-tag';

export const LIST_ISSUES =  gql`
query {
  repository(owner:"facebook", name:"react-native") {
    issues(last: 5){
      nodes{
          id,
          title,
          author { login },
          updatedAt,
          closed
      }
    }
  }
}`
