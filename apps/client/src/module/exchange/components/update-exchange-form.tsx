"use client";
import { Button, ControlledTextInput } from "@src/module/common";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { AlertMessage } from "./AlertMessage";
import toast, { Toaster } from "react-hot-toast";
import { errorNotify, succeedNotify } from "@src/module/common/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DELETE_EXCHANGE_KEY,
  GET_EXCHANGE_KEY_BY_ID,
  UPDATE_EXCHANGE_KEY,
} from "@src/graphql/exchange";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { exchangeRoutes } from "../route";
import { Loading } from "@src/module/common/loading-animation";

export function UpdateExchangeForm({
  exchangeKeyId,
}: {
  exchangeKeyId: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [mode, setMode] = useState<"update" | "delete" | null>(null);
  const modelRef = useRef<HTMLDialogElement>(null);
  const t = useTranslations();
  const [updateExchangeKey] = useMutation(UPDATE_EXCHANGE_KEY);
  const [deleteExchangeKey] = useMutation(DELETE_EXCHANGE_KEY);
  const router = useRouter();

  const {
    data: resData,
    loading: queryLoading,
    error,
  } = useQuery(GET_EXCHANGE_KEY_BY_ID, {
    variables: { id: exchangeKeyId },
    fetchPolicy: "network-only",
  });

  const updateExchangeKeySchema = z.object({
    displayName: z
      .string()
      .min(1, { message: t("Notifications.displayName.required") })
      .min(4, { message: t("Notifications.displayName.minLength") })
      .max(65, { message: t("Notifications.displayName.maxLength") })
      .regex(/^[a-zA-Z0-9-_ ]+$/, {
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
    if (!queryLoading && resData) {
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
  }, [setValue, resData, queryLoading, getValues]);

  const action = async (payload: FormData) => {
    setLoading(true);
    try {
      const updateExchangeKeyPayload = { ...payload, id: exchangeKeyId };
      const { data } = await updateExchangeKey({
        variables: { input: updateExchangeKeyPayload },
      });

      const code = data?.updateExchangeKey?.code;

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
      modelRef.current?.close();
    } catch (error) {
      errorNotify(t("Notifications.updateExchangeKey.failed"));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const { data } = await deleteExchangeKey({
        variables: { exchangeKeyId },
      });

      const code = data?.deleteExchangeKey?.code;

      switch (code) {
        case 200:
          succeedNotify(t("Notifications.deleteExchangeKey.succeed"));
          break;
        case 10017:
          errorNotify(t("Notifications.deleteExchangeKey.notfound"));
          break;
        case 10014:
          errorNotify(t("Notifications.deleteExchangeKey.invalid"));
          break;
        default:
          errorNotify(t("Notifications.deleteExchangeKey.failed"));
          break;
      }
      modelRef.current?.close();
      router.push(exchangeRoutes.exchangePage.Path);
    } catch (error) {
      errorNotify(t("Notifications.deleteExchangeKey.failed"));
    } finally {
      setLoading(false);
    }
  };

  const handleAlertSubmit = () => {
    if (mode === "update") {
      const formData = getValues();
      action(formData);
    } else if (mode === "delete") {
      handleDelete();
    }
  };

  useEffect(() => {
    return () => toast.dismiss();
  }, []);

  if (loading) return <Loading />;

  return (
    !loading && (
      <form
        onSubmit={handleSubmit(() => {
          setMode("update");
          modelRef.current?.show();
        })}
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
          disabled
          className="dark:bg-primary-800 bg-primary-300 cursor-not-allowed"
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
          <Button type="submit">{t("Shared.submit")}</Button>
          <Button
            variant="highlight"
            type="button"
            onClick={() => {
              setMode("delete");
              modelRef.current?.show();
            }}
          >
            {t("Shared.delete")}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => router.push(exchangeRoutes.exchangePage.Path)}
          >
            {t("Shared.cancel")}
          </Button>
        </div>
        <AlertMessage
          title={
            mode === "delete"
              ? t("UpdateExchangeKeyPage.alertDeleteTitle")
              : t("UpdateExchangeKeyPage.alertTitle")
          }
          message={
            mode === "delete"
              ? t("UpdateExchangeKeyPage.alertDeleteMessage")
              : t("UpdateExchangeKeyPage.alertMessage")
          }
          ref={modelRef}
          cancelHandler={() => modelRef.current?.close()}
          submitHandler={handleAlertSubmit}
          confirmText={t("UpdateExchangeKeyPage.alertYes")}
          cancelText={t("UpdateExchangeKeyPage.alertCancel")}
        />
      </form>
    )
  );
}
