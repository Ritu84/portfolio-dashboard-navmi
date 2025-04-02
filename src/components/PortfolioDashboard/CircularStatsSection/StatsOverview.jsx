import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ data, label, color, showSubLabel, total, outOf, onClick }) => {
    // Calculate the remaining percentage for the gray part
    const remainingValue = 100 - data;
    const pieData = [
        { value: data },
        { value: remainingValue }
    ];

    return (
        <div className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity" onClick={onClick}>
            <div className="relative w-[110px] h-[60px] mb-1">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="100%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={32}
                            outerRadius={42}
                            dataKey="value"
                            strokeWidth={0}
                        >
                            <Cell fill={color} />
                            <Cell fill="#2a3441" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                {/* Position the percentage text at the center of the semi-circle */}
                <div 
                    className="absolute"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -2%)',
                        width: 'fit-content'
                    }}
                >
                    <span className="text-white text-lg font-semibold whitespace-nowrap">{data}%</span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-gray-400 text-[13px]">{label}</span>
                {showSubLabel && (
                    <span className="text-gray-500 text-xs mt-0.5">{total}/{outOf}</span>
                )}
            </div>
        </div>
    );
};

const StatsOverview = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        avgGain: 62,
        avgLoss: 52,
        avgReturn: 100,
        positiveEntries: {
            value: 50,
            total: 30,
            outOf: 50
        },
        negativeEntries: {
            value: 20,
            total: 20,
            outOf: 50
        }
    });

    const [timeFilter, setTimeFilter] = useState('today');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleCardClick = () => {
        navigate('/detailed-stats');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const timeOptions = [
        { value: 'today', label: 'Today' },
        { value: 'last week', label: 'last week' },
        { value: 'last 15 days', label: 'last 15-days' },
        { value: 'last 30-days', label: 'last 30-days' },
        { value: 'last 3-months', label: 'last 3-months' },
        { value: 'last 6-months', label: 'last 6-months' }
    ];

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Replace this with your actual API call
                // const response = await fetch('your-api-endpoint/stats');
                // const data = await response.json();
                // setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
        const refreshInterval = setInterval(fetchStats, 5 * 60 * 1000);
        return () => clearInterval(refreshInterval);
    }, []);

    return (
        <div className="bg-navmi-panel p-[15px] rounded-lg h-[425px]">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-[20px]">Performance Overview</h2>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="bg-[#2a3441] text-white text-sm rounded-lg px-3 py-1.5 border border-gray-600 flex items-center gap-2"
                    >
                        {timeOptions.find(option => option.value === timeFilter)?.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-1 w-40 bg-[#2a3441] rounded-lg shadow-lg border border-gray-600 z-10">
                            {timeOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setTimeFilter(option.value);
                                        setShowDropdown(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm ${
                                        timeFilter === option.value
                                            ? 'text-navmi-blue bg-blue-500/10'
                                            : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-y-8">
                <StatCard
                    data={stats.avgGain}
                    label="Avg Gain"
                    color="#10B981"
                    onClick={handleCardClick}
                />
                <StatCard
                    data={stats.avgLoss}
                    label="Avg Loss"
                    color="#EF4444"
                    onClick={handleCardClick}
                />
            </div>

            <div className="flex justify-center my-8">
                <StatCard
                    data={stats.avgReturn}
                    label="Avg Return"
                    color="#3B82F6"
                    onClick={handleCardClick}
                />
            </div>

            <div className="grid grid-cols-2 gap-y-8">
                <StatCard
                    data={stats.positiveEntries.value}
                    label="Positive entries"
                    color="#10B981"
                    showSubLabel={true}
                    total={stats.positiveEntries.total}
                    outOf={stats.positiveEntries.outOf}
                    onClick={handleCardClick}
                />
                <StatCard
                    data={stats.negativeEntries.value}
                    label="Negative entries"
                    color="#EF4444"
                    showSubLabel={true}
                    total={stats.negativeEntries.total}
                    outOf={stats.negativeEntries.outOf}
                    onClick={handleCardClick}
                />
            </div>
        </div>
    );
};

export default StatsOverview; 