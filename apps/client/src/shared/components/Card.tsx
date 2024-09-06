import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    {children}
  </div>
);

export default Card;
