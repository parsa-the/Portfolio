"use client";
import Image from "next/image";
import { motion } from "motion/react";

const skills = [
  { name: "Next.js", icon: "/icons/next.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Javascript", icon: "/icons/js.png" },
  { name: "Tailwind", icon: "/icons/tailwind.png" },
  { name: "Html", icon: "/icons/html.png" },
  { name: "Css", icon: "/icons/css.png" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Github", icon: "/icons/github.png" },
  { name: "Vercel", icon: "/icons/vercel.png" },
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "Motion", icon: "/icons/Motion.png" },
];

export default function Skills() {
  return (
    <section className="mb-40 relative">
      <div className="absolute right-60 w-18 h-18 sm:w-30 sm:h-30 md:w-50 md:h-50 lg:w-70 lg:h-70 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse" />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-bold text-center text-4xl lg:text-5xl"
      >
        Skills & Technologies
      </motion.h2>

      <motion.hr
        initial={{ width: 0 }}
        viewport={{ once: true }}
        whileInView={{ width: 290 }}
        className="mt-7 mx-auto border-t-2"
      />

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mx-auto w-80 lg:w-96 mt-4"
      >
        My current tool kit for building and deploying web projects
      </motion.p>

      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="group"
            >
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 60 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center"
              >
                <Image src={s.icon} alt={s.name} width={90} height={90} />
                <motion.span className="text-sm opacity-0 group-hover:opacity-50">
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
