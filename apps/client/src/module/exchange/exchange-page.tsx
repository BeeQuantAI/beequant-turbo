"use client";
import React, { useState } from "react";
import { Button } from "../common";
import ExchangeCard from "./components/exchange-card";
import { exchangeRoutes } from "./route";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Loading } from "../common/loading-animation";
import {
  GET_USER_EXCHANGES_AND_BALANCES,
  UserExchangeType,
} from "@src/graphql";
import { useQuery, gql, useSubscription } from "@apollo/client";

const ACCUMULATED_NUMBER_AND_TIME_SUBSCRIPTION = gql`
  subscription {
    accumulatedNumberAndTime {
      accumulatedNumber
      currentTime
    }
  }
`;

export function ExchangePage() {
  const [isUnavaliable, setIsUnavaliable] = useState(false);
  const { loading, error, data } = useQuery(GET_USER_EXCHANGES_AND_BALANCES, {
    fetchPolicy: "network-only",
  });

  const { data: aNumber, loading: sLoading, error: sError } = useSubscription(ACCUMULATED_NUMBER_AND_TIME_SUBSCRIPTION);
  const router = useRouter();
  const t = useTranslations();

  if (loading) return <Loading />;
  if (error) setIsUnavaliable(true);

  if (sLoading) return <p>Loading...</p>;
  if (sError) return <p>Subscription Error: {JSON.stringify(sError)}</p>;
  console.log("aNumber", aNumber)

  const exchanges = data?.getUserExchangesAndBalances?.data || [];
  const { accumulatedNumber, currentTime } = aNumber?.accumulatedNumberAndTime || { accumulatedNumber: 0, currentTime: "" };

  return (
    <>
      <div className="mb-5 flex flex-1 justify-between">
        <h1 className="text-lg">{t("ExchangeManagement.heading")}</h1>
        <Button
          variant="actionPrimary"
          onClick={() => router.push(exchangeRoutes.createExchange.Path)}
        >
          {t("ExchangeManagement.createExchangeButton")}
        </Button>
      </div>
      <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Accumulated Number</h2>
          <p className="text-2xl">{accumulatedNumber}</p> {/* Show the accumulated number */}
          <h2 className="text-lg font-semibold mt-4">Current Server Time</h2>
          <p className="text-2xl">{new Date(currentTime).toLocaleTimeString()}</p> {/* Show the current server time */}
        </div>
      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {exchanges.map((exchange: UserExchangeType) => (
          <ExchangeCard
            key={exchange.id}
            id={exchange.id}
            displayName={exchange.displayName}
            name={exchange.name}
            balance={exchange.balances}
            isUnavaliable={isUnavaliable}
          />
        ))}
      </div>
    </>
  );
}
