import { AuthRoute } from "@src/module/auth/route";
import { NotFoundContent } from "@src/module/not-found/not-found-content";
import { useTranslations } from "next-intl";

export const metadata = AuthRoute.PageNotFound.Metadata;

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return <NotFoundContent message={t("content.message")} />;
}
