import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Automate Your Social Media Success
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Generate and schedule content effortlessly across all your platforms.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300">
            <Link to="/signup">Sign Up</Link>
          </button>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="no opener no referrer"
            className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-blue-600 transition"
          >
            Watch Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
