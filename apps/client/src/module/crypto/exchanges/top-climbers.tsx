import { FormContainer } from "@src/module/common/form-container";
import { useTranslations } from "next-intl";

import { CoinOverview } from "@src/graphql";
import { RenderTableContent, RenderTableHeader } from "./layout/render-table";

interface TopMarketCapProps {
  topClimbers: Partial<CoinOverview>[];
}

export const TopClimbers = ({ topClimbers }: TopMarketCapProps) => {
  const t = useTranslations();

  const tableHeaders = [
    t("crypto.exchanges.topClimbers.symbol"),
    t("crypto.exchanges.topClimbers.priceChange24h"),
    t("crypto.exchanges.topClimbers.priceChangePercentage24h"),
  ];

  const tableRows = topClimbers.map((coin) => ({
    symbol: coin.symbol,
    priceChange24h: `$ ${coin.priceChange24h}`,
    priceChangePercentage24h: `${coin.priceChangePercentage24h} %`,
  }));

  const tableRowsKeys = Object.keys(
    tableRows[0],
  ) as (keyof (typeof tableRows)[0])[];

  return (
    <FormContainer
      title={t("crypto.exchanges.topClimbers.title")}
      description={t("crypto.exchanges.topClimbers.subtitle")}
    >
      <section className="w-full">
        <table className="flex w-full table-auto flex-col gap-4 text-nowrap">
          <RenderTableHeader headers={tableHeaders} />
          <RenderTableContent data={tableRows} keys={tableRowsKeys} />
        </table>
      </section>
    </FormContainer>
  );
};
