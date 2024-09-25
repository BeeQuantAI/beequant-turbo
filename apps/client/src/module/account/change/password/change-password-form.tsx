"use client";
import { FormContainer } from "../../../common/form-container";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ControlledPasswordInput } from "@src/module/common";
import { useTranslations } from "next-intl";
import {
  changePassword,
  ChangePasswordPayload,
} from "./change-password-service";
import { Modal } from "@src/module/common/modal";
import { useRef } from "react";
import { useLogout } from "@src/module/auth";
import { passwordValidationSchema } from "@src/utils/validation-schema";
import { useState } from "react";
import { ChangeSuccess } from "./change-success";

export function ChangePasswordForm() {
  const t = useTranslations();
  const passwordSchema = passwordValidationSchema(t);
  const [isSuccess, setIsSuccess] = useState(false);
  const { revokeTokensAndClear } = useLogout();

  const updatePasswordSchema = z
    .object({
      oldPassword: passwordSchema,
      newPassword: passwordSchema,
      repeatNewPassword: passwordSchema,
    })
    .refine(
      ({ newPassword, repeatNewPassword }) => newPassword === repeatNewPassword,
      {
        message: t("Notifications.password.notMatch"),
        path: ["repeatNewPassword"],
      },
    );

  type FormSchema = z.infer<typeof updatePasswordSchema>;

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    },
    resolver: zodResolver(updatePasswordSchema),
  });

  async function action(payload: ChangePasswordPayload) {
    const res = await changePassword(payload);

    switch (res) {
      case 10003:
        setError("root", {
          message: t("Notifications.changePassword.currentPasswordWrong"),
        });
        break;
      case 10008:
        setError("root", { message: t("Notifications.changePassword.failed") });
        break;
      case 200:
        setIsSuccess(true);
        break;
      default:
        null;
    }
  }

  const onSubmit = handleSubmit(async (formData: FormSchema) => {
    const { repeatNewPassword, ...payload } = formData;
    action(payload);
  });

  // const modelRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      {isSuccess ? (
        <ChangeSuccess />
      ) : (
        <FormContainer
          title={t("UpdatePasswordPage.title")}
          description={t("UpdatePasswordPage.subtitle")}
        >
          {/* deprecated due to too ugly :P*/}
          {/* <Modal
        message={t("UpdatePasswordPage.succeed")}
        buttonLabel={t("UpdatePasswordPage.button")}
        ref={modelRef}
        onClick={async () => {
          await revokeTokensAndClear();
        }}
      /> */}
          <form className="mt-[30px] flex flex-col gap-y-5" onSubmit={onSubmit}>
            {errors?.root && (
              <span className="bg-error-300 text-error-900 text-error mb-5 rounded-md px-5 py-3 text-sm">
                {errors.root.message}
              </span>
            )}
            <ControlledPasswordInput
              direction="horizontal"
              label={t("UpdatePasswordPage.oldPassword")}
              name="oldPassword"
              control={control}
            />
            <ControlledPasswordInput
              direction="horizontal"
              label={t("UpdatePasswordPage.newPassword")}
              name="newPassword"
              control={control}
            />
            <ControlledPasswordInput
              direction="horizontal"
              label={t("Shared.confirmPassword")}
              name="repeatNewPassword"
              control={control}
            />
            <div className="mb-[10px] ml-[90px] mt-2 flex gap-4 sm:ml-[140px]">
              <Button type="submit">{t("Shared.submit")}</Button>
            </div>
          </form>
        </FormContainer>
      )}
    </>
  );
}
