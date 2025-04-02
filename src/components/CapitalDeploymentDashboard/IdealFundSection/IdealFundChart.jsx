import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import '../chartConfig';

const IdealFundChart = ({ period }) => {
  const chartData = useMemo(() => {
    let labels = [];
    let values = [];

    switch (period) {
      case 'last-7-days':
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        values = [1150, 1200, 1180, 1220, 1200, 1250, 1230];
        break;
      case 'last-15-days':
        labels = Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`);
        values = Array.from({ length: 15 }, () => Math.floor(Math.random() * (1300 - 1100) + 1100));
        break;
      case 'last-30-days':
        labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
        values = Array.from({ length: 30 }, () => Math.floor(Math.random() * (1300 - 1100) + 1100));
        break;
      case 'last-3-months':
        labels = ['Jan', 'Feb', 'Mar'];
        values = [1200, 1250, 1180];
        break;
      case 'last-4-months':
        labels = ['Jan', 'Feb', 'Mar', 'Apr'];
        values = [1200, 1250, 1180, 1220];
        break;
      case 'last-6-months':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        values = [1200, 1250, 1180, 1220, 1190, 1240];
        break;
      case 'last-year':
        labels = ['Jan', 'Apr', 'Jul', 'Oct', 'Dec'];
        values = [1200, 1250, 1180, 1220, 1240];
        break;
      default:
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        values = [1150, 1200, 1180, 1220, 1200];
    }

    return {
      labels,
      datasets: [
        {
          data: values,
          borderColor: '#22c55e',
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          fill: false,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#22c55e',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
        },
      ],
    };
  }, [period]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#2C3440',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#22c55e',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context) => `$${context.parsed.y}`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#9ca3af',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#9ca3af',
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="h-full w-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default IdealFundChart; 