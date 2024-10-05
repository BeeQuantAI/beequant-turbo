"use client";
import { Button, ControlledTextInput } from "@src/module/common";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { AlertMessage } from "./AlertMessage";
import { Toaster } from "react-hot-toast";
import { errorNotify, succeedNotify } from "@src/module/common/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GET_EXCHANGE_KEY_BY_ID,
  UPDATE_EXCHANGE_KEY,
} from "@src/graphql/exchange";
import { useMutation } from "@apollo/client";

export function UpdateExchangeForm({
  exchangeKeyId,
}: {
  exchangeKeyId: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const modelRef = useRef<HTMLDialogElement>(null);
  const t = useTranslations();
  const [updateExchangeKey] = useMutation(UPDATE_EXCHANGE_KEY);
  const [getExchangeKeyById] = useMutation(GET_EXCHANGE_KEY_BY_ID);

  const updateExchangeKeySchema = z.object({
    displayName: z
      .string()
      .min(1, { message: t("Notifications.displayName.required") })
      .min(4, { message: t("Notifications.displayName.minLength") })
      .max(15, { message: t("Notifications.displayName.maxLength") })
      .regex(/^[a-zA-Z0-9-_]+$/, {
        message: t("Notifications.displayName.invalid"),
      }),
    exchangeName: z
      .string()
      .min(1, { message: t("Notifications.exchangeName.required") }),
    accessKey: z
      .string()
      .min(1, { message: t("Notifications.accessKey.required") }),
    secretKey: z
      .string()
      .min(1, { message: t("Notifications.secretKey.required") }),
  });

  type FormData = z.infer<typeof updateExchangeKeySchema>;

  const { control, handleSubmit, setValue, getValues } = useForm<FormData>({
    defaultValues: {
      displayName: "",
      exchangeName: "",
      accessKey: "",
      secretKey: "",
    },
    resolver: zodResolver(updateExchangeKeySchema),
  });

  useEffect(() => {
    async function fetchExchangeKey(id: string) {
      const { data: resData } = await getExchangeKeyById({ variables: { id } });
      const code = resData?.getExchangeKeyById.code;
      const data = resData?.getExchangeKeyById.data;
      if (code === 200 && data) {
        const fieldName = Object.keys(getValues()) as (keyof FormData)[];
        fieldName.forEach((name) => {
          setValue(name, data[name]);
        });
        setLoading(false);
      }
    }

    fetchExchangeKey(exchangeKeyId);
  }, [setValue, getExchangeKeyById, exchangeKeyId, getValues]);

  const action = async (payload: FormData) => {
    const updateExchangeKeyPayload = { ...payload, id: exchangeKeyId };
    const { data } = await updateExchangeKey({
      variables: { input: updateExchangeKeyPayload },
    });
    const code = data?.updateExchangeKey.code;
    switch (code) {
      case 200:
        succeedNotify(t("Notifications.updateExchangeKey.succeed"));
        break;
      case 10017:
        errorNotify(t("Notifications.updateExchangeKey.notfound"));
        break;
      case 10014:
        errorNotify(t("Notifications.updateExchangeKey.invalid"));
        break;
      default:
        errorNotify(t("Notifications.updateExchangeKey.failed"));
        break;
    }
  };

  const onSubmit = (formData: FormData) => {
    action(formData);
  };

  {
    return (
      !loading && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[30px] flex flex-col gap-y-5"
        >
          <Toaster />
          <ControlledTextInput
            direction="horizontal"
            label={t("UpdateExchangeKeyPage.keyDisplayName")}
            name="displayName"
            control={control}
          />
          <ControlledTextInput
            direction="horizontal"
            label={t("UpdateExchangeKeyPage.exchange")}
            name="exchangeName"
            control={control}
          />
          <ControlledTextInput
            direction="horizontal"
            label={t("UpdateExchangeKeyPage.apiSecret")}
            name="accessKey"
            control={control}
          />
          <ControlledTextInput
            direction="horizontal"
            label={t("UpdateExchangeKeyPage.apiKey")}
            name="secretKey"
            control={control}
          />
          <div className="mb-8 ml-[90px] mt-2 flex justify-between gap-4 sm:ml-[140px]">
            <Button onClick={() => modelRef.current?.show()}>
              {t("Shared.submit")}
            </Button>
            <Button variant="highlight">{t("Shared.delete")}</Button>
            <Button variant="secondary">{t("Shared.cancel")}</Button>
          </div>
          <AlertMessage
            title={t("UpdateExchangeKeyPage.alertTitle")}
            message={t("UpdateExchangeKeyPage.alertMessage")}
            ref={modelRef}
            cancelHandler={() => modelRef.current?.close()}
            submitHandler={() => modelRef.current?.close()}
            confirmText={t("UpdateExchangeKeyPage.alertYes")}
            cancelText={t("Shared.cancel")}
          />
        </form>
      )
    );
  }
}
