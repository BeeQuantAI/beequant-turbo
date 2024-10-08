"use client";

import { useEffect, useState } from "react";
import { TopTwentyCurrencyTable } from "./top-twenty-currency-table";
import { getMarketOverview } from "./crypto-service";
import { MarketOverview } from "@src/graphql";
import { Skeleton } from "./layout/skeleton";
import { TopThreeLists } from "./crypto-economy";
import { useSubscription } from "@apollo/client";
import { GET_MARKET_OVERVIEW_SUB } from "@src/graphql/crypto";

export function ExchangesPage() {
  const [exchanges, setExchanges] = useState<MarketOverview>();
  const [loading, setLoading] = useState(true);
  const { data } = useSubscription(GET_MARKET_OVERVIEW_SUB);
  async function fetchMarketOverview() {
    setLoading(true);
    const res = await getMarketOverview();
    if (res.getMarketOverview.code === 200) {
      const data = res.getMarketOverview.data!;
      setExchanges(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (
      data?.updateMarketOverview.code === 200 &&
      data.updateMarketOverview.data
    ) {
      setExchanges(data.updateMarketOverview.data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    fetchMarketOverview();
  }, []);

  return (
    <>
      {loading || !exchanges ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col gap-8">
          <TopThreeLists
            topClimbers={exchanges.topClimbers}
            topFallers={exchanges.topFallers}
            topMarketCap={exchanges.topMarketCap}
          />
          <TopTwentyCurrencyTable
            top20Cyrptocurrencies={exchanges.top20Cryptocurrencies}
            refreshHandler={fetchMarketOverview}
          />
        </div>
      )}
    </>
  );
}
