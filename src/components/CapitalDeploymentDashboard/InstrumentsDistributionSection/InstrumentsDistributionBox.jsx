import React from 'react';
import InstrumentsPieChart from './InstrumentsPieChart';

const InstrumentsDistributionBox = () => {
  return (
    <div className="bg-navmi-panel p-6 rounded-lg">
      <h2 className="text-[20px] text-white mb-4">Capital deployment by instruments</h2>
      <div className="h-[200px]">
        <InstrumentsPieChart />
      </div>
    </div>
  );
};

export default InstrumentsDistributionBox; 