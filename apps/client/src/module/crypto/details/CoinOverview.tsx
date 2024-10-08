import TrendingUpIcon from "mdi-react/TrendingUpIcon";
import TrendingDownIcon from "mdi-react/TrendingDownIcon";
import { useTranslations } from "next-intl";
import { CoinDetails } from "@src/graphql";
import { formatNumber } from "./data-utils";

export function CoinOverview({
  coinOverviewData,
}: {
  coinOverviewData: CoinDetails;
}) {
  const t = useTranslations();
  return (
    <div className="bg-primary-50 dark:bg-primary-900 flex h-1/3 w-full flex-col items-start justify-start rounded-md p-[30px] shadow-lg">
      {/* Display price and symbol separately */}
      <h1 className="mb-2 text-base font-bold uppercase antialiased">
        {t("CryptoDetail.title")}
      </h1>
      <SelectiveTrendingWrapper
        priceChange24h={coinOverviewData.priceChange24h}
        showIcon={true}
      >
        <h1
          className={"font-bol text-primary-700 dark:text-primary-100 text-2xl"}
        >
          {coinOverviewData.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: coinOverviewData.price < 0.01 ? 12 : 2,
          })}
        </h1>
      </SelectiveTrendingWrapper>
      <h2 className="text-primary-300 mb-1 font-[500]">
        {coinOverviewData.symbol}/USDT
      </h2>
      {/* grid container */}
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 md:gap-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-8">
        <CardInfo
          value={"$" + formatNumber(coinOverviewData.volume24h)}
          description={t("CryptoDetail.volume24h")}
        />
        <CardInfo
          value={"$" + formatNumber(coinOverviewData.quoteVolume24h)}
          description={t("CryptoDetail.quoteVolume24h")}
        />
        {/* 3. price change in number */}
        <SelectiveTrendingWrapper
          priceChange24h={coinOverviewData.priceChange24h}
          showIcon={false}
        >
          <CardInfo
            value={coinOverviewData.priceChange24h.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits:
                coinOverviewData.priceChange24h < 0.01 ? 12 : 2,
            })}
            description={t("CryptoDetail.priceChange24h")}
          />
        </SelectiveTrendingWrapper>
        {/* 4. price change in % */}
        <SelectiveTrendingWrapper
          priceChange24h={coinOverviewData.priceChange24h}
          showIcon={false}
        >
          <CardInfo
            value={coinOverviewData.priceChangePercentage24h.toFixed(2) + "%"}
            description={t("CryptoDetail.priceChangePercentage24h")}
          />
        </SelectiveTrendingWrapper>
        <CardInfo
          value={coinOverviewData.low24h.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: coinOverviewData.low24h < 0.01 ? 12 : 2,
          })}
          description={t("CryptoDetail.low24h")}
        />
        <CardInfo
          value={coinOverviewData.high24h.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: coinOverviewData.high24h < 0.01 ? 12 : 2,
          })}
          description={t("CryptoDetail.high24h")}
        />
      </div>
    </div>
  );
}

function SelectiveTrendingWrapper({
  priceChange24h,
  showIcon,
  children,
}: {
  priceChange24h: number;
  showIcon?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`flex flex-row ${priceChange24h > 0 ? "text-[#4ce1b6]" : "text-red-500"}`}
    >
      {children}
      {showIcon &&
        (priceChange24h > 0 ? (
          <TrendingUpIcon className="h-8 w-8" />
        ) : (
          <TrendingDownIcon className="h-8 w-8" />
        ))}
    </span>
  );
}

function CardInfo({
  value,
  description,
}: {
  value: string | number;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start justify-start">
      <h1 className="text-lg font-[500] uppercase antialiased">{value}</h1>
      <div className="text-primary-300 whitespace-normal font-sans text-sm antialiased">
        <h2>
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
