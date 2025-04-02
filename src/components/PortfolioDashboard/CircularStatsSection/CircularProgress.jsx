import React from 'react';

const CircularProgress = ({ value, color, size = '100px', label, entries }) => {
  return (
    <div 
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg className="w-full h-full progress-circle" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#2a2e39"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${value}, 100`}
          className="progress-path"
        />
      </svg>
      <div className="absolute text-white text-lg font-semibold">{value}%</div>
      {label && (
        <div className="absolute -top-6 text-gray-400">{label}</div>
      )}
      {entries && (
        <div className="absolute -bottom-8 text-gray-400 text-sm">{entries}</div>
      )}
    </div>
  );
};

export default CircularProgress; 