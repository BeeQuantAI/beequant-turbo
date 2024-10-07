"use client";

import React, { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';
import { MdTrendingUp } from 'react-icons/md';

type Props = {
  title: string;
  subtitle?: string;
  theme: "red" | "blue" | "green";
  hideIcon?: boolean;
  isSubtitleStyle?: boolean;
  customClass?: string; 
  titleColor?: string;
  customPaddingBottom?: string;
} & (
  | {
      type: "percentage";
      percentage: number;
    }
  | {
      type: "bar-chart";
      data: Array<{ id: number; name: string; pv: number }> ;
    }
);

const themeColors = {
  red: {
    textColor: "#FF4861",
    gradient: "linear-gradient(to right, #FF4861, #ff7e9a)",
  },
  blue: {
    textColor: "#48b5ff",
    gradient: "linear-gradient(to right, #48b5ff, #7edbff)",
  },
  green: {
    textColor: "#4CE1B6",
    gradient: "linear-gradient(to right, #4CE1B6, #a6efda)",
  },
};

const CardComponent: React.FC<Props> = ({
  title,
  subtitle,
  theme,
  hideIcon = false,
  isSubtitleStyle = false,
  customClass = "", 
  titleColor, 
  type,
  customPaddingBottom, 
  ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBarClick = (e: any) => {
    if (e && e.activePayload && e.activePayload.length) {
      const item = e.activePayload[0].payload;
      const index = (rest as { data: Array<{ id: number; name: string; pv: number }> }).data.findIndex(
        (entry) => entry.name === item.name
      );
      setActiveIndex(index);
    }
  };

  return (
    <div className={`col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3 ${customClass}`}>
      <div
          className={`bg-primary-50 dark:bg-primary-900 pt-[25px] px-[25px] rounded-lg shadow-[0_10px_30px_1px_rgba(0,0,0,0.06)] ${customClass}`}
          style={{ paddingBottom: customPaddingBottom || '38px' }}
        >
        <div className="flex justify-between items-center mb-1">
          <h2
            className={`${
              isSubtitleStyle
                ? "text-sm font-medium opacity-70 uppercase"
                : "text-2xl font-medium"
            } font-sans`}
            style={{ color: titleColor || themeColors[theme].textColor }} 
          >
            {title}
          </h2>
          {!hideIcon && <MdTrendingUp className="text-gray-300 w-6 h-6" />}
        </div>

        {subtitle && (
          <h5 className="text-sm font-medium text-left opacity-70 mt-[-4px] uppercase text-primary-600 font-sans">
            {subtitle}
          </h5>
        )}

        {type === "percentage" ? (
          <div className="relative pt-4 mt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-[#dddddd]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(rest as { percentage: number }).percentage}%`,
                  background: themeColors[theme].gradient,
                }}
              ></div>
            </div>
            <p
              className="absolute right-0 top-0 translate-y-[-50%] text-md font-sans"
              style={{ color: themeColors[theme].textColor }}
            >
              {(rest as { percentage: number }).percentage}%
            </p>
          </div>
        ) : (
          <div className="flex items-end justify-between">
            <p
              className="text-[30px] font-sans mb-[-7px] mr-4"
              style={{ color: themeColors[theme].textColor }}
            >
              {(rest as { data: Array<{ id: number; name: string; pv: number }> }).data[activeIndex].pv}
            </p>
            <div className="w-full lg:w-[55%] mt-[18px]">
              <ResponsiveContainer width="100%" height={50}>
                <BarChart
                  data={(rest as { data: Array<{ id: number; name: string; pv: number }> }).data}
                  onClick={handleBarClick}
                >
                  <Bar dataKey="pv">
                    {(rest as { data: Array<{ id: number; name: string; pv: number }> }).data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        cursor="pointer"
                        fill={index === activeIndex ? themeColors[theme].textColor : "#c88ffa"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
