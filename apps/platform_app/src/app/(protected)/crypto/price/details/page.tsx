'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const PriceDetails = () => {
  useTitle('Exchanges - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Price Details</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceDetails;
