/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateExchangeKeyInput = {
  /** Access key */
  accessKey: Scalars['String']['input'];
  /** Exchange name */
  exchangeName: Scalars['String']['input'];
  /** Remarks */
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** Secret key */
  secretKey: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** User display name */
  displayName: Scalars['String']['input'];
  /** Login email */
  email: Scalars['String']['input'];
  /** Mobile number */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** Password */
  password: Scalars['String']['input'];
  /** User real name */
  realName?: InputMaybe<Scalars['String']['input']>;
  /** User is referred by */
  ref: Scalars['String']['input'];
};

export type ExchangeKey = {
  __typename?: 'ExchangeKey';
  /** Access key */
  accessKey: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** Exchange name */
  exchangeName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Remarks */
  remarks: Scalars['String']['output'];
  /** Secret key */
  secretKey: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change password */
  changePassword: Result;
  /** Create exchange key */
  createExchangeKey: Scalars['Boolean']['output'];
  /** Create new user */
  createUser: Scalars['Boolean']['output'];
  /** Hard delete an user */
  deleteUser: Scalars['Boolean']['output'];
  /** Hard delete an user key */
  deleteUserKey: Scalars['Boolean']['output'];
  /** User login */
  login: Result;
  /** User register */
  register: Result;
  /** Update exchange key info */
  updateExchangeKey: Scalars['Boolean']['output'];
  /** Update user info */
  updateUser: Scalars['Boolean']['output'];
};


export type MutationChangePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationCreateExchangeKeyArgs = {
  input: CreateExchangeKeyInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationUpdateExchangeKeyArgs = {
  input: UpdateExchangeKeyInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  /** Find exchange key by id */
  getExchangeKeyById: ExchangeKey;
  /** Find user by email */
  getUserByEmail: UserType;
  /** Find user by id */
  getUserById: UserType;
  /** Find user by context */
  getUserInfo: UserType;
  /** Get all users */
  getUsers: Array<UserType>;
};


export type QueryGetExchangeKeyByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};

export type Result = {
  __typename?: 'Result';
  code: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type UpdateExchangeKeyInput = {
  /** Access key */
  accessKey: Scalars['String']['input'];
  /** Exchange name */
  exchangeName: Scalars['String']['input'];
  /** Remarks */
  remarks?: InputMaybe<Scalars['String']['input']>;
  /** Secret key */
  secretKey: Scalars['String']['input'];
};

export type UpdatePasswordInput = {
  /** New Password */
  newPassword: Scalars['String']['input'];
  /** Old Password */
  oldPassword: Scalars['String']['input'];
};

export type UpdateUserInput = {
  /** User display name */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** Mobile number */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** Password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User real name */
  realName?: InputMaybe<Scalars['String']['input']>;
  /** User is referred by */
  ref?: InputMaybe<Scalars['String']['input']>;
};

export type UserType = {
  __typename?: 'UserType';
  /** User display name */
  displayName: Scalars['String']['output'];
  /** Login email */
  email: Scalars['String']['output'];
  /** User ID */
  id: Scalars['String']['output'];
  /** Mobile number */
  mobile: Scalars['String']['output'];
  /** QQ */
  qq: Scalars['String']['output'];
  /** User real name */
  realName: Scalars['String']['output'];
  /** User is referred by */
  ref: Scalars['String']['output'];
  /** Wechat */
  wechat: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Result', code: number, message?: string | null, data?: string | null } };

export type RegisterMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Result', code: number, message?: string | null } };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserType', id: string, displayName: string } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const GetUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]} as unknown as DocumentNode<GetUserInfoQuery, GetUserInfoQueryVariables>;