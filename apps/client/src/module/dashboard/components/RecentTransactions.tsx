'use client';

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
    <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3 p-1">
      <div className="bg-white pt-[20px] pb-[38px] px-[25px] rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-gray-400 text-base">Recent transactions</h5>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold text-teal-400">{activeItem.pv}</p>
          <div className="ml-4 flex-1">
            <ResponsiveContainer width="100%" height={50}>
              <BarChart data={data} onClick={handleClick}>
                <Bar dataKey="pv">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      cursor="pointer"
                      fill={index === activeIndex ? '#4ce1b6' : '#c88ffa'}
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
