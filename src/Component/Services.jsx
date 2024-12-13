import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="font-extrabold text-blue-900 text-3xl my-10 ml-10">
        Mobile Services
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-4 ml-10">
        {[
          {
            title: 'SCREEN',
            img: 'https://images.unsplash.com/photo-1552098904-72d422955307?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcmVwYWlyaW5nfGVufDB8fDB8fHww',
            route: '/services',
          },
          {
            title: 'SPEAKER',
            img: 'https://plus.unsplash.com/premium_photo-1681487739750-4d2c44fb1ede?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'MIC',
            img: 'https://images.unsplash.com/photo-1543062591-e3c0fdb97350?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'FRONT CAMERA',
            img: 'https://www.shutterstock.com/image-photo/kiev-ukraine-may-6-2020-260nw-1738028696.jpg',
          },
          {
            title: 'BACK CAMERA',
            img: 'https://png.pngtree.com/thumb_back/fw800/background/20231007/pngtree-illustration-of-3d-rendered-concept-for-smartphone-repair-image_13554507.png',
          },
          {
            title: 'CHARGING JACK',
            img: 'https://plus.unsplash.com/premium_photo-1725867721975-bea9a26a20f7?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'MOTHER BOARD',
            img: 'https://thumbs.dreamstime.com/b/technician-repairing-smartphone-s-motherboard-lab-soldering-method-concept-computer-hardware-mobile-pho-phone-158654462.jpg',
          },
          {
            title: 'BATTERY',
            img: 'https://rukminim2.flixcart.com/image/450/400/xif0q/mobile-battery/r/v/j/dc024-6-aehub-2300-original-imahyrrtrfarz95p.jpeg?q=90&crop=false',
          },
          {
            title: 'BACK PANEL',
            img: 'https://images.glowroad.com/faceview/ga/ac/f1a/bj/imgs/pd/1710919641581_IMG_6400-xlgn400x400.jpeg?productId=P-27956582',
          },
        ].map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 text-center shadow-lg py-5 transition-transform transform hover:scale-105 hover:shadow-2xl bg-white"
          >
            <div className="w-56 h-40 mx-auto overflow-hidden rounded-lg">
              <Link to={service.route || '#'}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="mt-4 font-bold text-lg text-gray-700">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;

