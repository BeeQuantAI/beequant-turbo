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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
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
    console.log("wtf", data);
    action(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-8 bg-slate-100 px-16 py-12 dark:bg-neutral-900"
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

          <AuthRoute.ForgetPassword.Link className="text-primary-400 hover:text-primary-500 float-right text-xs transition-colors">
            Forgot Password?
          </AuthRoute.ForgetPassword.Link>
        </div>

        <Checkbox label="Remember me" />
      </div>

      <Button
        type="submit"
        variant="primary"
        textColor="white"
        animation="growing-bubble-tl-primary"
        size="medium"
      >
        Login
      </Button>

      <AuthRoute.Register.Link>
        <Button
          variant="secondary"
          textColor="blue"
          size="medium"
          animation="growing-bubble-tl-secondary"
        >
          Create Account
        </Button>
      </AuthRoute.Register.Link>
    </form>
  );
}
