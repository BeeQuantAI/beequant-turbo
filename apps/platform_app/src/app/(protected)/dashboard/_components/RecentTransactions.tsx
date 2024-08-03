import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardTitleWrap, WidgetCardTitle } from '@/shared/components/Card';
import {
  DashboardWidgetCard,
  WidgetCardChartContainer,
  WidgetCardTotalLarge,
  WidgetCardWrap,
} from './DashboardCardElements';

const data = [
  { id: 0, name: 'Page A', pv: 255 },
  { id: 1, name: 'Page B', pv: 452 },
  { id: 2, name: 'Page C', pv: 154 },
  { id: 3, name: 'Page D', pv: 85 },
  { id: 4, name: 'Page E', pv: 545 },
  { id: 5, name: 'Page F', pv: 438 },
  { id: 6, name: 'Page G', pv: 523 },
];

const RecentTransactions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (item: any) => {
    const index = data.indexOf(item.payload);
    setActiveIndex(index);
  };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <CardTitleWrap>
            <WidgetCardTitle>Recent transactions</WidgetCardTitle>
          </CardTitleWrap>
          <WidgetCardWrap>
            <WidgetCardTotalLarge>{activeItem.pv}</WidgetCardTotalLarge>
            <WidgetCardChartContainer>
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="pv" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#c88ffa'}
                        key={entry.id}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </WidgetCardChartContainer>
          </WidgetCardWrap>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default RecentTransactions;
