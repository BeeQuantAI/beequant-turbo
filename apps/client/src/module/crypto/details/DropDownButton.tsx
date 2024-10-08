// import arrow down icon from mdi-react
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function DropDownButton({
  chartType,
  setChartType,
}: {
  chartType: "line" | "candlestick";
  setChartType: React.Dispatch<React.SetStateAction<"line" | "candlestick">>;
}) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false); // Manage the open/close state of the dropdown

  const handleSelect = (type: "line" | "candlestick") => {
    setChartType(type);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative mr-2 mt-4 inline-block w-32 text-left md:mr-4">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-md bg-accent-400 hover:bg-accent-600 inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 capitalize text-gray-50"
        >
          {chartType === "candlestick"
            ? t("CryptoDetail.candlestick")
            : t("CryptoDetail.line")}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-white"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => handleSelect("candlestick")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {t("CryptoDetail.candlestick")}
            </button>
            <button
              onClick={() => handleSelect("line")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {t("CryptoDetail.line")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
