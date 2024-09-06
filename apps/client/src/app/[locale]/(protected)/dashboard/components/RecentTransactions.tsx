"use client";

import { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';

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

  const handleClick = (e: any) => {
    if (e && e.activePayload && e.activePayload.length) {
      const item = e.activePayload[0].payload;
      const index = data.findIndex((entry) => entry.name === item.name);
      setActiveIndex(index);
    }
  };

  return (
    <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3"> 
      <div className="bg-white pt-[25px] pb-[27px] px-[25px] rounded-lg md:h-[125px]"
      style={{ boxShadow: '0 10px 30px 1px rgba(0, 0, 0, 0.06)' }}>
        <div className="mb-8">
          <h5 className="text-[12px] font-medium text-left opacity-70 mt-[-4px] uppercase text-primary-600 font-sans">
            Recent transactions
          </h5>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-[30px] font-sans mb-[-8px] mr-4"
            style={{ color: '#4CE1B6' }}>
            {activeItem.pv}</p>
          <div className="w-full lg:w-[55%] mt-[-20px]">
            <ResponsiveContainer width="100%" height={50}>
              <BarChart data={data} onClick={handleClick}>
                <Bar dataKey="pv">
                  {data.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      cursor="pointer"
                      fill={index === activeIndex ? '#4CE1B6' : '#c88ffa'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;