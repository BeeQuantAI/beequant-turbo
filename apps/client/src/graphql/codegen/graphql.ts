/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type CoinDetails = {
  __typename?: "CoinDetails";
  /** All time high */
  ath: Scalars["Float"]["output"];
  /** Circulating supply */
  circulationSupply: Scalars["Float"]["output"];
  /** 24-hour high price */
  high24h: Scalars["Float"]["output"];
  /** 24-hour low price */
  low24h: Scalars["Float"]["output"];
  /** Max supply */
  maxSupply?: Maybe<Scalars["Float"]["output"]>;
  /** Full name of the cryptocurrency */
  name: Scalars["String"]["output"];
  /** Current price of the cryptocurrency */
  price: Scalars["Float"]["output"];
  /** 24-hour price change in symbol */
  priceChange24h: Scalars["Float"]["output"];
  /** 24-hour price change percentage */
  priceChangePercentage24h: Scalars["Float"]["output"];
  /** 24-hour price in USD */
  quoteVolume24h: Scalars["Float"]["output"];
  /** Symbol of the cryptocurrency */
  symbol: Scalars["String"]["output"];
  /** Total supply */
  totalSupply: Scalars["Float"]["output"];
  /** 24-hour trading volume */
  volume24h: Scalars["Float"]["output"];
};

export type CoinDetailsResult = {
  __typename?: "CoinDetailsResult";
  code: Scalars["Int"]["output"];
  data?: Maybe<CoinDetails>;
  message: Scalars["String"]["output"];
};

export type CoinOverview = {
  __typename?: "CoinOverview";
  /** Market capitalization of the cryptocurrency */
  marketCap: Scalars["Float"]["output"];
  /** Full name of the cryptocurrency */
  name: Scalars["String"]["output"];
  /** Current price of the cryptocurrency */
  price: Scalars["Float"]["output"];
  /** 24-hour price change */
  priceChange24h: Scalars["Float"]["output"];
  /** 7-day price change percentage */
  priceChangePercentage7d: Scalars["Float"]["output"];
  /** 24-hour price change percentage */
  priceChangePercentage24h: Scalars["Float"]["output"];
  /** Symbol of the cryptocurrency */
  symbol: Scalars["String"]["output"];
  /** 24-hour trading volume */
  volume24h: Scalars["Float"]["output"];
};

export type CoinOverviewResults = {
  __typename?: "CoinOverviewResults";
  code: Scalars["Int"]["output"];
  data?: Maybe<Array<CoinOverview>>;
  message: Scalars["String"]["output"];
  page?: Maybe<Page>;
};

export type CreateExchangeKeyInput = {
  /** Access key */
  accessKey: Scalars["String"]["input"];
  /** Display name */
  displayName: Scalars["String"]["input"];
  /** Exchange name */
  exchangeName: Scalars["String"]["input"];
  /** Remarks */
  remarks?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret key */
  secretKey: Scalars["String"]["input"];
};

export type CreateUserInput = {
  /** User display name */
  displayName: Scalars["String"]["input"];
  /** Login email */
  email: Scalars["String"]["input"];
  /** Mobile number */
  mobile?: InputMaybe<Scalars["String"]["input"]>;
  /** Password */
  password: Scalars["String"]["input"];
  /** User real name */
  realName?: InputMaybe<Scalars["String"]["input"]>;
  /** User is referred by */
  ref: Scalars["String"]["input"];
};

export type ExchangeKey = {
  __typename?: "ExchangeKey";
  /** Access key */
  accessKey: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<Scalars["String"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedBy?: Maybe<Scalars["String"]["output"]>;
  /** Display name */
  displayName: Scalars["String"]["output"];
  /** Exchange name */
  exchangeName: Scalars["String"]["output"];
  /** Exchange key ID */
  id: Scalars["String"]["output"];
  /** Remarks */
  remarks: Scalars["String"]["output"];
  /** Secret key */
  secretKey: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedBy?: Maybe<Scalars["String"]["output"]>;
};

export type GetUiKlineDto = {
  /** End time */
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  /** Interval */
  interval: Scalars["String"]["input"];
  /** Limit */
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  /** Start time */
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  /** Symbol */
  symbol: Scalars["String"]["input"];
  /** Time Zone */
  timeZone?: InputMaybe<Scalars["String"]["input"]>;
};

export type MarketOverview = {
  __typename?: "MarketOverview";
  /** Top 20 cryptocurrencies */
  top20Cryptocurrencies: Array<CoinOverview>;
  /** Top climbing cryptocurrencies */
  topClimbers: Array<CoinOverview>;
  /** Top falling cryptocurrencies */
  topFallers: Array<CoinOverview>;
  /** Top cryptocurrencies by market cap */
  topMarketCap: Array<CoinOverview>;
};

export type MarketOverviewResult = {
  __typename?: "MarketOverviewResult";
  code: Scalars["Int"]["output"];
  data?: Maybe<MarketOverview>;
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Change password */
  changePassword: Result;
  /** Create exchange key */
  createExchangeKey: Result;
  /** Create new user */
  createUser: UserType;
  /** Delete exchange key by id */
  deleteExchangeKey: Result;
  /** Hard delete an user */
  deleteUser: Scalars["Boolean"]["output"];
  /** Forgot password */
  forgotPassword: Result;
  /** Generate access token */
  generateAccessToken: Scalars["String"]["output"];
  /** User login */
  login: Result;
  /** User register */
  register: Result;
  /** Reset password */
  resetPassword: Result;
  /** Revoke Tokens */
  revokeTokens: Scalars["Boolean"]["output"];
  /** Update exchange key */
  updateExchangeKey: Result;
  /** Update user info */
  updateUser: Scalars["Boolean"]["output"];
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
  exchangeKeyId: Scalars["String"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"]["input"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationGenerateAccessTokenArgs = {
  id: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  isStaySignedIn?: InputMaybe<Scalars["Boolean"]["input"]>;
  password: Scalars["String"]["input"];
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
  id: Scalars["String"]["input"];
  input: UpdateUserInput;
};

export type MutationVerifyEmailArgs = {
  email: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type Page = {
  __typename?: "Page";
  pageNum: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type Query = {
  __typename?: "Query";
  getCoinDetails: CoinDetailsResult;
  /** Get exchange key by id */
  getExchangeKeyById: ResultForExchangeKey;
  getMarketOverview: MarketOverviewResult;
  getTop20Cryptocurrencies: CoinOverviewResults;
  getTopClimbers: CoinOverviewResults;
  getTopFallers: CoinOverviewResults;
  getTopMarketCap: CoinOverviewResults;
  /** Get uiKlines */
  getUiKlines: ResultForUiKlineType;
  /** Find user by email */
  getUserByEmail: UserType;
  /** Find user by id */
  getUserById: UserType;
  getUserExchangesAndBalances: ResultForExchanges;
  /** Find user by context */
  getUserInfo: UserType;
  /** Get all users */
  getUsers: Array<UserType>;
};

export type QueryGetCoinDetailsArgs = {
  symbol: Scalars["String"]["input"];
};

export type QueryGetExchangeKeyByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryGetUiKlinesArgs = {
  input: GetUiKlineDto;
};

export type QueryGetUserByEmailArgs = {
  email: Scalars["String"]["input"];
};

export type QueryGetUserByIdArgs = {
  id: Scalars["String"]["input"];
};

export type ResetPasswordInput = {
  /** New Password */
  newPassword: Scalars["String"]["input"];
  /** Reset Token */
  resetToken: Scalars["String"]["input"];
};

export type Result = {
  __typename?: "Result";
  code: Scalars["Int"]["output"];
  data?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
};

export type ResultForExchangeKey = {
  __typename?: "ResultForExchangeKey";
  code: Scalars["Int"]["output"];
  data?: Maybe<ExchangeKey>;
  message: Scalars["String"]["output"];
};

export type ResultForExchanges = {
  __typename?: "ResultForExchanges";
  code: Scalars["Int"]["output"];
  data?: Maybe<Array<UserExchangeType>>;
  message: Scalars["String"]["output"];
  page?: Maybe<Page>;
};

export type ResultForUiKlineType = {
  __typename?: "ResultForUiKlineType";
  code: Scalars["Int"]["output"];
  data?: Maybe<Array<UiKline>>;
  message: Scalars["String"]["output"];
  page?: Maybe<Page>;
};

export type Subscription = {
  __typename?: "Subscription";
  updateMarketOverview: MarketOverviewResult;
};

export type UpdateExchangeKeyInput = {
  /** Access key */
  accessKey: Scalars["String"]["input"];
  /** Display name */
  displayName: Scalars["String"]["input"];
  /** Exchange name */
  exchangeName: Scalars["String"]["input"];
  /** Exchange key id */
  id: Scalars["String"]["input"];
  /** Secret key */
  secretKey: Scalars["String"]["input"];
};

export type UpdatePasswordInput = {
  /** New Password */
  newPassword: Scalars["String"]["input"];
  /** Old Password */
  oldPassword: Scalars["String"]["input"];
};

export type UpdateUserInput = {
  /** User display name */
  displayName?: InputMaybe<Scalars["String"]["input"]>;
  /** is Email Verified */
  isEmailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Mobile number */
  mobile?: InputMaybe<Scalars["String"]["input"]>;
  /** Password */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** User real name */
  realName?: InputMaybe<Scalars["String"]["input"]>;
  /** User is referred by */
  ref?: InputMaybe<Scalars["String"]["input"]>;
  /** Verification Token */
  verificationToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserExchangeType = {
  __typename?: "UserExchangeType";
  /** Total balance in USD */
  balances: Scalars["Float"]["output"];
  /** Display Name */
  displayName: Scalars["String"]["output"];
  /** Exchange ID */
  id: Scalars["String"]["output"];
  /** Exchange name */
  name: Scalars["String"]["output"];
};

export type UserType = {
  __typename?: "UserType";
  /** User display name */
  displayName: Scalars["String"]["output"];
  /** Login email */
  email: Scalars["String"]["output"];
  /** User ID */
  id: Scalars["String"]["output"];
  /** is Email Verified */
  isEmailVerified: Scalars["Boolean"]["output"];
  /** Mobile number */
  mobile?: Maybe<Scalars["String"]["output"]>;
  /** QQ */
  qq?: Maybe<Scalars["String"]["output"]>;
  /** User real name */
  realName?: Maybe<Scalars["String"]["output"]>;
  /** User is referred by */
  ref: Scalars["String"]["output"];
  /** Reset Password Token */
  resetPasswordToken?: Maybe<Scalars["String"]["output"]>;
  /** Verification Token */
  verificationToken?: Maybe<Scalars["String"]["output"]>;
  /** Wechat */
  wechat?: Maybe<Scalars["String"]["output"]>;
};

export type UiKline = {
  __typename?: "uiKline";
  /** close price */
  closePrice: Scalars["String"]["output"];
  /** close time */
  closeTime: Scalars["DateTime"]["output"];
  /** high price */
  highPrice: Scalars["String"]["output"];
  /** low price */
  lowPrice: Scalars["String"]["output"];
  /** number of trades */
  numberOfTrades: Scalars["Float"]["output"];
  /** open price */
  openPrice: Scalars["String"]["output"];
  /** open time */
  openTime: Scalars["DateTime"]["output"];
  /** quote asset volume */
  quoteAssetVolume: Scalars["String"]["output"];
  /** taker buy base asset volume */
  takerBuyBaseAssetVolume: Scalars["String"]["output"];
  /** taker buy quote asset volume */
  takerBuyQuoteAssetVolume: Scalars["String"]["output"];
  /** volume */
  volume: Scalars["String"]["output"];
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  isStaySignedIn?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "Result";
    code: number;
    message?: string | null;
    data?: string | null;
  };
};

export type RegisterMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: { __typename?: "Result"; code: number; message?: string | null };
};

export type GenerateAccessTokenMutationVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GenerateAccessTokenMutation = {
  __typename?: "Mutation";
  generateAccessToken: string;
};

export type VerifyEmailMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
}>;

export type VerifyEmailMutation = {
  __typename?: "Mutation";
  verifyEmail: { __typename?: "Result"; code: number; message?: string | null };
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]["input"];
}>;

export type ForgotPasswordMutation = {
  __typename?: "Mutation";
  forgotPassword: {
    __typename?: "Result";
    code: number;
    message?: string | null;
    data?: string | null;
  };
};

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetPassword: {
    __typename?: "Result";
    code: number;
    message?: string | null;
    data?: string | null;
  };
};

export type ChangePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;

export type ChangePasswordMutation = {
  __typename?: "Mutation";
  changePassword: {
    __typename?: "Result";
    code: number;
    message?: string | null;
  };
};

export type RevokeTokensMutationVariables = Exact<{ [key: string]: never }>;

export type RevokeTokensMutation = {
  __typename?: "Mutation";
  revokeTokens: boolean;
};

export type GetUiKlinesQueryVariables = Exact<{
  input: GetUiKlineDto;
}>;

export type GetUiKlinesQuery = {
  __typename?: "Query";
  getUiKlines: {
    __typename?: "ResultForUiKlineType";
    code: number;
    message: string;
    data?: Array<{
      __typename?: "uiKline";
      openTime: any;
      openPrice: string;
      highPrice: string;
      lowPrice: string;
      closePrice: string;
      volume: string;
      closeTime: any;
      quoteAssetVolume: string;
      numberOfTrades: number;
      takerBuyBaseAssetVolume: string;
      takerBuyQuoteAssetVolume: string;
    }> | null;
  };
};

export type GetCoinDetailsQueryVariables = Exact<{
  symbol: Scalars["String"]["input"];
}>;

export type GetCoinDetailsQuery = {
  __typename?: "Query";
  getCoinDetails: {
    __typename?: "CoinDetailsResult";
    code: number;
    message: string;
    data?: {
      __typename: "CoinDetails";
      symbol: string;
      price: number;
      volume24h: number;
      priceChange24h: number;
      priceChangePercentage24h: number;
      low24h: number;
      high24h: number;
      ath: number;
      circulationSupply: number;
      totalSupply: number;
      maxSupply?: number | null;
      name: string;
      quoteVolume24h: number;
    } | null;
  };
};

export type GetMarketOverviewQueryVariables = Exact<{ [key: string]: never }>;

export type GetMarketOverviewQuery = {
  __typename?: "Query";
  getMarketOverview: {
    __typename?: "MarketOverviewResult";
    code: number;
    message: string;
    data?: {
      __typename?: "MarketOverview";
      topMarketCap: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
      topClimbers: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
      topFallers: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
      top20Cryptocurrencies: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
    } | null;
  };
};

export type UpdateMarketOverviewSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type UpdateMarketOverviewSubscription = {
  __typename?: "Subscription";
  updateMarketOverview: {
    __typename?: "MarketOverviewResult";
    code: number;
    message: string;
    data?: {
      __typename?: "MarketOverview";
      topMarketCap: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
      topClimbers: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
      topFallers: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
      top20Cryptocurrencies: Array<{
        __typename?: "CoinOverview";
        symbol: string;
        name: string;
        marketCap: number;
        price: number;
        volume24h: number;
        priceChange24h: number;
        priceChangePercentage24h: number;
        priceChangePercentage7d: number;
      }>;
    } | null;
  };
};

export type GetExchangeKeyByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetExchangeKeyByIdQuery = {
  __typename?: "Query";
  getExchangeKeyById: {
    __typename?: "ResultForExchangeKey";
    code: number;
    message: string;
    data?: {
      __typename?: "ExchangeKey";
      displayName: string;
      accessKey: string;
      secretKey: string;
      exchangeName: string;
    } | null;
  };
};

export type UpdateExchangeKeyMutationVariables = Exact<{
  input: UpdateExchangeKeyInput;
}>;

export type UpdateExchangeKeyMutation = {
  __typename?: "Mutation";
  updateExchangeKey: {
    __typename?: "Result";
    code: number;
    message?: string | null;
  };
};

export type CreateExchangeKeyMutationVariables = Exact<{
  input: CreateExchangeKeyInput;
}>;

export type CreateExchangeKeyMutation = {
  __typename?: "Mutation";
  createExchangeKey: {
    __typename?: "Result";
    code: number;
    message?: string | null;
  };
};

export type GetUserExchangesAndBalancesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserExchangesAndBalancesQuery = {
  __typename?: "Query";
  getUserExchangesAndBalances: {
    __typename?: "ResultForExchanges";
    code: number;
    message: string;
    data?: Array<{
      __typename?: "UserExchangeType";
      id: string;
      name: string;
      displayName: string;
      balances: number;
    }> | null;
  };
};

export type DeleteExchangeKeyMutationVariables = Exact<{
  exchangeKeyId: Scalars["String"]["input"];
}>;

export type DeleteExchangeKeyMutation = {
  __typename?: "Mutation";
  deleteExchangeKey: {
    __typename?: "Result";
    code: number;
    message?: string | null;
  };
};

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserInfoQuery = {
  __typename?: "Query";
  getUserInfo: {
    __typename?: "UserType";
    id: string;
    displayName: string;
    realName?: string | null;
    email: string;
    mobile?: string | null;
    ref: string;
  };
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById: {
    __typename?: "UserType";
    id: string;
    email: string;
    realName?: string | null;
    displayName: string;
    mobile?: string | null;
  };
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars["String"]["input"];
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: boolean;
};

export type UpdateUserProfileMutationVariables = Exact<{
  id: Scalars["String"]["input"];
  input: UpdateUserInput;
}>;

export type UpdateUserProfileMutation = {
  __typename?: "Mutation";
  updateUser: boolean;
};

export const LoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Login" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isStaySignedIn" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isStaySignedIn" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isStaySignedIn" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "data" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Register" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "register" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const GenerateAccessTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateAccessToken" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateAccessToken" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateAccessTokenMutation,
  GenerateAccessTokenMutationVariables
>;
export const VerifyEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "VerifyEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "verifyEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "token" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "token" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const ForgotPasswordDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ForgotPassword" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "forgotPassword" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "data" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ResetPassword" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ResetPasswordInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "resetPassword" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                { kind: "Field", name: { kind: "Name", value: "data" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const ChangePasswordDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ChangePassword" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdatePasswordInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "changePassword" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export const RevokeTokensDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RevokeTokens" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "revokeTokens" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RevokeTokensMutation,
  RevokeTokensMutationVariables
>;
export const GetUiKlinesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUiKlines" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "GetUiKlineDto" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUiKlines" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "openTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "openPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "highPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lowPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "closePrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "closeTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "quoteAssetVolume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "numberOfTrades" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "takerBuyBaseAssetVolume",
                        },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "takerBuyQuoteAssetVolume",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUiKlinesQuery, GetUiKlinesQueryVariables>;
export const GetCoinDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCoinDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "symbol" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCoinDetails" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "symbol" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "symbol" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "symbol" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume24h" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "priceChange24h" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "priceChangePercentage24h",
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "low24h" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "high24h" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "ath" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "circulationSupply" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalSupply" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "maxSupply" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "quoteVolume24h" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCoinDetailsQuery, GetCoinDetailsQueryVariables>;
export const GetMarketOverviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMarketOverview" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getMarketOverview" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topMarketCap" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topClimbers" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topFallers" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "top20Cryptocurrencies" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMarketOverviewQuery,
  GetMarketOverviewQueryVariables
>;
export const UpdateMarketOverviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "UpdateMarketOverview" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateMarketOverview" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topMarketCap" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topClimbers" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topFallers" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "top20Cryptocurrencies" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "marketCap" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume24h" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "priceChange24h" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage24h",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "priceChangePercentage7d",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateMarketOverviewSubscription,
  UpdateMarketOverviewSubscriptionVariables
>;
export const GetExchangeKeyByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetExchangeKeyById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getExchangeKeyById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accessKey" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "secretKey" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "exchangeName" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetExchangeKeyByIdQuery,
  GetExchangeKeyByIdQueryVariables
>;
export const UpdateExchangeKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateExchangeKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateExchangeKeyInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateExchangeKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateExchangeKeyMutation,
  UpdateExchangeKeyMutationVariables
>;
export const CreateExchangeKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateExchangeKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateExchangeKeyInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createExchangeKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateExchangeKeyMutation,
  CreateExchangeKeyMutationVariables
>;
export const GetUserExchangesAndBalancesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserExchangesAndBalances" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserExchangesAndBalances" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "balances" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserExchangesAndBalancesQuery,
  GetUserExchangesAndBalancesQueryVariables
>;
export const DeleteExchangeKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteExchangeKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "exchangeKeyId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteExchangeKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "exchangeKeyId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "exchangeKeyId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteExchangeKeyMutation,
  DeleteExchangeKeyMutationVariables
>;
export const GetUserInfoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserInfo" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "displayName" } },
                { kind: "Field", name: { kind: "Name", value: "realName" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
                { kind: "Field", name: { kind: "Name", value: "ref" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetUserByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUserById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "realName" } },
                { kind: "Field", name: { kind: "Name", value: "displayName" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const UpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>;
