import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

interface CardProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  centered?: boolean;
  theme?: string;
}

export const Card: React.FC<CardProps> = ({ children, height, className }) => (
  <BootstrapCard className={`w-full pb-7 ${height ? height : 'h-full'} border-none bg-transparent ${className}`}>
    {children}
  </BootstrapCard>
);

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => (
  <div className={`h-full bg-gray-50 rounded-lg shadow-md p-5 ${className}`}>
    {children}
  </div>
);

export const CardTitleWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-7 uppercase relative text-left">
    {children}
  </div>
);

export const CardTitle: React.FC<CardTitleProps> = ({ children, centered }) => (
  <h5 className={`text-xs font-bold ${centered ? 'text-center' : 'text-left'}`}>
    {children}
  </h5>
);

export const WidgetCardTitle: React.FC<CardTitleProps> = ({ children, centered, theme }) => (
  <h5 className={`opacity-70 text-xs font-medium ${centered ? 'text-center' : 'text-left'} ${theme === 'dark' ? 'text-gray-200' : 'text-gray-500'}`}>
    {children}
  </h5>
);

export const CardSubhead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm leading-5 opacity-70 mt-1">
    {children}
  </p>
);

