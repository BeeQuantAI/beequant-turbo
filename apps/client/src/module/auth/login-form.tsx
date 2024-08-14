"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from "@src/module/common";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login, LoginPayload } from "./auth-service";
import { FormHeader } from "./form-header";
import { AuthRoute } from "./route";
import { SocialButton } from "../common/socialButton";
import clsx from "clsx";

type LoginForm = z.infer<typeof formSchema>;
// source of truth for this login form <= this is the law, is the king, is the absolute authority for this form - K总
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remeber: z.string(),
});

// Need this to enforce default value to match the LoginForm schema, because if you do it in the `useForm` hook, it turns it into a `Partial<LoginForm>` type.
const defaultValues = {
  email: "",
  password: "",
  remeber: "",
} satisfies LoginForm; // Satifies make sure this object you are making can satisfy the LoginForm schema.

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  async function action(payload: LoginPayload) {
    const res = await login(payload);

    if (res?.error) {
      console.log(res.error);
      setError("root", { message: res.error });
    }
  }

  const onSubmit = handleSubmit((data) => {
    action(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-400 dark:bg-primary-600 flex flex-col gap-5 bg-slate-50 px-[60px] py-[50px]"
    >
      <FormHeader />

      {errors.root && <span className="text-error">{errors.root.message}</span>}

      <div className="flex flex-col gap-5">
        <ControlledTextInput
          label="Email"
          name="email"
          control={control}
          leftElement={<Icon icon="person" />}
          autoComplete="username"
        />

        <div>
          <ControlledPasswordInput
            label="Password"
            name="password"
            control={control}
            autoComplete="current-password"
          />

          <AuthRoute.ForgetPassword.Link className="text-accent-250 hover:text-accent-400 float-right text-xs transition-colors">
            Forgot Password?
          </AuthRoute.ForgetPassword.Link>
        </div>

        <Checkbox label="Remember me" />
      </div>

      <Button type="submit" variant="default" size="medium">
        Sign In
      </Button>

      <AuthRoute.Register.Link>
        <Button variant="outline" size="medium">
          Create Account
        </Button>
      </AuthRoute.Register.Link>

      <div className="relative mb-5 mt-[35px] flex h-[20.797px] w-[400px] content-center justify-center text-white">
        <p
          className={clsx(
            "text-[13px] before:absolute before:left-0 before:top-2.5 before:h-px before:w-28 before:bg-white",
            "after:absolute after:right-0 after:top-2.5 after:h-px after:w-28 after:bg-white",
          )}
        >
          Or Easily Using
        </p>
      </div>

      <div className="relative flex content-center justify-center space-x-3 text-white">
        <SocialButton social="facebook" />
        <SocialButton social="google" />
      </div>
    </form>
  );
}
