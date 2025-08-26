"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 text-center sm:text-left overflow-hidden"
    >
      {/* Background Gradient Circles */}
<div className="absolute top-10 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>      <div className="absolute top-1/3 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10 sm:gap-12 lg:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-4"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Hello, I’m Parsa
            <span className="text-blue-400 text-3xl">.</span>
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 bg-clip-text text-transparent leading-tight"
          >
            Frontend Developer
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug"
          >
            who loves creating <br className="hidden sm:block" /> clean & modern
            web <br className="hidden sm:block" /> experiences
          </motion.h2>
        </motion.div>

        {/* Floating Stars Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:mx-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/icons/stars.png"
              height={500}
              width={500}
              alt="stars illustration"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
