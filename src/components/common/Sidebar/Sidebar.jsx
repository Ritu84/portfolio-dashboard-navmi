import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashboardIcon from '../../../assets/dashboard-icon.svg';
import misScreenIcon from '../../../assets/mis-screen-icon.svg';
import collapserIcon from '../../../assets/collapser-icon.svg';
import sidebarRightIcon from '../../../assets/sidebar-right-icon.svg';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={`${isCollapsed ? 'w-18' : 'w-[250px]'} p-[12px] bg-navmi-panel min-h-screen m-4 rounded-lg flex flex-col transition-all duration-300`}>
      <div className="flex items-center justify-between mb-8">
        {!isCollapsed && <div className="text-[#3b82f6] text-[34px] pl-2">NAVMI</div>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-navmi-card rounded-lg"
        >
          <img src={collapserIcon} alt="collapse" className="w-6 h-6" />
        </button>
      </div>
      
      <div className="space-y-2">
        <Link to="/" className={`text-white flex items-center p-3 rounded group ${location.pathname === '/' ? 'bg-blue-500' : 'hover:bg-navmi-card'}`}>
          <img src={dashboardIcon} alt="dashboard" className="w-5 h-5 mr-3" />
          {!isCollapsed && (
            <div className="flex items-center justify-between flex-1">
              <span>Dashboard</span>
              <img src={sidebarRightIcon} alt="right" className="w-3 h-3" />
            </div>
          )}
        </Link>
        <Link to="/mis-screen" className={`text-white flex items-center p-3 rounded group ${location.pathname === '/mis-screen' ? 'bg-blue-500' : 'hover:bg-navmi-card'}`}>
          <img src={misScreenIcon} alt="mis screen" className="w-5 h-5 mr-3" />
          {!isCollapsed && (
            <div className="flex items-center justify-between flex-1">
              <span>MIS Screen</span>
              <img src={sidebarRightIcon} alt="right" className="w-3 h-3" />
            </div>
          )}
        </Link>
      </div>
      
      <div className="mt-auto mb-[50px]">
        <button className={`bg-blue-500 text-white px-4 py-2 rounded w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-center space-x-2'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          {!isCollapsed && <span>Help Desk</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 