import { useTranslations } from "next-intl";
import { TopClimbers } from "./components/TopClimbers";
import { TopFallers } from "./components/TopFallers";
import { TopMarketCap } from "./components/TopMarketCap";

export const TopThreeLists = () => {
  const t = useTranslations();

  return (
    <section className="flex w-full flex-col">
      <h1 className="m-2 pb-6 text-2xl font-bold">
        {t("crypto.exchanges.marketOverview")}
      </h1>
      <section className="grid md:grid-cols-1 md:gap-2 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-10">
        <TopMarketCap />
        <TopClimbers />
        <TopFallers />

        {/* Add your market overview content here */}
      </section>
    </section>
  );
};
