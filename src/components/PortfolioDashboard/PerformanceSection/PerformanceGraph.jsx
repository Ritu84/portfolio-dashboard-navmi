import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const PerformanceGraph = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  // Function to format date as DD/MM
  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
  };

  // Function to format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Function to generate last 15 days dates
  const getLast15Days = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 14); // -14 because we want today + 14 previous days = 15 days total
    return { start, end };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get date range
        const { start, end } = getLast15Days();
        setDateRange({ 
          start: formatDate(start), 
          end: formatDate(end) 
        });

        // For now, generating dummy data for the last 15 days
        const dummyData = Array.from({ length: 15 }, (_, index) => {
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() - (14 - index));
          
          return {
            date: formatDate(currentDate),
            capitalDeficit: 65000 + Math.floor(Math.random() * 25000),
            investmentValue: 45000 + Math.floor(Math.random() * 30000),
            capitalInvested: 25000 + Math.floor(Math.random() * 15000),
          };
        });

        setData(dummyData);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchData();

    // Set up daily refresh at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;

    const midnightTimeout = setTimeout(() => {
      fetchData();
      const dailyInterval = setInterval(fetchData, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, []);

  return (
    <div className="bg-navmi-panel p-[15px] rounded-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-white text-[20px]">Capital deployment comparison</h2>
          <span className="text-gray-400 text-sm">
            <p>Last 15-days comparison graph from {dateRange.start} to {dateRange.end}</p>
          </span>
        </div>
      </div>

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" />
            <XAxis 
              dataKey="date" 
              stroke="#6B7280"
              tick={{ fill: '#6B7280', fontSize: 11 }}
              tickMargin={10}
            />
            <YAxis 
              stroke="#6B7280"
              domain={[0, 'auto']}
              tick={{ fill: '#6B7280', fontSize: 11 }}
              tickFormatter={(value) => formatCurrency(value)}
              width={75}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E2530',
                border: 'none',
                borderRadius: '4px',
                color: '#fff',
                padding: '8px 12px',
              }}
              formatter={(value, name) => {
                const labels = {
                  capitalDeficit: 'Capital deficit',
                  investmentValue: 'Investment value',
                  capitalInvested: 'Capital invested'
                };
                return [formatCurrency(value), labels[name]];
              }}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Legend 
              formatter={(value) => {
                const labels = {
                  capitalDeficit: 'Capital deficit',  
                  investmentValue: 'Investment value',
                  capitalInvested: 'Capital invested'
                };
                return labels[value];
              }}
              wrapperStyle={{
                color: '#fff',
                fontSize: '11px',
                paddingTop: '10px'
              }}
            />
            <Line
              type="linear"
              dataKey="capitalDeficit"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, stroke: '#3B82F6', strokeWidth: 2, fill: '#1E2530' }}
            />
            <Line
              type="linear"
              dataKey="investmentValue"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, stroke: '#10B981', strokeWidth: 2, fill: '#1E2530' }}
            />
            <Line
              type="linear"
              dataKey="capitalInvested"
              stroke="#EF4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 4, stroke: '#EF4444', strokeWidth: 2, fill: '#1E2530' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceGraph; 