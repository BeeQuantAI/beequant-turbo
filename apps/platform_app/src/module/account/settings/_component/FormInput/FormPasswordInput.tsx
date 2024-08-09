import {
  FormFieldButton,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { useState } from 'react';
import { FieldErrors } from 'react-hook-form';
import styled from 'styled-components';
import EyeIcon from 'mdi-react/EyeIcon';
import Error from '@/shared/components/form/Error';
import FormIcon from './_component/FormIcon';

interface FormInputProps {
  placeholder: string;
  errors: FieldErrors;
  field: { [key: string]: any };
  isAboveError?: boolean;
}

export default function FormPasswordInput({
  placeholder,
  field,
  errors,
  isAboveError,
}: FormInputProps) {
  const [passwordShown, setPasswordShown] = useState(false);
  const { name } = field;
  return (
    <FormGroup>
      <FormGroupLabel>{placeholder}</FormGroupLabel>
      <FormGroupField>
        <FormIcon name={name} />
        <FormInputWrap>
          <input placeholder={placeholder} type={passwordShown ? 'text' : 'password'} {...field} />
          {errors[name] && <Error error={errors[name]?.message as string} $top={isAboveError} />}
        </FormInputWrap>
        <FormFieldButton
          $active={passwordShown.toString()}
          type="button"
          onClick={() => setPasswordShown((shown) => !shown)}
        >
          <EyeIcon />
        </FormFieldButton>
      </FormGroupField>
    </FormGroup>
  );
}

// region STYLES

const FormInputWrap = styled.div`
  width: 100%;
`;

// endregion
