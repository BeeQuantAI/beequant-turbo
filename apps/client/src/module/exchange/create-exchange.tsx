"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormContainer,
  InputKeyForm,
  SelectPlatform,
} from "@src/module/exchange";
import { FormProvider, useFormContext } from "@src/module/exchange/FormContext";
import { CreateExchangeKeyInput } from "@src/module/graphql";
import { displayNamePatten } from "@src/utils/validation-message";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { createExchangeKey, CreateExchangePayload } from "./exchangeService";
import { ConnectSuccess } from "./connect-success";

// WARNING: DON'T TRY TO SEPARATE EXCHANGE CONTENT OUT OF EXCHANGE PAGE.
// I know its ugly but,
// It will trigger Next.js with turborepo bug for unknow reason,
// You can check the bug report here:
// https://github.com/vercel/turborepo/issues/2356

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
        .min(4, { message: t("Notifications.displayName.minLength") })
        .max(15, { message: t("Notifications.displayName.maxLength") })
        .regex(displayNamePatten, {
          message: t("Notifications.displayName.invalid"),
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
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit: handleSubmitStep1,
    control: controlStep1,
    formState: { errors: errorsStep1 },
  } = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: { exchangeName: formData.exchangeName },
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

  const handleBack = () => setStep((prev: number) => prev - 1);

  async function action(payload: CreateExchangePayload) {
    const res = await createExchangeKey(payload);

    if (res?.code) {
      switch (res.code) {
        case 200:
          setIsSuccess(true);
          break;
        case 10012:
        case 10013:
        case 10014:
        case 10015:
          setServerError(t(`ExchangePage.errorCode.${res.code}`));
          break;
        default:
          setServerError(res.error || t("ExchangePage.errorCode.default"));
          break;
      }
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
          onBackClick={handleBack}
          error={
            (errorsStep1.exchangeName?.message ||
              errorsStep2.displayName?.message ||
              errorsStep2.accessKey?.message ||
              errorsStep2.secretKey?.message ||
              serverError) ??
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
