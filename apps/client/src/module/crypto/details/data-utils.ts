import { KlineData } from './types';
import { CoinDetails } from "@src/graphql";


/**
 * This function extracts the date from the given data and returns an array of the date that used for plot x-axis in candlestick chart
 * @param data the data that falls exactly with format of KlineData
 * @param interval the interval of the data, etc. 1m, 5m, 15m, 30m, 1h, 1d, 1w, 1M, 6M, 1Y, 5Y
 * @returns an array of the date that used for plot x-axis in candlestick chart
 */
export function extractXLabels(data: KlineData[], interval: string): string[] {
  return data.map((item: KlineData) => {
    const date = new Date(item.openTime);
    
    // Format the label based on the interval
    switch (interval) {
      case "1m": // For minute intervals, show the time (HH:mm)
      return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
      case "5m":
      case "15m":
      case "30m":
      case "1h": // For hourly intervals, show date and time (MM-DD HH:mm)
      case "2h":
        return `${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
      case "6h":
        return `${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:00`;
      case "1d": // For daily intervals, show the date (MM-DD)
        return `${date.getFullYear()} ${date.getMonth() + 1}-${date.getDate()}`;
      case "1M":
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;
      default: // Default case for monthly, yearly intervals
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }
  });
}


/**
 * This function extracts the price data from the given data and returns a 2D array of the data that used for plot y-axis in candlestick chart
 * @param data the data that falls exactly with format of KlineData
 * @returns a 2D array of the data that used for plot y-axis in candlestick chart
 */
export function extractYLabels(data: KlineData[]): number[][] {
  return data.map((item: KlineData) => [
    parseFloat(item.openPrice),  // Open price
    parseFloat(item.closePrice), // Close price
    parseFloat(item.lowPrice),   // Low price
    parseFloat(item.highPrice),  // High price
  ]);
}


/**
 * This function extracts the close prices from the given KlineData and returns a 1D array of the data that can be used for the y-axis in a line chart.
 * @param data - The data array that matches the KlineData format
 * @returns A 1D array of the close prices to be used for the y-axis in a line chart
 */
export function extractYLabelsForLineChart(data: KlineData[]): number[] {
  return data.map((item: KlineData) => parseFloat(item.closePrice)); // Extract the close price for line chart
}

/**
 * This utility function formats the given number with K or M suffix if the number is greater than 1,000
 * @param value the number to be formatted
 * @returns the formatted number with K or M suffix if the number is greater than 1,000
 */
export function formatNumber(value: number | string): string {
  // change value to float if it's a string
  value = typeof value === 'string' ? parseFloat(value) : value;
  if (value >= 1_000_000_000_000) {
    return (value / 1_000_000_000_000).toFixed(1) + 'T';  // Trillions
  } else if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1) + 'B';  // Billions
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';  // Millions
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'K';  // Thousands
  } else {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
}


/**
 * This utility function calculates the moving average of the given data, moving average 
 * is the average of the data points in a given range. Moving average is used to smooth out
 * the data and identify the trend. It is a very popular tool in technical analysis.
 * @param dayCount the number of days to calculate the moving average, etc. 5, 10, 20, 30
 * @param data the data that falls exactly with format of KlineData
 * @returns the moving average of the given data with given dayCount
 */
export function calculateMA(dayCount: number, data: KlineData[]): (number | string)[] {
    const dataY: number[][] = data.map((item: KlineData) => [
      parseFloat(item.openPrice), // Open price
      parseFloat(item.closePrice), // Close price
      parseFloat(item.lowPrice), // Low price
      parseFloat(item.highPrice), // High price
    ]);
    const result: (number | string)[] = [];
    for (let i = 0, len = dataY.length; i < len; i++) {
      if (i < dayCount) {
        result.push("-"); // Not enough data points for the moving average
        continue;
      }
      let sum = 0;
      for (let j = 0; j < dayCount; j++) {
        sum += dataY[i - j][1]; // Access the close price in the dataY array
      }
      result.push(sum / dayCount); // Calculate the moving average
    }
    return result;
  }

  export function calculateCryptoRating(coinDetails: CoinDetails): number {
    const {
      price,
      volume24h,
      priceChangePercentage24h,
      low24h,
      high24h,
      ath,
    } = coinDetails;
  
    // Normalize the price change percentage (can be between 0-100)
    const priceChangeScore = Math.min(Math.max(priceChangePercentage24h, 0), 100);
  
    // Normalize proximity to ATH (if close to ATH, the score is higher)
    const athProximityScore = Math.min((price / ath) * 100, 100);
  
    // Normalize the 24h price range (a higher price closer to the 24h high gives a higher score)
    const rangeScore = Math.min(((price - low24h) / (high24h - low24h)) * 100, 100);
  
    // Normalize the volume (higher volume increases the score, we can cap at a certain value)
    const maxVolume = 1_000_000; // Cap volume influence at 1 million for normalization
    const volumeScore = Math.min((volume24h / maxVolume) * 100, 100);
  
    // Simple weighting of different factors (you can adjust the weights)
    const rating = (priceChangeScore * 0.3) +  // 30% weight on price change
                   (athProximityScore * 0.3) +  // 30% weight on proximity to ATH
                   (rangeScore * 0.2) +         // 20% weight on 24h price range
                   (volumeScore * 0.2);         // 20% weight on 24h volume
  
    return Math.round(rating); // Return a rating between 0 and 100
  }
  