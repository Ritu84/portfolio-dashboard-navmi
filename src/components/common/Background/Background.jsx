import React from 'react';
import bgSvg from '../../../assets/bg.svg';

const Background = () => {
  return (
    <img 
      src={bgSvg} 
      alt="Background"
      className="fixed inset-0 -z-10 w-full h-full object-cover opacity-10"
    />
  );
};

export default Background;