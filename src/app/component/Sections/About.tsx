import Image from "next/image";
import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto mb-45">
        <h1 className="font-bold text-center text-4xl lg:text-5xl">About me</h1>
        <div className="w-20 h-px bg-gray-300 my-4 mx-auto"></div>

        <p className="text-center max-w-3xl mx-auto mb-20">
          I'm a high school student with a passion for programming. I love
          creating user-friendly interfaces and writing clean and efficient
          code.
        </p>

        <div className="flex flex-wrap gap-y-10 gap-x-10">
          {/* Problem Solving Section */}
          <div className=" w-80 bg-black/20 backdrop-blur-sm border border-gray-600/30 px-8 py-3 rounded-lg text-white/90 text-sm font-light tracking-wide hover:bg-black/30 transition-all duration-300 mx-auto shadow-[inset_-7px_7px_9px_-5px_#2b2b2b] md:text-left">
            <header className="flex items-center gap-4 mb-2 justify-center md:justify-start">
              <Image
                src={"/icons/light.png"}
                height={30}
                width={30}
                alt="code"
              />
              <h4 className="font-semibold">Problem Solving</h4>
            </header>
            <p>
              I love tackling challenges and finding creative solutions. Always
              eager to learn new concepts and technologies.
            </p>
          </div>

          {/* Quick Learner Section */}
          <div className="text-center w-80 bg-black/20 backdrop-blur-sm border border-gray-600/30 px-8 py-3 rounded-lg text-white/90 text-sm font-light tracking-wide hover:bg-black/30 transition-all duration-300 mx-auto shadow-[inset_-7px_7px_9px_-5px_#2b2b2b] md:text-left ">
            <header className="flex items-center gap-4 mb-2 justify-center md:justify-start">
              <Image
                src={"/icons/code.png"}
                height={30}
                width={30}
                alt="code"
              />
              <h4 className="font-semibold">Quick Learner</h4>
            </header>
            <p>
              Passionate about technology and committed to continuous learning.
              Always excited to take on new challenges.
            </p>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
