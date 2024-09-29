import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Demo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error); 
      });
    }
  }, []);

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          See It in Action
        </h2>
        <div className="relative inline-block">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <video
              ref={videoRef}
              src="/assets/vid.mp4" // Replace with your demo video path
              alt="Demo"
              className="w-full max-w-3xl rounded-lg shadow-lg brightness-110" // Increased brightness
              loop
              autoPlay // Automatically play the video
              muted // Mute the video for autoplay to work in most browsers
              preload="metadata"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
