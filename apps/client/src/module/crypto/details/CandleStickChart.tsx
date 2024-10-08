"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as echarts from "echarts/core";
import {
  DataZoomComponent,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import {
  CandlestickChart,
  CandlestickSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { KlineData } from "./types";
import {
  calculateMA,
  extractXLabels,
  extractYLabels,
  extractYLabelsForLineChart,
} from "./data-utils";
import { useTheme } from "@src/module/system";
import { useSearchParams } from "next/navigation";
import { DropDownButton } from "./DropDownButton";
import { useTranslations } from "next-intl";
import { format } from "path";
// Register the required components
echarts.use([
  GridComponent,
  CandlestickChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  LineChart,
]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | CandlestickSeriesOption | LineSeriesOption
>;

interface CandleStickProps {
  data: KlineData[];
}

export function CandleStick({ data }: CandleStickProps) {
  const t = useTranslations();
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartType, setChartType] = useState<"line" | "candlestick">("line");
  const [dataX, setDataX] = useState<string[]>([]);
  // Y label can be 2D array for candlestick chart and 1D array for line chart
  const [candleDataY, setcandleDataY] = useState<number[][]>([]);
  const [lineDataY, setLineDataY] = useState<number[]>([]);
  const searchParams = useSearchParams();
  // Extract the x and y labels from the data
  useEffect(() => {
    const interval = searchParams.get("interval");
    if (!interval) return;
    setDataX(extractXLabels(data, interval));
    chartType === "candlestick"
      ? setcandleDataY(extractYLabels(data))
      : setLineDataY(extractYLabelsForLineChart(data));
  }, [data, searchParams, chartType]);

  const { theme } = useTheme();
  const [chartInstance, setChartInstance] =
    useState<echarts.EChartsType | null>(null);
  const [selectedLines, setSelectedLines] = useState({
    MA5: false,
    MA10: false,
    MA20: false,
    MA30: false,
  });

  const isMobile = window.innerWidth < 768;

  // Chart configuration
  const option = useMemo<EChartsOption>(
    () => ({
      backgroundColor: theme === "dark" ? "#232329" : "#FFFFFF",
      padding: [10, 10, 10, 10],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        show: true,
        data: ["MA5", "MA10", "MA20", "MA30"],
        selected: selectedLines,
      },
      grid: {
        left: isMobile ? "15%" : "7%", // Adjust the left margin
        right: "2%", // Adjust the right margin
        bottom: "15%", // Adjust the bottom margin to accommodate the dataZoom slider
        top: "10%", // Adjust the top margin if necessary
      },
      xAxis: {
        type: "category",
        data: dataX,
        boundaryGap: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        axisLabel: {
          fontSize: 10,
          color: theme === "dark" ? "#fff" : "#000",
          fontFamily: "Roboto",
          fontWeight: "normal",
        },
      },
      yAxis: {
        scale: true,
        boundaryGap: [0.01, 0.01],
        splitArea: {
          show: false,
        },
        axisLabel: {
          fontSize: isMobile ? 8 : 14,
          color: theme === "dark" ? "#fff" : "#000",
          fontFamily: "Roboto",
          fontWeight: "normal",
        },
      },
      dataZoom: [
        {
          type: "inside",
          start: 80,
          end: 100,
        },
        {
          show: true,
          type: "slider",
          top: "90%", // Positioning of the slider
          start: 50,
          end: 100,
        },
      ],
      theme: "dark",
      series: [
        ...(chartType === "candlestick"
          ? [
              {
                type: "candlestick" as const,
                name: t("CryptoDetail.candlestick"),
                barMaxWidth: 20,
                data: candleDataY,
                itemStyle: {
                  color: "#00A854", // Green for increasing candles
                  color0: "#FF4242", // Red for decreasing candles
                  borderColor: "#00A854", // Border color for increasing candles
                  borderColor0: "#FF4242", // Border color for decreasing candles
                },
              },
            ]
          : [
              {
                type: "line" as const,
                name: t("CryptoDetail.line"),
                data: lineDataY,
                smooth: true,
                symbol: "none",
                lineStyle: {
                  width: 2,
                },
                areaStyle: {
                  color: "rgba(0, 0, 0, 0.1)",
                },
              },
            ]),
        {
          name: "MA5",
          type: "line" as const,
          data: calculateMA(5, data),
          smooth: true,
          lineStyle: {
            opacity: 0.5,
          },
        },
        {
          name: "MA10",
          type: "line" as const,
          data: calculateMA(10, data),
          smooth: true,
          lineStyle: {
            opacity: 0.5,
          },
        },
        {
          name: "MA20",
          type: "line" as const,
          data: calculateMA(20, data),
          smooth: true,
          lineStyle: {
            opacity: 0.5,
          },
        },
        {
          name: "MA30",
          type: "line" as const,
          data: calculateMA(30, data),
          smooth: true,
          lineStyle: {
            opacity: 0.5,
          },
        },
      ],
    }),
    [
      chartType,
      theme,
      dataX,
      candleDataY,
      lineDataY,
      selectedLines,
      data,
      isMobile,
      t,
    ],
  );

  // for set up the chart
  useEffect(() => {
    const chartDom = chartRef.current;
    if (!chartDom || !data) return;

    const initChart = () => {
      const instance = echarts.init(chartRef.current);
      setChartInstance(instance);
      instance.setOption(option);
    };

    // load the chart once the window is ready
    if (typeof window !== "undefined") {
      initChart();
    }

    const resizeObserver = new ResizeObserver(() => {
      if (chartInstance) {
        chartInstance.resize();
      }
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      if (chartInstance) {
        chartInstance.dispose();
      }
      resizeObserver.disconnect();
    };
  }, [theme, chartInstance, selectedLines, chartType, option, data]);

  return (
    <div className="relative flex h-[34rem] w-full flex-col">
      <span className="flex flex-row justify-end">
        <DropDownButton chartType={chartType} setChartType={setChartType} />
      </span>
      <div ref={chartRef} className="h-[32rem] w-full" />
    </div>
  );
}
