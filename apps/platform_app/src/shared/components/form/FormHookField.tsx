import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import Error from '@/shared/components/form/Error';

type FormFieldProps = {
  name: string;
  errors?: any;
  control: any;
  defaultValue: any;
  isAboveError?: boolean;
  component?: any;
  rules?: any;
  disabled?: boolean;
  [key: string]: any;
};

export const FormField: React.FC<FormFieldProps> = ({
  name,
  errors = null,
  control,
  component: Component = 'input',
  isAboveError = false,
  defaultValue,
  rules = {},
  ...other
}) => (
  <FormInputWrap>
    <Controller
      name={name}
      render={({ field }) => <Component {...field} {...other} />}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
    />
    {errors?.[name] && <Error error={errors[name].message} $top={isAboveError} />}
  </FormInputWrap>
);

export default FormField;

// region STYLES

const FormInputWrap = styled.div`
  width: 100%;
`;

// endregion
