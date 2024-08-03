/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      code\n      message\n      data\n    }\n  }\n':
    types.LoginDocument,
  '\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n      data\n    }\n  }\n':
    types.RegisterDocument,
  '\n  query getUserInfo {\n    getUserInfo {\n      id\n      displayName\n    }\n  }\n':
    types.GetUserInfoDocument,
  '\n  query getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      email\n      realName\n      displayName\n      mobile\n    }\n  }\n':
    types.GetUserByIdDocument,
  '\n  mutation updateUser($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n':
    types.UpdateUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      code\n      message\n      data\n    }\n  }\n'
): (typeof documents)['\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      code\n      message\n      data\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n      data\n    }\n  }\n'
): (typeof documents)['\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n      data\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getUserInfo {\n    getUserInfo {\n      id\n      displayName\n    }\n  }\n'
): (typeof documents)['\n  query getUserInfo {\n    getUserInfo {\n      id\n      displayName\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      email\n      realName\n      displayName\n      mobile\n    }\n  }\n'
): (typeof documents)['\n  query getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      email\n      realName\n      displayName\n      mobile\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation updateUser($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n'
): (typeof documents)['\n  mutation updateUser($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
