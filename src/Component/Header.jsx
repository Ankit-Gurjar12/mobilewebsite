import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between bg-white shadow-md p-4">
        <div className="flex-shrink-0 py-1 px-4 sm:px-6 rounded-full mt-2 focus:outline-none transform transition duration-500 hover:scale-105">
          <img
            src="image/mobile_repairing__1_-removebg-preview.png"
            alt="Vyanweb Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto"
          />
        </div>

        <div className="flex-grow mt-4 md:mt-0 md:ml-8 flex justify-center">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="pl-10 py-3 text-sm text-gray-700 placeholder-gray-400 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-72 lg:w-96"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 md:mt-0">
          <p className="py-2 px-6 sm:px-8 rounded-full bg-orange-400 text-black font-extrabold focus:outline-none shadow-md transform transition duration-500 hover:scale-105">
            About
          </p>
          <p className="py-2 px-6 sm:px-8 rounded-full bg-orange-400 text-black font-extrabold focus:outline-none shadow-md transform transition duration-500 hover:scale-105">
            Our Work
          </p>
          <p className="py-2 px-6 sm:px-8 rounded-full bg-orange-400 text-black font-extrabold focus:outline-none shadow-md transform transition duration-500 hover:scale-105">
            +91 1234567890
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
