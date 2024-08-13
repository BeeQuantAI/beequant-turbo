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
      className="flex max-w-400 flex-col gap-5 bg-slate-50 px-[60px] py-[50px] dark:bg-primary-800"
    >
      <FormHeader />

      {errors.root && <span className="text-error">{errors.root.message}</span>}

      <div className="flex flex-col gap-5 dark:!text-white">
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

      <Button type="submit" variant="default" size="medium">
        Sign In
      </Button>

      <AuthRoute.Register.Link>
        <Button variant="outline" size="medium">
          Create Account
        </Button>
      </AuthRoute.Register.Link>

      <div className="flex justify-center content-center mt-[35px] mb-5 text-white relative w-[400px] h-[20.797px]">
        <p className="before:absolute before:left-0 before:top-2.5 before:w-24 before:h-px before:bg-white after:absolute after:right-0 after:top-2.5 after:w-24 after:h-px after:bg-white text-[13px]">Or Easily Using</p>
      </div>
      <div className="flex space-x-3 justify-center content-center relative text-white">
        <SocialButton variant="facebook">
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" 
            style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
          </svg>
        </SocialButton>
        <SocialButton variant="google">
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"
            style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          >
            <path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"/>
          </svg>
        </SocialButton>
      </div>
    </form>
  );
}
