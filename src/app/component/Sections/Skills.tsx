"use client";
import Image from "next/image";
import { motion } from "motion/react";
type SkillItem = {
  name: string;
  icon: string;
};

const logos: SkillItem[] = [
  { name: "next.js", icon: "/icons/next.png" },
  { name: "react", icon: "/icons/react.png" },
  { name: "javascript", icon: "/icons/js.png" },
  { name: "tailwind", icon: "/icons/tailwind.png" },
  { name: "html", icon: "/icons/html.png" },
  { name: "css", icon: "/icons/css.png" },
  { name: "ts", icon: "/icons/ts.png" },
  { name: "git", icon: "/icons/git.png" },
];

const second: SkillItem[] = [
  { name: "github", icon: "/icons/gitt.png" },
  { name: "vercel", icon: "/icons/vercel.png" },
  { name: "figma", icon: "/icons/figma.png" },
];

type SkillGridProps = {
  items: SkillItem[];
};

const SkillGrid = ({ items }: SkillGridProps) => {
  return (
    <div className="flex justify-center mb-8">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`grid gap-6 ${
          items.length > 6
            ? "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {items.map((item) => (
          <motion.div key={item.name}>
            <Image src={item.icon} alt={item.name} width={90} height={90} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="mb-40">
      <div className="absolute right-60 w-18 h-18 sm:w-30 sm:h-30 md:w-50 md:h-50 lg:w-70 lg:h-70 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse" />

      <motion.h2 
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration:0.8}}
      className="font-bold text-center text-4xl lg:text-5xl">
        Skills & Technologies
      </motion.h2>

      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: 290 }}
        className="mt-7 w-70 mx-auto mb-7"
      ></motion.hr>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mx-auto w-80 lg:w-96 mt-4"
      >
        My current tool kit for building and deploying web projects
      </motion.p>

      <div className="mt-12">
        <SkillGrid items={logos} />
        <SkillGrid items={second} />
      </div>
    </section>
  );
};

export default Skills;
