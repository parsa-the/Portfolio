"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import InfoCard from "../ui/InfoCard";

const About = () => {
  return (
    <>
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto mb-45">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-bold text-center text-4xl lg:text-5xl"
        >
          About me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-20 h-px bg-gray-300 my-4 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          I'm a high school student with a passion for programming. I love
          creating user-friendly interfaces and writing clean and efficient
          code.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-wrap gap-y-10 gap-x-10">
          <InfoCard
            icon="/icons/light.png"
            title="Problem Solving"
            description="I love tackling challenges and finding creative solutions. Always eager to learn new concepts and technologies."
            delay={0.4}
          />
          <InfoCard
            icon="/icons/code.png"
            title="Quick Learner"
            description="Passionate about technology and committed to continuous learning. Always excited to take on new challenges."
            delay={0.6}
          />
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
