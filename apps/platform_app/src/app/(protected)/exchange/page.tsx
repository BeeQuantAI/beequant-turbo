'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';
import ContentCard from './_components/ContentCard';

const ExchangeManagement = () => {
  useTitle('Exchange Management - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Crypto Exchange Management</h3>
        </Col>
      </Row>
      <Row>
        <ContentCard />
      </Row>
    </Container>
  );
};

export default ExchangeManagement;
