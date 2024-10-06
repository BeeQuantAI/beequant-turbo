"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  ControlledCheckbox,
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
import { AuthRoute } from "./route";
import { useTranslations } from "next-intl";
import { DashboardRoute } from "@src/module/dashboard";
import { USER_LOGIN } from "@src/graphql";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTheme } from "@src/module/system";
import { fetchUserInfo } from "@src/module/auth/user-store";
import { useSearchParams } from "next/navigation";

export function LoginForm({ token }: { token: string }) {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || DashboardRoute.Root.Path;

  type LoginForm = z.infer<typeof formSchema>;
  // source of truth for this login form <= this is the law, is the king, is the absolute authority for this form - K总

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: t("Notifications.email.required") })
      .email({ message: t("Notifications.email.invalid") }),
    password: z
      .string()
      .min(1, { message: t("Notifications.password.required") }),
    isStaySignedIn: z.boolean().optional(),
  });

  // Need this to enforce default value to match the LoginForm schema, because if you do it in the `useForm` hook, it turns it into a `Partial<LoginForm>` type.
  const defaultValues = {
    email: "",
    password: "",
    isStaySignedIn: false,
  } satisfies LoginForm; // Satifies make sure this object you are making can satisfy the LoginForm schema.
  const router = useRouter();
  const [login] = useMutation(USER_LOGIN);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (loginData) => {
    setLoading(true);
    try {
      const { data } = await login({
        variables: loginData,
      });
      const code = data?.login.code;

      if (code === 200) {
        const token = data?.login.data;
        token && Cookies.set("token", token);
        setLoading(false);
        await fetchUserInfo();
        router.push(redirectUrl);
      }
      if (code === 10010) {
        setLoading(false);
        setError("root", {
          message: t("Notifications.login.emailNotVerified"),
        });
      }
      if (code === 10003) {
        setLoading(false);
        setError("root", { message: t("Notifications.login.failed") });
      }
      if (code === 10002) {
        setLoading(false);
        setError("root", {
          message: t("Notifications.login.accountNotExists"),
        });
      }
    } catch (error) {
      setLoading(false);
      setError("root", { message: t("Notifications.login.failed") });
    }
  });

  useEffect(() => {
    setLoading(true);
    if (token && typeof window !== "undefined") {
      console.log("Token found in the URL, start login process.");
      const handleLogin = async () => {
        try {
          if (token) {
            token && Cookies.set("token", token);
            await fetchUserInfo();
            router.replace("/dashboard");
          } else {
            console.log("No token found in the URL, Oauth failed.");
            router.replace(AuthRoute.Login.Path);
          }
        } catch (error) {
          console.error("OAuthLogin failed:", error);
        } finally {
          setLoading(false);
        }
      };
      handleLogin();
    } else {
      setLoading(false);
    }
  }, [token, router]);

  const handleThirdPartyLogin = async (provider: string): Promise<void> => {
    setLoading(true);
    const thirdPartyApiUrl = process.env.NEXT_PUBLIC_THIRD_PARTY_API_URL;
    window.location.href = `${thirdPartyApiUrl}/${provider}`;
  };

  const backgroundColor = theme === "dark" ? "bg-black" : "bg-white";

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${backgroundColor} bg-opacity-50`}
        >
          <div
            className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
            role="status"
          ></div>
        </div>
      )}
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

            <ControlledCheckbox
              name="isStaySignedIn"
              control={control}
              label={t("LoginPage.staySignedIn")}
            />
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
              "before:bg-primary-300 before:absolute before:left-0 before:top-2.5 before:h-px before:w-28 max-sm:before:w-20",
              "after:bg-primary-300 after:absolute after:right-0 after:top-2.5 after:h-px after:w-28 max-sm:after:w-20",
            )}
          >
            {t("Shared.easyUsing")}
          </p>
        </div>

        <div className="relative flex content-center justify-center space-x-3">
          {/* <SocialButton
          social="facebook"
          handleThirdPartyLogin={() => handleThirdPartyLogin("facebook")}
        /> */}
          <SocialButton
            social="google"
            handleThirdPartyLogin={async () =>
              await handleThirdPartyLogin("google")
            }
          />
        </div>
      </AuthFormContainer>
    </>
  );
}
