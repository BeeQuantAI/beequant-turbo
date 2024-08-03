import { Col } from 'react-bootstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import { colorBlue } from '@/styles/palette';
import {
  DashboardPortfolioCard,
  PortfolioCardDescription,
  PortfolioCardTitle,
  PortfolioCardWrap,
} from './DashboardCardElements';

const TotalAssets = () => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <DashboardPortfolioCard>
        <PortfolioCardWrap>
          <PortfolioCardTitle color={colorBlue}>$ 878 372</PortfolioCardTitle>
          <TrendingUpIcon />
        </PortfolioCardWrap>
        <PortfolioCardDescription>Total assets</PortfolioCardDescription>
        <ProgressBar now={18} label="18%" $rounded size="small" $gradient="blue" $top />
      </DashboardPortfolioCard>
    </Card>
  </Col>
);

export default TotalAssets;
