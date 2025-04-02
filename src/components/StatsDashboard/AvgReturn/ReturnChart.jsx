import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area } from 'recharts';

const generateMonthlyData = () => {
  return [
    { name: 'Jan', return: 65 },
    { name: 'Feb', return: 60 },
    { name: 'Mar', return: 70 },
    { name: 'Apr', return: 75 },
    { name: 'May', return: 65 },
    { name: 'Jun', return: 60 },
    { name: 'Jul', return: 55 },
    { name: 'Aug', return: 60 },
    { name: 'Sep', return: 75 },
    { name: 'Oct', return: 70 },
    { name: 'Nov', return: 65 },
    { name: 'Dec', return: 55 },
  ];
};

const generateWeeklyData = () => {
  // Creating deterministic data for weekly view
  const weeks = [];
  for (let i = 1; i <= 52; i++) {
    // Using a pattern to generate data rather than random numbers
    const returnValue = 45 + Math.abs(Math.sin(i * 0.4) * 35);
    weeks.push({
      name: `W${i}`,
      return: Math.round(returnValue)
    });
  }
  return weeks;
};

const generateDailyData = () => {
  // Creating deterministic data for daily view
  const days = [];
  for (let i = 1; i <= 30; i++) {
    // Using a pattern to generate data rather than random numbers
    const returnValue = 45 + Math.abs(Math.sin(i * 0.3) * 35);
    days.push({
      name: `${i}`,
      return: Math.round(returnValue)
    });
  }
  return days;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-[#1a1d1f] p-3 rounded-lg border border-gray-700 shadow-lg">
        <p className="text-gray-400 mb-2">Time: {label}</p>
        <p className="text-[#3B82F6] text-sm">
          Return value: ${payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const ReturnChart = ({ timeframe }) => {
  const data = useMemo(() => {
    switch(timeframe) {
      case 'daily':
        return generateDailyData();
      case 'weekly':
        return generateWeeklyData();
      case 'monthly':
      default:
        return generateMonthlyData();
    }
  }, [timeframe]);

  return (
    <div className="h-60">
      <div className="mb-4 flex items-center">
        <div className="flex items-center mr-5">
          <div className="w-3 h-3  rounded-sm mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm mr-2"></div>
          <span className="text-gray-400 text-sm"></span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="returnGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={{ stroke: '#2a3441' }}
            tickLine={{ stroke: '#2a3441' }}
          />
          <YAxis 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={{ stroke: '#2a3441' }}
            tickLine={{ stroke: '#2a3441' }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ stroke: '#4B5563', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="return"
            stroke="none"
            fill="url(#returnGradient)"
          />
          <Line 
            type="monotone" 
            dataKey="return" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReturnChart; 