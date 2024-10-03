"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    ControlledPasswordInput,
} from "@src/module/common";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthFormContainer } from "./auth-form-container";
import { resetPassword, ResetPasswordPayload } from "./auth-service";
import { AuthRoute } from "./route";
import { useTranslations } from "next-intl";
import { passwordValidationSchema } from "@src/utils/validation-schema";
import { useState } from "react";
import { Successed } from "@src/module/common";

type ResetPasswordFormProps = {
    searchParams: { [key: string]: string | undefined }
};

export function ResetPasswordForm({ searchParams }: ResetPasswordFormProps) {
    const t = useTranslations();
    const passwordSchema = passwordValidationSchema(t);
    const [isSuccess, setIsSuccess] = useState(false);

    type FormSchema = z.infer<typeof formSchema>;
    const formSchema = z
        .object({
            password: passwordSchema,
            confirmPassword: passwordSchema,
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
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(formSchema),
    });

    async function action(payload: ResetPasswordPayload) {
        const res = await resetPassword(payload);

        if (res?.success) {
            setIsSuccess(true);
        }
        else if (res?.error === "Token has expired" || res?.error === "Invalid reset password token") {
            setError("root", { message: t("Notifications.forgotPassword.tokenInvalid") });
        }
        else if (res?.error) {
            setError("root", { message: t("Notifications.forgotPassword.resetPasswordError") });
            console.error('Error during password reset request:', res?.error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        const extractedToken = searchParams.token;
    
        if (typeof extractedToken === 'string'){
            action({
                newPassword: data.password,
                resetToken: extractedToken,
            });
        }
        else {
            setError("root", { message: t("Notifications.forgotPassword.tokenInvalid") });
        }
    });

    if (isSuccess) {
        return (
            <Successed
                title={t("ForgotPasswordPage.succeed.title")}
                message={t("ForgotPasswordPage.succeed.message")}
                state="success"
            />
        );
    }

    return (
        <AuthFormContainer
            onSubmit={onSubmit}
            error={errors.root?.message}
            title={t("ForgotPasswordPage.resetPasswordTitle")}
        >
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

            <Button type="submit" className="my-5">
                {t("Shared.submit")}
            </Button>

            <span className="text-center text-[13px]">
                {t("ForgotPasswordPage.backTo")}
                <AuthRoute.Login.Link className="text-accent-400 hover:text-accent-400">
                    {t("Shared.signIn")}
                </AuthRoute.Login.Link>
            </span>
        </AuthFormContainer>
    );
}
