import React from 'react';
import Error from '@/shared/components/form/Error';
import styled from 'styled-components';

type FormFieldProps = {
  input?: any;
  meta?: any;
  component?: any;
  isAboveError?: boolean;
  wrapperClassName?: string;
  [key: string]: any;
};

const FormField: React.FC<FormFieldProps> = ({
  input = null,
  meta: { touched = false, error = '' },
  component: Component = 'input',
  isAboveError = false,
  wrapperClassName = '',
  ...props
}) => (
  <FormInputWrap className={wrapperClassName}>
    <Component {...props} {...input} />
    {touched && error && <Error error={error} $top={isAboveError} />}
  </FormInputWrap>
);

export const renderComponentField =
  (component: React.ElementType) => (props: { [key: string]: any }) => (
    <FormField component={component} {...props} />
  );

export default FormField;

// region STYLES

const FormInputWrap = styled.div`
  width: 100%;
`;

// endregion
