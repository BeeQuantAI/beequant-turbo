"use client";

import React from 'react';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const TotalAssets = () => (
  <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3 p-1">
    <div className="bg-white pt-[20px] pb-[38px] px-[25px] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-[28px] font-medium text-sky-300 mt-[-4px]">$ 878 372</h2>
        <TrendingUpIcon className="text-gray-300"/>
      </div>
      <h5
        className="text-xs font-medium text-left opacity-70 mt-[-4px] uppercase"
        style={{ color: '#787985', fontFamily: 'Roboto, sans-serif' }}
      >
        Total assets
      </h5>
      <div className="relative pt-1 mt-4">
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-300">
          <div
            style={{ 
              width: '18%',
              borderRadius: "9999px", 
            }}
            className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-sky-300 to-sky-200"
          >
            <p className="text-sky-300 text-sm font-semibold absolute right-0 top-[-1rem]">18%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TotalAssets;


