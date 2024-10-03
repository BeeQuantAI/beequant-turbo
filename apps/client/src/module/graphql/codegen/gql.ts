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
    "\n  mutation UpdatePassword($input: UpdatePasswordInput!) {\n    changePassword(input: $input) {\n      code\n      message\n    }\n  }\n": types.UpdatePasswordDocument,
    "\n    mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {\n        updateUser(id: $id, input: $input)\n    }\n": types.UpdateUserProfileDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      code\n      message\n      data\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation VerifyEmail($email: String!, $token: String!) {\n    verifyEmail(email: $email, token: $token) {\n      code\n      message\n    }\n  }\n": types.VerifyEmailDocument,
    "\n  query getUserInfo {\n    getUserInfo {\n      id\n      displayName\n      email\n      ref\n      mobile\n      realName\n    }\n  }\n": types.GetUserInfoDocument,
    "\n  mutation ForgotPassword($email: String!){\n    forgotPassword(email: $email) {\n      code\n      message\n      data\n    }\n  }\n": types.ForgotPasswordDocument,
    "\n  mutation resetPassword($input: ResetPasswordInput!){\n    resetPassword(input: $input) {\n      code\n      message\n      data\n    }\n  }\n": types.ResetPasswordDocument,
    "\n  query GetExchangeKeyById($id: String!) {\n    getExchangeKeyById(id: $id) {\n      code\n      message\n      data {\n        displayName\n        accessKey\n        secretKey\n        exchangeName\n      }\n    }\n  }\n": types.GetExchangeKeyByIdDocument,
    "\n  mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {\n    updateExchangeKey(input: $input) {\n      code\n      message\n    }\n  }\n": types.UpdateExchangeKeyDocument,
    "\n  mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {\n    createExchangeKey(input: $input) {\n      code\n      message\n    }\n  }\n": types.CreateExchangeKeyDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePassword($input: UpdatePasswordInput!) {\n    changePassword(input: $input) {\n      code\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePassword($input: UpdatePasswordInput!) {\n    changePassword(input: $input) {\n      code\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {\n        updateUser(id: $id, input: $input)\n    }\n"): (typeof documents)["\n    mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {\n        updateUser(id: $id, input: $input)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      code\n      message\n      data\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      code\n      message\n      data\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation VerifyEmail($email: String!, $token: String!) {\n    verifyEmail(email: $email, token: $token) {\n      code\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyEmail($email: String!, $token: String!) {\n    verifyEmail(email: $email, token: $token) {\n      code\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserInfo {\n    getUserInfo {\n      id\n      displayName\n      email\n      ref\n      mobile\n      realName\n    }\n  }\n"): (typeof documents)["\n  query getUserInfo {\n    getUserInfo {\n      id\n      displayName\n      email\n      ref\n      mobile\n      realName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ForgotPassword($email: String!){\n    forgotPassword(email: $email) {\n      code\n      message\n      data\n    }\n  }\n"): (typeof documents)["\n  mutation ForgotPassword($email: String!){\n    forgotPassword(email: $email) {\n      code\n      message\n      data\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation resetPassword($input: ResetPasswordInput!){\n    resetPassword(input: $input) {\n      code\n      message\n      data\n    }\n  }\n"): (typeof documents)["\n  mutation resetPassword($input: ResetPasswordInput!){\n    resetPassword(input: $input) {\n      code\n      message\n      data\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetExchangeKeyById($id: String!) {\n    getExchangeKeyById(id: $id) {\n      code\n      message\n      data {\n        displayName\n        accessKey\n        secretKey\n        exchangeName\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetExchangeKeyById($id: String!) {\n    getExchangeKeyById(id: $id) {\n      code\n      message\n      data {\n        displayName\n        accessKey\n        secretKey\n        exchangeName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {\n    updateExchangeKey(input: $input) {\n      code\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {\n    updateExchangeKey(input: $input) {\n      code\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {\n    createExchangeKey(input: $input) {\n      code\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {\n    createExchangeKey(input: $input) {\n      code\n      message\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;