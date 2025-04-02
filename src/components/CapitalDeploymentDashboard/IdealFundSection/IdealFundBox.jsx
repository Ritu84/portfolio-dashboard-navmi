import React, { useState, useRef, useEffect } from 'react';
import IdealFundChart from './IdealFundChart';

const IdealFundBox = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('last-7-days');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const timeOptions = [
    { label: 'last 7-days', value: 'last-7-days' },
    { label: 'last 15-days', value: 'last-15-days' },
    { label: 'last 30-days', value: 'last-30-days' },
    { label: 'last 3-months', value: 'last-3-months' },
    { label: 'last 4-months', value: 'last-4-months' },
    { label: 'last 6-months', value: 'last-6-months' },
    { label: 'last year', value: 'last-year' }
  ];

  return (
    <div className="bg-navmi-panel p-6 rounded-lg">
      <div className="flex justify-between items-center mb-[10px]">
        <h2 className="text-[20px] text-white">Ideal fund</h2>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#2a3441] text-[#3b82f6] text-sm rounded-lg px-3 py-1.5 border border-gray-600 flex items-center gap-2"
          >
            {timeOptions.find(option => option.value === selectedPeriod)?.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-1 w-40 bg-[#2a3441] rounded-lg shadow-lg border border-gray-600 z-10">
              {timeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedPeriod(option.value);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm ${
                    selectedPeriod === option.value
                      ? 'text-navmi-blue bg-blue-500/10'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="text-3xl text-white font-bold mb-[10px]">$1200.00</div>
      <div className="h-[170px]">
        <IdealFundChart period={selectedPeriod} />
      </div>
    </div>
  );
};

export default IdealFundBox; 