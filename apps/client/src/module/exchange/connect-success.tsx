"use client";
import { exchangeRoutes } from "@src/module/exchange";
import { ProgressBar } from "@src/module/exchange/components/progress-bar";
import Image from "next/image";
import React from "react";
import { Button } from "@src/module/common";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function ConnectSuccess() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="box-border flex h-full flex-col justify-center">
      <div className="h-full">
        <h1 className="mb-5 text-[20px]">
          {t("ExchangePage.formContainer.heading")}
        </h1>
        <div className="dark:bg-primary-900 bg-primary-50 mb-5 flex flex-col items-center rounded p-5 shadow-lg">
          <ProgressBar progress={3} />
          <div className="mb-5 flex max-w-[520px] justify-center self-center">
            <Image
              src="/img/success.png"
              priority
              alt="success pic"
              width={400}
              height={380.5}
            />
          </div>
          <div className="border-accent-400 dark:text-primary-100 mb-7 flex w-full max-w-[520px] flex-col border-l-4 px-3 text-xl">
            <span className="text-accent-400 font-bold">
              {t("ExchangePage.successedPage.title")}
            </span>
            <span>{t("ExchangePage.successedPage.subtitle")}</span>
          </div>
          <div className="mb-6 w-full max-w-[520px]">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push(exchangeRoutes.exchangePage.Path)}
            >
              {t("ExchangePage.successedPage.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
