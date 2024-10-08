import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts/core";
import { GaugeChart, GaugeSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { useTranslations } from "next-intl";

// Register the required components
echarts.use([GaugeChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<GaugeSeriesOption>;

export function RatingGaugeChart({ rating }: { rating: number }) {
  const catgeory = giveCategory(rating);
  // color based on rating, from red(0) to blue(100), using hsv color space
  const color = getRatingColor(rating);
  const chartRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  function giveCategory(rating: number): string {
    if (rating < 20) {
      return "strongSell";
    } else if (rating < 40) {
      return "sell";
    } else if (rating < 60) {
      return "neutral";
    } else if (rating < 80) {
      return "buy";
    } else {
      return "strongBuy";
    }
  }
  function interpolateColor(
    color1: string,
    color2: string,
    factor: number,
  ): string {
    // Ensure the factor is between 0 and 1
    const f = Math.max(0, Math.min(1, factor));

    // Convert hex to RGB
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    // Interpolate between the two colors
    const r = Math.round(c1.r + f * (c2.r - c1.r));
    const g = Math.round(c1.g + f * (c2.g - c1.g));
    const b = Math.round(c1.b + f * (c2.b - c1.b));

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Helper function to convert hex color to RGB
  function hexToRgb(hex: string) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }

  function getRatingColor(rating: number): string {
    // Define the color range from red to blue
    const colorRed = "#ff4861"; // Red
    const colorBlue = "#6FBBFD"; // Blue

    // Normalize rating (0-100) to factor (0-1)
    const factor = rating / 100;

    // Interpolate between red and blue based on the rating
    return interpolateColor(colorRed, colorBlue, factor);
  }
  // Memoized option configuration
  const option = useMemo<EChartsOption>(
    () => ({
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          radius: "115%", // Adjust the radius to fit better
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100, // Range from 0 to 100
          splitNumber: 12,
          grid: {
            show: false,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
          itemStyle: {
            color: color,
          },
          progress: {
            show: true,
            width: 22, // Adjust the width to prevent overlap
          },
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 22, // Adjust the axis width
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: "60%",
            lineHeight: 30,
            borderRadius: 0,
            offsetCenter: [0, "-20%"], // Adjust the value position
            fontSize: 18, // Adjust font size to avoid overlap
            fontWeight: "bolder",
            formatter: `{value}\n${t(`CryptoDetail.${catgeory}`)}`,
            color: "inherit",
          },
          data: [
            {
              value: rating,
            },
          ],
        },
      ],
    }),
    [rating, color, t, catgeory],
  );

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize the chart
    const myChart = echarts.init(chartRef.current);

    // Set the option for the chart
    myChart.setOption(option);

    // Handle window resize to make the chart responsive
    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, [option]);

  return (
    <section className="relative mt-2 flex w-full flex-col items-center justify-center">
      <div ref={chartRef} className="h-48 w-full"></div>
    </section>
  );
}
