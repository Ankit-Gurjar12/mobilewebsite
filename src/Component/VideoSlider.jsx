import React, { useState, useEffect } from "react";
const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const videos = [
    "video/video1.mp4", 
    "video/video2.mp4",
    "video/video3.mp4",
    "video/video4.mp4",
    "video/video5.mp4",
    "video/video6.mp4",
    "video/video7.mp4",
    "video/video8.mp4",
  ];

  
  const videosPerSlide = 3;

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + videosPerSlide) % videos.length
      );
    }, 5000); 

    
    return () => clearInterval(interval);
  }, [videos.length]);

  
  const currentVideos = videos.slice(
    currentIndex,
    currentIndex + videosPerSlide
  );

  
  if (currentVideos.length < videosPerSlide) {
    currentVideos.push(
      ...videos.slice(0, videosPerSlide - currentVideos.length)
    );
  }

  return (
    <>
    <div className="font-extrabold text-blue-900 text-3xl my-10 ml-8  ">
       
    Our Work
  </div>
    <div className="mx-auto container mt-3 relative">
      
      <div className="relative overflow-hidden">
        <div className="carousel-inner flex justify-between space-x-4">
          {currentVideos.map((video, index) => (
            <video
              key={index}
              src={video}
              controls
              className="rounded-2xl h-64 w-1/3 object-cover"
            ></video>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: Math.ceil(videos.length / videosPerSlide) }).map(
          (_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentIndex / videosPerSlide === index
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
              onClick={() =>
                setCurrentIndex(index * videosPerSlide) 
              }
            />
          )
        )}
      </div>
    </div>
    </>
  );
};

export default VideoSlider;