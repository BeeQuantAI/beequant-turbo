import { gql } from "./codegen/";

export const GET_EXCHANGE_KEY_BY_ID = gql(`
  query GetExchangeKeyById($id: String!) {
    getExchangeKeyById(id: $id) {
      code
      message
      data {
        displayName
        accessKey
        secretKey
        exchangeName
      }
    }
  }
`);

export const UPDATE_EXCHANGE_KEY = gql(`
    mutation UpdateExchangeKey($input: UpdateExchangeKeyInput!) {
        updateExchangeKey(input: $input) {
            code
            message
        }
    }
`);

export const CREATE_EXCHANGE_KEY = gql(`
    mutation CreateExchangeKey($input: CreateExchangeKeyInput!) {
        createExchangeKey(input: $input) {
            code
            message
        }
    }
`);

export const GET_USER_EXCHANGES_AND_BALANCES = gql(`
  query GetUserExchangesAndBalances {
    getUserExchangesAndBalances {
      code
      message
      data {
        id
        name
        displayName
        balances
      }
    }
  }
`);

export const DELETE_EXCHANGE_KEY = gql(`
  mutation DeleteExchangeKey($exchangeKeyId: String!) {
    deleteExchangeKey(exchangeKeyId: $exchangeKeyId) {
      code
      message
    }
  }
`);
