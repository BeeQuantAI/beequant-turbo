import { AuthRoute } from "@src/module/auth";
import { Successed } from "@src/module/common";
import { useTranslations } from "next-intl";

export const metadata = AuthRoute.VerifyEmailSuccessed.Metadata;

export default function Page() {
  const t = useTranslations();
  return (
    <Successed
      title={t("VerifyEmail.succeed.title")}
      message={t("VerifyEmail.succeed.message")}
      state="success"
    />
  );
}