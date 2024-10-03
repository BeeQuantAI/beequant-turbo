"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    ControlledTextInput,
    Icon,
} from "@src/module/common";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthFormContainer } from "./auth-form-container";
import { forgotPassword, ForgotPasswordPayload } from "./auth-service";
import { AuthRoute } from "./route";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function ForgotPasswordForm() {
    const t = useTranslations();

    type FormSchema = z.infer<typeof formSchema>;
    const formSchema = z.object({
        email: z
        .string()
        .min(1, { message: t("Notifications.email.required") })
        .email({ message: t("Notifications.email.invalid") })
    });

    const [successMessage, setSuccessMessage] = useState('');
    
    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<FormSchema>({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(formSchema),
    });

    async function action(payload: ForgotPasswordPayload) {
        const res = await forgotPassword(payload);

        if (res?.success || res?.error === "account doesn't exist") {
            setSuccessMessage(t("Notifications.forgotPassword.emailRequestSuccess"));
        }
        else { 
            setError("root", { message: t("Notifications.forgotPassword.resetPasswordError") });
            console.error('Error during password reset request:', res?.error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        setSuccessMessage('');
        action(data);
    });

    return (
        <AuthFormContainer
            onSubmit={onSubmit}
            error={errors.root?.message}
            title={t("ForgotPasswordPage.forgetPasswordTitle")}
        >
            {successMessage && (
                <div className="text-accent-400 hover:text-accent-400">{successMessage}</div>
            )}
            <ControlledTextInput
                label={t("Shared.email")}
                name="email"
                control={control}
                leftElement={<Icon icon="person" />}
                autoComplete="email"
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