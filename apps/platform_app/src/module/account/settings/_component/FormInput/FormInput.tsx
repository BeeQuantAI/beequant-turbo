'use client';

import { FormGroup, FormGroupField, FormGroupLabel } from '@/shared/components/form/FormElements';
import Error from '@/shared/components/form/Error';
import styled from 'styled-components';
import { FieldErrors } from 'react-hook-form';
import FormIcon from './_component/FormIcon';

interface FormInputProps {
  placeholder: string;
  errors: FieldErrors;
  field: { [key: string]: any };
  isAboveError?: boolean;
  disabled?: boolean;
}

function FormInput({ field, placeholder, errors, isAboveError, disabled }: FormInputProps) {
  const { name } = field;
  return (
    <FormGroup>
      <FormGroupLabel>{placeholder}</FormGroupLabel>
      <FormGroupField>
        <FormIcon name={name} />
        <FormInputWrap>
          <input placeholder={placeholder} disabled={disabled} {...field} />
          {errors[name] && <Error error={errors[name]?.message as string} $top={isAboveError} />}
        </FormInputWrap>
      </FormGroupField>
    </FormGroup>
  );
}

export default FormInput;

// region STYLES

const FormInputWrap = styled.div`
  width: 100%;
`;

// endregion
