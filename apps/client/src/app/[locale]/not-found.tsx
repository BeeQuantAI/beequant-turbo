import { NotFoundContent } from "@src/module/not-found/not-found-content";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return <NotFoundContent message={t("content.message")} />;
}
