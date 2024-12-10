
import React from 'react';

const Repairing = () => {
  return (
    <>
      <div className="font-extrabold text-blue-900 text-3xl my-10 text-center">
        Select Repairing Services
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6">
        {[
          {
            title: 'Display',
            img: "image/screen 1.svg",
            amount: 1000,
          },
          {
            title: 'Speaker',
            img: "image/SPEAKER 2.svg",
            amount: 800,
          },
          {
            title: 'MIC',
            img: "image/MIC 1.svg",
            amount: 600,
          },
          {
            title: 'CHARGING JACK',
            img: "image/CHARGING JACK 1.svg",
            amount: 1200,
          },
          {
            title: 'BATTERY',
            img: "image/battery 1.svg",
            amount: 1500,
          },
          {
            title: 'MOTHER BOARD',
            img: "image/Motherboard Repair 1.svg",
            amount: 5000,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-full max-w-xs h-auto rounded-2xl border-2 text-center shadow-lg bg-slate-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex items-center p-4 space-x-4"
          >
          
            <div className="w-1/3 flex-shrink-0">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full max-h-32 object-contain"
              />
            </div>
           
            <div className="w-2/3 text-left">
              <div className="font-bold text-lg sm:text-xl">{service.title}</div>
              <div className="text-green-600 font-semibold text-sm mt-2">
                ₹<span className="ml-1">{service.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <div className="flex justify-center mt-12">
        <button
          type="button"
          className="py-4 px-8 sm:px-40 mb-10 rounded-full bg-green-600 text-white font-extrabold hover:bg-green-700 focus:outline-none shadow-md transform transition duration-500 hover:scale-105"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Repairing;
