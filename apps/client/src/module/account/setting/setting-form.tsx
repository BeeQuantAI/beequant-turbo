"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ControlledTextInput, Icon, Button } from "@src/module/common";
import * as z from "zod";
import { displayNamePatten } from "@src/utils/validation-message";
import { useTranslations } from "next-intl";
import { FormContainer } from "../../common/form-container";
import { useUser } from "@src/module/auth/user-store";
import { useEffect } from "react";
import { fetchUserInfo } from "@src/module/auth/user-store";
import { Toaster } from "react-hot-toast";
import { errorNotify, succeedNotify } from "@src/module/common/toast";
import { UPDATE_USER_PROFILE } from "@src/graphql/user";
import { useMutation } from "@apollo/client";
import { Loading } from "@src/module/common/loading-animation";

export function AccountSettingForm() {
  const t = useTranslations();
  const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE);
  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    displayName: z
      .string()
      .min(4, { message: t("Notifications.displayName.minLength") })
      .max(65, { message: t("Notifications.displayName.maxLength") })
      .regex(displayNamePatten, {
        message: t("Notifications.displayName.invalid"),
      }),
    realName: z.union([
      z
        .string()
        .min(4, { message: t("Notifications.realName.minLength") })
        .max(15, { message: t("Notifications.realName.maxLength") })
        .regex(displayNamePatten, {
          message: t("Notifications.realName.invalid"),
        }),
      z.string().length(0),
      z.string().length(0),
    ]),
    email: z
      .string()
      .min(1, { message: t("Notifications.email.required") })
      .email({ message: t("Notifications.email.invalid") }),
    mobile: z.union([
      z
        .string()
        .regex(/(^\+?\d+)$/, { message: t("Notifications.mobile.invalid") }),
      z.string().length(0),
      z
        .string()
        .regex(/(^\+?\d+)$/, { message: t("Notifications.mobile.invalid") }),
      z.string().length(0),
    ]),

    ref: z.string(),
  });
  const handleReset = () => {
    const currentValues = getValues();
    reset({
      ...currentValues,
      displayName: user?.displayName ?? "",
      realName: user?.realName ?? "",
      mobile: user?.mobile ?? "",
    });
  };

  type FormSchema = z.infer<typeof formSchema>;

  const user = useUser((s) => s.user);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormSchema>({
    defaultValues: {
      displayName: "",
      realName: "",
      email: "",
      mobile: "",
      ref: "",
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const userFiledName = Object.keys(getValues()) as Array<keyof FormSchema>;
    userFiledName.forEach((fieldName) => {
      if (user !== null && fieldName in user) {
        const value = user[fieldName];
        setValue(fieldName, value ?? "");
      }
    });
  }, [user, setValue, getValues]);
  const onSubmit = async (formData: FormSchema) => {
    setLoading(true);
    if (user?.id) {
      try {
        const input = {
          displayName: formData.displayName,
          mobile: formData.mobile,
          realName: formData.realName,
        };
        const { data } = await updateUserProfile({
          variables: { id: user.id, input },
        });
        if (data?.updateUser) {
          succeedNotify(t("Notifications.updateProfile.succeed"));
          await fetchUserInfo();
        } else {
          errorNotify(t("Notifications.updateProfile.failed"));
        }
      } catch (error) {
        errorNotify(t("Notifications.updateProfile.unknownError"));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Toaster />
      <FormContainer
        title={t("Profile.header")}
        description={t("SettingPage.subtitle")}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:gap-y-12 md:gap-y-8 xl:gap-y-6"
        >
          <ControlledTextInput
            direction="horizontal"
            label={t("SettingPage.realName")}
            name="realName"
            control={control}
            tooltips={t("Notifications.realName.description", {
              optional: false,
            })}
            leftElement={<Icon icon="person" />}
          />
          <ControlledTextInput
            direction="horizontal"
            label={t("Shared.displayName", { optional: false })}
            name="displayName"
            control={control}
            tooltips={t("Notifications.displayName.description", {
              optional: false,
            })}
            leftElement={<Icon icon="person" />}
          />
          <ControlledTextInput
            className="dark:border-primary-600 bg-primary-100 dark:bg-primary-800 w-full border px-2 py-1 text-xs"
            direction="horizontal"
            label={t("Shared.email")}
            name="email"
            control={control}
            leftElement={<Icon icon="email" />}
            disabled
          />
          <ControlledTextInput
            direction="horizontal"
            label={t("SettingPage.mobile")}
            name="mobile"
            control={control}
            tooltips={t("Notifications.mobile.description", {
              optional: false,
            })}
            leftElement={<Icon icon="mobile" />}
          />
          <ControlledTextInput
            className="dark:border-primary-600 bg-primary-100 dark:bg-primary-800 w-full border px-2 py-1 text-xs"
            direction="horizontal"
            label={t("Shared.ref")}
            name="ref"
            control={control}
            leftElement={<Icon icon="person" />}
            disabled
          />
          <div className="mb-[10px] ml-[90px] mt-2 flex gap-4 sm:ml-[140px]">
            <Button type="submit">{t("SettingPage.submit")}</Button>
            <Button variant="secondary" onClick={() => handleReset()}>
              {t("SettingPage.cancel")}
            </Button>
          </div>
        </form>
      </FormContainer>
    </>
  );
}
