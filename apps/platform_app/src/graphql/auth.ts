import { gql } from './codegen/';
export const USER_LOGIN = gql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      code
      message
      data
    }
  }
`);

export const USER_REGISTER = gql(`
  mutation Register($input: CreateUserInput!) {
    register(input: $input) {
      code
      message
      data
    }
  }
`);
