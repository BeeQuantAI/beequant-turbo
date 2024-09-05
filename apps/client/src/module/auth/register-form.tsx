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

export function RegisterForm() {
  const t = useTranslations();
  const passwordSchema = passwordValidationSchema(t);

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
    const res = await register(payload);

    if (res?.error) {
      setError("root", { message: res.error });
    }
  }

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const { confirmPassword, realName, mobile, ...filteredData } = data;
    action(filteredData);
  });

  return (
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
  );
}
