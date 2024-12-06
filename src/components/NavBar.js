import { 
  FaHome, 
  FaSearch, 
  FaPlusSquare, 
  FaVideo, 
  FaUser, 
  FaEnvelope, 
  FaBell, 
  FaCompass 
} from "react-icons/fa";
import React from "react";

const NavBar = () => {
  // Menu Items as an Array of Objects
  const menuItems = [
    { label: "Home", icon: <FaHome size={24} /> },
    { label: "Search", icon: <FaSearch size={24} /> },
    { label: "Explore", icon: <FaCompass size={24} /> },
    { label: "Reels", icon: <FaVideo size={24} /> },
    { label: "Messages", icon: <FaEnvelope size={24} /> },
    { label: "Notifications", icon: <FaBell size={24} /> },
    { label: "Create", icon: <FaPlusSquare size={24} /> },
    { label: "Profile", icon: <FaUser size={24} /> },
  ];

  return (
    <div className="hidden sm:block bg-black pr-3 lg:fixed top-3 min-h-screen border-r">
      {/* Title */}
      <h1 className="text-left text-xl font-bold text-white mb-6 font-special">Instagram Clone</h1>

      {/* Menu as List */}
      <ul className="flex flex-col space-y-4">
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center space-x-2 text-white hover:bg-gray-700 px-4 py-2 rounded cursor-pointer"
          >
            {item.icon}
            <span className="text-lg">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
