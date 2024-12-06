import React from 'react';
import { FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar w-96 p-4 relative -top-[140px] text-white shadow-lg bg-opacity-100 bg-black hidden md:block">
      {/* Main User Profile */}
      <div className="sidebar-profile flex items-center p-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <img src='https://avatars.githubusercontent.com/u/142103116?v=4' className="text-gray-500 text-2xl rounded-full" alt='your profile'></img>
        </div>
        <div className="ml-4">
          <p className="font-bold text-sm">Username</p>
          <p className="text-gray-300 text-xs">User Bio</p>
        </div>
      </div>

      {/* Suggestions for You */}
      <div className="suggestions mt-4">
        <h2 className="font-semibold text-sm text-white">Suggested for you</h2>
        <div className="suggested-user flex items-center p-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="text-gray-500 text-xl" />
          </div>
          <div className="ml-3">
            <p className="font-bold text-sm text-white">Suggested User 1</p>
            <p className="text-blue-500 text-xs cursor-pointer">Follow</p>
          </div>
        </div>
        <div className="suggested-user flex items-center p-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="text-gray-500 text-xl" />
          </div>
          <div className="ml-3">
            <p className="font-bold text-sm text-white">Suggested User 2</p>
            <p className="text-blue-500 text-xs cursor-pointer">Follow</p>
          </div>
        </div>
        <div className="suggested-user flex items-center p-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="text-gray-500 text-xl" />
          </div>
          <div className="ml-3">
            <p className="font-bold text-sm text-white">Suggested User 3</p>
            <p className="text-blue-500 text-xs cursor-pointer">Follow</p>
          </div>
        </div>
        <div className="suggested-user flex items-center p-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="text-gray-500 text-xl" />
          </div>
          <div className="ml-3">
            <p className="font-bold text-sm text-white">Suggested User 4</p>
            <p className="text-blue-500 text-xs cursor-pointer">Follow</p>
          </div>
        </div>
        
      </div>

      {/* Footer Links */}
      <div className="footer-links mt-4 text-gray-400 text-xs px-4">
        <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations</p>
        <p className="mt-2">© 2024 Instagram Clone</p>
      </div>
    </div>
  );
};

export default Sidebar;
