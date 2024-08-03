import {
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import FormField from '@/shared/components/form/FormHookField';
import { emailPattern } from '@/shared/utils/helpers';
import { EMAIL, REMEMBER_ME } from '@/shared/constants/storage';
import { Controller, useFormContext } from 'react-hook-form';
import PasswordField from '@/shared/components/form/Password';
import { AccountForgotPassword } from '@/shared/components/account/AccountElements';
import Link from 'next/link';
import { CheckBoxField } from '@/shared/components/form/FormCheckBox';
export default function LoginFormGroup() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const localEmail = typeof window !== 'undefined' ? localStorage.getItem(EMAIL) : null;
  return (
    <>
      <FormGroup>
        <FormGroupLabel>Email</FormGroupLabel>
        <FormGroupField>
          <FormGroupIcon>
            <AccountOutlineIcon />
          </FormGroupIcon>
          <FormField
            name="email"
            control={control}
            component="input"
            errors={errors}
            rules={{
              required: 'This is required field',
              pattern: {
                value: emailPattern,
                message: 'Entered value does not match email format',
              },
            }}
            defaultValue={typeof window !== 'undefined' ? localEmail : ''}
            placeholder="Email"
            isAboveError
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>Password</FormGroupLabel>
        <FormGroupField>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <PasswordField
                input={field}
                meta={{
                  touched: !!fieldState.error,
                  error: fieldState.error?.message,
                }}
                placeholder="Password"
                keyIcon
                isAboveError
              />
            )}
            rules={{ required: 'This is required field' }}
            defaultValue=""
          />
          <AccountForgotPassword>
            <Link href="login">Forgot a password?</Link>
          </AccountForgotPassword>
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupField>
          <Controller
            control={control}
            name="remember_me"
            defaultValue={
              typeof window !== 'undefined' ? localStorage.getItem(REMEMBER_ME) === 'true' : false
            }
            render={({ field: { onChange, value } }) => (
              <CheckBoxField
                name="remember_me"
                label="Remember me"
                checked={value}
                onChange={onChange}
              />
            )}
          />
        </FormGroupField>
      </FormGroup>
    </>
  );
}
