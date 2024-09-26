"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from "@src/module/common";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthFormContainer } from "./auth-form-container";
import { register, RegisterPayload } from "./auth-service";
import { AuthRoute } from "./route";
import { displayNamePatten } from "@src/utils/validation-message";
import { useTranslations } from "next-intl";
import { passwordValidationSchema } from "@src/utils/validation-schema";
import { Successed } from "@src/module/common";
import { useState } from "react";

export function RegisterForm() {
  const t = useTranslations();
  const passwordSchema = passwordValidationSchema(t);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  type FormSchema = z.infer<typeof formSchema>;
  const formSchema = z.object({
    displayName: z.union([
      z.string()
        .min(4, { message: t("Notifications.displayName.minLength") })
        .max(15, { message: t("Notifications.displayName.maxLength") })
        .regex(displayNamePatten, {
          message: t("Notifications.displayName.invalid"),
        }),
      z.string().length(0),
    ]),
    email: z.string()
      .min(1, { message: t("Notifications.email.required") })
      .email({ message: t("Notifications.email.invalid") }),
    mobile: z.string().optional(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    realName: z.string().optional(),
    ref: z.string()
      .min(1, { message: t("Notifications.ref.required") })
      .default("COREINTERNAL"),
  })
  .refine((data) => data.password === data.confirmPassword, {
      message: t("Notifications.password.notMatch"),
      path: ["confirmPassword"],
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<FormSchema>({
    defaultValues: {
      displayName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      realName: "",
      ref: "COREINTERNAL",
    },
    resolver: zodResolver(formSchema),
  });

  async function action(payload: RegisterPayload) {
    setLoading(true); 
    try {
      const res = await register(payload);

      if (res?.success) {
        setIsSuccess(true); 
      } else if (res?.error) {
        setError("root", { message: getErrorMessage(res.error) });
      }
    } catch (error) {
      setError("root", { message: t("Notifications.error.unknown") });
    } finally {
      setLoading(false); 
    }
  }

  function getErrorMessage(error: string): string {
    switch (error) {
        case "account already exists":
            return t("RegisterPage.error.alreadyExists");
        case "registration failed":
            return t("RegisterPage.error.registrationFailed");
        case "Email verification failed":
            return t("RegisterPage.error.emailSendingFailed");
        default:
            return t("RegisterPage.error.unknownError");
    }
}

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const { confirmPassword, realName, mobile, ...filteredData } = data;
    action(filteredData);
  });

  if (isSuccess) {
    return (
      <Successed
        title={t("RegisterPage.succeed.congratulation")}
        message={t("RegisterPage.succeed.message")}
        state="success"
      />
    );
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
          <div
            className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
            role="status"
          >
          </div>
        </div>
      )}

      <AuthFormContainer onSubmit={onSubmit} error={errors.root?.message}>
        <ControlledTextInput
          label={t("Shared.displayName", { optional: true })}
          tooltips={t("Notifications.displayName.description", {
            optional: true,
          })}
          name="displayName"
          control={control}
          leftElement={<Icon icon="person" />}
        />
        <ControlledTextInput
          label={t("Shared.email")}
          name="email"
          control={control}
          leftElement={<Icon icon="person" />}
          autoComplete="email"
        />
        <ControlledPasswordInput
          label={t("Shared.password")}
          tooltips={t("Notifications.password.description")}
          name="password"
          control={control}
          autoComplete="new-password"
        />
        <ControlledPasswordInput
          label={t("Shared.confirmPassword")}
          name="confirmPassword"
          control={control}
          autoComplete="new-password"
        />

        <ControlledTextInput
          label={t("Shared.ref")}
          name="ref"
          control={control}
          leftElement={<Icon icon="person" />}
          disabled
        />

        {/* SignUp button with loading */}
        <Button type="submit" className="my-5" disabled={loading}>
          {loading ? t("Shared.loading") : t("RegisterPage.signUp")}
        </Button>

        <span className="text-center text-[13px]">
          {t("RegisterPage.alreadyHaveAccount")}{" "}
          <AuthRoute.Login.Link className="text-accent-400 hover:text-accent-400">
            {t("Shared.signIn")}
          </AuthRoute.Login.Link>
        </span>
      </AuthFormContainer>
    </>
  );
}