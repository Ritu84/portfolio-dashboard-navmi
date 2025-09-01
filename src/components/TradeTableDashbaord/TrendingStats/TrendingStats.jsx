import React, { useState } from 'react';
import uparrow from '../../../assets/Increase-gain-icon.svg'
import downarrow from '../../../assets/decrease-loss-icon.svg'



const TrendingStats = () => {
  
  const columns = [
    { title: 'Strategy', dataIndex: 'strategy', key: 'strategy' },
    { title: 'Symbol', dataIndex: 'symbol', key: 'symbol' },
    { title: 'Buy Date', dataIndex: 'buyDate', key: 'buyDate' },
    { title: 'Buy Price', dataIndex: 'buyPrice', key: 'buyPrice' },
    { title: 'Qty', dataIndex: 'qty', key: 'qty' },
    { title: 'LTP', dataIndex: 'ltp', key: 'ltp' },
    {
      title: 'Gain/Loss',
      dataIndex: 'gainLoss',
      key: 'gainLoss',
      render: (value) => value
    },
    {
      title: 'Gain/Loss%',
      dataIndex: 'gainLossPercent',
      key: 'gainLossPercent',
      render: (value) => value
    },
    { title: 'Buy Cond', dataIndex: 'buyCond', key: 'buyCond' },
    { title: 'SL Profile', dataIndex: 'slProfile', key: 'slProfile' },
    { title: 'TGT Profile', dataIndex: 'tgtProfile', key: 'tgtProfile' },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <div className="space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
            Modify
          </button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
            Kill
          </button>
        </div>
      ),
    },
  ];

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
        <div className='flex flex-row gap-4' >
             {/* Top Trending Gains */}
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
    )
}

export default TrendingStats;   
