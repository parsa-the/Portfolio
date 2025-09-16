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
      <nav className="fixed top-0.5 z-100 flex gap-x-6 mt-3 backdrop-blur-xl border border-white/20 p-4 w-110 rounded-lg justify-center">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative hover:text-violet-300 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;