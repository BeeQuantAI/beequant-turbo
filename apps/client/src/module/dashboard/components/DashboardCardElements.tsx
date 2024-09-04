import { ReactNode, ReactElement } from 'react';
import { CardBody } from '@src/shared/components/Card';
import { PieChart, ResponsiveContainer, LineChart } from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

type DashboardCardProps = {
  children: ReactNode;
  className?: string;
};

type ColorProps = {
  color?: string;
};

type SizeProps = {
  size?: string;
  color?: string;
};

export const DashboardPortfolioCard = ({ children, className = '' }: DashboardCardProps) => (
  <CardBody className={`px-7 py-5 ${className}`}>
    {children}
    <div className="progress mt-5">
      <p className="text-sm font-medium">Progress</p>
    </div>
  </CardBody>
);

export const PortfolioCardWrap = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-between items-end">
    {children}
  </div>
);

export const PortfolioCardTitle = ({ color = 'text-green-500', children }: ColorProps & { children: ReactNode }) => (
  <h5 className={`text-2xl font-medium leading-normal ${color}`}>
    {children}
  </h5>
);

export const PortfolioCardDescription = ({ theme, children }: { theme: string; children: ReactNode }) => (
  <h5 className={`text-left text-opacity-70 text-xs font-medium leading-normal uppercase mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
    {children}
  </h5>
);

export const DashboardWidgetCard = ({ children, className = '' }: DashboardCardProps) => (
  <CardBody className={`px-5 py-6 ${className}`}>
    {children}
    <div className="progress-bar rounded bg-transparent">
      <p className="text-sm font-medium mr-[-7px]">Progress</p>
    </div>
  </CardBody>
);

const WidgetCardWrap = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={className}>
    {children}
  </div>
);

export const WidgetCardTotalAreaWrap = ({ children }: { children: ReactNode }) => (
  <WidgetCardWrap className="mt-[-55px]">
    {children}
  </WidgetCardWrap>
);

export const WidgetCardTotal = ({ children }: { children: ReactNode }) => (
  <p className="text-lg h-6 mr-auto pr-2 mt-auto leading-6">
    {children}
  </p>
);

export const WidgetCardTotalLarge = ({ color = 'text-green-500', children }: ColorProps & { children: ReactNode }) => (
  <p className={`text-2xl font-medium h-6 mr-auto pr-2 mt-auto mb-1 leading-6 ${color}`}>
    {children}
  </p>
);

export const WidgetCardChartContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex-1 w-0 min-w-0 lg:max-w-[180px]">
    {children}
  </div>
);

export const WidgetTrendingIconUp = () => (
  <TrendingUpIcon className="fill-green-500 h-6 w-6 mr-1 transform scale-y-[-1] min-w-6 mt-auto" />
);

export const WidgetTrendingIconDown = ({ color = 'fill-green-500' }: ColorProps) => (
  <TrendingDownIcon className={`${color} h-6 w-6 mr-1 transform scale-y-[-1] min-w-6 mt-auto`} />
);

export const DashboardAreaChartContainer = ({ children }: { children: React.ReactElement<typeof LineChart | typeof PieChart> }) => (
  <div className="text-xs">
    <ResponsiveContainer>
      {children}
    </ResponsiveContainer>
    <div className="recharts-legend-wrapper bottom-0 !important"></div>
  </div>
);

export const DashboardPieChart = ({ children }: { children: React.ReactElement }) => (
  <PieChart className="pl-0 h-[200px]">
    {children}
  </PieChart>
);

export const DashboardPieChartFlex = ({ children }: { children: React.ReactElement }) => (
  <PieChart className="pl-0 flex justify-end items-start lg:flex-col">
    {children}
  </PieChart>
);

export const DashboardChartLegend = ({ children }: { children: React.ReactElement[] }) => (
  <ul className="p-0 list-none">
    {children}
    <li className="mt-1 text-gray-500">
      <span className="h-2 w-2 rounded-full inline-block mr-2"></span>
      Legend
    </li>
  </ul>
);

export const DashboardChartLegendTable = ({ children }: { children: React.ReactElement[] }) => (
  <div className="flex justify-start items-start gap-8 lg:mt-[370px] lg:items-end sm:mt-[350px] sm:w-[390px] xs:mt-[250px]">
    {children}
    <li className="mt-1 text-gray-500">
      <span className="h-2 w-2 rounded-full inline-block mr-2 bg-current"></span>
      Legend
    </li>
  </div>
);

export const Bullet = ({ size = '2.5', color = 'bg-current' }: SizeProps) => (
  <span
    className={`rounded-full inline-block mr-2 ${color}`}
    style={{ height: `${size}rem`, width: `${size}rem` }}
  ></span>
);
