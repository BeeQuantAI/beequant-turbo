import React from 'react';
import CardComponent from './CardComponent';

const TotalAssets = () => (
  <CardComponent 
    title="$878,372" 
    subtitle="Total assets" 
    theme="blue" 
    type="percentage" 
    percentage={18} 
  />
);

export default TotalAssets;