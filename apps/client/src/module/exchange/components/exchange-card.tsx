"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type ExchangeCardType = {
  id: string;
  name: string;
  displayName: string;
  balance: number;
  isUnavaliable: boolean;
};
export default function ExchangeCard({
  id,
  displayName,
  name,
  balance,
  isUnavaliable,
}: ExchangeCardType) {
  const t = useTranslations();
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`exchange/${id}/update-exchange`);
  };
  return (
    <div
      className="bg-primary-50 dark:bg-primary-900 flex cursor-pointer flex-col gap-3 rounded-lg px-[30px] pb-5 pt-5 shadow-[0_10px_30px_1px_rgba(0,0,0,0.06)]"
      onClick={handleOnClick}
    >
      <h2 className="text-lg font-bold">
        {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
      </h2>
      <div>
        <h3 className="text-primary-300 text-sm">
          {t("ExchangeManagement.exchangeCard.exchange")}
        </h3>
        <p className="text-[16px]">
          {t(`ExchangeManagement.exchangeCard.names.${name}`)}
        </p>
      </div>
      <div>
        <h3 className="text-primary-300">
          {t("ExchangeManagement.exchangeCard.balance")}
        </h3>
        {isUnavaliable ? (
          <p className="text-2xl text-red-400">
            {t("ExchangeManagement.exchangeCard.unavaliable")}
          </p>
        ) : (
          <p className="text-2xl text-green-300">{balance.toFixed(2)} USD</p>
        )}
      </div>
    </div>
  );
}
