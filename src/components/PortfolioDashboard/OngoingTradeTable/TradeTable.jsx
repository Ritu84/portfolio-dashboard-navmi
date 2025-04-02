import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableCard from '../../common/TableCard/TableCard';
import TradeColumnsSummary from '../../../columns/TradeColumnsSummary/TradeColumnsSummary';

const TradeTable = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const tradeData = [
    {
      key: '1',
      strategy: 'BSEIELON',
      symbol: 'BEL',
      buyDate: '23-01-2024',
      buyPrice: '100',
      qty: '10',
      ltp: '1000',
      gainLoss: { value: '110', percent: '+2%' },
      profile: 'AI/SL/ TGT1',
      actions: ['Modify', 'Kill'],
    },
    {
      key: '2',
      strategy: 'BSEIELON',
      symbol: 'BEL',
      buyDate: '24-01-2024',
      buyPrice: '100',
      qty: '10',
      ltp: '1000',
      gainLoss: { value: '110', percent: '+2%' },
      profile: 'AI/SL/ TGT1',
      actions: ['Modify', 'Kill'],
    },
    {
      key: '3',
      strategy: 'BSEIELON',
      symbol: 'BEL',
      buyDate: '25-01-2024',
      buyPrice: '100',
      qty: '10',
      ltp: '1000',
      gainLoss: { value: '110', percent: '+2%' },
      profile: 'AI/SL/ TGT1',
      actions: ['Modify', 'Kill'],
    },
    {
      key: '4',
      strategy: 'BSEIELON',
      symbol: 'BEL',
      buyDate: '26-01-2024',
      buyPrice: '100',
      qty: '10',
      ltp: '1000',
      gainLoss: { value: '110', percent: '+2%' },
      profile: 'AI/SL/ TGT1',
      actions: ['Modify', 'Kill'],
    },
    {
      key: '5',
      strategy: 'BSEIELON',
      symbol: 'BEL',
      buyDate: '27-01-2024',
      buyPrice: '100',
      qty: '10',
      ltp: '1000',
      gainLoss: { value: '110', percent: '+2%' },
      profile: 'AI/SL/ TGT1',
      actions: ['Modify', 'Kill'],
    },
    {
      key: '6',
      strategy: 'BSEIELON',
      symbol: 'BEL',
      buyDate: '28-01-2024',
      buyPrice: '100',
      qty: '10',
      ltp: '1000',
      gainLoss: { value: '110', percent: '+2%' },
      profile: 'AI/SL/ TGT1',
      actions: ['Modify', 'Kill'],
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    // Handle table changes (sorting, filtering, pagination)
    setCurrentPage(pagination.current);
    // You can add API calls here when needed
  };

  const handleRowClick = () => {
    navigate('/detailed-trade-view');
  };

  return (
    <TableCard
      coluCard
      columns={TradeColumnsSummary()}
      data={tradeData}
      loading={loading}
      pagination={{
        current: currentPage,
        total: total,
      }}
      onTableChange={handleTableChange}
      onRow={() => ({
        onClick: handleRowClick,
        style: { cursor: 'pointer' }
      })}
    />
  );
};

export default TradeTable; 