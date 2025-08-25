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
import Image from "next/image";

const Skills = () => {
  return (
    <section className="mb-40">
      <h2 className="font-bold text-center text-4xl lg:text-5xl ">
        Skills & Technologies
      </h2>
      <div className="w-32 h-px bg-gray-300 my-4 mx-auto"></div>
      <p className="text-center left-10  mx-auto w-80 lg:w-100">
        I mainly work with TypeScript, React, and Next.js, styled with Tailwind,
        and use Git for version control.
      </p>

      <div className="flex justify-center mt-15">
        <div className="grid mb-5 grid-cols-2 sm:grid-cols-4 gap-5 ">
          {logos.map((img, index) => (
            <Image
              src={img.icon}
              alt={img.name}
              key={index}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
          {second.map((img, index) => (
            <Image
              src={img.icon}
              alt={img.name}
              key={index}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
