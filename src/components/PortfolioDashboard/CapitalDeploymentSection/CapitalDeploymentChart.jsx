import React, { useMemo } from 'react';

// Dummy data - This will be replaced with API data later
const dummyData = [
  { label: '1-day', value: 15000 },
  { label: '1-hr', value: 45000 },
  { label: '15-min', value: 30000 },
  { label: '5-min', value: 20000 },
];

const calculateRange = (data) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  // Define possible range steps
  const ranges = [
    { max: 1000, steps: [0, 100, 500, 750, 1000] },
    { max: 10000, steps: [0, 1000, 5000, 7500, 10000] },
    { max: 100000, steps: [0, 10000, 50000, 75000, 100000] },
    { max: 1000000, steps: [0, 1000, 10000, 100000, 1000000] },
    { max: 10000000, steps: [0, 1000, 10000, 1000000, 10000000] }
  ];

  // Find appropriate range based on max value
  const selectedRange = ranges.find(range => maxValue <= range.max) || ranges[ranges.length - 1];
  return {
    steps: selectedRange.steps,
    maxValue: selectedRange.max
  };
};

const CapitalDeploymentChart = () => {
  // This will be replaced with API call and useEffect later
  const data = dummyData;

  const { steps, maxValue } = useMemo(() => calculateRange(data), [data]);

  return (
    <div className="h-full text-gray-400">
      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.label} className="flex items-center">
            <div className="w-16 text-sm text-gray-400">{item.label}</div>
            <div className="flex-1 h-2 bg-[#1E2530] relative">
              <div className="absolute inset-0 grid grid-cols-4">
                <div className="border-r border-[#2A3441]"></div>
                <div className="border-r border-[#2A3441]"></div>
                <div className="border-r border-[#2A3441]"></div>
              </div>
              <div 
                className="h-full bg-white rounded-sm"
                style={{ 
                  width: `${(item.value / maxValue) * 100}%`,
                  opacity: 0.9
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 text-xs mt-4 pl-16 text-gray-400">
        {steps.map((step, index) => (
          <div key={index}>{step.toLocaleString()}</div>
        ))}
      </div>
    </div>
  );
};

export default CapitalDeploymentChart;

// Example of how to integrate with API later:
/*
const CapitalDeploymentChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('/api/capital-deployment');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Rest of the component...
};
*/ 