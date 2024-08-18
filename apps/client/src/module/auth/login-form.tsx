'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  ControlledCheckbox,
  ControlledPasswordInput,
  ControlledTextInput,
  Icon,
} from '@src/module/common';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SocialButton } from '../common/social-button';
import { AuthFormContainer } from './auth-form-container';
import { AuthRoute } from './route';
import { USER_LOGIN } from '@src/module/graphql/auth';
import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { DashboardRoute} from '@src/module/dashboard';

type LoginForm = z.infer<typeof formSchema>;
// source of truth for this login form <= this is the law, is the king, is the absolute authority for this form - K总
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  isStaySignedIn: z.boolean().optional(),
});

// Need this to enforce default value to match the LoginForm schema, because if you do it in the `useForm` hook, it turns it into a `Partial<LoginForm>` type.
const defaultValues = {
  email: '',
  password: '',
  isStaySignedIn: false,
} satisfies LoginForm; // Satifies make sure this object you are making can satisfy the LoginForm schema.

export function LoginForm() {
  const router = useRouter();
  const [login] = useMutation(USER_LOGIN);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });


  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await login({
        variables: {
          email: data.email,
          password: data.password,
          isStaySignedIn: data.isStaySignedIn,
        },
      });

      if (res?.data?.login) {
        Cookies.set('token', res.data.login.data);
        router.push(DashboardRoute.Root.Path);
      }
    } catch (err) {
      console.log(err);
      setError('root', { message: (err as Error).message || 'An error occurred' });
    }
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)} error={errors.root?.message}>
      <div className="flex flex-col gap-5">
        <ControlledTextInput
          label="Email"
          name="email"
          control={control}
          leftElement={<Icon icon="person" />}
          autoComplete="username"
        />

        <div className="flex flex-col gap-1">
          <ControlledPasswordInput
            label="Password"
            name="password"
            control={control}
            autoComplete="current-password"
          />

          <AuthRoute.ForgetPassword.Link
            className="text-accent-300 hover:text-accent-400 self-end text-xs transition-colors">
            Forgot Password?
          </AuthRoute.ForgetPassword.Link>

          <ControlledCheckbox
            className="self-start"
            label="Stay signed in"
            name="isStaySignedIn"
            control={control}
          />
        </div>
      </div>

      <Button type="submit">Sign In</Button>

      <Button
        variant="outline"
        onClick={() => router.push(AuthRoute.Register.Path)}
      >
        Create Account
      </Button>

      <div className="relative mt-8 flex w-full content-center justify-center">
        <p
          className={clsx(
            'before:bg-primary-300 text-[13px] before:absolute before:left-0 before:top-2.5 before:h-px before:w-28',
            'after:bg-primary-300 after:absolute after:right-0 after:top-2.5 after:h-px after:w-28',
          )}
        >
          Or Easily Using
        </p>
      </div>

      <div className="relative flex content-center justify-center space-x-3">
        <SocialButton social="facebook" />
        <SocialButton social="google" />
      </div>
    </AuthFormContainer>
  );
}
