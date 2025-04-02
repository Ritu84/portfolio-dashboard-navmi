import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, Tooltip } from 'recharts';

// Fixed monthly data to match the image exactly
const generateMonthlyData = () => {
  return [
    { name: 'Jan', gain: 45, loss: 25 },
    { name: 'Feb', gain: 55, loss: 30 },
    { name: 'Mar', gain: 65, loss: 40 },
    { name: 'Apr', gain: 75, loss: 30 },
    { name: 'May', gain: 60, loss: 25 },
    { name: 'Jun', gain: 50, loss: 35 },
    { name: 'Jul', gain: 55, loss: 30 },
    { name: 'Aug', gain: 70, loss: 20 },
    { name: 'Sep', gain: 75, loss: 25 },
    { name: 'Oct', gain: 60, loss: 20 },
    { name: 'Nov', gain: 55, loss: 30 },
    { name: 'Dec', gain: 50, loss: 25 },
  ];
};

// Generate fixed weekly data
const generateWeeklyData = () => {
  // Creating deterministic data for weekly view instead of random
  const weeks = [];
  for (let i = 1; i <= 52; i++) {
    // Using a pattern to generate data rather than random numbers
    const gain = 40 + Math.abs(Math.sin(i * 0.5) * 30);
    const loss = 15 + Math.abs(Math.cos(i * 0.5) * 20);
    weeks.push({
      name: `W${i}`,
      gain: Math.round(gain),
      loss: Math.round(loss)
    });
  }
  return weeks;
};

// Generate fixed daily data
const generateDailyData = () => {
  // Creating deterministic data for daily view instead of random
  const days = [];
  for (let i = 1; i <= 30; i++) {
    // Using a pattern to generate data rather than random numbers
    const gain = 40 + Math.abs(Math.sin(i * 0.3) * 30);
    const loss = 15 + Math.abs(Math.cos(i * 0.3) * 15);
    days.push({
      name: `${i}`,
      gain: Math.round(gain),
      loss: Math.round(loss)
    });
  }
  return days;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-[#1a1d1f] p-3 rounded-lg border border-gray-700 shadow-lg">
        <p className="text-gray-400 mb-2">Date: {label}</p>
        <p className="text-[#10B981] text-sm mb-1">
          Avg Gain: ${payload[0].value}
        </p>
        <p className="text-[#EF4444] text-sm">
          Avg Loss: ${payload[1].value}
        </p>
      </div>
    );
  }
  return null;
};

const GainLossChart = ({ timeframe }) => {
  // Use useMemo to ensure data only regenerates when timeframe changes
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
          <div className="w-3 h-3 bg-navmi-green rounded-sm mr-2"></div>
          <span className="text-gray-400 text-sm">Avg Gain</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-navmi-red rounded-sm mr-2"></div>
          <span className="text-gray-400 text-sm">Avg Loss</span>
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
            dataKey="gain"
            stroke="#10B981"
            fill="url(#gainGradient)"
            fillOpacity={1}
          />
          <Area
            type="monotone"
            dataKey="loss"
            stroke="#EF4444"
            fill="url(#lossGradient)"
            fillOpacity={1}
          />
          <Line 
            type="monotone" 
            dataKey="gain" 
            stroke="#10B981" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="loss" 
            stroke="#EF4444" 
            strokeWidth={2}
            dot={false}
            strokeDasharray="3 3"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GainLossChart; 