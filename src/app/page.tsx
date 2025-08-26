"use client";
import Hero from "./component/Sections/Hero";
import About from "./component/Sections/About";
import Contact from "./component/Sections/Contact";
import Navbar from "./component/ui/Navbar";
import Project from "./component/Sections/Project";
import { useEffect } from "react";
const Portfolio = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <footer className="flex w-full bg-black h-10 items-center gap-4 justify-center mt-8 text-sm">
        <p className="text-gray-600">
          &copy;2025 built with love. All rights reserved
        </p>
        <p>|</p>
        <a
          href="https://github.com/parsa-the"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/gitt.png"
            alt="GitHub"
            className="w-5 h-5 hover:opacity-80 transition-opacity opacity-80 flex-1"
          />
        </a>
      </footer>
    </>
  );
};

export default Portfolio;
