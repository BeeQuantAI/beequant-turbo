import { exchangeRoutes } from "@src/module/exchange";
import { ExchangePage } from "@src/module/exchange/exchange-page";
import React from "react";

export const metadata = exchangeRoutes.exchangePage.Metadata;
export default function Page() {
  return (
    <>
      <ExchangePage />
    </>
  );
}
