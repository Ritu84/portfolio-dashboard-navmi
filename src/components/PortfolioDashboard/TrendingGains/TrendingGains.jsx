import React from 'react';
import arrowUpIcon from '../../../assets/Increase-gain-icon.svg';

const TrendingGains = () => {
  const trendingItems = [
    { id: 1, name: 'ADANIPORTS', rank: 1 },
    { id: 2, name: 'BEL', rank: 2 },
    { id: 3, name: 'GRASIM', rank: 3 },
    { id: 4, name: 'HCLTECH', rank: 4 },
    { id: 5, name: 'SBILIFE', rank: 5 },
  ];

  return (
    <div className="bg-navmi-panel rounded-lg p-4 h-full">
      <div className="flex items-center mb-2 gap-[5px] ">
        <h3 className="text-white text-[20px] ">Top Trending Gains</h3>
        <img src={arrowUpIcon} alt="arrow-up" className="w-8 h-8" />
      </div>
      <div>
        {trendingItems.map((item) => (
          <div key={item.id} className="flex items-center border-b border-gray-800 py-2">
            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-[#0d99ff1a] rounded-lg">
              <div className="flex items-center justify-center w-full h-full">
                <span className="text-white font-medium">{item.rank}.</span>
              </div>
            </div>
            <div className="text-white">{item.name}</div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default TrendingGains; 