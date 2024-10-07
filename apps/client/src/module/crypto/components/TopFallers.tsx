import { FormContainer } from "@src/module/common/form-container";
import { useTranslations } from "next-intl";
import { RenderTableContent, RenderTableHeader } from "./RenderTable";

export const TopFallers = () => {
  const t = useTranslations();

  const tableHeaders = [
    t("crypto.exchanges.topFallers.symbol"),
    t("crypto.exchanges.topFallers.priceChange24h"),
    t("crypto.exchanges.topFallers.priceChangePercentage24h"),
  ];

  /* temporary */
  const tableRows = [
    {
      symbol: "BTC",
      marketCap: "105.32",
      volume24h: "-3.04",
    },
    {
      symbol: "ETH",
      marketCap: "45.49",
      volume24h: "-1.27",
    },
    {
      symbol: "USDT",
      marketCap: "57.37",
      volume24h: "-0.01",
    },
    {
      symbol: "BNB",
      marketCap: "22.28",
      volume24h: "-3.48",
    },

    {
      symbol: "SOL",
      marketCap: "76.49",
      volume24h: "-0.34",
    },
  ];

  const tableRowsKeys = Object.keys(
    tableRows[0],
  ) as (keyof (typeof tableRows)[0])[];

  return (
    <FormContainer
      title={t("crypto.exchanges.topFallers.title")}
      description={t("crypto.exchanges.topFallers.subtitle")}
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
