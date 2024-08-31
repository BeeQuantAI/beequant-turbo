"use client";

import { AuthRoute } from "@src/module/auth";
import { NotFoundContent } from "@src/module/common/not-found-page";
import { useTranslations } from "next-intl";

export const metadata = AuthRoute.PageNotFound.Metadata;

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return <NotFoundContent message={t("content.message")} />;
}
