"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from 'react';
import { Successed } from "@src/module/common";
import { verifyEmail } from "./auth-service";

type VerifyEmailPageProps = {
    searchParams: { [key: string]: string | string[] | undefined }
};

export function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
    const t = useTranslations();
    const [error, setError] = useState<string | null>(null);

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

                if (res?.error) {
                    let message: string;
                    switch (res.error) {
                        case "User not found":
                            message = t("VerifyEmail.failed.message.userNotFound");
                            break;
                        case "Email is already verified, please login":
                            message = t("VerifyEmail.failed.message.alreadyVerified");
                            break;
                        case "Verify link expired":
                            message = t("VerifyEmail.failed.message.expiredLink");
                            break;
                        case "Invalid verify link":
                            message = t("VerifyEmail.failed.message.invalidLink");
                            break;
                        default:
                            message = t("VerifyEmail.failed.message.unknownError");
                    }
                    setError(message);
                }
            } catch (err) {
                setError(t("VerifyEmail.failed.message.unknownError"));
                console.error(err);
            }
        } else {
            setError(t("VerifyEmail.failed.message.unknownError"));
            console.error("Invalid verify email link");
        }
    }

    if (error) {
        return (
            <Successed
                title={t("VerifyEmail.failed.title")}
                message={error}
                state="failed"
            />
        );
    }

    return null;
}