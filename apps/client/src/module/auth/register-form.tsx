"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from "@src/module/common";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { register, RegisterPayload } from "./auth-service";
import { FormHeader } from "./form-header";
import { AuthRoute } from "./route";

type FormSchema = z.infer<typeof formSchema>;
const formSchema = z.object({
  displayName: z.string(),
  email: z.string().email(),
  mobile: z.string().optional(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  realName: z.string().optional(),
  ref: z.string(),
});

export function RegisterForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<FormSchema>({
    defaultValues: {
      displayName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      realName: "",
      ref: "COREINTERNAL",
    },
    resolver: zodResolver(formSchema),
  });

  async function action(payload: RegisterPayload) {
    const res = await register(payload);

    if (res.error) {
      setError("root", { message: res.error });
    }
  }

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const { confirmPassword, realName, mobile, ...filteredData } = data;
    action(filteredData);
  });

  return (
    <form
      className="flex max-w-lg flex-col gap-5 bg-slate-50 px-16 py-12 dark:bg-neutral-900"
      onSubmit={onSubmit}
    >
      <FormHeader />

      {errors.root && <span className="text-error">{errors.root.message}</span>}

      <ControlledTextInput
        label="Display Name (optional)"
        name="displayName"
        control={control}
        leftElement={<Icon icon="person" />}
      />
      <ControlledTextInput
        label="Email"
        name="email"
        control={control}
        leftElement={<Icon icon="person" />}
        autoComplete="email"
      />
      <ControlledTextInput
        label="Mobile (Not Allowed By Backend???)"
        name="mobile"
        control={control}
        leftElement={<Icon icon="person" />}
      />
      <ControlledTextInput
        label="Real Name (Not in Figma But Requested In CreateUserInput Schema, And Then Not Allowed By Backend???)"
        name="realName"
        control={control}
        leftElement={<Icon icon="person" />}
      />
      <ControlledPasswordInput
        label="Password"
        name="password"
        control={control}
        autoComplete="new-password"
      />
      <ControlledPasswordInput
        label="Confirm Password"
        name="confirmPassword"
        control={control}
        autoComplete="new-password"
      />

      <ControlledTextInput
        label="Reference"
        name="ref"
        control={control}
        leftElement={<Icon icon="person" />}
        disabled
      />

      <Button type="submit" variant="default">
        Sign Up
      </Button>
      <span className="text-center text-sm text-neutral-500">
        {"Already have an account? "}
        <AuthRoute.Login.Link className="text-primary-400 hover:text-primary-500">
          Sign In
        </AuthRoute.Login.Link>
      </span>
    </form>
  );
}
