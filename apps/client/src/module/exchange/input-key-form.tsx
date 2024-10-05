"use client";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextInput } from "./components/text-input";
import { CreateExchangeKeyInput } from "@src/graphql";
import { useTranslations } from "next-intl";

interface InputKeyFormProps {
  control: Control<Omit<CreateExchangeKeyInput, "exchangeName">>;
}

export function InputKeyForm({ control }: InputKeyFormProps) {
  const t = useTranslations();
  return (
    <>
      <Controller
        name="displayName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            name={t("ExchangePage.inputKeyPage.displayName")}
            id="displayName"
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="accessKey"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            name={t("ExchangePage.inputKeyPage.accessKey")}
            id="accessKey"
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="secretKey"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            name={t("ExchangePage.inputKeyPage.secretKey")}
            id="secretKey"
            value={value}
            onChange={onChange}
          />
        )}
      />
    </>
  );
}
