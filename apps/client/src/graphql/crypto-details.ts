import { gql } from "./codegen"; // Assuming you're using codegen for GraphQL imports

// Define the GraphQL query for fetching the Kline data
export const GET_UI_KLINES = gql(`
  query GetUiKlines($input: GetUiKlineDto!) {
    getUiKlines(input: $input) {
      code
      message
      data {
        openTime
        openPrice
        highPrice
        lowPrice
        closePrice
        volume
        closeTime
        quoteAssetVolume
        numberOfTrades
        takerBuyBaseAssetVolume
        takerBuyQuoteAssetVolume
      }
    }
  }
`);

export const GET_COIN_DETAILS = gql(`
  query GetCoinDetails($symbol: String!) {
    getCoinDetails(symbol: $symbol) {
      code
      message
      data {
        __typename
        symbol
        price
        volume24h
        priceChange24h
        priceChangePercentage24h
        low24h
        high24h
        ath
        circulationSupply
        totalSupply
        maxSupply
        name                
        quoteVolume24h
      }
    }
  }
`);



export type GetUiKlinesPayload = {
  symbol: string;
  interval: string;
  limit: number;
  startTime: string;
  endTime: string;
};
