"use client";
import Image from "next/image";
import { motion } from "motion/react";

const skills = [
  { name: "next.js", icon: "/icons/next.png" },
  { name: "react", icon: "/icons/react.png" },
  { name: "javascript", icon: "/icons/js.png" },
  { name: "tailwind", icon: "/icons/tailwind.png" },
  { name: "html", icon: "/icons/html.png" },
  { name: "css", icon: "/icons/css.png" },
  { name: "ts", icon: "/icons/ts.png" },
  { name: "git", icon: "/icons/git.png" },
  { name: "github", icon: "/icons/github.png" },
  { name: "vercel", icon: "/icons/vercel.png" },
  { name: "figma", icon: "/icons/figma.png" },
  {name:"Motion" , icon:"/icons/Motion.png"}
];

export default function Skills() {
  return (
    <section className="mb-40 relative">
      <div className="absolute right-60 w-18 h-18 sm:w-30 sm:h-30 md:w-50 md:h-50 lg:w-70 lg:h-70 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-center text-4xl lg:text-5xl"
      >
        Skills & Technologies
      </motion.h2>

      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: 290 }}
        className="mt-7 mx-auto border-t-2"
      />

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mx-auto w-80 lg:w-96 mt-4"
      >
        My current tool kit for building and deploying web projects
      </motion.p>

      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.2 }}>
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center"
              >
                <Image src={s.icon} alt={s.name} width={90} height={90} />
                <motion.span
                
                  initial={{ opacity: 0,y:10 }}
                  whileHover={{ opacity: 1 ,y:0}}
                  transition={{duration:0.2}}
                  className="text-sm"
                >
                  {s.name}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
