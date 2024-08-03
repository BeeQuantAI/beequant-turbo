'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const Management = () => {
  useTitle('Bots Management - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Bots Management</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Management;
