import React from 'react';
import { Link } from 'react-router-dom';

const Model = () => {
  return (
    <>
      <div className='font-extrabold text-blue-900 text-3xl mt-10 mb-6 ml-8 '>
        Mobile Services
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4  gap-2 md:gap-8 place-items-center">
        {[
   {
    title: 'F15 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/e/l/-original-imah3agqmmzap5gx.jpeg?q=70',
  },
  {
    title: 'F55 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/n/r/-original-imah6afzcmt2jcsy.jpeg?q=70',
  },
  {
    title: 'F54 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70',
  },
  {
    title: 'F41',
    img: 'https://rukminim2.flixcart.com/image/312/312/kfzq8i80/mobile/w/z/z/samsung-galaxy-f41-sm-f415fzgdins-original-imafwbnhbywwg5gh.jpeg?q=70',
  },
  {
    title: 'F02s',
    img: 'https://rukminim2.flixcart.com/image/312/312/kn22m4w0/mobile/t/z/7/galaxy-f02s-sm-e025fdbfins-samsung-original-imagfthzytxvkmb2.jpeg?q=70',
  },
  {
    title: 'F12',
    img: 'https://rukminim2.flixcart.com/image/312/312/kn22m4w0/mobile/6/o/e/galaxy-f12-sm-f127gzkgins-samsung-original-imagftmhuqq3arbg.jpeg?q=70',
  },
  {
    title: 'F22',
    img: 'https://rukminim2.flixcart.com/image/312/312/kqqykcw0/mobile/j/5/7/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.jpeg?q=70',
  },
  {
    title: 'F42 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/ku4ezrk0/mobile/6/z/p/galaxy-f42-5g-sm-e426bzbgins-samsung-original-imag7anfz8jzxkv4.jpeg?q=70',
  },
  {
    title: 'F52 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/kddf6a80/mobile/g/y/v/samsung-m01-core-b089mv96rw-original-imafuaghffexhag6.jpeg?q=70',
  },
  {
    title: 'F62',
    img: 'https://rukminim2.flixcart.com/image/312/312/klb78nk0/mobile/m/2/k/galaxy-f62-sm-e625fzggins-samsung-original-imagygxxse8gbaby.jpeg?q=70',
  },
  {
    title: 'F13',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/l/l/-original-imagueeyshyqzbfh.jpeg?q=70',
  },
  {
    title: 'F23 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/h/k/-original-imagcg22czc3ggvw.jpeg?q=70',
  },
  {
    title: 'F04',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/g/1/-original-imaguechpztrxtgh.jpeg?q=70',
  },
  {
    title: 'F14 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
  },
  {
    title: 'F34 5G',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/r/8/-original-imagtywatxffk3yh.jpeg?q=70',
  },
  {
    title: 'F05',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70',
  },
        ].map((service, index) => (
          <Link to="/Models">
          <div
            key={index}
            className="rounded-2xl border-2 text-center shadow-lg pt-5 p-3 md:p-5 transform transition duration-500 hover:scale-105 hover:shadow-2xl w-[100px] md:w-[250px] h-[100px] md:h-[200px]"
            style={{
              height: '200px', 
              // width: '180px', 
            }}
          >
          
            <div
              className="flex justify-center items-center h-3/5"
              style={{
                height: '60%', 
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            <div className="mt-4 font-bold">{service.title}</div>
          </div>
          </Link>
        ))}
      </div>
      
    </>
  );
};

export default Model;


