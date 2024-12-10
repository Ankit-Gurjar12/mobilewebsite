import React from "react";
import { Link, Route } from 'react-router-dom';

const Brand = () => {
  return (
    <>
      <div className="font-extrabold text-blue-900 text-3xl my-10 ml-8  ">
       
        Top Brands
      </div>
      <div className="grid grid-cols-5 gap-4 place-items-center mt-10 ">
        {[
          {
            img: "image/Samsung_logo_blue 1.svg",
            Route:"/brand"
          },
          {
            img: "image/vivo 1.svg",
          },
          {
            img: "image/mi 1.svg",
          },
          {
            img: "image/oppo 1.svg",
          },

          {
            img: "image/apple-removebg-preview 1.svg",
          },
          {
            img: "image/oneplus 1.svg",
          },
          {
            img: "image/poco 1.svg",
          },
          {
            img: "image/nokia 1.svg",
          },

          {
            img: "image/realme 1.svg",
          },
          {
            img: "image/huawei 1.svg",
          },
          {
            img: "image/honor-removebg-preview 1.svg",
          },
          {
            img: "image/motorola 1 (1).svg",
          },

          {
            img: "image/karbonn 1.svg",
          },
          {
            img: "image/LG 1.svg",
          },
          {
            img: "image/I Ball 1.svg",
          },
          {
            img: "image/lenovo 1.svg",
          },

          {
            img: "image/HTC 1.svg",
          },
          {
            img: "image/images 1.svg",
          },
          {
            img: "image/LYF 1.svg",
          },
          {
            img: "image/TECNO 1.svg",
          },
          
           
        ].map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 text-center shadow-lg py-5 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-40 h-20 mx-4 overflow-hidden">
              <Link to='/brand'>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full  object-contain"
              />
              </Link>
            </div>
            <div className="mt-2">{service.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Brand;
