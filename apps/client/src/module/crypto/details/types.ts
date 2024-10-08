export interface KlineData {
  openTime: string; // Kline open time (in milliseconds)
  openPrice: string; // Open price (string to maintain precision)
  highPrice: string; // High price (string to maintain precision)
  lowPrice: string; // Low price (string to maintain precision)
  closePrice: string; // Close price (string to maintain precision)
  volume: string; // Volume (string to maintain precision)
  closeTime: string; // Kline close time (in milliseconds)
  quoteAssetVolume: string; // Quote asset volume (string to maintain precision)
  numberOfTrades: number; // Number of trades
  takerBuyBaseAssetVolume: string; // Taker buy base asset volume (string to maintain precision)
  takerBuyQuoteAssetVolume: string; // Taker buy quote asset volume (string to maintain precision)
}


const single = {
  openTime: "2023-09-29T00:00:00.000Z",
  openPrice: "27021.39000000",
  highPrice: "27244.89000000",
  lowPrice: "26665.16000000",
  closePrice: "26906.96000000",
  volume: "28478.76219000",
  closeTime: "2023-09-29T23:59:59.999Z",
  quoteAssetVolume: "767827314.93190890",
  numberOfTrades: 878610,
  takerBuyBaseAssetVolume: "14409.35554000",
  takerBuyQuoteAssetVolume: "388591243.25915250",
};
