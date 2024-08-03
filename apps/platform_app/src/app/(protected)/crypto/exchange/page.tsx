'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const CryptoExchanges = () => {
  useTitle('Exchanges - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Crypto Exchanges</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default CryptoExchanges;
