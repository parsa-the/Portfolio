"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="mx-auto mt-7 w-fit flex items-center justify-center gap-x-6 sm:gap-x-17 
                px-8 py-3 sm:p-5 rounded-lg text-white/90 text-sm font-light tracking-wide 
                bg-black/20 backdrop-blur-sm border border-gray-600/30 
                hover:bg-black/30 transition duration-300 
                shadow-[inset_-7px_7px_9px_-5px_#2b2b2b] sm:w-120"
    >
      <Link
        href="#Home"
        className="hover:text-purple-500 transition-colors duration-200 opacity-100"
      >
        Home
      </Link>
      <Link
        href="#about"
        className="hover:text-purple-500 transition-colors duration-200 opacity-100"
      >
        About
      </Link>
      <Link
        href="#Projects"
        className="hover:text-purple-500 transition-colors duration-200"
      >
        Projects
      </Link>
      <Link
        href="#Contact"
        className="hover:text-purple-500 transition-colors duration-200"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
