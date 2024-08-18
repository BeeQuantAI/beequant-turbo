"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControlledTextInput, Icon, Button } from "@src/module/common";
import * as z from "zod";
import {
  DisplayErrorMsgs,
  displayNamePatten,
  EmailErrorMsgs,
  RefErrorMsgs,
} from "@src/utils/validation-message";
import { UserHelpMsgs } from "@src/utils/user-help-messgage";

const formSchema = z.object({
  displayName: z.union([
    z
      .string()
      .min(4, { message: DisplayErrorMsgs.MinLength })
      .max(15, { message: DisplayErrorMsgs.MaxLength })
      .regex(displayNamePatten, {
        message: DisplayErrorMsgs.Invalid,
      }),
    z
      .string()
      .length(0)
      .transform(() => "New User"),
  ]),
  realName: z.string(),
  email: z
    .string()
    .min(1, { message: EmailErrorMsgs.Required })
    .email({ message: EmailErrorMsgs.Invalid }),
  mobile: z.string(),
  ref: z.string().min(1, { message: RefErrorMsgs.Required }),
});

type FormSchema = z.infer<typeof formSchema>;

export function AccountSettingForm() {
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
        <h1 className="text-base font-bold">SETTINGS</h1>
        <h5 className="text-primary-700 dark:text-primary-100 text-sm opacity-70">
          Update your profile
        </h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <ControlledTextInput
          direction="horizontal"
          label="Real Name"
          name="realName"
          placeholder="Real Name"
          control={control}
          leftElement={<Icon icon="person" />}
        />
        <ControlledTextInput
          direction="horizontal"
          label="Display Name"
          name="displayName"
          placeholder="Display Name"
          control={control}
          tooltips={UserHelpMsgs.DisplayNameSettingPage}
          leftElement={<Icon icon="person" />}
        />
        <ControlledTextInput
          direction="horizontal"
          label="Email"
          name="email"
          placeholder="Email"
          control={control}
          leftElement={<Icon icon="email" />}
        />
        <ControlledTextInput
          direction="horizontal"
          label="Mobile"
          name="mobile"
          placeholder="Mobile"
          control={control}
          leftElement={<Icon icon="mobile" />}
        />
        <ControlledTextInput
          direction="horizontal"
          label="Reference"
          name="ref"
          placeholder="Reference"
          control={control}
          leftElement={<Icon icon="person" />}
        />
        <div className="mb-[10px] ml-[90px] mt-2 flex gap-4 sm:ml-[140px]">
          <Button type="submit">Submit</Button>
          <Button variant="secondary" onClick={() => reset()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
