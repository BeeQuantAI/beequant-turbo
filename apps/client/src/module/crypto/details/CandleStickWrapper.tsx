"use client";
import { useState, useEffect } from "react";
import { KlineData } from "./types";
import { CandleStick } from "./CandleStickChart";
import { ChartLabels } from "./ChartLabels";
import { useParams, useSearchParams } from "next/navigation";
import { CreateBot, MarketInfo, TechnicalAnalysis } from "./CoinAnalysis";
import { useLazyQuery } from "@apollo/client";
import {
  GET_UI_KLINES,
  GET_COIN_DETAILS,
  GetUiKlinesPayload,
} from "@src/graphql/crypto-details";
import { LoadingChart } from "./LoadingChart";
import { CoinOverview } from "./CoinOverview";
import { CoinDetails } from "@src/graphql";
import { calculateCryptoRating } from "./data-utils";

export function CandleStickWrapper() {
  const [data, setData] = useState<KlineData[]>([]);
  const params = useParams();
  const searchParams = useSearchParams();
  const [coinData, setCoinData] = useState<CoinDetails | null>(null); // Can be null initially
  const [rating, setRating] = useState<number | null>(null);

  const [
    getUiKlines,
    { data: responseData, error: klineError, loading: klineLoading },
  ] = useLazyQuery(GET_UI_KLINES);
  const [
    getCoinDetails,
    { data: coinResponseData, error: coinError, loading: coinLoading },
  ] = useLazyQuery(GET_COIN_DETAILS);

  useEffect(() => {
    const symbol = params.symbol as string;
    const interval = searchParams.get("interval");
    const startTime = searchParams.get("startTime");
    const endTime = searchParams.get("endTime");

    if (interval && startTime && endTime) {
      const payload: GetUiKlinesPayload = {
        symbol: symbol,
        interval: interval,
        limit: 1000,
        startTime: startTime,
        endTime: endTime,
      };
      getUiKlines({
        variables: { input: payload },
        fetchPolicy: "network-only",
      });
      getCoinDetails({
        variables: { symbol: symbol.replace("USDT", "") },
        fetchPolicy: "network-only",
      });
    }
  }, [getCoinDetails, getUiKlines, params, searchParams]);

  useEffect(() => {
    if (responseData?.getUiKlines?.code === 200) {
      setData(responseData.getUiKlines.data as KlineData[]);
    } else if (klineError) {
      alert("Error fetching kline data: " + klineError.message);
    }

    // Ensure we only set coinData if it's available and valid
    const fetchedCoinDetails = coinResponseData?.getCoinDetails?.data;
    if (fetchedCoinDetails && coinResponseData?.getCoinDetails?.code === 200) {
      setCoinData(fetchedCoinDetails);
      setRating(calculateCryptoRating(fetchedCoinDetails));
    } else if (coinError) {
      alert("Error fetching coin data: " + coinError.message);
    }
  }, [responseData, klineError, coinResponseData, coinError]);

  if (klineLoading || coinLoading) return <LoadingChart />;

  // Check if coinData is null before rendering dependent components
  if (!coinData)
    return <div>No data available for the selected cryptocurrency.</div>;

  return (
    <main className="mt-4 flex w-full flex-col items-center justify-center">
      <CoinOverview coinOverviewData={coinData} />
      <section className="mt-4 flex w-full flex-col items-center justify-center xl:flex-row xl:items-start xl:justify-start">
        <div className="bg-primary-50 dark:bg-primary-900 mb-4 flex h-full w-full flex-col items-center justify-center rounded-md shadow-lg xl:mb-0 xl:w-4/5">
          <CandleStick data={data} />
          <ChartLabels />
        </div>
        <div className="ml-0 flex h-full w-full flex-col xl:ml-4 xl:w-1/5">
          <MarketInfo
            allTimeHigh={coinData.ath} // Safe to access because coinData exists
            circulatingSupply={coinData.circulationSupply}
            totalSupply={coinData.totalSupply}
            maxSupply={coinData.maxSupply ?? null} // Use null if maxSupply is undefined
          />
          <TechnicalAnalysis symbol={coinData.symbol} rating={rating || 55}/>
          <CreateBot />
        </div>
      </section>
    </main>
  );
}
