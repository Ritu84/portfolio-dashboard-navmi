import React from 'react';
import { Tooltip } from 'antd';
import arrowUpIcon from '../../assets/Increase-gain-icon.svg';

const TradeColumnsSummary = () => {
  return [
    {
      title: 'Strategy',
      dataIndex: 'strategy',
      key: 'strategy',
      sorter: true,
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      sorter: true,
    },
    {
      title: 'Buy Date',
      dataIndex: 'buyDate',
      key: 'buyDate',
      sorter: true,
    },
    {
      title: 'Buy Price',
      dataIndex: 'buyPrice',
      key: 'buyPrice',
      sorter: true,
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
      sorter: true,
    },
    {
      title: 'LTP',
      dataIndex: 'ltp',
      key: 'ltp',
      sorter: true,
    },
    {
      title: 'Gain/Loss',
      key: 'gainLoss',
      sorter: true,
      render: (_, record) => (
        <div className="flex items-center">
          <span className="text-white">{record.gainLoss.value}</span>
          <span className="ml-2 text-[#03A66D] flex items-center">
            {record.gainLoss.percent}
            <img src={arrowUpIcon} alt="arrow-up" className="w-4 h-4 ml-1" />
          </span>
        </div>
      ),
    },
    {
      title: 'BC/SL/TP',
      dataIndex: 'profile',
      key: 'profile',
      sorter: true,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex space-x-2">
          <button className="bg-navmi-blue text-white px-2 py-1 rounded text-[14px]">Modify</button>
          <button className="bg-navmi-red text-white px-2 py-1 rounded text-[14px]">Kill</button>
        </div>
      ),
    },
  ];
};

export default TradeColumnsSummary; 