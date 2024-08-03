import { Col } from 'react-bootstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import {
  DashboardPortfolioCard,
  PortfolioCardDescription,
  PortfolioCardTitle,
  PortfolioCardWrap,
} from './DashboardCardElements';

const BookingCancels = () => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <DashboardPortfolioCard>
        <PortfolioCardWrap>
          <PortfolioCardTitle>25</PortfolioCardTitle>
          <TrendingUpIcon />
        </PortfolioCardWrap>
        <PortfolioCardDescription>Pending orders</PortfolioCardDescription>
        <ProgressBar now={50} label="50%" $rounded size="small" $gradient="turquoise" $top />
      </DashboardPortfolioCard>
    </Card>
  </Col>
);

export default BookingCancels;
