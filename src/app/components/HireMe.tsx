import { Card } from "flowbite-react";
import CardHire from "./CardHire";
import {
  faC,
  faDiamond,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function HireMe() {
  return (
    <div
      className="min-h-[30vh]  my-9 flex justify-between lg:flex-row flex-col"
      id="hireme"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="lg:max-w-[500px] flex flex-col justify-center gap-5 my-4"
      >
        <p className="text-[40px] font-bold tracking-wider lg:max-w-[450px]">
          Why Hire Me For You Next{" "}
          <span className="text-[#6C63FF]">Project</span>?
        </p>
        <p className="dark:text-zinc-300 text-zinc-600 text-sm">
          My passion is to deliver a good software, solve problems, make
          responsive designs and find the best user experience.
        </p>
        <div>
          <a
            href="#contactus"
            className="bg-[#6C63FF] cursor-pointer hover:bg-[#6C63FF]/80 transition text-sm py-3 px-6 rounded-md text-white"
          >
            Hire Me
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
        className="lg:flex gap-3 hidden"
      >
        <div className="flex gap-2  lg:flex-col justify-between lg:justify-around">
          <CardHire
            icon={faReact}
            title="React, Angular"
            desc="Professional experience of 10 months in both. I play with React for 3 years."
          />
          <CardHire
            icon={null}
            title="ASP NET MVC"
            desc="Professional experience of 10 months in ASP Net MVC Development."
          />
        </div>
        <div className="flex flex-col justify-center">
          <CardHire
            icon={faPlusCircle}
            title="Much More"
            desc="I have skills in many other languages such as: SQL, JavaScript, Java, CSS, Tailwind CSS, MongoDB, Python. "
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="lg:hidden flex flex-col sm:flex-row w-full sm:justify-between gap-2 mt-2"
      >
        <CardHire
          icon={faReact}
          title="React"
          desc="Professional experience of 10 months in React."
        />{" "}
        <CardHire
          icon={null}
          title="ASP NET MVC"
          desc="Professional experience of 10 months in ASP Net MVC Development."
        />
        <CardHire
          icon={faPlusCircle}
          title="Much More"
          desc="I have skills in many other languages such as: SQL, JavaScript, Java, CSS, Tailwind CSS, MongoDB, Python. "
        />
      </motion.div>
    </div>
  );
}
