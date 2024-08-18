import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
    mutation Login($email: String!, $password: String!,$isStaySignedIn:Boolean) {
        login(email: $email, password: $password,isStaySignedIn:$isStaySignedIn) {
            code
            message
            data
        }
    }
`;

export const USER_REGISTER = gql`
    mutation Register($input: CreateUserInput!) {
        register(input: $input) {
            code
            message
            data
        }
    }
`;

export const REVOKE_TOKENS = gql(`
  mutation RevokeTokens {
  revokeTokens
  }
`);
