import { AuthRoute } from "@src/module/auth";
import { Successed } from "@src/module/common";
import { useTranslations } from "next-intl";

export const metadata = AuthRoute.RegisterSuccessed.Metadata;

export default function Page() {
  const t = useTranslations();
  return (
    <Successed
      title={t("RegisterPage.succeed.congratulation")}
      message={t("RegisterPage.succeed.message")}
    />
  );
}
