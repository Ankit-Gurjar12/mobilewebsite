import React from "react";
import { FiSearch } from "react-icons/fi";


const Header = () => {
  return (
    <>
    <header className="flex items-center  bg-white shadow-md p-4  ">
    

      <div>
      <img
        src="image\mobile_repairing__1_-removebg-preview.png"
        alt="Vyanweb Logo"
        className="h-24  ml-16"
      />
      </div>

      <div className=" border-gray-400 border-none border-2 ml-28" >
      <div className="relative w-full max-w-md mx-auto">
      
      <div className="absolute inset-y-0 left-3 flex items-center">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg> */}
        <div><FiSearch/></div>
      </div>

     
      <input
  type="text"
  className="pl-10 py-5 text-sm text-gray-700 placeholder-gray-400 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
  style={{ width: '300px' }} // Adjust the width as needed
  placeholder="Search..."
/>

    </div>
      
      </div>

      
    </header>
    </>
  );
};

export default Header;
