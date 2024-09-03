"use client";

import React from 'react';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const PendingOrders = () => (
  <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3 p-1">
    <div className="bg-white pt-[20px] pb-[38px] px-[25px] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-1">
        <h2 
        className="text-[28px] font-medium mt-[-4px] font-sans"
        style={{ color: '#4CE1B6' }}
        >25</h2>
        <TrendingUpIcon className="text-gray-300"/>
      </div>
      <h5
        className="text-[12px] font-medium text-left opacity-70 mt-[-4px] uppercase text-primary-600 font-sans"
      >
        Pending orders
      </h5>
      <div className="relative pt-1 mt-4">
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-300">
          <div
            style={{ 
              width: '50%',
              borderRadius: "9999px", 
              background: 'linear-gradient(to right, #4CE1B6, #a6efda)',
            }}
            className="flex flex-col text-center whitespace-nowrap text-white justify-center "
          >
            <p className="text-[14px] font-sans absolute right-0 top-[-1rem]"
            style={{ color: '#4CE1B6' }}
            >50%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PendingOrders;