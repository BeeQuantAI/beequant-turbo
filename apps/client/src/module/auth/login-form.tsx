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
import { login, LoginPayload, OauthLogin } from "./auth-service";
import { AuthRoute } from "./route";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export function LoginForm({token}: {token: string}) {
  const t = useTranslations();

  type LoginForm = z.infer<typeof formSchema>;
  // source of truth for this login form <= this is the law, is the king, is the absolute authority for this form - K总

  const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: t("Notifications.email.required") })
        .email({ message: t("Notifications.email.invalid") }),
    password: z.string()
      .min(1, { message: t("Notifications.password.required") }),
    remember: z.string(),
  });

  // Need this to enforce default value to match the LoginForm schema, because if you do it in the `useForm` hook, it turns it into a `Partial<LoginForm>` type.
  const defaultValues = {
    email: "",
    password: "",
    remember: "",
  } satisfies LoginForm; // Satifies make sure this object you are making can satisfy the LoginForm schema.
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
      setError("root", { message: res.error });
    }
  }

  const onSubmit = handleSubmit((data) => {
    action(data);
  });

  useEffect(() => {
    if (token && typeof window !== "undefined") {
      OauthLogin({ token }).then((r) => console.log(r));
    }
  }, [token]);

  const handleThirdPartyLogin = (provider: string): void => {
    const thirdPartyApiUrl = process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL;
    window.location.href = `${thirdPartyApiUrl}/${provider}`;
  };

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
            Forgot Password?
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
        <SocialButton
          social="facebook"
          handleThirdPartyLogin={() => handleThirdPartyLogin("facebook")}
        />
        <SocialButton
          social="google"
          handleThirdPartyLogin={() => handleThirdPartyLogin("google")}
        />
      </div>
    </AuthFormContainer>
  );
}
