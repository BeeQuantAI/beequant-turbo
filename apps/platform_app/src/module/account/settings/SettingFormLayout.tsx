'use client';

import { FormButtonToolbar, FormContainer } from '@/shared/components/form/FormElements';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/Button';
import * as z from 'zod';
import { DisplayErrorMsgs, EmailErrorMsgs, RefErrorMsgs } from '@/shared/utils/helpers';
import FormInput from './_component/FormInput/FormInput';

const formSchema = z.object({
  displayName: z
    .string()
    .min(1, { message: DisplayErrorMsgs.Required })
    .min(4, { message: DisplayErrorMsgs.MinLength })
    .max(15, { message: DisplayErrorMsgs.MaxLength })
    .regex(/^[a-zA-Z0-9-_]+$/, {
      message: DisplayErrorMsgs.Invalid,
    }),
  email: z
    .string()
    .min(1, { message: EmailErrorMsgs.Required })
    .email({ message: EmailErrorMsgs.Invalid }),
  ref: z.string().min(1, { message: RefErrorMsgs.Required }),
});

function SettingFormLayout() {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      realName: '',
      displayName: '',
      email: '',
      mobile: '',
      ref: 'admin',
      test: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log('data:', data);
  };

  return (
    <FormContainer $horizontal onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="realName"
        control={control}
        render={({ field, formState: { errors } }) => (
          <FormInput placeholder="Real Name" isAboveError errors={errors} field={field} />
        )}
      />
      <Controller
        name="displayName"
        control={control}
        render={({ field, formState: { errors } }) => (
          <FormInput placeholder="Display Name" isAboveError errors={errors} field={field} />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, formState: { errors } }) => (
          <FormInput placeholder="Email" isAboveError errors={errors} field={field} />
        )}
      />
      <Controller
        name="mobile"
        control={control}
        render={({ field, formState: { errors } }) => (
          <FormInput placeholder="Mobile" isAboveError errors={errors} field={field} />
        )}
      />
      <Controller
        name="ref"
        control={control}
        render={({ field, formState: { errors } }) => (
          <FormInput placeholder="Reference" isAboveError errors={errors} field={field} />
        )}
      />
      <FormButtonToolbar>
        {/* @ts-ignore - Ignoring because of complex union types incorrectly inferred */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Cancel
        </Button>
      </FormButtonToolbar>
    </FormContainer>
  );
}

export default SettingFormLayout;
