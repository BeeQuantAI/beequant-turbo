import { useTranslations } from "next-intl";
import { TopClimbers } from "./top-climbers";
import { TopFallers } from "./top-fallers";
import { TopMarketCap } from "./top-marketCap";
import { CoinOverview } from "@src/graphql";

interface TopThreeListsProps {
  topMarketCap: Partial<CoinOverview>[];
  topClimbers: Partial<CoinOverview>[];
  topFallers: Partial<CoinOverview>[];
}

export const TopThreeLists = ({
  topMarketCap,
  topClimbers,
  topFallers,
}: TopThreeListsProps) => {
  const t = useTranslations();

  return (
    <section className="flex justify-between">
      <div className="flex w-full flex-1 justify-between">
        <div className="flex w-full flex-col">
          <h1 className="m-2 pb-6 text-2xl font-bold">
            {t("crypto.exchanges.marketOverview")}
          </h1>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-10">
            <TopMarketCap topMarketCap={topMarketCap} />
            <TopClimbers topClimbers={topClimbers} />
            <TopFallers topFallers={topFallers} />
          </div>
        </div>
      </div>
    </section>
  );
};
