import styled from 'styled-components';
import { CardBody } from '@/shared/components/Card';
import {
  colorAccentGreen,
  colorDustyWhite,
  colorGray,
  colorLightGray,
  colorText,
} from '@/styles/palette';
import { PieChart, ResponsiveContainer } from 'recharts';
import { left, marginRight, mirrorY, paddingLeft, paddingRight, right } from '@/styles/directions';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

export const DashboardPortfolioCard = styled(CardBody)`
  padding: 20px 30px 25px;

  .progress {
    margin-top: 20px;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }

  svg {
    fill: ${colorLightGray};
  }
`;

export const PortfolioCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PortfolioCardTitle = styled.h5`
  direction: ltr;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.color || colorAccentGreen};
`;

export const PortfolioCardDescription = styled.h5<{ theme: string }>`
  text-align: ${left};
  opacity: 0.7;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => (props.theme === 'dark' ? colorDustyWhite : colorGray)};
  margin-top: 3px;
  text-transform: uppercase;
`;

export const DashboardWidgetCard = styled(CardBody)`
  padding: 25px 20px;

  .progress-bar {
    border-radius: 5px;
    background-color: unset;

    p {
      font-size: 14px;
      font-weight: 500;
      ${right}: -7px;
    }
  }
`;

export const WidgetCardWrap = styled.div`
  display: flex;
  margin-top: -15px;
`;

export const WidgetCardTotalAreaWrap = styled(WidgetCardWrap)`
  margin-top: -55px;
`;

export const WidgetCardTotal = styled.p`
  font-size: 18px;
  height: 24px;
  ${marginRight}: auto;
  ${paddingRight}: 10px;
  margin-top: auto;
  line-height: 24px;
`;

export const WidgetCardTotalLarge = styled.p`
  font-size: 30px;
  font-weight: 500;
  height: 24px;
  ${marginRight}: auto;
  ${paddingRight}: 10px;
  margin-top: auto;
  margin-bottom: 4px;
  line-height: 24px;
  color: ${(props) => props.color || colorAccentGreen};
`;

export const WidgetCardChartContainer = styled.div`
  flex: 1;
  width: 0;
  min-width: 0;

  @media (min-width: 1200px) {
    min-width: 0;
    max-width: 180px;
  }
`;

export const WidgetTrendingIconUp = styled(TrendingUpIcon)`
  fill: ${colorAccentGreen};
  height: 24px;
  width: 24px;
  ${marginRight}: 3px;
  transform: ${mirrorY};
  min-width: 24px;
  margin-top: auto;
`;

export const WidgetTrendingIconDown = styled(TrendingDownIcon)`
  fill: ${({ color }) => color || colorAccentGreen};
  height: 24px;
  width: 24px;
  ${marginRight}: 3px;
  transform: ${mirrorY};
  min-width: 24px;
  margin-top: auto;
`;

export const DashboardAreaChartContainer = styled(ResponsiveContainer)`
  font-size: 11px;

  .recharts-legend-wrapper {
    bottom: 0 !important;
  }
`;

export const DashboardPieChartContainer = styled(ResponsiveContainer)`
  text-align: ${left};
  height: 280px !important;

  .recharts-surface {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    .recharts-legend-wrapper {
      position: relative !important;
    }
  }
`;

export const DashboardPieChart = styled(PieChart)`
  ${paddingLeft}: 0;
  height: 200px !important;
`;

export const DashboardPieChartFlex = styled(PieChart)`
  ${paddingLeft}: 0;
  height: auto !important;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const DashboardChartLegend = styled.ul`
  padding: 0;
  list-style: none;

  span {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    ${marginRight}: 10px;
    // didn't rtl
    margin-right: 10px;
  }

  li {
    margin-top: 5px;
    color: ${colorText};
  }
`;

export const DashboardChartLegendTable = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 1199px) {
    margin-top: 370px;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    margin-top: 350px;
    width: 390px;
  }

  @media (max-width: 400px) {
    margin-top: 250px;
  }

  // Use <Bullet /> instead
  .bullet {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    ${marginRight}: 10px;
    // didn't rtl
    margin-right: 10px;
  }

  li {
    margin-top: 5px;
    color: ${colorText};
  }
`;

export const Bullet = styled('span')<{ size: string }>`
  height: ${({ size }) => size || '10px'};
  width: ${({ size }) => size || '10px'};
  border-radius: 50%;
  display: inline-block;
  ${marginRight}: 10px;
  // didn't rtl
  margin-right: 10px;
  background-color: ${({ color }) => color};
`;
