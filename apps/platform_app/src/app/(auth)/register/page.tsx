'use client';

import { useState } from 'react';
import {
  AccountCard,
  AccountContent,
  AccountWrap,
} from '@/shared/components/account/AccountElements';
import { useMutation } from '@apollo/client';
import { USER_REGISTER } from '@/graphql/auth';
import { useTitle } from '@/hooks/useTitle';
import RegisterForm from './_components/RegisterForm';
import RegisterSuccess from './_components/RegisterSuccess';
import AccountHeader from '../_components/AccountHeader';
import AccountFooter from '../_components/AccountFooter';

const Register = () => {
  const [register] = useMutation(USER_REGISTER);
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  useTitle('Register - BeeQuant');

  const onSubmit = async (data: {
    email: string;
    password: string;
    displayName: string;
    ref: string;
  }) => {
    const result = await register({
      variables: {
        input: data,
      },
    });

    if (result.data?.register.code === 200) {
      setIsRegistered(true);
    }
    // for register failed
    setError(`Register failed: ${result.data?.register.message}`);
  };

  if (isRegistered) {
    return <RegisterSuccess />;
  }

  return (
    <AccountWrap>
      <AccountContent>
        <AccountCard>
          <AccountHeader />
          <RegisterForm onSubmit={onSubmit} error={error} />
          <AccountFooter isLogin={false} />
        </AccountCard>
      </AccountContent>
    </AccountWrap>
  );
};

export default Register;
