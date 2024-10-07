import { gql } from "./codegen/";

export const USER_LOGIN = gql(`
  mutation Login($email: String!, $password: String!, $isStaySignedIn: Boolean) {
    login(email: $email, password: $password, isStaySignedIn: $isStaySignedIn) {
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
    }
  }
`);

export const GENERATE_ACCESS_TOKEN = gql(`
  mutation GenerateAccessToken($id: String!) {
    generateAccessToken(id: $id)
  }
`);

export const VERIFY_EMAIL = gql(`
  mutation VerifyEmail($email: String!, $token: String!) {
    verifyEmail(email: $email, token: $token) {
      code
      message
    }
  }
`);

export const FORGOT_PASSWORD = gql(`
  mutation ForgotPassword($email: String!){
    forgotPassword(email: $email) {
      code
      message
      data
    }
  }
`);

export const RESET_PASSWORD = gql(`
  mutation ResetPassword($input: ResetPasswordInput!){
    resetPassword(input: $input) {
      code
      message
      data
    }
  }
`);

export const CHANGE_PASSWORD = gql(`
  mutation ChangePassword($input: UpdatePasswordInput!) {
    changePassword(input: $input) {
      code
      message
    }
  }
`);

export const REVOKE_TOKENS = gql(`
  mutation RevokeTokens {
    revokeTokens
  }
`);
