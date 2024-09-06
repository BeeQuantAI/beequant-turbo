import React from 'react';

interface DashboardCardTitleProps {
  title: string;
  color: string;
}

export const DashboardCardTitle: React.FC<DashboardCardTitleProps> = ({ title, color }) => (
  <h2 className="text-[28px] font-medium mt-[-4px] font-sans" style={{ color }}>
    {title}
  </h2>
);

interface DashboardCardDescriptionProps {
  description: string;
}

export const DashboardCardDescription: React.FC<DashboardCardDescriptionProps> = ({ description }) => (
  <h5 className="text-[12px] font-medium text-left opacity-70 mt-[-4px] uppercase text-primary-600 font-sans">
    {description}
  </h5>
);
