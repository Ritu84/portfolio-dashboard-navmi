import React, { useState } from 'react';
import { Table } from 'antd';
import TraTradeColumnsDetailed from  '../../../columns/TradeColumnsDetailed/TradeColumnsDetailed'
import TrendingStats from '../TrendingStats/TrendingStats'
import uparrow from '../../../assets/Increase-gain-icon.svg'
import downarrow from '../../../assets/decrease-loss-icon.svg'

const DetailedTradeView = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const tradeData = Array(8).fill().map((_, index) => ({
    key: index,
    strategy: 'BSEIELON',
    symbol: 'BEL',
    buyDate: '23-01-2024',
    buyPrice: '100',
    qty: '10',
    ltp: '1000',
    gainLoss: '110',
    gainLossPercent: '2%',
    buyCond: 'A1',
    slProfile: 'SL1',
    tgtProfile: 'TGT1',
  }));

  const trendingData = [
    { name: 'ADANIPORTS', value: '+2%' },
    { name: 'BEL', value: '+2%' },
    { name: 'GRASIM', value: '+2%' },
    { name: 'HCLTECH', value: '+2%' },
    { name: 'SBILIFE', value: '+2%' },
  ];

  const attentionTrades = [
    { type: 'High Volatility Alert', value: '-26%' },
    { type: 'Sudden Drop Alert', value: '-26%' },
    { type: 'High Volatility Alert', value: '-26%' },
    { type: 'Volume Surge Alert', value: '-26%' },
    { type: 'High Implied Volatility Alert', value: '-26%' },
  ];

  return (
    <div>

      <div className="bg-navmi-panel rounded-lg overflow-hidden mb-4">
        <Table
          columns={TraTradeColumnsDetailed()}
          dataSource={tradeData}
          pagination={{
            current: currentPage,
            pageSize: 8,
            position: ['bottomCenter'],
            onChange: (page) => setCurrentPage(page),
          }}
          className="custom-table"
          scroll={{ x: true }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4 ">
        {/* <TrendingStats /> */}
        <div className="bg-navmi-panel rounded-lg p-4">
          <h2 className="text-white text-[20px] mb-4 flex items-center">
            Top Trending Gains
            <img src={uparrow} alt="uparrow" className="ml-2 w-8 h-8 " />
          </h2>
          <div className="space-y-3">
            {trendingData.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-white">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0d99ff1a] flex items-center justify-center rounded-lg">
                    <span className="text-white font-medium">{index + 1}.</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                  </div>
                </div>
                <span className="text-navmi-green">
                  <div className='flex items-center'>
                    {item.value}
                    <img src={uparrow} alt="uparrow" className="ml-1 w-5 h-5 " />
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Trending Losses */}
        <div className="bg-navmi-panel rounded-lg p-4">
          <h2 className="text-white text-[20px] mb-4 flex items-center">
            Top Trending Losses
            <img src={downarrow} alt="downarrow" className="ml-2 w-8 h-8 " />
          </h2>
          <div className="space-y-3">
            {trendingData.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-white">
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0d99ff1a] flex items-center justify-center rounded-lg">
                    <span className="text-white font-medium">{index + 1}.</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                  </div>
                </div>
                <span className="text-navmi-red">
                  <div className='flex items-center'>
                    -28%
                    <img src={downarrow} alt="downarrow" className="ml-1 w-5 h-5 " />
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Immediate Attention Trades */}
        <div className="bg-navmi-panel rounded-lg p-4">
          <h2 className="text-white text-[20px] mb-4 flex items-center">
            ⚠️ Immediate Attention Trades
          </h2>
          <div className="space-y-4">
            {attentionTrades.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-white">
                <span>{item.type}</span>
                <span className="text-navmi-red">
                  <div className='flex items-center'>
                    {item.value}
                    <img src={downarrow} alt="downarrow" className="ml-1 w-5 h-5 " />
                  </div>
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Take Action: Review these alerts and adjust strategies accordingly 🎯
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedTradeView; 