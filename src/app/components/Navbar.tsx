"use client";

import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { motion } from "framer-motion";


export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className="justify-between flex items-center"
    >
      <Logo />
      <div className="hidden md:flex">
        <ul className="flex items-center gap-5">
          <li className="cursor-pointer font-semibold tracking-wider">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer font-semibold tracking-wider">
            Portfolio
          </li>
          <li className="cursor-pointer font-semibold tracking-wider">
            <a href="#reviews">Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex mr-3">
        <a
          href="CV_Daniel_Morais_Sousa.pdf"
          download="CV_Daniel_Morais"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dark:bg-[#6C63FF] dark:hover:bg-[#6C63FF]/80 hover:bg-[#6C63FF]/80 text-sm px-4 py-2 rounded-md bg-[#6C63FF] text-white duration-500 transition">
            Download CV
          </button>
        </a>
      </div>
      <div className="mr-4 cursor-pointer md:hidden">
        <FaBars />
      </div>
    </motion.div>
  );
}
