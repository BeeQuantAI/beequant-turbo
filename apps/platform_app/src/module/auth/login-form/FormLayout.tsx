'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Alert } from 'react-bootstrap';
import Link from 'next/link';
import { AccountButton, LoginForm } from '@/shared/components/account/AccountElements';
import { AUTH_TOKEN, EMAIL, REMEMBER_ME } from '@/shared/constants/storage';
import { useRouter } from 'next/navigation';
import { useSearchParams } from '@/hooks/useSearchParams';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '@/graphql/auth';
import LoginFormGroup from './LoginFormGroup';

type loginData = { email: string; password: string; remember_me: boolean };

const FormLayout = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember_me: false,
    },
  });
  const { handleSubmit, watch } = methods;

  const rememberMe = watch('remember_me');

  useEffect(() => {
    if (rememberMe !== undefined && typeof window !== 'undefined') {
      localStorage.setItem(REMEMBER_ME, rememberMe.toString());
    }
  }, [rememberMe]);

  const router = useRouter();
  const [error, setError] = useState('');
  const originUrl = useSearchParams().get('orgUrl');
  const [login] = useMutation(USER_LOGIN);

  const onSubmit = async (data: loginData) => {
    const result = await login({
      variables: data,
    });
    if (result.data && result.data.login.code === 200) {
      // refresh store after login success
      // store.refetchHandler();
      if (typeof window !== 'undefined') {
        if (data.remember_me) {
          sessionStorage.setItem(AUTH_TOKEN, '');
          localStorage.setItem(EMAIL, data.email);
          localStorage.setItem(AUTH_TOKEN, result.data.login.data ?? '');
        } else {
          localStorage.setItem(EMAIL, '');
          localStorage.setItem(AUTH_TOKEN, '');
          sessionStorage.setItem(AUTH_TOKEN, result.data.login.data ?? '');
        }
      }
      if (originUrl && originUrl !== '/') {
        // history.push(originUrl);
        router.back();
      } else {
        router.push('dashboard');
      }
    } else {
      // for login failed
      setError(`Login failed: ${result.data?.login.message}`);
    }
  };
  return (
    <FormProvider {...methods}>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Alert className="w-100" variant="danger" show={!!error}>
          {error}
        </Alert>
        <LoginFormGroup />
        {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <AccountButton variant="primary" type="submit">
          Sign In
        </AccountButton>
        <Link href="/register" passHref className="w-100">
          <AccountButton variant="outline-primary">Create Account</AccountButton>
        </Link>
      </LoginForm>
    </FormProvider>
  );
};

export default FormLayout;
