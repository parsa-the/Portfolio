"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "next.js", icon: "/icons/next.png" },
  { name: "react", icon: "/icons/react.png" },
  { name: "javascript", icon: "/icons/js.png" },
  { name: "tailwind", icon: "/icons/tailwind.png" },
  { name: "html", icon: "/icons/html.png" },
  { name: "css", icon: "/icons/css.png" },
  { name: "ts", icon: "/icons/ts.png" },
  { name: "git", icon: "/icons/git.png" },
];

const second = [
  { name: "github", icon: "/icons/github.png" },
  { name: "vercel", icon: "/icons/vercel.png" },
  { name: "figma", icon: "/icons/figma.png" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    
    <motion.section
      ref={ref}
      className="mb-40"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >  <div className="absolute right-60 w-18 h-18 sm:w-30 sm:h-30 md:w-50 md:h-50 lg:w-70 lg:h-70 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

      <motion.h2
        className="font-bold text-center text-4xl lg:text-5xl"
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        className="w-32 h-px bg-gray-300 my-4 mx-auto"
        initial={{ width: 0 }}
        animate={isInView ? { width: 128 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.p
        className="text-center mx-auto w-80 lg:w-96 mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        My current tool kit for building and deploying web projects
      </motion.p>

      <div className="flex justify-center mt-12">
        <div className="grid mb-8 grid-cols-2 sm:grid-cols-4 gap-6">
          {logos.map((img, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: 30, opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.5,
                delay: isInView ? index * 0.1 + 0.6 : 0,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.15,
                rotateY: 15,
                transition: { duration: 0.2 },
              }}
              className="cursor-pointer rounded-lg p-2 hover:shadow-lg transition-shadow"
            >
              <Image src={img.icon} alt={img.name} width={90} height={90} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-5">
          {second.map((img, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: 30, opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.5,
                delay: isInView ? (logos.length + index) * 0.1 + 0.6 : 0,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.15,
                rotateY: 15,
                transition: { duration: 0.2 },
              }}
              className="cursor-pointer rounded-lg p-2 hover:shadow-lg transition-shadow"
            >
              <Image src={img.icon} alt={img.name} width={90} height={90} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
