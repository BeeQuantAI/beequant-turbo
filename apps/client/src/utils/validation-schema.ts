import { z } from "zod";
import { passwordPatten } from "@src/utils/validation-message";

export const passwordValidationSchema = (t: (key: string) => string) => {
    return z.string()
        .min(1, { message: t("Notifications.password.required") })
        .min(8, { message: t("Notifications.password.minLength") })
        .max(32, { message: t("Notifications.password.maxLength") })
        .regex(passwordPatten, { message: t("Notifications.password.invalid") });
};