import React from 'react';
import { useNavigate } from 'react-router-dom';
import CapitalDeploymentChart from './CapitalDeploymentSection/CapitalDeploymentChart';
import TradeTable from './OngoingTradeTable/TradeTable';
import TrendingGains from './TrendingGains/TrendingGains';
import StatsOverview from './CircularStatsSection/StatsOverview';
import capitalArrowIcon from '../../assets/capital-arrow-icon.svg';
import PerformanceGraph from './PerformanceSection/PerformanceGraph';

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState('timeframe');
  const navigate = useNavigate();

  const handleCapitalArrowClick = () => {
    navigate('/capital-deployment');
  };

  return (
    <>
      {/* Top row with three boxes */}
      <div className="grid grid-cols-3 gap-4 mb-[15px]">
        {/* Left box - Capital deployment */}
        <div className="bg-navmi-panel p-4 rounded-lg h-[425px]">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-[20px] text-white">Capital deployment</h1>
            <div 
              onClick={handleCapitalArrowClick}
              className="relative z-10 w-10 h-10 rounded-full bg-[#2a3441] hover:bg-[#3b4657] flex items-center justify-center cursor-pointer border border-gray-600"
            >
              <img src={capitalArrowIcon} alt="expand" className="w-4 h-4" />
            </div>
          </div>
          
          <div className="w-full flex justify-center mb-6">
            <div className="text-white text-[38px] font-bold bg-[#1E2530] px-6 py-1 rounded">$66,743.00</div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button 
              className={`py-2 px-4 text-sm border-b-2 ${activeTab === 'timeframe' ? 'border-[#3b82f6] text-blue-500' : 'border-transparent text-gray-400'}`}
              onClick={() => setActiveTab('timeframe')}
            >
              Timeframe wise
            </button>
            <button 
              className={`py-2 px-4 text-sm border-b-2 ${activeTab === 'strategy' ? 'border-[#3b82f6] text-blue-500' : 'border-transparent text-gray-400'}`}
              onClick={() => setActiveTab('strategy')}
            >
              Strategy wise
            </button>
            <button 
              className={`py-2 px-4 text-sm border-b-2 ${activeTab === 'instrument' ? 'border-[#3b82f6] text-blue-500' : 'border-transparent text-gray-400'}`}
              onClick={() => setActiveTab('instrument')}
            >
              Instrument wise
            </button>
          </div>

          {/* Chart */}
          <div className="mt-6">
            <CapitalDeploymentChart />
          </div>
        </div>

        {/* Middle box - Stats Overview */}
        <div className="h-[425px] cursor-pointer hover:[#2a2e39] ">
          <StatsOverview />
        </div>

        {/* Right box - Performance Graph */}
        <div className="h-[425px]">
          <PerformanceGraph />
        </div>
      </div>

      {/* Bottom row with table and trending gains */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Trade Table */}
        <div className="lg:col-span-3">
          <TradeTable />
        </div>
        
        {/* Trending Gains */}
        <div className="lg:col-span-1 mb-[15px]">
          <TrendingGains />
        </div>
      </div>
    </>
  );
};

export default Dashboard; 