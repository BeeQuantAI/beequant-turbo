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
  /** Display name */
  displayName: Scalars['String']['input'];
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
  /** Display name */
  displayName: Scalars['String']['output'];
  /** Exchange name */
  exchangeName: Scalars['String']['output'];
  /** Exchange key ID */
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
  createExchangeKey: Result;
  /** Create new user */
  createUser: Scalars['Boolean']['output'];
  /** Delete exchange key by id */
  deleteExchangeKey: Result;
  /** Hard delete an user */
  deleteUser: Scalars['Boolean']['output'];
  /** Forgot password */
  forgotPassword: Result;
  /** User login */
  login: Result;
  /** User register */
  register: Result;
  /** Reset password */
  resetPassword: Result;
  /** Update exchange key */
  updateExchangeKey: Result;
  /** Update user info */
  updateUser: Scalars['Boolean']['output'];
  /** Email Verification */
  verifyEmail: Result;
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


export type MutationDeleteExchangeKeyArgs = {
  exchangeKeyId: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateExchangeKeyArgs = {
  input: UpdateExchangeKeyInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Get exchange key by id */
  getExchangeKeyById: ResultForExchangeKey;
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

export type ResetPasswordInput = {
  /** New Password */
  newPassword: Scalars['String']['input'];
  /** Reset Token */
  resetToken: Scalars['String']['input'];
};

export type Result = {
  __typename?: 'Result';
  code: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ResultForExchangeKey = {
  __typename?: 'ResultForExchangeKey';
  code: Scalars['Int']['output'];
  data?: Maybe<ExchangeKey>;
  message: Scalars['String']['output'];
};

export type UpdateExchangeKeyInput = {
  /** Access key */
  accessKey: Scalars['String']['input'];
  /** Display name */
  displayName: Scalars['String']['input'];
  /** Exchange name */
  exchangeName: Scalars['String']['input'];
  /** Exchange key id */
  id: Scalars['String']['input'];
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
  /** is Email Verified */
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** Mobile number */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** Password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User real name */
  realName?: InputMaybe<Scalars['String']['input']>;
  /** User is referred by */
  ref?: InputMaybe<Scalars['String']['input']>;
  /** Verification Token */
  verificationToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserType = {
  __typename?: 'UserType';
  /** User display name */
  displayName: Scalars['String']['output'];
  /** Login email */
  email: Scalars['String']['output'];
  /** User ID */
  id: Scalars['String']['output'];
  /** is Email Verified */
  isEmailVerified: Scalars['Boolean']['output'];
  /** Mobile number */
  mobile?: Maybe<Scalars['String']['output']>;
  /** QQ */
  qq?: Maybe<Scalars['String']['output']>;
  /** User real name */
  realName?: Maybe<Scalars['String']['output']>;
  /** User is referred by */
  ref: Scalars['String']['output'];
  /** Reset Password Token */
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  /** Verification Token */
  verificationToken?: Maybe<Scalars['String']['output']>;
  /** Wechat */
  wechat?: Maybe<Scalars['String']['output']>;
};

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'Result', code: number, message?: string | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Result', code: number, message?: string | null, data?: string | null } };

export type RegisterMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Result', code: number, message?: string | null } };

export type VerifyEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'Result', code: number, message?: string | null } };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserType', id: string, displayName: string } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'Result', code: number, message?: string | null, data?: string | null } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'Result', code: number, message?: string | null, data?: string | null } };

export type GetExchangeKeyByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetExchangeKeyByIdQuery = { __typename?: 'Query', getExchangeKeyById: { __typename?: 'ResultForExchangeKey', code: number, message: string, data?: { __typename?: 'ExchangeKey', displayName: string, accessKey: string, secretKey: string, exchangeName: string } | null } };

export type UpdateExchangeKeyMutationVariables = Exact<{
  input: UpdateExchangeKeyInput;
}>;


export type UpdateExchangeKeyMutation = { __typename?: 'Mutation', updateExchangeKey: { __typename?: 'Result', code: number, message?: string | null } };

export type CreateExchangeKeyMutationVariables = Exact<{
  input: CreateExchangeKeyInput;
}>;


export type CreateExchangeKeyMutation = { __typename?: 'Mutation', createExchangeKey: { __typename?: 'Result', code: number, message?: string | null } };


export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const GetUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]} as unknown as DocumentNode<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const GetExchangeKeyByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExchangeKeyById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getExchangeKeyById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"accessKey"}},{"kind":"Field","name":{"kind":"Name","value":"secretKey"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeName"}}]}}]}}]}}]} as unknown as DocumentNode<GetExchangeKeyByIdQuery, GetExchangeKeyByIdQueryVariables>;
export const UpdateExchangeKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateExchangeKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateExchangeKeyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateExchangeKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateExchangeKeyMutation, UpdateExchangeKeyMutationVariables>;
export const CreateExchangeKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateExchangeKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateExchangeKeyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createExchangeKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateExchangeKeyMutation, CreateExchangeKeyMutationVariables>;