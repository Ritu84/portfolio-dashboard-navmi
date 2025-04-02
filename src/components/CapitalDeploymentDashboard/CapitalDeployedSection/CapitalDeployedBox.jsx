import React, { useState, useRef } from 'react';

const CapitalDeployedBox = ({ capitalInvested = 1200000, investmentValue = 1300000 }) => {
    const [hoverStates, setHoverStates] = useState({
        capital: { value: null, position: 0 },
        investment: { value: null, position: 0 }
    });
    const progressBarRef = useRef(null);

    // Define ranges
    const capitalRange = {
        min: 0,
        max: 2000000 // $2M as max range
    };

    const investmentRange = {
        min: 0,
        max: 2000000 // $2M as max range
    };

    // Calculate percentages for progress bars
    const calculateProgress = (value, range) => {
        return Math.min(((value - range.min) / (range.max - range.min)) * 100, 100);
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    const handleMouseMove = (e, range, type) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        const value = (percentage / 100) * (range.max - range.min) + range.min;
        setHoverStates(prev => ({
            ...prev,
            [type]: {
                value: Math.round(value),
                position: Math.min(Math.max(x, 30), rect.width - 30)
            }
        }));
    };

    const handleMouseLeave = (type) => {
        setHoverStates(prev => ({
            ...prev,
            [type]: { value: null, position: 0 }
        }));
    };

    return (
        <div className="bg-navmi-panel p-6 rounded-lg">
            <h2 className="text-[20px] text-white mb-4">Capital deployed</h2>
            <div className="text-3xl text-white font-bold mb-12">
                {formatCurrency(6400000)}
            </div>

            <div className="space-y-8">
                <div>
                    <div className="flex justify-between text-gray-400 text-sm mb-2">
                        <span>Capital invested</span>
                        <span>{formatCurrency(capitalInvested)}</span>
                    </div>
                    <div className="relative group">
                        <div 
                            className="h-2 bg-gray-700 rounded cursor-pointer"
                            onMouseMove={(e) => handleMouseMove(e, capitalRange, 'capital')}
                            onMouseLeave={() => handleMouseLeave('capital')}
                            ref={progressBarRef}
                        >
                            <div 
                                className="h-full bg-navmi-green rounded" 
                                style={{ width: `${calculateProgress(capitalInvested, capitalRange)}%` }}
                            ></div>
                        </div>
                        {hoverStates.capital.value !== null && (
                            <div 
                                className="absolute bottom-full mb-2 pointer-events-none"
                                style={{ 
                                    left: `${hoverStates.capital.position}px`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                    {formatCurrency(hoverStates.capital.value)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-gray-400 text-sm mb-2">
                        <span>Investment value</span>
                        <span>{formatCurrency(investmentValue)}</span>
                    </div>
                    <div className="relative group">
                        <div 
                            className="h-2 bg-gray-700 rounded cursor-pointer"
                            onMouseMove={(e) => handleMouseMove(e, investmentRange, 'investment')}
                            onMouseLeave={() => handleMouseLeave('investment')}
                        >
                            <div 
                                className="h-full bg-navmi-green rounded" 
                                style={{ width: `${calculateProgress(investmentValue, investmentRange)}%` }}
                            ></div>
                        </div>
                        {hoverStates.investment.value !== null && (
                            <div 
                                className="absolute bottom-full mb-2 pointer-events-none"
                                style={{ 
                                    left: `${hoverStates.investment.position}px`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                    {formatCurrency(hoverStates.investment.value)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapitalDeployedBox; 