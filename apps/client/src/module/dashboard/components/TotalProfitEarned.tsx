"use client";

import React from 'react';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const TotalProfitEarned = () => (
  <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3 p-4">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-rose-400">$ 165 832</h2>
        <TrendingUpIcon className="text-gray-300" />
      </div>
      <p className="text-gray-400 text-base">Total profit earned</p>
      <div className="relative pt-1 mt-4">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
          <div
            style={{ 
              width: '27%' ,
              borderTopRightRadius: "9999px", 
              borderBottomRightRadius: "9999px", 
            }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-rose-400 to-rose-300"
          ></div>
        </div>
        <span className="text-rose-400 text-sm font-semibold absolute right-0 top-[-1rem]">27%</span>
      </div>
    </div>
  </div>
);

export default TotalProfitEarned;

