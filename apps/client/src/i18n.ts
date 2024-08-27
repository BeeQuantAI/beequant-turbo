import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "zh-cn"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  switch (locale) {
    case "zh-cn":
      return { messages: (await import("../messages/zh-cn.json")).default };
    default:
      return { messages: (await import("../messages/en.json")).default };
  }
});
