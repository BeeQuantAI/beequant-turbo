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
import { AuthFormContainer } from "./auth-form-container";
import { register, RegisterPayload } from "./auth-service";
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
    <AuthFormContainer onSubmit={onSubmit} error={errors.root?.message}>
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

      <Button type="submit" className="my-5">
        Sign Up
      </Button>

      <span className="text-center text-[13px]">
        {"Already have an account? "}
        <AuthRoute.Login.Link className="text-accent-400 hover:text-accent-400">
          Sign In
        </AuthRoute.Login.Link>
      </span>
    </AuthFormContainer>
  );
}
