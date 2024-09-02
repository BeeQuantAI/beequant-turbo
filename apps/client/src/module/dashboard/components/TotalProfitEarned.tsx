"use client";

import React from 'react';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const TotalProfitEarned = () => (
  <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3 p-0.5"> 
    <div className="bg-white pt-[20px] pb-[38px] px-[25px] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-[28px] font-medium text-rose-400 mt-[-4px] font-sans" >$ 165 832</h2>
        <TrendingUpIcon className="text-gray-300 " />
      </div>
      <h5
        className="text-[12px] font-medium text-left opacity-70 mt-[-4px] uppercase text-primary-600 font-sans"
      >
        Total profit earned
      </h5>
      <div className="relative pt-1 mt-4 ">
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-300">
          <div
            style={{
              width: '27%',
              borderRadius: "9999px", 
            }}
            className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-rose-400 to-rose-300"
          >
            <p className="text-rose-400 text-[14px] font-sans absolute right-0 top-[-1rem]">27%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TotalProfitEarned;
