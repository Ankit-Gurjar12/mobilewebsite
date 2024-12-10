



import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "image/image1.webp",
    "image/image2.webp",
    "image/image3.webp",
    "image/image4.webp",
    "image/image9.jpeg",
    "image/image6.webp",
    "image/image7.jpeg",
    "image/image8.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mx-auto container mt-3 relative">
      
      <div className="relative overflow-hidden">
        <div className="carousel-inner">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-2xl mx-auto h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full object-cover"
          />
        </div>
      </div>

      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

