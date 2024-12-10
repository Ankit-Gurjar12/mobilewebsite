// import React, { useState, useEffect } from "react";
// import { FaLocationDot } from "react-icons/fa6";


// const Store = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

  
//   const images = [
//     "https://as2.ftcdn.net/v2/jpg/08/48/05/47/1000_F_848054725_HYHu0Bn54Ly9ad2IOwB62mb4qDskyJmf.jpg", 
//     "https://as1.ftcdn.net/v2/jpg/02/04/72/02/1000_F_204720217_GfAKAdW9UzZXUDrJqwYWAIPW63GslYTs.jpg",
//     "https://as1.ftcdn.net/v2/jpg/04/00/85/16/1000_F_400851625_LG98sZ7m9KO5xppunSjJqlclr3KyuTl6.jpg",
//     "https://as1.ftcdn.net/v2/jpg/02/52/11/54/1000_F_252115417_5NA6gU45c7k4o6q4rcztXbL3H1XB7gz2.jpg",
    
//   ];

//   useEffect(() => {
    
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); 

    
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <>
//       <div className="font-extrabold text-blue-900 text-3xl my-10 ml-8  text-center">
       
//        VISIT OUR STORE
//      </div>
//     <div className="mx-auto container mt-3 relative">
      
//       <div className="relative overflow-hidden rounded-2xl mx-auto h-[700px] w-full object-cover">
//         <div className="carousel-inner">
//           <img
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="rounded-2xl mx-auto h-[50%] w-screen object-cover" 
//           />
//         </div>
//       </div>

      
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`h-3 w-3 rounded-full ${
//               currentIndex === index ? "bg-blue-500" : "bg-gray-300"
//             }`}
//             onClick={() => setCurrentIndex(index)} 
//           />
//         ))}
//       </div>
      
//     </div>
//     <div className="font-extrabold text-blue-900 text-3xl my-10 ml-8  flex ">
    
//     <FaLocationDot className="mr-4 ml-10" />
//      Bhawarkua, Indore, MP
     
//      </div>
  //    <div className="aspect-w-16 aspect-h-9">
  //   <iframe
  //     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3680.9573121845006!2d75.8650272116083!3d22.692632979320503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733476180384!5m2!1sen!2sin"
  //     width="600"
  //     height="450"
  //     style={{ order: '0' }}
  //     allowFullScreen=""
  //     loading="lazy"
  //     referrerPolicy="no-referrer-when-downgrade"
  //     className="rounded-2xl mx-auto h-svh w-11/12 object-cover "
  //   ></iframe>
  // </div>

//     </>
//   );
// };

// export default Store;



// import React, { useState, useEffect } from "react";
// import { FaLocationDot } from "react-icons/fa6";

// const Store = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "https://as2.ftcdn.net/v2/jpg/08/48/05/47/1000_F_848054725_HYHu0Bn54Ly9ad2IOwB62mb4qDskyJmf.jpg",
//     "https://as1.ftcdn.net/v2/jpg/02/04/72/02/1000_F_204720217_GfAKAdW9UzZXUDrJqwYWAIPW63GslYTs.jpg",
//     "https://as1.ftcdn.net/v2/jpg/04/00/85/16/1000_F_400851625_LG98sZ7m9KO5xppunSjJqlclr3KyuTl6.jpg",
//     "https://as1.ftcdn.net/v2/jpg/02/52/11/54/1000_F_252115417_5NA6gU45c7k4o6q4rcztXbL3H1XB7gz2.jpg",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <>
//       {/* Title Section */}
//       <div className="font-extrabold text-blue-900 text-3xl my-6 text-center">
//         VISIT OUR STORE
//       </div>

//       {/* Carousel Section */}
//       <div className="relative mt-3 mx-auto w-full px-4 md:px-0">
//         <div className="relative overflow-hidden rounded-lg">
//           {/* Image Slider */}
//           <img
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="rounded-lg w-full h-[50%] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-transform duration-500 ease-in-out"
//           />
//           {/* Dots Section */}
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 className={`h-3 w-3 rounded-full ${
//                   currentIndex === index ? "bg-blue-500" : "bg-gray-300"
//                 } hover:bg-blue-700 transition ease-in-out duration-200`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Address Section */}
//       <div className="flex items-center justify-center mt-8 text-blue-900 text-lg font-semibold px-2 sm:px-6 md:px-8">
//         <FaLocationDot className="mr-2 text-xl" />
//         Bhawarkua, Indore, MP
//       </div>

//       {/* Google Maps Section */}
      // <div className="mt-6 px-2 sm:px-4 md:px-8 lg:px-16">
      //   <div className="relative aspect-w-16 aspect-h-9 rounded-lg">
      //     <iframe
      //       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3680.9573121845006!2d75.8650272116083!3d22.692632979320503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733476180384!5m2!1sen!2sin"
      //       className="w-full h-full object-cover"
      //       allowFullScreen
      //       loading="lazy"
      //       referrerPolicy="no-referrer-when-downgrade"
      //     />
      //   </div>
      // </div>
//     </>
//   );
// };

// export default Store;

import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Store = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://as2.ftcdn.net/v2/jpg/08/48/05/47/1000_F_848054725_HYHu0Bn54Ly9ad2IOwB62mb4qDskyJmf.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/04/72/02/1000_F_204720217_GfAKAdW9UzZXUDrJqwYWAIPW63GslYTs.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/00/85/16/1000_F_400851625_LG98sZ7m9KO5xppunSjJqlclr3KyuTl6.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/52/11/54/1000_F_252115417_5NA6gU45c7k4o6q4rcztXbL3H1XB7gz2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Title Section */}
      <div className="font-extrabold text-blue-900 text-3xl my-6 text-center">
        VISIT OUR STORE
      </div>

      {/* Carousel Section */}
      <div className="relative mt-3 mx-auto w-full px-4 md:px-0">
        <div className="relative overflow-hidden rounded-lg">
          {/* Image Slider */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg w-full h-[50%] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Slider Dots Section - Moved Outside Slider */}
      <div className="flex justify-center mt-4 space-x-2 sm:space-x-3 md:space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            } hover:bg-blue-700 transition ease-in-out duration-200`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Address Section */}
      <div className="flex items-center justify-center mt-8 text-blue-900 text-lg font-semibold px-2 sm:px-6 md:px-8">
        <FaLocationDot className="mr-2 text-xl" />
        Bhawarkua, Indore, MP
      </div>

      {/* Google Maps Section */}
      <div className="aspect-w-16 aspect-h-9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3680.9573121845006!2d75.8650272116083!3d22.692632979320503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733476180384!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ order: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl mx-auto h-svh w-11/12 object-cover "
    ></iframe>
  </div>
    </>
  );
};

export default Store;

