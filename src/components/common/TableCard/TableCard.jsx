import React from 'react';
import { Table } from 'antd';
import './TableCard.css';

const TableCard = ({
  columns,
  data,
  loading,
  pagination,
  onTableChange,
  onRow,
  scroll = { x: 1200, y: 550 },
  className = 'custom-table',
}) => {
  return (
    <div className="bg-navmi-panel rounded-lg overflow-hidden">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 4,
          size: 'small',
          showSizeChanger: false,
          ...pagination,
        }}
        sticky={true}
        scroll={scroll}
        onChange={onTableChange}
        onRow={onRow}
        className={className}
        size="small"
        showSorterTooltip={false}
      />
    </div>
  );
};

export default TableCard; 