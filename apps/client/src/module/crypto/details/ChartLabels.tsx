import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IntervalQueryTable, TabsInterval } from "./IntervalQueryTable";

export function ChartLabels() {
  const t = useTranslations();
  const [selectedTab, setSelectedTab] = useState<string | null>(
    TabsInterval.ONEDAY,
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab") as TabsInterval;
    setSelectedTab(tab);
  }, [searchParams]);

  function handleSelect(tab: TabsInterval) {
    router.push(
      `?tab=${tab}&interval=${IntervalQueryTable[tab].interval}&startTime=${IntervalQueryTable[tab].getStartTime()}&endTime=${IntervalQueryTable[tab].getEndTime()}`,
    );
  }

  return (
    <div className="lg:grid-cols-auto mb-4 grid w-full grid-cols-3 gap-4 p-2 md:w-2/3 md:grid-cols-6">
      {Object.values(TabsInterval).map((tab) => (
        <Labels
          key={tab}
          isChecked={selectedTab === tab}
          onSelect={() => {
            setSelectedTab(tab);
            handleSelect(tab); // Change the tab in the dynamic route
          }}
        >
          {t(`CryptoDetail.${tab}`)}
        </Labels>
      ))}
    </div>
  );
}

function Labels({
  children,
  isChecked,
  onSelect,
}: {
  children: React.ReactNode;
  isChecked: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`text-md cursor-pointer rounded-lg px-2 py-2 text-center antialiased ${isChecked ? "bg-accent-600 text-white" : "bg-none"} hover:bg-accent-400`}
      onClick={onSelect}
    >
      {/* Hidden checkbox for functionality but no visual */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        className="hidden"
      />
      {children}
    </div>
  );
}
