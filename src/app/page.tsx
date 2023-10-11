import ContactUs from "./components/ContactUs";
import MainSection from "./components/MainSection";

import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";
import ExperienceCard from "./components/ExperienceCard";
import experienceSvg from "./img/undraw_experts_re_i40h.svg";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen py-2 w-full xl:w-[70%] lg:w-[85%] mx-auto">
      <Navbar />
      <div className="mx-6">
        <MainSection />
        <div className="min-h-screen flex justify-evenly flex-col" id="skills">
          <div className="flex flex-col  gap-2 my-9">
            <div className="flex flex-col items-center justify-between gap-4">
              <p className="text-4xl font-bold">Professional Experience</p>
              <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 mt-5">
                {" "}
                <ExperienceCard
                  title="Build Up Labs"
                  subTitle="Internship - Full-Stack Developer - 3 months"
                  description="Worked in project Tap My Back, an organizational motivation project, as a full-stack developer
                  in Build Up Labs, Lisbon, fixing bugs, implementing new
                  functionalities, improving user experience using React,
                  Tailwind CSS, MongoDB and Meteor.JS."
                />
                <img
                  src={experienceSvg.src}
                  className="w-1/3 min-w-[300px] object-contain hidden lg:flex"
                  alt=""
                />
                <ExperienceCard
                  title="Neyond"
                  subTitle="Full-Stack Developer | January 2023 - July 2023"
                  description="Worked as Junior Analyst at Neyond, Lisbon in an insurance project as a
                  Software Full-Stack Developer using Microsoft tools, ASP. NET, Angular, React, SQL Server."
                />
              </div>
              <div className="flex justify-center mt-2 lg:hidden">
                <img
                  src={experienceSvg.src}
                  className="w-1/3 min-w-[300px] object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Projects />
        </div>
        {/* <Reviews /> */}
        <ContactUs />
        <hr className="mt-4 lg:mt-0" />
        <Footer />
      </div>
    </div>
  );
}
