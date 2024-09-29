import React from "react";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          See It in Action
        </h2>
        <div className="relative inline-block">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/0SO6_ajaqcY?autoplay=1&mute=1&loop=1&playlist=0SO6_ajaqcY"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
