import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28 text-center sm:text-left"
    >
      {/* Background Gradient Circles */}
      <div className="absolute -top-10 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-10 sm:gap-12">
        
        {/* Text */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Hello, I’m Parsa
          </h3>

          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 bg-clip-text text-transparent leading-tight">
            Frontend Developer
          </h1>

          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug">
            who loves creating <br /> clean & modern web <br /> experiences
          </h2>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/icons/stars.png"
            height={500}
            width={500}
            alt="stars illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
