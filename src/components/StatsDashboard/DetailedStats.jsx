import React, { useState } from 'react';
import GainLossChart from './AvgGainLoss/GainLossChart';
import ReturnChart from './AvgReturn/ReturnChart';
import EntriesChart from './Entries/EntriesChart';

const DetailedStats = () => {
  // Separate state for each chart's timeframe
  const [gainLossTimeframe, setGainLossTimeframe] = useState('monthly');
  const [returnTimeframe, setReturnTimeframe] = useState('monthly');
  const [positiveEntriesTimeframe, setPositiveEntriesTimeframe] = useState('monthly');
  const [negativeEntriesTimeframe, setNegativeEntriesTimeframe] = useState('monthly');

  // Common timeframe button styles
  const getTimeframeButtonClass = (current, target) => {
    return `px-3 py-1 text-sm rounded-lg transition-colors ${
      current === target 
        ? 'text-white bg-navmi-blue' 
        : 'text-gray-400 hover:text-gray-300'
    }`;
  };

  return (
    <div className="mt-[4px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Average Gain/Loss Chart */}
        <div className="bg-navmi-panel rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-medium">Average Gain/Loss</h2>
            <div className="flex space-x-2">
              <button 
                className={getTimeframeButtonClass(gainLossTimeframe, 'daily')}
                onClick={() => setGainLossTimeframe('daily')}
              >
                daily
              </button>
              <button 
                className={getTimeframeButtonClass(gainLossTimeframe, 'weekly')}
                onClick={() => setGainLossTimeframe('weekly')}
              >
                weekly
              </button>
              <button 
                className={getTimeframeButtonClass(gainLossTimeframe, 'monthly')}
                onClick={() => setGainLossTimeframe('monthly')}
              >
                monthly
              </button>
            </div>
          </div>
          <GainLossChart timeframe={gainLossTimeframe} />
        </div>

        {/* Average Return Chart */}
        <div className="bg-navmi-panel rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center mb-6 ">
            <h2 className="text-white text-[20px] font-medium">Average Return</h2>
            <div className="flex space-x-2">
              <button 
                className={getTimeframeButtonClass(returnTimeframe, 'daily')}
                onClick={() => setReturnTimeframe('daily')}
              >
                daily
              </button>
              <button 
                className={getTimeframeButtonClass(returnTimeframe, 'weekly')}
                onClick={() => setReturnTimeframe('weekly')}
              >
                weekly
              </button>
              <button 
                className={getTimeframeButtonClass(returnTimeframe, 'monthly')}
                onClick={() => setReturnTimeframe('monthly')}
              >
                monthly
              </button>
            </div>
          </div>
          <ReturnChart timeframe={returnTimeframe} />
        </div>

        {/* Positive Entries Chart */}
        <div className="bg-navmi-panel rounded-lg p-8 shadow-lg mb-30">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-[20px] font-medium">Positive Entries</h2>
            <div className="flex space-x-2">
              <button 
                className={getTimeframeButtonClass(positiveEntriesTimeframe, 'daily')}
                onClick={() => setPositiveEntriesTimeframe('daily')}
              >
                daily
              </button>
              <button 
                className={getTimeframeButtonClass(positiveEntriesTimeframe, 'weekly')}
                onClick={() => setPositiveEntriesTimeframe('weekly')}
              >
                weekly
              </button>
              <button 
                className={getTimeframeButtonClass(positiveEntriesTimeframe, 'monthly')}
                onClick={() => setPositiveEntriesTimeframe('monthly')}
              >
                monthly
              </button>
            </div>
          </div>
          <EntriesChart type="positive" timeframe={positiveEntriesTimeframe} />
        </div>

        {/* Negative Entries Chart */}
        <div className="bg-navmi-panel rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-[20px] font-medium">Negative Entries</h2>
            <div className="flex space-x-2">
              <button 
                className={getTimeframeButtonClass(negativeEntriesTimeframe, 'daily')}
                onClick={() => setNegativeEntriesTimeframe('daily')}
              >
                daily
              </button>
              <button 
                className={getTimeframeButtonClass(negativeEntriesTimeframe, 'weekly')}
                onClick={() => setNegativeEntriesTimeframe('weekly')}
              >
                weekly
              </button>
              <button 
                className={getTimeframeButtonClass(negativeEntriesTimeframe, 'monthly')}
                onClick={() => setNegativeEntriesTimeframe('monthly')}
              >
                monthly
              </button>
            </div>
          </div>
          <EntriesChart type="negative" timeframe={negativeEntriesTimeframe} />
        </div>
        <div className='mb-[4px]' ></div>
      </div>
    </div>
  );
};

export default DetailedStats; 