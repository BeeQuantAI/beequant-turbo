"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import { Successed } from "@src/module/common";
import { VERIFY_EMAIL } from "@src/graphql";
import { useMutation } from "@apollo/client";

type VerifyEmailPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

type ResultState = {
  status: "loading" | "success" | "error";
  message: string;
};

export function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
  const t = useTranslations();
  const [verifyEmailMutation] = useMutation(VERIFY_EMAIL);
  const [result, setResult] = useState<ResultState>({
    status: "loading",
    message: "",
  });

  const action = useCallback(async () => {
    const extractedToken = searchParams.token;
    const extractedEmail = searchParams.email;

    const getErrorMessage = (error: string | null | undefined): string => {
      switch (error) {
        case "User not found":
          return t("VerifyEmail.failed.message.userNotFound");
        case "Verify link expired":
          return t("VerifyEmail.failed.message.expiredLink");
        case "Invalid verify link":
          return t("VerifyEmail.failed.message.invalidLink");
        default:
          return t("VerifyEmail.failed.message.unknownError");
      }
    };

    if (
      typeof extractedToken === "string" &&
      typeof extractedEmail === "string"
    ) {
      try {
        const { data } = await verifyEmailMutation({
          variables: { email: extractedEmail, token: extractedToken },
        });

        const code = data?.verifyEmail.code;
        const message = data?.verifyEmail.message;

        if (
          code === 200 ||
          message === "Email is already verified, please login"
        ) {
          setResult({
            status: "success",
            message: t("VerifyEmail.succeed.message"),
          });
        } else {
          setResult({
            status: "error",
            message: getErrorMessage(message),
          });
        }
      } catch (err) {
        setResult({
          status: "error",
          message: t("VerifyEmail.failed.message.unknownError"),
        });
        console.error(err);
      }
    }
  }, [searchParams.email, searchParams.token, t, verifyEmailMutation]);

  useEffect(() => {
    action();
  }, [action]);

  if (result.status === "loading") {
    return null;
  }

  return (
    <Successed
      title={
        result.status === "success"
          ? t("VerifyEmail.succeed.title")
          : t("VerifyEmail.failed.title")
      }
      message={result.message}
      state={result.status === "success" ? "success" : "failed"}
    />
  );
}
