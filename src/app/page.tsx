import { twMerge } from "tailwind-merge";
import Logo from "./components/Logo";
import { FaBars } from "react-icons/fa";
import ContactUs from "./components/ContactUs";
import MainSection from "./components/MainSection";
import HireMe from "./components/HireMe";

export default function Home() {
  return (
    <div className="min-h-screen py-2 w-full xl:w-[70%] lg:w-[85%] mx-auto">
      <div className="justify-between flex items-center  ">
        <Logo />
        <div className="hidden md:flex">
          <ul className="flex items-center gap-5">
            <li className="cursor-pointer font-semibold tracking-wide">
              About
            </li>
            <li className="cursor-pointer font-semibold tracking-wide">
              Skills
            </li>
            <li className="cursor-pointer font-semibold tracking-wide">
              Portfolio
            </li>
            <li className="cursor-pointer font-semibold tracking-wide">
              Testimonials
            </li>
          </ul>
        </div>
        <div className="hidden md:flex mr-3">
          <button className="dark:bg-[#6C63FF] dark:hover:bg-[#6C63FF]/80 hover:bg-[#6C63FF]/80 text-sm px-4 py-2 rounded-md bg-[#6C63FF] text-white duration-500 transition">
            Download CV
          </button>
        </div>
        <div className="mr-4 cursor-pointer md:hidden">
          <FaBars />
        </div>
      </div>
      <div className="mx-4">
        <MainSection />

        <ContactUs />
      </div>
    </div>
  );
}
