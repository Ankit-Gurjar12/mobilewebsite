import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center bg-white shadow-md p-4">
       
        <div className="flex-shrink-0">
          <img
            src="image/mobile_repairing__1_-removebg-preview.png"
            alt="Vyanweb Logo"
            className="h-16 md:h-24 mx-auto md:ml-16"
          />
        </div>

        
        <div className="flex-grow mt-4 md:mt-0 md:ml-16">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="pl-10 py-3 text-sm text-gray-700 placeholder-gray-400 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-72 lg:w-96"
              placeholder="Search..."
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
