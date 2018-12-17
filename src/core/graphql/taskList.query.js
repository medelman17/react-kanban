import gql from 'graphql-tag';

export const GET_TASKLISTS = gql`
  {
    taskLists {
      id
      title
      headerColor
      __typename
      tasks {
        taskList {
          id
          title
          __typename
        }
        id
        text
        __typename
      }
    }
    __typename
  }
`;
