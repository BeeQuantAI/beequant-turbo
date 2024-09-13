"use client";
import { Control, Controller } from "react-hook-form";
import { Radio } from "./components/radio";
import { useTranslations } from "next-intl";

type Platform = { key: string; label: string };

type SelectPlatformProps = {
  control: Control<{
    exchangeName: string;
  }>;
};

export function SelectPlatform({ control }: SelectPlatformProps) {
  const t = useTranslations();

  const platforms: Platform[] = [
    {
      key: "binance",
      label: t("ExchangePage.selectPlatformPage.platforms.binance"),
    },
  ];

  return (
    <div className="mt-5">
      <Controller
        name="exchangeName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Radio
            platforms={platforms}
            selectedValue={value}
            onValueChange={onChange}
          />
        )}
      />
    </div>
  );
}
