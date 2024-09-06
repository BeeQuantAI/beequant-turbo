
import React from 'react';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const TotalProfitEarned = () => (
  <div className="col-span-1 xl:col-span-1 lg:col-span-2 md:col-span-3"> 
    <div className="bg-white pt-[25px] pb-[38px] px-[25px] rounded-lg md:h-[125px]"
    style={{ boxShadow: '0 10px 30px 1px rgba(0, 0, 0, 0.06)' }} >
    <div className="flex justify-between items-center mb-1">
      <h2 className="text-2xl font-medium font-sans" style={{ color: '#FF4861' }}>
        $ 165,832
      </h2>
      <TrendingUpIcon className="text-gray-300" />
    </div>
      <h5
        className="text-[12px] font-medium text-left opacity-70 mt-[-4px] uppercase text-primary-600 font-sans"
      >
        Total profit earned
      </h5>
      <div className="relative pt-4 mt-1 ">
        <div className="overflow-hidden h-2 text-xs flex rounded-full "style={{ backgroundColor: '#dddddd' }}>
        <div
            style={{
              width: '27%',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #FF4861, #ff7e9a)',
              color: '#FF4861',
            }}
            className="flex flex-col text-center whitespace-nowrap text-white justify-center"
          >
            <p className="text-[14px] font-sans absolute right-0 top-[-0.5rem]"
            style={{ color: '#FF4861' }}>
            27%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TotalProfitEarned;