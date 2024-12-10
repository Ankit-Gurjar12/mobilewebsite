
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

  const calculateVideosPerSlide = () => {
    if (window.innerWidth < 640) return 1; 
    if (window.innerWidth < 768) return 2; 
    return 3; 
  };

  const [videosPerSlide, setVideosPerSlide] = useState(calculateVideosPerSlide());

  useEffect(() => {
    const handleResize = () => setVideosPerSlide(calculateVideosPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + videosPerSlide) % videos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [videos.length, videosPerSlide]);

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
      
      <div className="font-extrabold text-blue-900 text-3xl my-10 text-center">
        Our Work
      </div>

     
      <div className="container mx-auto mt-3 px-4 md:px-0 relative overflow-hidden">
        <div className="relative overflow-hidden">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {currentVideos.map((video, index) => (
              <video
                key={index}
                src={video}
                controls
                className="rounded-2xl aspect-video object-cover w-full max-w-sm"
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-4 space-x-3">
        {Array.from({ length: Math.ceil(videos.length / videosPerSlide) }).map(
          (_, index) => (
            <button
              key={index}
              aria-label={`Slide to ${index + 1}`}
              className={`h-3 w-3 rounded-full ${
                Math.floor(currentIndex / videosPerSlide) === index
                  ? "bg-blue-500"
                  : "bg-gray-300"
              } hover:bg-blue-700 transition ease-in-out duration-200`}
              onClick={() => setCurrentIndex(index * videosPerSlide)}
            />
          )
        )}
      </div>
    </>
  );
};

export default VideoSlider;
