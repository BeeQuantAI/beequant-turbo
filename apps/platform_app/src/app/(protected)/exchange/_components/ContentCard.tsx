import { Col } from 'react-bootstrap';
import { Card, CardBody, CardTitle, CardTitleWrap, CardSubhead } from '@/shared/components/Card';

const ContentCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>title</CardTitle>
          <CardSubhead>subtitle</CardSubhead>
        </CardTitleWrap>
        <p>content</p>
      </CardBody>
    </Card>
  </Col>
);

export default ContentCard;
