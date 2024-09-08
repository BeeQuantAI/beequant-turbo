import React from 'react';
import CardComponent from './CardComponent';

const TotalProfitEarned = () => (
  <CardComponent
    title="$165,832"
    subtitle="Total profit earned"
    theme="red"
    type="percentage"
    percentage={27}
  />
);

export default TotalProfitEarned;