import { useState } from 'react';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import PasswordField from '@/shared/components/form/Password';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { displayNamePatten, emailPattern, passwordPatten } from '@/shared/utils/helpers';
import { marginLeft } from '@/styles/directions';
import {
  AccountButton,
  AccountButtons,
  LastFormGroup,
} from '@/shared/components/account/AccountElements';
import { Controller, useForm } from 'react-hook-form';
import FormField from '@/shared/components/form/FormHookField';
import { config } from '@/config/config';

const { referenceName } = config;

const defaultReferenceName = referenceName;

type RegisterFormProps = {
  onSubmit: (data: any) => void;
  error: string;
};

type IsFocused = {
  displayName: boolean;
  email: boolean;
  password: boolean;
  repeatPassword: boolean;
  ref: boolean;
};

// region STYLES
const RegisterButtons = styled(AccountButtons)`
  ${marginLeft}: 0!important;
  margin-bottom: 20px;

  button {
    margin-bottom: 0;
  }
`;

// endregion

const RegisterForm = ({ onSubmit, error = '' }: RegisterFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const pwd = watch('password');

  const prepareFormData = (data: any) => {
    const { repeatPassword, ...formData } = data;
    onSubmit(formData);
  };

  const [isFocused, setIsFocused] = useState<IsFocused>({
    displayName: false,
    email: false,
    password: false,
    repeatPassword: false,
    ref: false,
  });

  const handleFocus = (fieldName: string) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [fieldName]: true,
    }));
  };

  const handleBlur = (fieldName: string) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [fieldName]: false,
    }));
  };

  return (
    <FormContainer onSubmit={handleSubmit(prepareFormData)}>
      <Alert variant="danger" show={!!error}>
        {error}
      </Alert>
      <FormGroup>
        <FormGroupLabel>
          Display Name (optional)
          <span>
            {isFocused.displayName &&
              ': between 4 to 15 characters, only letters, numbers, dashes and underscore are allowed'}
          </span>
        </FormGroupLabel>
        <FormGroupField>
          <FormGroupIcon>
            <AccountOutlineIcon />
          </FormGroupIcon>
          <FormField
            name="displayName"
            control={control}
            component="input"
            errors={errors}
            rules={{
              pattern: {
                value: displayNamePatten,
                message:
                  'Display Name must contain 4 to 15 characters, only letters, numbers, dashes and underscore are allowed',
              },
            }}
            defaultValue=""
            placeholder="Display Name"
            isAboveError
            onFocus={() => handleFocus('displayName')}
            onBlur={() => handleBlur('displayName')}
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>
          Email
          <span>{isFocused.email && ''}</span>
        </FormGroupLabel>
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
              required: 'This is a required field',
              pattern: {
                value: emailPattern,
                message: 'Entered value does not match email format',
              },
            }}
            defaultValue=""
            placeholder="Email"
            isAboveError
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>
          Password
          <span>
            {isFocused.password &&
              ': 8 to 32 characters, including letter, number and special character'}
          </span>
        </FormGroupLabel>
        <FormGroupField>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <PasswordField
                input={{ ...field, onBlur: () => handleBlur(field.name) }}
                meta={{
                  touched: !!fieldState.error,
                  error: fieldState.error?.message,
                }}
                placeholder="Password"
                keyIcon
                isAboveError
                onFocus={() => handleFocus(field.name)}
              />
            )}
            rules={{
              required: 'This is a required field',
              pattern: {
                value: passwordPatten,
                message:
                  'must contain 8 to 32 characters, including letter, number and special character',
              },
            }}
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <FormGroup>
        <FormGroupLabel>
          Repeat Password
          <span>{isFocused.repeatPassword && ''}</span>
        </FormGroupLabel>
        <FormGroupField>
          <Controller
            name="repeatPassword"
            control={control}
            render={({ field, fieldState }) => (
              <PasswordField
                input={field}
                meta={{
                  touched: !!fieldState.error,
                  error: fieldState.error?.message,
                }}
                placeholder="Repeat Password"
                keyIcon
                isAboveError
              />
            )}
            rules={{
              required: 'This is a required field',
              validate: (value) => value === pwd || 'The passwords do not match',
            }}
            defaultValue=""
          />
        </FormGroupField>
      </FormGroup>
      <LastFormGroup>
        <FormGroupLabel>Reference</FormGroupLabel>
        <FormGroupField>
          <FormGroupIcon>
            <AccountOutlineIcon />
          </FormGroupIcon>
          <FormField
            name="ref"
            control={control}
            component="input"
            errors={errors}
            rules={{
              required: 'This is a required field',
            }}
            defaultValue={defaultReferenceName}
            placeholder="Reference"
            isAboveError
            disabled
          />
        </FormGroupField>
      </LastFormGroup>
      <RegisterButtons>
        {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <AccountButton type="submit" variant="primary">
          Sign Up
        </AccountButton>
      </RegisterButtons>
    </FormContainer>
  );
};

export default RegisterForm;
