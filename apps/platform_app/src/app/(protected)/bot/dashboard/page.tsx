'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useTitle } from '@/hooks/useTitle';

const Dashboard = () => {
  useTitle('Bots Dashboard - BeeQuant');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Bots Board</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
