"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  exchangeRoutes,
  FormContainer,
  InputKeyForm,
  SelectPlatform,
} from "@src/module/exchange";
import { FormProvider, useFormContext } from "@src/module/exchange/FormContext";
import { CreateExchangeKeyInput } from "@src/graphql";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConnectSuccess } from "./connect-success";
import { CREATE_EXCHANGE_KEY } from "@src/graphql";
import { useMutation } from "@apollo/client";
import { Loading } from "../common/loading-animation";

type CreateExchangePayload = CreateExchangeKeyInput;

interface ExchangePageContentProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  currentSchema: any;
  router: any;
  t: (key: string, params?: Record<string, any>) => string;
}

const SelectPlatformSchema = (t: any) =>
  z.object({
    exchangeName: z.enum(["binance"], {
      message: t("Notifications.platform.required"),
    }),
  });

const InputKeyFormSchema = (t: any) =>
  z.object({
    displayName: z.union([
      z
        .string()
        .min(4, { message: t("Notifications.exchangeDisplayName.minLength") })
        .max(65, { message: t("Notifications.exchangeDisplayName.maxLength") })
        .regex(/^[a-zA-Z0-9-_ ]+$/, {
          message: t("Notifications.exchangeDisplayName.invalid"),
        }),
      z
        .string()
        .length(0)
        .transform(() => "New_Exchange"),
    ]),
    accessKey: z
      .string()
      .min(1, { message: t("Notifications.accessKey.required") })
      .max(256, { message: t("Notifications.accessKey.maxLength") }),
    secretKey: z
      .string()
      .min(1, { message: t("Notifications.secretKey.required") })
      .max(256, { message: t("Notifications.secretKey.maxLength") }),
  });

export function ExchangePage() {
  const [step, setStep] = useState(1);
  const t = useTranslations();
  const currentSchema =
    step === 1 ? SelectPlatformSchema(t) : InputKeyFormSchema(t);
  const router = useRouter();

  return (
    <FormProvider>
      <ExchangePageContent
        step={step}
        setStep={setStep}
        currentSchema={currentSchema}
        router={router}
        t={t}
      />
    </FormProvider>
  );
}

function ExchangePageContent({
  step,
  setStep,
  currentSchema,
  t,
}: ExchangePageContentProps) {
  const { formData, setFormData } = useFormContext();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [createExchangeKey] = useMutation(CREATE_EXCHANGE_KEY);
  const router = useRouter();

  const {
    handleSubmit: handleSubmitStep1,
    control: controlStep1,
    formState: { errors: errorsStep1 },
  } = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: { exchangeName: formData.exchangeName || "" },
  });

  const {
    handleSubmit: handleSubmitStep2,
    control: controlStep2,
    formState: { errors: errorsStep2 },
  } = useForm<Omit<CreateExchangeKeyInput, "exchangeName">>({
    resolver: zodResolver(InputKeyFormSchema(t)),
    defaultValues: {
      displayName: formData.displayName,
      accessKey: formData.accessKey,
      secretKey: formData.secretKey,
    },
  });

  const handleNext = (data: object) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setStep((prev: number) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev: number) => prev - 1);
  };

  async function action(payload: CreateExchangePayload) {
    setLoading(true);
    try {
      const { data } = await createExchangeKey({
        variables: {
          input: payload,
        },
      });

      const code = data?.createExchangeKey?.code;
      const message = data?.createExchangeKey?.message;

      if (code) {
        switch (code) {
          case 200:
            setIsSuccess(true);
            break;
          case 10012:
          case 10013:
          case 10014:
          case 10015:
            setServerError(t(`ExchangePage.errorCode.${code}`));
            break;
          default:
            setServerError(message || t("ExchangePage.errorCode.default"));
            break;
        }
      }
    } catch (error) {
      setServerError(t("ExchangePage.errorCode.default"));
    } finally {
      setLoading(false);
    }
  }

  const handleSubmitForm = (
    data: Omit<CreateExchangeKeyInput, "exchangeName">,
  ) => {
    const finalData: CreateExchangeKeyInput = {
      ...formData,
      ...data,
    };
    action(finalData);
  };

  const formTitles: { [key: number]: string } = {
    1: t("ExchangePage.selectPlatformPage.title"),
    2: t("ExchangePage.inputKeyPage.title"),
  };

  if (loading) return <Loading />;

  const handleCancel = () => {
    router.push(exchangeRoutes.exchangePage.Path);
  };

  return (
    <>
      {isSuccess ? (
        <ConnectSuccess />
      ) : (
        <FormContainer
          title={formTitles[step]}
          progress={step}
          onSubmit={
            step === 2
              ? handleSubmitStep2(handleSubmitForm)
              : handleSubmitStep1(handleNext)
          }
          showBack={step > 1}
          showSubmit={step === 2}
          showCancel={step === 1}
          onBackClick={handleBack}
          onCancelClick={handleCancel}
          error={
            step === 1
              ? errorsStep1.exchangeName?.message || undefined
              : errorsStep2.displayName?.message ||
                errorsStep2.accessKey?.message ||
                errorsStep2.secretKey?.message ||
                serverError ||
                undefined
          }
        >
          {step === 1 ? (
            <SelectPlatform control={controlStep1} />
          ) : (
            <InputKeyForm control={controlStep2} />
          )}
        </FormContainer>
      )}
    </>
  );
}
