import { gql } from "./codegen/";

export const GET_MARKET_OVERVIEW = gql(`
    query GetMarketOverview {
    getMarketOverview {
        code
        message
        data {
            topMarketCap {
                symbol
                name
                marketCap
                price
                volume24h
                priceChange24h
                priceChangePercentage24h
                priceChangePercentage7d
            }
            topClimbers {
                symbol
                name
                marketCap
                price
                volume24h
                priceChange24h
                priceChangePercentage24h
                priceChangePercentage7d
            }
            topFallers {
                symbol
                name
                marketCap
                price
                volume24h
                priceChange24h
                priceChangePercentage24h
                priceChangePercentage7d
            }
            top20Cryptocurrencies {
                symbol
                name
                marketCap
                price
                volume24h
                priceChange24h
                priceChangePercentage24h
                priceChangePercentage7d
            }
        }
    }
}
`);
