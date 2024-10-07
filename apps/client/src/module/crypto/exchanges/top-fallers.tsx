import { FormContainer } from "@src/module/common/form-container";
import { useTranslations } from "next-intl";
import { RenderTableContent, RenderTableHeader } from "./layout/render-table";
import { CoinOverview } from "@src/graphql";

interface TopMarketCapProps {
  topFallers: Partial<CoinOverview>[];
}

export const TopFallers = ({ topFallers }: TopMarketCapProps) => {
  const t = useTranslations();

  const tableHeaders = [
    t("crypto.exchanges.topFallers.symbol"),
    t("crypto.exchanges.topFallers.priceChange24h"),
    t("crypto.exchanges.topFallers.priceChangePercentage24h"),
  ];

  const tableRows = topFallers.map((coin) => ({
    symbol: coin.symbol,
    priceChange24h: `$ ${coin.priceChange24h}`,
    priceChangePercentage24h: `${coin.priceChangePercentage24h} %`,
  }));

  const tableRowsKeys = Object.keys(
    tableRows[0],
  ) as (keyof (typeof tableRows)[0])[];

  return (
    <FormContainer
      title={t("crypto.exchanges.topFallers.title")}
      description={t("crypto.exchanges.topFallers.subtitle")}
    >
      <section className="w-full">
        <table className="flex w-full table-auto flex-col gap-4">
          <RenderTableHeader headers={tableHeaders} />
          <RenderTableContent data={tableRows} keys={tableRowsKeys} />
        </table>
      </section>
    </FormContainer>
  );
};
