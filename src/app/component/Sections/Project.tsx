import React from "react";
import { Projects } from "../ui/Card";
import Image from "next/image";
const Project = () => {
  return (
    <section id="Projects" className="mb-30">
      <div>
        <h1 className="font-bold text-center text-4xl lg:text-5xl">
          Projects
          <br />
          that i&apos;ve worked on
        </h1>
        <div className="w-20 h-px bg-gray-300 my-4 mx-auto mb-10"></div>
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
                <hr className="mb-3" />
                <p className="font-extralight text-sm mb-4 text-center">
                  {card.discription}
                </p>
                <hr className="mb-3" />
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
                  <a href={card.url} target="_blank" className="w-full text-center bg-white text-black font-bold p-2 rounded-md mt-4  hover:bg-gray-300  ">go to website</a>
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
