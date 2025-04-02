import React from 'react';

const TradeColumnsDetailed =() =>{
    return [
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
              <button className="px-3 py-1 text-sm bg-navmi-blue text-white rounded hover:bg-blue-600">
                Modify
              </button>
              <button className="px-3 py-1 text-sm bg-navmi-red text-white rounded hover:bg-red-600">
                Kill
              </button>
            </div>
          ),
        },
      ];
}  

export default TradeColumnsDetailed;
