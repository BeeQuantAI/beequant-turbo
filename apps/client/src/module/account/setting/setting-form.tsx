"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControlledTextInput, Icon, Button } from "@src/module/common";
import * as z from "zod";
import { displayNamePatten } from "@src/utils/validation-message";
import { useTranslations } from "next-intl";
import { FormContainer } from "../../common/form-container";

export function AccountSettingForm() {
  const t = useTranslations();

  const formSchema = z.object({
    displayName: z.union([
      z
        .string()
        .min(4, { message: t("Notifications.displayName.minLength") })
        .max(15, { message: t("Notifications.displayName.maxLength") })
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
    <FormContainer
      title={t("SettingPage.title")}
      description={t("SettingPage.subtitle")}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[30px] flex flex-col gap-y-5"
      >
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
          <Button type="submit">{t("Shared.submit")}</Button>
          <Button variant="secondary" onClick={() => reset()}>
            {t("Shared.cancel")}
          </Button>
        </div>
      </form>
    </FormContainer>
  );
}
