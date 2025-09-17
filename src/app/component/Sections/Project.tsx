import React from "react";
import { Projects } from "../ui/Card";
import Image from "next/image";
import { motion } from "motion/react";
const Project = () => {
  return (
    <section id="Projects" className="flex mb-30 h-230 items-center justify-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-center text-4xl lg:text-5xl"
        >
          Projects
          <br />
          that i&apos;ve worked on
        </motion.h1>
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: 290 }}
          transition={{ duration: 0.5 }}
          className="mt-7 w-70 mx-auto mb-7"
        ></motion.hr>
        {/*jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj*/}
        <div className="flex flex-wrap justify-center gap-5">
          {Projects.map((card, index) => {
            return (
              <div key={index} className="w-80 border rounded-lg p-5 shadow-lg">
                <div className="h-60 w-full overflow-auto rounded-lg mb-4 hide-scrollbar">
                  <Image
                    className="w-full h-auto"
                    src={card.image}
                    height={200}
                    width={800}
                    alt={`${card.name} image`}
                  />
                </div>
                <h1 className="font-bold text-2xl mb-3 text-center mt-8">
                  {card.name}
                </h1>
                <motion.hr
                  initial={{ width: 50 }}
                  whileInView={{ width: 290 }}
                  transition={{ duration: 0.3 }}
                  className="mt-7 w-70 mx-auto mb-7"
                ></motion.hr>
                <p className="font-extralight text-sm mb-4 text-center">
                  {card.discription}
                </p>
                <motion.hr
                  initial={{ width: 50 }}
                  whileInView={{ width: 290 }}
                  transition={{ duration: 0.3 }}
                  className="mt-7 w-70 mx-auto mb-7"
                ></motion.hr>
                <p className="font-medium mb-3">Tech stack:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {card.techstack.map((tech, techIndex) => {
                    return (
                      <span
                        key={techIndex}
                        className="border border-violet-500 rounded-sm px-3 py-1 text-sm font-extralight shadow-[inset_0px_0px_16px_4px_rgba(195,_125,_224,_0.40)]"
                      >
                        {tech}
                      </span>
                    );
                  })}
                  <a
                    href={card.url}
                    target="_blank"
                    className="w-full text-center bg-white text-black font-bold p-2 rounded-md mt-4  hover:bg-gray-300  "
                  >
                    go to website
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
