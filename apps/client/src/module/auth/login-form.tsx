"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from "@src/module/common";
import clsx from "clsx";
import { useRouter } from "@src/configs/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SocialButton } from "../common/social-button";
import { AuthFormContainer } from "./auth-form-container";
import { login, LoginPayload } from "./auth-service";
import { AuthRoute } from "./route";
import { useTranslations } from "next-intl";

type LoginForm = z.infer<typeof formSchema>;
// source of truth for this login form <= this is the law, is the king, is the absolute authority for this form - K总
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remeber: z.string(),
});

// Need this to enforce default value to match the LoginForm schema, because if you do it in the `useForm` hook, it turns it into a `Partial<LoginForm>` type.
const defaultValues = {
  email: "",
  password: "",
  remeber: "",
} satisfies LoginForm; // Satifies make sure this object you are making can satisfy the LoginForm schema.

export function LoginForm() {
  const t = useTranslations();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  async function action(payload: LoginPayload) {
    const res = await login(payload);

    if (res?.error) {
      console.log(res.error);
      setError("root", { message: t("Notifications.login.failed") });
    }
  }

  const onSubmit = handleSubmit((data) => {
    action(data);
  });

  return (
    <AuthFormContainer onSubmit={onSubmit} error={errors.root?.message}>
      <div className="flex flex-col gap-5">
        <ControlledTextInput
          label={t("Shared.email")}
          name="email"
          control={control}
          leftElement={<Icon icon="person" />}
          autoComplete="username"
        />

        <div className="flex flex-col gap-1">
          <ControlledPasswordInput
            label={t("Shared.password")}
            name="password"
            control={control}
            autoComplete="current-password"
          />

          <AuthRoute.ForgetPassword.Link className="text-accent-300 hover:text-accent-400 self-end text-xs transition-colors">
            {t("LoginPage.forgetPassword")}
          </AuthRoute.ForgetPassword.Link>

          <Checkbox className="self-start" label={t("LoginPage.rememberMe")} />
        </div>
      </div>

      <Button type="submit">{t("Shared.signIn")}</Button>

      <Button
        variant="outline"
        onClick={() => router.push(AuthRoute.Register.Path)}
      >
        {t("LoginPage.createAccount")}
      </Button>

      <div className="relative mt-8 flex w-full content-center justify-center">
        <p
          className={clsx(
            "before:bg-primary-300 text-[13px] before:absolute before:left-0 before:top-2.5 before:h-px before:w-28",
            "after:bg-primary-300 after:absolute after:right-0 after:top-2.5 after:h-px after:w-28",
          )}
        >
          {t("Shared.easyUsing")}
        </p>
      </div>

      <div className="relative flex content-center justify-center space-x-3">
        <SocialButton social="facebook" />
        <SocialButton social="google" />
      </div>
    </AuthFormContainer>
  );
}
