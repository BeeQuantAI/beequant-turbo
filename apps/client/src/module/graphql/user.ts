import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getAllUserInfo {
      id
      email
      realName
      displayName
      mobile
    }
  }
`;


export const REGISTER = gql(`
  mutation Register($input: CreateUserInput!) {
    register(input: $input) {
      code
      message
    }
  }
`);


export const GET_USER_INFO = gql`
  query getUserInfo {
    getUserInfo {
      id
      displayName
    }
  }
`;

export const FIND_USER = gql`
  query getUserById($id: String!) {
    getUserById(id: $id) {
      id
      email
      realName
      displayName
      mobile
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input)
  }
`;
