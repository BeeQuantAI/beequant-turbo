import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color }) => (
  <div className="relative pt-2 mt-2 w-full">
    <div className="overflow-hidden h-3 rounded-full bg-gray-300 w-full">
      <div
        style={{
          width: `${percentage}%`,
          background: `linear-gradient(to right, ${color})`,
          borderRadius: '9999px',
        }}
        className="h-full flex flex-col text-center whitespace-nowrap text-white justify-center"
      >
        <p className="absolute right-0 top-[-1rem]" style={{ color }}>
          {percentage}%
        </p>
      </div>
    </div>
  </div>
);

export default ProgressBar;
