'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const CryptoPrices = () => {
  useTitle('Prices - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Crypto Prices</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default CryptoPrices;
