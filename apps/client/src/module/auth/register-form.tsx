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
    const res = (await register(payload)) || {};

    if (res?.error) {
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
      className="dark:bg-primary-600 bg-primary-50 flex max-w-[520px] flex-col gap-5 px-[60px] py-[50px]"
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
      <div className="mb-5 mt-5">
        <Button type="submit" variant="default">
          Sign Up
        </Button>
      </div>
      <span className="text-primary-50 text-center text-[13px]">
        {"Already have an account? "}
        <AuthRoute.Login.Link className="text-accent-400 hover:text-accent-500">
          Sign In
        </AuthRoute.Login.Link>
      </span>
    </form>
  );
}
