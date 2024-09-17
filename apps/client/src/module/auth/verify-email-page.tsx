"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from 'react';
import { Successed } from "@src/module/common";
import { verifyEmail } from "./auth-service";

type VerifyEmailPageProps = {
    searchParams: { [key: string]: string | string[] | undefined }
};

type ResultState = {
    status: 'loading' | 'success' | 'error';
    message: string;
};

export function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
    const t = useTranslations();
    const [result, setResult] = useState<ResultState>({
        status: 'loading',
        message: '',
    });

    useEffect(() => {
        action();
    }, []);

    async function action() {
        const extractedToken = searchParams.token;
        const extractedEmail = searchParams.email;

        if (typeof extractedToken === 'string' && typeof extractedEmail === 'string') {
            try {
                const res = await verifyEmail({
                    email: extractedEmail,
                    token: extractedToken,
                });

                if (res?.success || res?.error === "Email is already verified, please login") {
                    setResult({
                        status: 'success',
                        message: t("VerifyEmail.succeed.message")
                    });
                } else if (res?.error) {
                    setResult({
                        status: 'error',
                        message: getErrorMessage(res.error)
                    });
                }
            } catch (err) {
                setResult({
                    status: 'error',
                    message: t("VerifyEmail.failed.message.unknownError")
                });
                console.error(err);
            }
        }
    }

    function getErrorMessage(error: string): string {
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
    }

    if (result.status === 'loading') {
        return null;
    }

    return (
        <Successed
            title={result.status === 'success'
                ? t("VerifyEmail.succeed.title")
                : t("VerifyEmail.failed.title")
            }
            message={result.message}
            state={result.status === 'success' ? "success" : "failed"}
        />
    );
}