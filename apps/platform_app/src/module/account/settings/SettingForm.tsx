'use client';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card, CardBody, CardTitleWrap, CardTitle, CardSubhead } from '@/shared/components/Card';
import SettingFormLayout from './SettingFormLayout';

const SettingForm = () => (
  <Container>
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <CardTitleWrap>
              <CardTitle>Settings</CardTitle>
              <CardSubhead>Update your profile</CardSubhead>
            </CardTitleWrap>
            <SettingFormLayout />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SettingForm;
