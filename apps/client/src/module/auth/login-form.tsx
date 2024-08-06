"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from "@src/module/common";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login, LoginPayload } from "./auth-service";
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
    <div className="card mx-auto flex min-h-96 w-full max-w-5xl items-center justify-center py-4 shadow-2xl shadow-slate-500 dark:shadow-sky-400">
      <div className="mx-auto h-full">
        <h2 className="mb-2 text-center text-2xl font-semibold">Login</h2>
        <form onSubmit={onSubmit} className="flex flex-col">
          {errors.root && (
            <span className="text-error">{errors.root.message}</span>
          )}

          <div className="mb-4">
            <ControlledTextInput
              name="email"
              control={control}
              leftElement={<Icon icon="person" />}
              autoComplete="username"
            />

            <ControlledPasswordInput
              name="password"
              control={control}
              autoComplete="current-password"
            />
          </div>

          <div className="text-primary text-right">
            <Link href="/forgot-password">
              <span className="hover:text-primary inline-block text-sm transition duration-200 hover:cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </Link>
          </div>

          <Checkbox label="Remember me" />

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
      </div>
    </div>
  );
}
