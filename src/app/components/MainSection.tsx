"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import danielpng from "../img/undraw_tabs_re_a2bd.svg";
import CardReview from "./CardReview";
import HireMe from "./HireMe";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[38vh] overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="lg:max-w-[450px]"
        >
          <p className="text-[50px] font-bold  tracking-wider">
            I am a <span className="text-[#6C63FF]">Full Stack Developer</span>
          </p>
          <p className="">
            My name is Daniel, I am a Software Engineer. I have been working for
            almost 1 year in Software Engineer.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <a
              href="#contactus"
              className="bg-[#6C63FF] hover:bg-[#6C63FF]/80 transition text-sm py-2.5 px-6 rounded-md text-white"
            >
              Contact Me
            </a>
            <a href="https://github.com/danielmorais123" target="_blank" className="text-sm hover:underline group cursor-pointer">
              View Portfolio{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:inline-flex hidden transition"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="flex justify-center"
        >
          <img
            src={danielpng.src}
            alt=""
            className="sm:max-h-[300px] !w-[90%] object-contain"
          />
        </motion.div>
      </div>
      <div className="min-h-[40vh] my-4">
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="flex flex-col sm:flex-row items-center gap-3 "
        >
          <CardReview title="30+" subTitle="Projects Github" />
          <hr className="sm:h-[100px] sm:w-0 w-1/2 mx-auto border-[#6C63FF] sm:border" />
          <CardReview title="2+" subTitle="Portfolios" />
          <hr className="sm:h-[100px] w-1/2 mx-auto sm:w-0  border-[#6C63FF] sm:border" />
          <CardReview title="7+" subTitle="Language Master" />
        </motion.div>
        <div>
          <HireMe />
        </div>
      </div>
    </div>
  );
}
