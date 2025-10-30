"use client";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex w-full h-10 items-center gap-4 justify-center mt-8 text-sm">
      <p className="text-gray-600">
        &copy; 2025 built with love. All rights reserved
      </p>
      <span className="text-gray-400">|</span>
      <a
        href="https://github.com/parsa-the"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/gitt.png"
          alt="GitHub"
          width={20}
          height={20}
          className="hover:opacity-80 transition-opacity opacity-80"
        />
      </a>
    </footer>
  );
};
export default Footer;
