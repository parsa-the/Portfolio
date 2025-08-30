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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 15px rgba(168,85,247,0.25)",
          "0 0 25px rgba(168,85,247,0.6)",
          "0 0 15px rgba(168,85,247,0.25)",
        ],
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: { duration: 0.8 },
        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className="sticky top-4 z-0 mx-auto sm:w-fit flex items-center justify-center
                 gap-4 sm:gap-8 px-4 py-3 sm:px-8 sm:py-4
                 rounded-2xl text-white/90 text-sm sm:text-base font-semibold
                 bg-white/10 backdrop-blur-xl border border-white/30"
    >
      <div />

      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="relative hover:text-purple-400 transition-colors duration-300"
        >
          {label}
        </Link>
      ))}
    </motion.nav>
  );
};

export default Navbar;
