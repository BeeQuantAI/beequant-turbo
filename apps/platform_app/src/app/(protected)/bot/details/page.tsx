'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const BotDetails = () => {
  useTitle('Bot Details - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Bot Details</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default BotDetails;
