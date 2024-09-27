import React from 'react';
import CardComponent from './CardComponent'; 

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
  return (
      <CardComponent
        title="Recent Transactions"
        theme="green"
        type="bar-chart"
        data={data}
        hideIcon={true}
        isSubtitleStyle={true}
        titleColor="#787985"
        customPaddingBottom="26px"
      />
  );
};

export default RecentTransactions;