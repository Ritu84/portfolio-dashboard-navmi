import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../chartConfig';

const InstrumentsPieChart = () => {
  const data = {
    labels: ['Commodity', 'Equity', 'Currency', 'Futures', 'Others'],
    datasets: [
      {
        data: [40, 25, 10, 20, 5],
        backgroundColor: [
          '#00E5D3', 
          '#3B82F6', 
          '#D946EF', 
          '#7E22CE', 
          '#2563EB', 
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#fff',
          padding: 10,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}    ${context.raw}%`;
          }
        }
      }
    },
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    highlightScope: { 
      fade: 'global', 
      highlight: 'item' 
    },
    faded: { 
      innerRadius: 30, 
      additionalRadius: -30, 
      color: 'grey' 
    }
  };

  return (
    <div className="relative h-full w-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default InstrumentsPieChart; 