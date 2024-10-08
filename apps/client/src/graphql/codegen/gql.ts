/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
  "\n  mutation Login($email: String!, $password: String!, $isStaySignedIn: Boolean) {\n    login(email: $email, password: $password, isStaySignedIn: $isStaySignedIn) {\n      code\n      message\n      data\n    }\n  }\n":
    types.LoginDocument,
  "\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n    }\n  }\n":
    types.RegisterDocument,
  "\n  mutation GenerateAccessToken($id: String!) {\n    generateAccessToken(id: $id)\n  }\n":
    types.GenerateAccessTokenDocument,
  "\n  mutation VerifyEmail($email: String!, $token: String!) {\n    verifyEmail(email: $email, token: $token) {\n      code\n      message\n    }\n  }\n":
    types.VerifyEmailDocument,
  "\n  mutation ForgotPassword($email: String!){\n    forgotPassword(email: $email) {\n      code\n      message\n      data\n    }\n  }\n":
    types.ForgotPasswordDocument,
  "\n  mutation ResetPassword($input: ResetPasswordInput!){\n    resetPassword(input: $input) {\n      code\n      message\n      data\n    }\n  }\n":
    types.ResetPasswordDocument,
  "\n  mutation ChangePassword($input: UpdatePasswordInput!) {\n    changePassword(input: $input) {\n      code\n      message\n    }\n  }\n":
    types.ChangePasswordDocument,
  "\n  mutation RevokeTokens {\n    revokeTokens\n  }\n":
    types.RevokeTokensDocument,
  "\n  query GetUiKlines($input: GetUiKlineDto!) {\n    getUiKlines(input: $input) {\n      code\n      message\n      data {\n        openTime\n        openPrice\n        highPrice\n        lowPrice\n        closePrice\n        volume\n        closeTime\n        quoteAssetVolume\n        numberOfTrades\n        takerBuyBaseAssetVolume\n        takerBuyQuoteAssetVolume\n      }\n    }\n  }\n":
    types.GetUiKlinesDocument,
  "\n  query GetCoinDetails($symbol: String!) {\n    getCoinDetails(symbol: $symbol) {\n      code\n      message\n      data {\n        __typename\n        symbol\n        price\n        volume24h\n        priceChange24h\n        priceChangePercentage24h\n        low24h\n        high24h\n        ath\n        circulationSupply\n        totalSupply\n        maxSupply\n        name                \n        quoteVolume24h\n      }\n    }\n  }\n":
    types.GetCoinDetailsDocument,
  "\n    query GetMarketOverview {\n    getMarketOverview {\n        code\n        message\n        data {\n            topMarketCap {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topClimbers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topFallers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            top20Cryptocurrencies {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n        }\n    }\n}\n":
    types.GetMarketOverviewDocument,
  "\n    subscription UpdateMarketOverview {\n    updateMarketOverview {\n        code\n        message\n        data {\n            topMarketCap {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topClimbers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topFallers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            top20Cryptocurrencies {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n        }\n    }\n}\n":
    types.UpdateMarketOverviewDocument,
  "\n  query GetExchangeKeyById($id: String!) {\n    getExchangeKeyById(id: $id) {\n      code\n      message\n      data {\n        displayName\n        accessKey\n        secretKey\n        exchangeName\n      }\n    }\n  }\n":
    types.GetExchangeKeyByIdDocument,
  "\n    mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {\n        updateExchangeKey(input: $input) {\n            code\n            message\n        }\n    }\n":
    types.UpdateExchangeKeyDocument,
  "\n    mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {\n        createExchangeKey(input: $input) {\n            code\n            message\n        }\n    }\n":
    types.CreateExchangeKeyDocument,
  "\n  query GetUserExchangesAndBalances {\n    getUserExchangesAndBalances {\n      code\n      message\n      data {\n        id\n        name\n        displayName\n        balances\n      }\n    }\n  }\n":
    types.GetUserExchangesAndBalancesDocument,
  "\n  mutation DeleteExchangeKey($exchangeKeyId: String!) {\n    deleteExchangeKey(exchangeKeyId: $exchangeKeyId) {\n      code\n      message\n    }\n  }\n":
    types.DeleteExchangeKeyDocument,
  "\n  query GetUserInfo {\n    getUserInfo {\n      id\n      displayName\n      realName\n      email\n      mobile\n      ref\n    }\n  }\n":
    types.GetUserInfoDocument,
  "\n  query getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      email\n      realName\n      displayName\n      mobile\n    }\n  }\n":
    types.GetUserByIdDocument,
  "\n  mutation updateUser($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n":
    types.UpdateUserDocument,
  "\n  mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n":
    types.UpdateUserProfileDocument,
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
  source: "\n  mutation Login($email: String!, $password: String!, $isStaySignedIn: Boolean) {\n    login(email: $email, password: $password, isStaySignedIn: $isStaySignedIn) {\n      code\n      message\n      data\n    }\n  }\n",
): (typeof documents)["\n  mutation Login($email: String!, $password: String!, $isStaySignedIn: Boolean) {\n    login(email: $email, password: $password, isStaySignedIn: $isStaySignedIn) {\n      code\n      message\n      data\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n    }\n  }\n",
): (typeof documents)["\n  mutation Register($input: CreateUserInput!) {\n    register(input: $input) {\n      code\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation GenerateAccessToken($id: String!) {\n    generateAccessToken(id: $id)\n  }\n",
): (typeof documents)["\n  mutation GenerateAccessToken($id: String!) {\n    generateAccessToken(id: $id)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation VerifyEmail($email: String!, $token: String!) {\n    verifyEmail(email: $email, token: $token) {\n      code\n      message\n    }\n  }\n",
): (typeof documents)["\n  mutation VerifyEmail($email: String!, $token: String!) {\n    verifyEmail(email: $email, token: $token) {\n      code\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation ForgotPassword($email: String!){\n    forgotPassword(email: $email) {\n      code\n      message\n      data\n    }\n  }\n",
): (typeof documents)["\n  mutation ForgotPassword($email: String!){\n    forgotPassword(email: $email) {\n      code\n      message\n      data\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation ResetPassword($input: ResetPasswordInput!){\n    resetPassword(input: $input) {\n      code\n      message\n      data\n    }\n  }\n",
): (typeof documents)["\n  mutation ResetPassword($input: ResetPasswordInput!){\n    resetPassword(input: $input) {\n      code\n      message\n      data\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation ChangePassword($input: UpdatePasswordInput!) {\n    changePassword(input: $input) {\n      code\n      message\n    }\n  }\n",
): (typeof documents)["\n  mutation ChangePassword($input: UpdatePasswordInput!) {\n    changePassword(input: $input) {\n      code\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation RevokeTokens {\n    revokeTokens\n  }\n",
): (typeof documents)["\n  mutation RevokeTokens {\n    revokeTokens\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetUiKlines($input: GetUiKlineDto!) {\n    getUiKlines(input: $input) {\n      code\n      message\n      data {\n        openTime\n        openPrice\n        highPrice\n        lowPrice\n        closePrice\n        volume\n        closeTime\n        quoteAssetVolume\n        numberOfTrades\n        takerBuyBaseAssetVolume\n        takerBuyQuoteAssetVolume\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUiKlines($input: GetUiKlineDto!) {\n    getUiKlines(input: $input) {\n      code\n      message\n      data {\n        openTime\n        openPrice\n        highPrice\n        lowPrice\n        closePrice\n        volume\n        closeTime\n        quoteAssetVolume\n        numberOfTrades\n        takerBuyBaseAssetVolume\n        takerBuyQuoteAssetVolume\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetCoinDetails($symbol: String!) {\n    getCoinDetails(symbol: $symbol) {\n      code\n      message\n      data {\n        __typename\n        symbol\n        price\n        volume24h\n        priceChange24h\n        priceChangePercentage24h\n        low24h\n        high24h\n        ath\n        circulationSupply\n        totalSupply\n        maxSupply\n        name                \n        quoteVolume24h\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetCoinDetails($symbol: String!) {\n    getCoinDetails(symbol: $symbol) {\n      code\n      message\n      data {\n        __typename\n        symbol\n        price\n        volume24h\n        priceChange24h\n        priceChangePercentage24h\n        low24h\n        high24h\n        ath\n        circulationSupply\n        totalSupply\n        maxSupply\n        name                \n        quoteVolume24h\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query GetMarketOverview {\n    getMarketOverview {\n        code\n        message\n        data {\n            topMarketCap {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topClimbers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topFallers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            top20Cryptocurrencies {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n        }\n    }\n}\n",
): (typeof documents)["\n    query GetMarketOverview {\n    getMarketOverview {\n        code\n        message\n        data {\n            topMarketCap {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topClimbers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topFallers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            top20Cryptocurrencies {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    subscription UpdateMarketOverview {\n    updateMarketOverview {\n        code\n        message\n        data {\n            topMarketCap {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topClimbers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topFallers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            top20Cryptocurrencies {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n        }\n    }\n}\n",
): (typeof documents)["\n    subscription UpdateMarketOverview {\n    updateMarketOverview {\n        code\n        message\n        data {\n            topMarketCap {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topClimbers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            topFallers {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n            top20Cryptocurrencies {\n                symbol\n                name\n                marketCap\n                price\n                volume24h\n                priceChange24h\n                priceChangePercentage24h\n                priceChangePercentage7d\n            }\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetExchangeKeyById($id: String!) {\n    getExchangeKeyById(id: $id) {\n      code\n      message\n      data {\n        displayName\n        accessKey\n        secretKey\n        exchangeName\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetExchangeKeyById($id: String!) {\n    getExchangeKeyById(id: $id) {\n      code\n      message\n      data {\n        displayName\n        accessKey\n        secretKey\n        exchangeName\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {\n        updateExchangeKey(input: $input) {\n            code\n            message\n        }\n    }\n",
): (typeof documents)["\n    mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {\n        updateExchangeKey(input: $input) {\n            code\n            message\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {\n        createExchangeKey(input: $input) {\n            code\n            message\n        }\n    }\n",
): (typeof documents)["\n    mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {\n        createExchangeKey(input: $input) {\n            code\n            message\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetUserExchangesAndBalances {\n    getUserExchangesAndBalances {\n      code\n      message\n      data {\n        id\n        name\n        displayName\n        balances\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetUserExchangesAndBalances {\n    getUserExchangesAndBalances {\n      code\n      message\n      data {\n        id\n        name\n        displayName\n        balances\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation DeleteExchangeKey($exchangeKeyId: String!) {\n    deleteExchangeKey(exchangeKeyId: $exchangeKeyId) {\n      code\n      message\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteExchangeKey($exchangeKeyId: String!) {\n    deleteExchangeKey(exchangeKeyId: $exchangeKeyId) {\n      code\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetUserInfo {\n    getUserInfo {\n      id\n      displayName\n      realName\n      email\n      mobile\n      ref\n    }\n  }\n",
): (typeof documents)["\n  query GetUserInfo {\n    getUserInfo {\n      id\n      displayName\n      realName\n      email\n      mobile\n      ref\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      email\n      realName\n      displayName\n      mobile\n    }\n  }\n",
): (typeof documents)["\n  query getUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      email\n      realName\n      displayName\n      mobile\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation updateUser($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n",
): (typeof documents)["\n  mutation updateUser($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n",
): (typeof documents)["\n  mutation UpdateUserProfile($id: String!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
