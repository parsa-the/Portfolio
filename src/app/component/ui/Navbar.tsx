"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center mb-10">
      <nav className="fixed top-0.5 z-100 flex mt-3 backdrop-blur-xl border border-white/20   rounded-lg justify-center p-2 w-79 pt-3 pb-3 gap-x-5 sm:p-4 sm:gap-x-6 sm:w-110 ">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative font-light hover:text-violet-300 transition-colors sm:font-semibold"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;