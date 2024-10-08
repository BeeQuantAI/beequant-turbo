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
import { AuthRoute } from "./route";
import { displayNamePatten } from "@src/utils/validation-message";
import { useTranslations } from "next-intl";
import { passwordValidationSchema } from "@src/utils/validation-schema";
import { USER_REGISTER } from "@src/graphql";
import { useMutation } from "@apollo/client";
import { Successed } from "@src/module/common";
import { useState } from "react";
import { Loading } from "../common/loading-animation";

export function RegisterForm() {
  const t = useTranslations();
  const passwordSchema = passwordValidationSchema(t);
  const [register] = useMutation(USER_REGISTER);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  type FormSchema = z.infer<typeof formSchema>;
  const formSchema = z
    .object({
      displayName: z.union([
        z
          .string()
          .min(4, { message: t("Notifications.displayName.minLength") })
          .max(65, { message: t("Notifications.displayName.maxLength") })
          .regex(displayNamePatten, {
            message: t("Notifications.displayName.invalid"),
          }),
        z.string().length(0),
      ]),
      email: z
        .string()
        .min(1, { message: t("Notifications.email.required") })
        .email({ message: t("Notifications.email.invalid") }),
      mobile: z.string().optional(),
      password: passwordSchema,
      confirmPassword: passwordSchema,
      realName: z.string().optional(),
      ref: z
        .string()
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

  function getErrorMessage(error: string | null | undefined): string {
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

  const onSubmit = handleSubmit(async (registerData) => {
    setLoading(true);
    const { confirmPassword, realName, mobile, ...filteredData } = registerData;
    try {
      const { data } = await register({
        variables: {
          input: {
            ...filteredData,
            ref: "COREINTERNAL",
          },
        },
      });

      const code = data?.register.code;

      if (code && code === 200) {
        setIsSuccess(true);
      } else {
        setError("root", { message: getErrorMessage(data?.register.message) });
      }
    } catch (error) {
      setError("root", { message: t("Notifications.error.unknown") });
    } finally {
      setLoading(false);
    }
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
      {loading && <Loading />}

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

        <Button type="submit" className="my-5">
          {t("RegisterPage.signUp")}
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
