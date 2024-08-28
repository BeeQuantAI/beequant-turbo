"use client";

import { useRouter } from "@src/configs/navigation";
import { FormContainer } from "../layout/form-container";
import { useTranslations } from "next-intl";
import { AccountRoute } from "../layout/route";

export function AccountManagementPage() {
  const t = useTranslations();
  const router = useRouter();
  const onClickHandler = () => {
    router.push(AccountRoute.ChangePassword.Path);
  };
  return (
    <div className="flex flex-col">
      <h1 className="mb-[30px] text-lg">{t("Shared.accountManagement")}</h1>
      <FormContainer
        title={t("UpdatePasswordPage.title")}
        description={t("UpdatePasswordPage.subtitle")}
        onClick={onClickHandler}
        className="cursor-pointer"
      />
    </div>
  );
}
