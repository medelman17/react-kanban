import gql from 'graphql-tag';

export const ADD_TASK = gql`
  mutation addTask($data: TaskCreateInput!) {
    createTask(data: $data) {
      id
      text
      __typename
      taskList {
        id
        __typename
      }
    }
    __typename
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($where: TaskWhereUniqueInput!) {
    deleteTask(where: $where) {
      id
      __typename
    }
    __typename
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask(
    $where: TaskWhereUniqueInput!
    $data: TaskUpdateInput!
  ) {
    updateTask(where: $where, data: $data) {
      id
      taskList {
        id
        __typename
      }
      __typename
    }
    __typename
  }
`;
