'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const BotCreate = () => {
  useTitle('Create Bot - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Bot Create</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default BotCreate;
