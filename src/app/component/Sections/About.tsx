"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import InfoCard from "../ui/InfoCard";

const About = () => {
  return (
    <>
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto mb-45 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-center text-4xl lg:text-5xl"
        >
          About me
        </motion.h1>

<motion.hr className="mt-4 mb-4 mx-auto" initial={{width:0}} animate={{width:200}}></motion.hr>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          I&apos;m a high school student with a passion for programming. I love
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
          <InfoCard
            icon="/icons/controller.png"
            title="Gamer"
            description="outside of coding, im a gamer, my favorite games include Elden ring,rainbow six siege and dark souls 3"
            delay={0.6}
          />
           <InfoCard
            icon="/icons/goal.png"
            title="Future goals"
            description="Expand my Node.js and UI/UX skills to become a well-rounded full-stack developer, with aspirations to join innovative companies and progress from junior to mid-level within the next few years."
            delay={0.6}
          />
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
