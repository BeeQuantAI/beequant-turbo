import React from 'react';
import CardComponent from './CardComponent';
const PendingOrders = () => (
  <CardComponent 
    title="25" 
    subtitle="Pending orders" 
    theme="green" 
    type="percentage" 
    percentage={50} 
  />
);

export default PendingOrders;