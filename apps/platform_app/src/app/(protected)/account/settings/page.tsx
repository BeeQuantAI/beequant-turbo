'use client';

import { Col, Container, Row } from 'react-bootstrap';
import PasswordField from '@/shared/components/form/Password';
import { Card, CardBody, CardTitleWrap, CardTitle, CardSubhead } from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import FormField from '@/shared/components/form/FormHookField';
import { Controller, useForm } from 'react-hook-form';

const Setting = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('data:', data);
  };

  return (
    <Container>
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <CardBody>
              <CardTitleWrap>
                <CardTitle>Settings</CardTitle>
                <CardSubhead>Update your profile</CardSubhead>
              </CardTitleWrap>
              <FormContainer $horizontal onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <FormGroupLabel>Real Name</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="realName"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{}}
                      defaultValue=""
                      placeholder="Real Name"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Display Name</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="displayName"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{
                        required: 'This is required field',
                      }}
                      defaultValue=""
                      placeholder="Display Name"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Email</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="email"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{}}
                      defaultValue="Your@mail.com"
                      placeholder="Email"
                      isAboveError
                      disabled
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
                      defaultValue="initial password"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Mobile</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="mobile"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{}}
                      defaultValue=""
                      placeholder="Mobile"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Reference</FormGroupLabel>
                  <FormGroupField>
                    <FormField
                      name="ref"
                      control={control}
                      component="input"
                      errors={errors}
                      rules={{
                        required: 'This is required field',
                      }}
                      defaultValue="admin"
                      placeholder="Reference"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  {/* @ts-ignore - Ignoring because of complex union types incorrectly inferred */}
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" type="button" onClick={() => {}}>
                    Cancel
                  </Button>
                </FormButtonToolbar>
              </FormContainer>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
