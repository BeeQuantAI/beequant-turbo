import { exchangeRoutes } from "@src/module/exchange";
import { ExchangePage } from "@src/module/exchange/create-exchange";
import React from "react";
export const metadata = exchangeRoutes.createExchange.Metadata;
export default function page() {
  return (
    <>
      <ExchangePage />
    </>
  );
}
