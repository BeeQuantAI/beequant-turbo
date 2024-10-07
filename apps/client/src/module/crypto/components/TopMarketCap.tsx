import { FormContainer } from "@src/module/common/form-container";
import { useTranslations } from "next-intl";
import { SlRefresh } from "react-icons/sl";
import { RenderTableContent, RenderTableHeader } from "./RenderTable";

export const TopMarketCap = () => {
  const t = useTranslations();

  const tableHeaders = [
    t("crypto.exchanges.topMarketCap.symbol"),
    t("crypto.exchanges.topMarketCap.marketCap"),
    t("crypto.exchanges.topMarketCap.volume24h"),
  ];

  /* temporary */
  const tableRows = [
    {
      symbol: "BTC",
      marketCap: "1260388967643.87",
      volume24h: "28763364665.04",
    },
    {
      symbol: "ETH",
      marketCap: "315658580573.43",
      volume24h: "14850685220.43",
    },
    {
      symbol: "USDT",
      marketCap: "119628240534.09",
      volume24h: "56197783196.77",
    },
    {
      symbol: "BNB",
      marketCap: "84248941450.77",
      volume24h: "1937858409.21",
    },

    {
      symbol: "SOL",
      marketCap: "73560255050.18",
      volume24h: "2309381366.71",
    },
  ];

  const tableRowsKeys = Object.keys(
    tableRows[0],
  ) as (keyof (typeof tableRows)[0])[];

  return (
    <FormContainer
      title={t("crypto.exchanges.topMarketCap.title")}
      description={t("crypto.exchanges.topMarketCap.subtitle")}
      icon="refresh"
    >
      <section className="w-full">
        <table className="mt-8 flex w-full table-auto flex-col gap-4 text-nowrap">
          <RenderTableHeader headers={tableHeaders} />

          <RenderTableContent data={tableRows} keys={tableRowsKeys} />
        </table>
      </section>
    </FormContainer>
  );
};
{
  /* <div className="dark:bg-primary-900 bg-primary-50 shadow-settingPage dark:shadow-settingPage flex flex-col rounded-lg p-5">
      <section className="flex items-center justify-between gap-6">
        <section className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">Top Market Cap</h2>
          <p className="text-md text-gray-400">
            Ratings by Market Capitalization
          </p>
        </section>
        <span className="pr-6">
          <SlRefresh />
        </span>
      </section>
      
      <section className="flex">
        <menu>
          <li></li>
        </menu>
      </section>
    </div> */
}
