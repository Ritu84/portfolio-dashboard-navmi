import React from 'react';
import { useLocation } from 'react-router-dom';
import settingIcon from '../../../assets/setting-icon.svg';
import alertIcon from '../../../assets/alert-icon.svg';
import userIcon from '../../../assets/user.png';

const Navbar = () => {
  const location = useLocation();

  const getPathName = () => {
    if (location.pathname === '/') return 'dashboard';
    // Remove the leading slash and replace hyphens with spaces
    return location.pathname.slice(1).replace(/-/g, ' ');
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        {/* Right side - Controls and user info */}
        <div className="flex-1"></div>
        <div className="flex items-center space-x-4">
          {/* Settings icon */}
          <button className="text-gray-400 hover:text-white">
            <img src={settingIcon} alt="Settings" className="h-6 w-6" />
          </button>

          {/* Notification icon */}
          <button className="text-gray-400 hover:text-white">
            <img src={alertIcon} alt="Notifications" className="h-6 w-6" />
          </button>

          {/* Logout button */}
          <button className="bg-[#0D99FF] text-white px-4 py-2 rounded hover:bg-[#0b86e0]">
            Logout
          </button>

          {/* Separator */}
          <span className="text-gray-400">|</span>

          {/* User info */}
          <div className="flex items-center space-x-3">
            <img src={userIcon} alt="User" className="h-8 w-8 rounded-full" />
            <div className="text-right">
              <div className="text-white">user.name</div>
              <div className="text-gray-400 text-sm">user.email</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb section below navbar */}
      <div className="bg-navmi-panel p-[13px] rounded-lg ">
        <div className="flex items-center text-white gap-1">
          <span>Dashboard</span>
          {/* <span className="text-[#0D99FF]">/</span>
          <span className="text-[#0D99FF]">dashboard</span> */}
          {location.pathname !== '/' && (
            <>
              <span className="text-[#0D99FF]">/</span>
              <span className="text-[#0D99FF]">{getPathName()}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;