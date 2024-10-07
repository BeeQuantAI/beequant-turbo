import { useTranslations } from "next-intl";
import { TopClimbers } from "./components/TopClimbers";
import { TopFallers } from "./components/TopFallers";
import { TopMarketCap } from "./components/TopMarketCap";

export const TopThreeLists = () => {
  const t = useTranslations();

  return (
    <section className="flex h-screen w-full flex-col overflow-y-scroll">
      <h1 className="m-2 pb-6 text-2xl font-bold">
        {t("crypto.exchanges.marketOverview")}
      </h1>
      <section className="grid gap-6 md:grid-cols-1 md:gap-y-6 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-10">
        <TopMarketCap />
        <TopClimbers />
        <TopFallers />
      </section>
    </section>
  );
};
