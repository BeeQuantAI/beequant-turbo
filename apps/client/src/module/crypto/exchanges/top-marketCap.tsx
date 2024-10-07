import { FormContainer } from "@src/module/common/form-container";
import { useTranslations } from "next-intl";
import { RenderTableContent, RenderTableHeader } from "./layout/render-table";
import { CoinOverview } from "@src/graphql";

interface TopMarketCapProps {
  topMarketCap: Partial<CoinOverview>[];
}

export const TopMarketCap = ({ topMarketCap }: TopMarketCapProps) => {
  const t = useTranslations();

  const tableHeaders = [
    t("crypto.exchanges.topMarketCap.symbol"),
    t("crypto.exchanges.topMarketCap.marketCap"),
    t("crypto.exchanges.topMarketCap.volume24h"),
  ];

  const tableRows = topMarketCap.map((coin) => ({
    symbol: coin.symbol,
    marketCap: `$ ${coin.marketCap}`,
    volume24h: `$ ${coin.volume24h}`,
  }));

  const tableRowsKeys = Object.keys(
    tableRows[0],
  ) as (keyof (typeof tableRows)[0])[];

  return (
    <FormContainer
      title={t("crypto.exchanges.topMarketCap.title")}
      description={t("crypto.exchanges.topMarketCap.subtitle")}
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
