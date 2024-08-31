import { AuthRoute } from "@src/module/auth";
import { Successed } from "@src/module/common";
import { useTranslations } from "next-intl";

export const metadata = AuthRoute.ResetPasswordSuccessed.Metadata;

export default function Page() {
  const t = useTranslations();
  return (
    <Successed
      title={t("ForgotPasswordPage.succeed.title")}
      message={t("ForgotPasswordPage.succeed.message")}
    />
  );
}