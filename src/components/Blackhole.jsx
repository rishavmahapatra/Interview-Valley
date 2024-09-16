import React, { useEffect, useRef, useState } from 'react';

const Blackhole = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up an IntersectionObserver to detect when the video becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);  // Video is visible
            videoRef.current.play(); // Optionally, auto-play the video when visible
          } else {
            setIsVisible(false);  // Video is not visible
            videoRef.current.pause(); // Optionally, pause the video when not visible
          }
        });
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={`lazy-video ${isVisible ? 'lazy-video-loaded' : ''}  w-full h-full absolute top-7`}>
        {/* -top-32 */}
      <video
        ref={videoRef}
        disablePictureInPicture 
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        preload="none"  // Set preload to "none" for lazy loading
        muted
        playsInline
        loop
        className="w-full h-full overflow-hidden object-cover"
        src="/blackhole.webm" // Path to your video file
      >
        {/* Fallback content for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Blackhole;
