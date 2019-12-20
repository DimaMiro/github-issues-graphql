import gql from 'graphql-tag';

export const LIST_ISSUES =  gql`
query($cursor: String) {
  repository(owner:"facebook", name:"react-native") {
    issues(first: 10, after: $cursor){
      nodes{
          id,
          title,
          author { login },
          updatedAt,
          closed
      }
      pageInfo {
          startCursor
          endCursor
       }
    }
  }
}`;
