import gql from 'graphql-tag';

export const LIST_ISSUES =  gql`
query($username: String = "facebook", $repo: String = "react-native", $cursor: String) {
  repository(owner: $username, name:$repo) {
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
