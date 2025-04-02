import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const CapitalChart = () => {
  const labels = ['1', '3', '5', '7', '10', '12', '15', '17', '20', '22', '25', '27'];
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: '#1e2230',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#3b82f6',
        borderWidth: 1,
        padding: 10,
      },
      title: {
        display: true,
        text: 'Capital deployment comparison',
        color: 'white',
        position: 'top',
        align: 'start',
        font: {
          size: 14,
          weight: 'normal'
        },
        padding: {
          bottom: 10
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 10,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 10,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 5,
      },
      line: {
        tension: 0.3,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Capital Deployed',
        data: [65, 85, 70, 75, 65, 75, 70, 82, 75, 90, 80, 75],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: false,
        lineTension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Capital Invested',
        data: [50, 60, 55, 75, 55, 60, 50, 65, 55, 75, 50, 55],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.1)',
        fill: true,
        lineTension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Capital Deficit',
        data: [30, 45, 35, 30, 35, 40, 30, 35, 45, 35, 30, 40],
        borderColor: '#ef4444',
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        fill: false,
        lineTension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="h-full relative">
      <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
        Today
      </div>
      
      <div className="h-full">
        <Line options={options} data={data} />
      </div>
      
      <div className="absolute right-3 bottom-8 text-xs space-y-2">
        <div className="flex items-center">
          <div className="w-28 text-right text-gray-400 mr-2">last 15-days data here</div>
          <div className="w-4 h-0.5 bg-blue-500"></div>
        </div>
        <div className="flex items-center">
          <div className="w-28 text-right text-gray-400 mr-2">CAPITAL DEFICIT</div>
          <div className="w-4 h-0.5 bg-red-500"></div>
        </div>
        <div className="flex items-center">
          <div className="w-28 text-right text-gray-400 mr-2">CAPITAL DEPLOYED</div>
          <div className="w-4 h-0.5 bg-blue-500"></div>
        </div>
        <div className="flex items-center">
          <div className="w-28 text-right text-gray-400 mr-2">CAPITAL INVESTED</div>
          <div className="w-4 h-0.5 bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CapitalChart; 