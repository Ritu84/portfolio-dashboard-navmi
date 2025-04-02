import React, { useState, useRef, useEffect } from 'react';
import ComparisonChart from './ComparisonChart';

const ComparisonBox = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dummy data for different time periods
  const timePeriodsData = {
    'last 7-days': {
      chartData: {
        upper: [65, 70, 68, 72, 69, 71, 70],
        lower: [35, 38, 36, 39, 37, 38, 36]
      },
      stats: {
        stocks: 15,
        capital: 18500,
        value: 2100
      }
    },
    'last 15-days': {
      chartData: {
        upper: [62, 65, 63, 68, 65, 70, 68, 72, 69, 71, 70, 73, 71, 74, 72],
        lower: [32, 35, 33, 36, 34, 37, 35, 38, 36, 37, 35, 39, 37, 40, 38]
      },
      stats: {
        stocks: 18,
        capital: 20500,
        value: 2300
      }
    },
    'last 30-days': {
      chartData: {
        upper: [60, 65, 62, 68, 64, 70, 67, 72, 68, 74, 70, 75, 71, 76, 72],
        lower: [30, 33, 31, 34, 32, 35, 33, 36, 34, 37, 35, 38, 36, 39, 37]
      },
      stats: {
        stocks: 20,
        capital: 22000,
        value: 2400
      }
    },
    'last 3-months': {
      chartData: {
        upper: [55, 60, 58, 63, 59, 65, 61, 67, 63, 69, 65, 70],
        lower: [25, 28, 26, 29, 27, 30, 28, 31, 29, 32, 30, 33]
      },
      stats: {
        stocks: 21,
        capital: 23888,
        value: 2500
      }
    },
    'last 4-months': {
      chartData: {
        upper: [50, 55, 52, 57, 53, 58, 54, 59, 55, 60, 56, 61, 57, 62, 58],
        lower: [20, 23, 21, 24, 22, 25, 23, 26, 24, 27, 25, 28, 26, 29, 27]
      },
      stats: {
        stocks: 19,
        capital: 21500,
        value: 2200
      }
    },
    'last 6-months': {
      chartData: {
        upper: [45, 50, 47, 52, 48, 53, 49, 54, 50, 55, 51, 56],
        lower: [15, 18, 16, 19, 17, 20, 18, 21, 19, 22, 20, 23]
      },
      stats: {
        stocks: 17,
        capital: 19500,
        value: 2000
      }
    },
    '2024': {
      chartData: {
        upper: [45, 65, 55, 75, 45, 55, 45, 55, 75, 45, 50, 45],
        lower: [30, 25, 45, 30, 25, 35, 25, 22, 45, 25, 35, 22]
      },
      stats: {
        stocks: 21,
        capital: 23888,
        value: 2500
      }
    },
    '2023': {
      chartData: {
        upper: [40, 60, 50, 70, 40, 50, 40, 50, 70, 40, 45, 40],
        lower: [25, 20, 40, 25, 20, 30, 20, 17, 40, 20, 30, 17]
      },
      stats: {
        stocks: 16,
        capital: 18500,
        value: 1800
      }
    }
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  const currentData = timePeriodsData[selectedPeriod];

  return (
    <div className="bg-navmi-panel p-6 rounded-lg  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] text-white font-medium">Comparison</h2>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#2a3441] text-[#3b82f6] text-sm rounded-lg px-3 py-1.5 border border-gray-600 flex items-center gap-2"
          >
            {selectedPeriod}
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-[#1E2530] border border-gray-700 rounded-lg shadow-lg z-10">
              {Object.keys(timePeriodsData).map((period) => (
                <button
                  key={period}
                  onClick={() => handlePeriodChange(period)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-700 ${
                    period === selectedPeriod ? 'text-[#3b82f6]' : 'text-gray-300'
                  } first:rounded-t-lg last:rounded-b-lg`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-[300px]  ">
        <ComparisonChart data={currentData.chartData} period={selectedPeriod} />
      </div>

      <div className="grid grid-cols-3 border border-gray-700/50 rounded-lg mt-[70px] ">
        <div className="text-center p-4 border-r border-gray-700/50">
          <div className="text-2xl text-white font-medium">{currentData.stats.stocks}</div>
          <div className="text-gray-400 text-sm">Stocks invested</div>
        </div>
        <div className="text-center p-4 border-r border-gray-700/50">
          <div className="text-2xl text-white font-medium">${currentData.stats.capital.toLocaleString()}</div>
          <div className="text-gray-400 text-sm">Capital invested</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl text-white font-medium">${currentData.stats.value.toLocaleString()}</div>
          <div className="text-gray-400 text-sm">Investment value</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBox; 