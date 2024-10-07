"use client";

import { useEffect, useState } from "react";
import { TopTwentyCurrencyTable } from "./top-twenty-currency-table";
import { getMarketOverview } from "./crypto-service";
import { MarketOverview } from "@src/graphql";
import { Skeleton } from "./layout/skeleton";
import { TopThreeLists } from "./crypto-economy";

export function ExchangesPage() {
  const [data, setData] = useState<MarketOverview>();
  const [loading, setLoading] = useState(true);
  async function fetchMarketOverview() {
    setLoading(true);
    const res = await getMarketOverview();
    if (res.getMarketOverview.code === 200) {
      const data = res.getMarketOverview.data!;
      setData(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMarketOverview();
  }, []);

  return (
    <>
      {loading || !data ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col gap-8">
          <TopThreeLists
            topClimbers={data.topClimbers}
            topFallers={data.topFallers}
            topMarketCap={data.topMarketCap}
          />
          <TopTwentyCurrencyTable
            top20Cyrptocurrencies={data.top20Cryptocurrencies}
            refreshHandler={fetchMarketOverview}
          />
        </div>
      )}
    </>
  );
}
