import React, { useState, useRef, useEffect } from 'react';
import arrowup from '../../../assets/Increase-gain-icon.svg'

const TopTradedBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('2024');
  const dropdownRef = useRef(null);

  const scripts = [
    { name: 'RELIANCE', percentage: '15%', value: '$100', change: '+2%' },
    { name: 'GRASIM', percentage: '15%', value: '$100', change: '+2%' },
    { name: 'HCLTECH', percentage: '15%', value: '$100', change: '+2%' },
    { name: 'HDFCBANK', percentage: '15%', value: '$100', change: '+2%' },
    { name: 'HIMADRI', percentage: '15%', value: '$100', change: '+2%' },
  ];

  const options = [
    '2023',
    '2024',
    'last 7-days',
    'last 15-days',
    'last 30-days',
    'last 3-months',
    'last 4-months',
    'last 6-months',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-navmi-panel p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] text-white font-medium">top traded scrips</h2>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#2a3441] text-[#3b82f6] text-sm rounded-lg px-3 py-1.5 border border-gray-600 flex items-center gap-2"
          >
            {selectedOption}
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-1 w-40 bg-[#2a3441] rounded-lg shadow-lg border border-gray-600 z-10">
              {options.map((option) => (
                <div
                  key={option}
                  className={`w-full text-left px-3 cursor-pointer py-2 text-sm ${option === selectedOption
                    ? 'text-navmi-blue bg-blue-500/10'
                    : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2">
        {scripts.map((script, index) => (
          <div key={script.name} className="flex items-center justify-between py-2 border-b border-[#2a3441] last:border-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0d99ff1a] flex items-center justify-center rounded-lg">
                <span className="text-white font-medium">{index + 1}.</span>
              </div>
              <div>
                <div className="text-white font-medium">{script.name}</div>
                <div className="text-gray-400 text-sm">{script.percentage} of total capital</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-sm">Capital invested</div>
              <div className="text-white mr-2 ">$ {script.value.replace('$', '')}</div>
              <div className="text-green-500 flex items-center justify-end">
                {script.change}
                <img src={arrowup} alt="arrowup" className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTradedBox; 