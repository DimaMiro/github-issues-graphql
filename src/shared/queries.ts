import gql from 'graphql-tag';

export const LIST_ISSUES =  gql`
query($cursor: String) {
  repository(owner:"facebook", name:"react-native") {
    issues(last: 20, before: $cursor, orderBy: {field: UPDATED_AT, direction: ASC}){
      nodes {
          id,
          title,
          author { login },
          updatedAt,
          closed
      }
      pageInfo {
          startCursor,
          endCursor
       }
    }
  }
}`;
