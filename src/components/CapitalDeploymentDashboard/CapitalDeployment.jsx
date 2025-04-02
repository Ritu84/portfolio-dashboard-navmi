import React from 'react';
import CapitalDeployedBox from './CapitalDeployedSection/CapitalDeployedBox';
import InstrumentsDistributionBox from './InstrumentsDistributionSection/InstrumentsDistributionBox';
import IdealFundBox from './IdealFundSection/IdealFundBox';
import ComparisonBox from './ComparisonGraphSection/ComparisonBox';
import TopTradedBox from './TopTradedSection/TopTradedBox';

const CapitalDeployment = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CapitalDeployedBox />
        <InstrumentsDistributionBox />
        <IdealFundBox />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8  mt-4  ">
          <ComparisonBox />
        </div>
        <div className="lg:col-span-4 mt-4 mb-4">
          <TopTradedBox />
        </div>
      </div>
    </>
  );
};

export default CapitalDeployment; 