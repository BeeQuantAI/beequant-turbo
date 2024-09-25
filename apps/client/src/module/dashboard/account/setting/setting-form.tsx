"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControlledTextInput, Icon, Button } from "@src/module/common";
import * as z from "zod";
import { displayNamePatten } from "@src/utils/validation-message";
import { useTranslations } from "next-intl";

export function AccountSettingForm() {
  const t = useTranslations();

  const formSchema = z.object({
    displayName: z.union([
      z
        .string()
        .min(4, { message: t("Notifications.displayName.minLength") })
        .max(65, { message: t("Notifications.displayName.maxLength") })
        .regex(displayNamePatten, {
          message: t("Notifications.displayName.invalid"),
        }),
      z
        .string()
        .length(0)
        .transform(() => "New User"),
    ]),
    realName: z.string(),
    email: z
      .string()
      .min(1, { message: t("Notifications.email.required") })
      .email({ message: t("Notifications.email.invalid") }),
    mobile: z.string(),
    ref: z.string().min(1, { message: t("Notifications.ref.required") }),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      displayName: "",
      realName: "",
      email: "",
      mobile: "",
      ref: "admin",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: FormSchema) => {
    console.log(formData);
  };
  return (
    <div className="dark:bg-primary-900 bg-primary-50 shadow-settingPage dark:shadow-settingPage flex flex-col rounded-lg p-5">
      <div className="mb-[30px] space-y-1">
        <h1 className="text-base font-bold">{t("SettingPage.title")}</h1>
        <h5 className="text-primary-700 dark:text-primary-100 text-sm opacity-70">
          {t("SettingPage.subtitle")}
        </h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <ControlledTextInput
          direction="horizontal"
          label={t("SettingPage.realName")}
          name="realName"
          control={control}
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
          direction="horizontal"
          label={t("Shared.email")}
          name="email"
          control={control}
          leftElement={<Icon icon="email" />}
        />
        <ControlledTextInput
          direction="horizontal"
          label={t("SettingPage.mobile")}
          name="mobile"
          control={control}
          leftElement={<Icon icon="mobile" />}
        />
        <ControlledTextInput
          direction="horizontal"
          label={t("Shared.ref")}
          name="ref"
          control={control}
          leftElement={<Icon icon="person" />}
        />
        <div className="mb-[10px] ml-[90px] mt-2 flex gap-4 sm:ml-[140px]">
          <Button type="submit">{t("SettingPage.submit")}</Button>
          <Button variant="secondary" onClick={() => reset()}>
            {t("SettingPage.cancel")}
          </Button>
        </div>
      </form>
    </div>
  );
}
