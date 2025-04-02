import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, Tooltip } from 'recharts';

const generateMonthlyData = (type) => {
  // Fixed data for monthly view that won't change on re-render
  if (type === 'positive') {
    return [
      { name: 'Jan', value: 45 },
      { name: 'Feb', value: 55 },
      { name: 'Mar', value: 65 },
      { name: 'Apr', value: 70 },
      { name: 'May', value: 60 },
      { name: 'Jun', value: 50 },
      { name: 'Jul', value: 55 },
      { name: 'Aug', value: 35 },
      { name: 'Sep', value: 75 },
      { name: 'Oct', value: 65 },
      { name: 'Nov', value: 55 },
      { name: 'Dec', value: 40 },
    ];
  } else {
    return [
      { name: 'Jan', value: 65, average: 40 },
      { name: 'Feb', value: 70, average: 45 },
      { name: 'Mar', value: 75, average: 50 },
      { name: 'Apr', value: 65, average: 45 },
      { name: 'May', value: 60, average: 40 },
      { name: 'Jun', value: 55, average: 45 },
      { name: 'Jul', value: 60, average: 40 },
      { name: 'Aug', value: 50, average: 35 },
      { name: 'Sep', value: 65, average: 45 },
      { name: 'Oct', value: 75, average: 50 },
      { name: 'Nov', value: 60, average: 45 },
      { name: 'Dec', value: 55, average: 40 },
    ];
  }
};

const generateWeeklyData = (type) => {
  // Fixed data for weekly view that won't change on re-render
  if (type === 'positive') {
    const weeks = [];
    for (let i = 1; i <= 52; i++) {
      // Using a pattern to generate data rather than random numbers
      const value = 40 + Math.abs(Math.sin(i * 0.4) * 30);
      weeks.push({
        name: `W${i}`,
        value: Math.round(value)
      });
    }
    return weeks;
  } else {
    const weeks = [];
    for (let i = 1; i <= 52; i++) {
      // Using a pattern to generate data rather than random numbers
      const value = 40 + Math.abs(Math.sin(i * 0.4) * 30);
      const average = 30 + Math.abs(Math.cos(i * 0.4) * 15);
      weeks.push({
        name: `W${i}`,
        value: Math.round(value),
        average: Math.round(average)
      });
    }
    return weeks;
  }
};

const generateDailyData = (type) => {
  // Fixed data for daily view that won't change on re-render
  if (type === 'positive') {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      // Using a pattern to generate data rather than random numbers
      const value = 40 + Math.abs(Math.sin(i * 0.3) * 30);
      days.push({
        name: `${i}`,
        value: Math.round(value)
      });
    }
    return days;
  } else {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      // Using a pattern to generate data rather than random numbers
      const value = 40 + Math.abs(Math.sin(i * 0.3) * 30);
      const average = 30 + Math.abs(Math.cos(i * 0.3) * 15);
      days.push({
        name: `${i}`,
        value: Math.round(value),
        average: Math.round(average)
      });
    }
    return days;
  }
};

const CustomTooltip = ({ active, payload, label, type }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-[#1a1d1f] p-3 rounded-lg border border-gray-700 shadow-lg">
        <p className="text-gray-400 mb-2">Time: {label}</p>
        <p className={`text-sm ${type === 'positive' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
          {type === 'positive' ? 'Positive' : 'Negative'} entries: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const EntriesChart = ({ type, timeframe }) => {
  // Use useMemo to ensure data only regenerates when timeframe or type changes
  const data = useMemo(() => {
    switch(timeframe) {
      case 'daily':
        return generateDailyData(type);
      case 'weekly':
        return generateWeeklyData(type);
      case 'monthly':
      default:
        return generateMonthlyData(type);
    }
  }, [timeframe, type]);

  const lineColor = type === 'positive' ? '#10B981' : '#EF4444';
  const fillColor = type === 'positive' ? '#3AC977' : 'rgba(239, 68, 68, 0.1)';

  return (
    <div className="h-60">
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
            content={<CustomTooltip type={type} />}
            cursor={{ stroke: '#4B5563', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            fill={fillColor}
            fillOpacity={1}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={lineColor} 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EntriesChart; 