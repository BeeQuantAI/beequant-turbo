import { FormContainer } from "@src/module/common/form-container";
import { TableRow } from "./layout/table-row";
import { useTranslations } from "next-intl";
import { CoinOverview } from "@src/graphql";
import { TableHead } from "./layout/table-head";

interface TopTwentyCurrencyTableProps {
  top20Cyrptocurrencies: Partial<CoinOverview>[];
  refreshHandler: () => void;
}

export function TopTwentyCurrencyTable({
  top20Cyrptocurrencies,
  refreshHandler,
}: TopTwentyCurrencyTableProps) {
  const tableRows = top20Cyrptocurrencies.map((coin) => {
    return {
      name: coin.name,
      marketCap: `$ ${coin.marketCap}`,
      price: `$ ${coin.price?.toFixed(2)}`,
      volume: `$ ${coin.volume24h?.toFixed(2)}`,
      change24h: `${coin.priceChangePercentage24h?.toFixed(2)} %`,
      change7d: `${coin.priceChangePercentage7d?.toFixed(2)} %`,
    };
  });
  const t = useTranslations();
  const tableHeaders = [
    t("crypto.exchanges.topTwenty.rank"),
    t("crypto.exchanges.topTwenty.name"),
    t("crypto.exchanges.topTwenty.marketCap"),
    t("crypto.exchanges.topTwenty.price"),
    t("crypto.exchanges.topTwenty.volume"),
    t("crypto.exchanges.topTwenty.change24h"),
    t("crypto.exchanges.topTwenty.change7d"),
  ];

  const tableRowsKeys = Object.keys(
    tableRows[0],
  ) as (keyof (typeof tableRows)[0])[];

  return (
    <FormContainer
      title={t("crypto.exchanges.topTwenty.title")}
      description={t("crypto.exchanges.topTwenty.subtitle")}
      icon="refresh"
      refreshHandler={refreshHandler}
    >
      <div className="max-h-[600px] w-full overflow-scroll">
        <table className="min-h-[500px] w-full min-w-[600px] table-auto pt-[30px] text-base">
          <TableHead tableHeaders={tableHeaders} />
          <TableRow data={tableRows} keys={tableRowsKeys} />
        </table>
      </div>
    </FormContainer>
  );
}
