import React from 'react';
import { Line } from 'react-chartjs-2';
import '../chartConfig';

const ComparisonChart = ({ data, period }) => {
  // Generate labels based on the period
  const generateLabels = () => {
    const today = new Date();
    
    switch (period) {
      case 'last 7-days': {
        return Array.from({ length: 7 }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - (6 - i));
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });
      }
      case 'last 15-days': {
        return Array.from({ length: 15 }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - (14 - i));
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });
      }
      case 'last 30-days': {
        return Array.from({ length: 30 }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - (29 - i));
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });
      }
      case 'last 3-months':
      case 'last 4-months':
      case 'last 6-months': {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentMonth = today.getMonth();
        const numMonths = period === 'last 3-months' ? 3 : period === 'last 4-months' ? 4 : 6;
        return Array.from({ length: numMonths }, (_, i) => {
          const monthIndex = (currentMonth - (numMonths - 1) + i + 12) % 12;
          return months[monthIndex];
        });
      }
      default:
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  };

  const chartData = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Investment Value',
        data: data.upper,
        borderColor: '#22c55e',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(34, 197, 94, 0.2)');
          gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Capital Invested',
        data: data.lower,
        borderColor: '#ef4444',
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          color: '#9ca3af',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 12
          },
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return datasets.map((dataset, i) => ({
              text: dataset.label,
              fillStyle: i === 0 ? '#22c55e' : '#ef4444',
              strokeStyle: i === 0 ? '#22c55e' : '#ef4444',
              pointStyle: 'circle',
              hidden: !chart.isDatasetVisible(i),
              index: i
            }));
          }
        },
        onClick: (e, legendItem, legend) => {
          const index = legendItem.index;
          const ci = legend.chart;
          if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
          } else {
            ci.show(index);
            legendItem.hidden = false;
          }
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#1E2530',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#374151',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#9ca3af',
          font: {
            size: 12,
          },
          padding: 8,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#9ca3af',
          font: {
            size: 12,
          },
          stepSize: 25,
          padding: 8,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
    layout: {
      padding: {
        
        top: 0
      }
    }
  };

  return (
    <div className="h-[360px] w-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ComparisonChart; 