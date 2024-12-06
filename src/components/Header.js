import React from 'react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4  bg-black shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-white text-lg font-bold font-special xs:fixed lg:hidden">Instagram Clone</span>
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

