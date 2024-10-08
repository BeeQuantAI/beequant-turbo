import { RatingGaugeChart } from "./RatingGaugeChart";
import { useTranslations } from "next-intl";
import TargetIcon from "mdi-react/TargetIcon";
import { formatNumber } from "./data-utils";

export function MarketInfo({
  allTimeHigh,
  circulatingSupply,
  totalSupply,
  maxSupply,
}: {
  allTimeHigh: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number | null;
}) {
  const t = useTranslations();
  return (
    <PanelWrapper>
      <PanelTitle title={t("CryptoDetail.marketInfo")} />
      <div className="ml-2 mt-2 grid grid-cols-2 gap-x-8 gap-y-4">
        <MarketLabel
          // round up to 2 decimal places
          value={formatNumber(allTimeHigh)}
          description={t("CryptoDetail.allTimeHigh")}
        />
        <MarketLabel
          value={formatNumber(circulatingSupply)}
          description={t("CryptoDetail.circulatingSupply")}
        />
        <MarketLabel
          value={formatNumber(totalSupply)}
          description={t("CryptoDetail.totalSupply")}
        />
        <MarketLabel
          value={maxSupply ? formatNumber(maxSupply) : "N/A"}
          description={t("CryptoDetail.maxSupply")}
        />
      </div>
    </PanelWrapper>
  );
}

export function TechnicalAnalysis({
  symbol,
  rating,
}: {
  symbol: string;
  rating: number;
}) {
  const t = useTranslations();
  return (
    <PanelWrapper>
      <PanelTitle title={t("CryptoDetail.technicalAnalysis")} />
      <h2 className="font-sm -mt-2 ml-2 text-gray-400">{symbol}</h2>
      <RatingGaugeChart rating={rating} />
      <div className="text-md -mt-14 flex w-full justify-around font-sans leading-snug">
        <div className="flex flex-col items-center">
          <span>{t("CryptoDetail.strongSell")}</span>
          <span className="font-bold">0</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{t("CryptoDetail.strongBuy")}</span>
          <span className="font-bold">100</span>
        </div>
      </div>
    </PanelWrapper>
  );
}

export function CreateBot() {
  const t = useTranslations();
  return (
    <button
      className="relative mb-4 mt-4 h-[108px] overflow-hidden rounded-md bg-[#b8e986] p-[15px] text-left"
      onClick={() => {
        alert("this feature is not available yet");
      }}
    >
      <TargetIcon className="absolute right-[-23px] top-[calc(50%-40px)] h-[80px] w-[80px] text-white opacity-30" />
      <p className="mb-1 mt-0 text-[24px] font-medium leading-[1.25] text-white md:text-[20px]">
        {t("CryptoDetail.createBot")}
      </p>
      <p className="m-0 max-w-full text-[16px] leading-[1.25] text-white sm:text-[14px] md:max-w-[calc(100%-60px)]">
        {t("CryptoDetail.createBotDescription")}
      </p>
    </button>
  );
}

function PanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 relative mb-4 flex w-full flex-col items-start justify-center rounded-md p-4 shadow-lg">
      {children}
    </div>
  );
}

function PanelTitle({ title }: { title: string }) {
  return (
    <h1 className="text-md w-full p-2 text-left font-bold uppercase antialiased">
      {title}
    </h1>
  );
}

function MarketLabel({
  value,
  description,
}: {
  value: number | string;
  description: string;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="text-primary-300 text-sm">{description}</h2>
      <h1 className="text-lg">{value}</h1>
    </div>
  );
}
