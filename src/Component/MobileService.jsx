import React from 'react'
import { Link } from 'react-router-dom';

const MobileService = () => {
  return (
    <>
    <div className='font-extrabold text-blue-900 text-3xl my-10 ml-8  '> Samsung Mobile Services</div>
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 place-items-center mt-5">
      
    
    {[
      {
        title: 'Galaxy F-Series',
        Route:'/mobileservice'
      },
      {
        title: 'Galaxy Note Series',
      },
      {
        title: 'Galaxy A-Series',
      },
      {
        title: 'Galaxy J-Series',
      },
      {
        title: 'Galaxy S-Series',
      },
      {
        title: 'Galaxy A05',
      },
      {
        title: 'Galaxy M-Series',
      },
      {
        title: 'Galaxy A-Series',
      },
     
    ].map((service, index) => (
      <Link to="/mobileservice">
      <div
        key={index}
        className="rounded-2xl border-2 text-center shadow-lg py-5 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div className="w-28 h-10 mx-6 overflow-hidden">
         
        </div>
        <div className=" font-bold">{service.title}</div>
      </div>
      </Link>
    ))}
  </div>
    </>
  )
}

export default MobileService