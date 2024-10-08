"use client";
import React, { useEffect, useState } from "react";
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
import { useQuery } from "@apollo/client";
import { errorNotify } from "../common/toast";
import { Toaster } from "react-hot-toast";

export function ExchangePage() {
  const [isUnavaliable, setIsUnavaliable] = useState(false);
  const { loading, error, data } = useQuery(GET_USER_EXCHANGES_AND_BALANCES, {
    fetchPolicy: "network-only",
  });
  const router = useRouter();
  const t = useTranslations();

  useEffect(() => {
    const code = data?.getUserExchangesAndBalances?.code;
    if (code !== undefined && code !== 200) {
      switch (code) {
        case 10020:
          errorNotify(t("ExchangeManagement.errorCode.10020"));
          setIsUnavaliable(true);
          break;
        case 10021:
          errorNotify(t("ExchangeManagement.errorCode.10021"));
          setIsUnavaliable(true);
          break;
        case 10022:
          errorNotify(t("ExchangeManagement.errorCode.10022"));
          setIsUnavaliable(true);
          break;
        case 10034:
          errorNotify(t("ExchangeManagement.errorCode.10034"));
          break;
        default:
          errorNotify(t("ExchangeManagement.errorCode.default"));
          setIsUnavaliable(true);
          break;
      }
    }
  }, [error, data, t]);

  if (loading) return <Loading />;

  const exchanges = data?.getUserExchangesAndBalances?.data || [];

  return (
    <>
      <Toaster />
      <div className="mb-5 flex flex-1 justify-between">
        <h1 className="text-lg">{t("ExchangeManagement.heading")}</h1>
        <Button
          variant="actionPrimary"
          onClick={() => router.push(exchangeRoutes.createExchange.Path)}
        >
          {t("ExchangeManagement.createExchangeButton")}
        </Button>
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
