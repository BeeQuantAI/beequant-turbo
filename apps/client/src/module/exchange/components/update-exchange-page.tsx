"use client";

import { FormContainer } from "@src/module/common/form-container";
import { UpdateExchangeForm } from "./update-exchange-form";
import { useTranslations } from "next-intl";

export function UpdateExchangePage({
  exchangeKeyId,
}: {
  exchangeKeyId: string;
}) {
  const t = useTranslations();
  return (
    <FormContainer
      title={t("UpdateExchangeKeyPage.title")}
      description={t("UpdateExchangeKeyPage.subtitle")}
    >
      <UpdateExchangeForm exchangeKeyId={exchangeKeyId} />
    </FormContainer>
  );
}
