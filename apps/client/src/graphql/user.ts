import { gql } from "./codegen/";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export const GET_USER = gql(`
  query GetUserInfo {
    getUserInfo {
      id
      displayName
      realName
      email
      mobile
      ref
    }
  }
`);

export const FIND_USER = gql(`
  query getUserById($id: String!) {
    getUserById(id: $id) {
      id
      email
      realName
      displayName
      mobile
    }
  }
`);

export const UPDATE_USER = gql(`
  mutation updateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input)
  }
`);

export const UPDATE_USER_PROFILE = gql(`
  mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input)
  }
`);
