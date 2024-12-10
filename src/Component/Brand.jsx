


import React from "react";
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <>
      <div className="font-extrabold text-blue-900 text-3xl my-10 ml-8">
        Top Brands
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center mt-10">
        {[
          { img: "image/Samsung_logo_blue 1.svg", title: "Samsung", Route: "/brand" },
          { img: "image/vivo 1.svg", title: "Vivo" },
          { img: "image/mi 1.svg", title: "Mi" },
          { img: "image/oppo 1.svg", title: "Oppo" },
          { img: "image/apple-removebg-preview 1.svg", title: "Apple" },
          { img: "image/oneplus 1.svg", title: "OnePlus" },
          { img: "image/poco 1.svg", title: "Poco" },
          { img: "image/nokia 1.svg", title: "Nokia" },
          { img: "image/realme 1.svg", title: "Realme" },
          { img: "image/huawei 1.svg", title: "Huawei" },
          { img: "image/honor-removebg-preview 1.svg", title: "Honor" },
          { img: "image/motorola 1 (1).svg", title: "Motorola" },
          { img: "image/karbonn 1.svg", title: "Karbonn" },
          { img: "image/LG 1.svg", title: "LG" },
          { img: "image/I Ball 1.svg", title: "I Ball" },
          { img: "image/lenovo 1.svg", title: "Lenovo" },
          { img: "image/HTC 1.svg", title: "HTC" },
          { img: "image/images 1.svg", title: "Images" },
          { img: "image/LYF 1.svg", title: "LYF" },
          { img: "image/TECNO 1.svg", title: "TECNO" },
        ].map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 text-center shadow-lg py-5 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-40 h-20 mx-auto overflow-hidden">
              <Link to={service.Route || '/brand'}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="mt-2 text-sm">{service.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Brand;
