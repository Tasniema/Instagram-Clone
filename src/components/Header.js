import React from 'react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-black shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-white text-lg font-bold font-special">Conovo Task</span>
        <FiChevronDown className="text-white text-xl" />
      </div>
      <div className="flex space-x-4">
        <FaHeart
          className="text-white cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => alert("Redirect to notifications")}
        />
        <FaCommentDots
          className="text-white cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => alert("Redirect to messages")}
        />
      </div>
      
    </header>
  );
};

export default Header;

