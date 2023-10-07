import danielpng from "../img/undraw_tabs_re_a2bd.svg";
import CardReview from "./CardReview";
import HireMe from "./HireMe";
export default function MainSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-[50vh]">
        <div className="lg:max-w-[450px]">
          <p className="text-[50px] font-bold  tracking-wider">
            I am a <span className="text-[#6C63FF]">Full Stack Developer</span>
          </p>
          <p className="">
            My name is Daniel, I am a Software Engineer. I have been working for
            almost 1 year in Software Engineer.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <button className="bg-[#6C63FF] hover:bg-[#6C63FF]/80 transition text-sm py-2.5 px-6 rounded-md text-white">
              Contact Me
            </button>
            <a href="" className="text-sm hover:underline">
              View Portfolio
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={danielpng.src}
            alt=""
            className="max-h-[300px] object-contain"
          />
        </div>
      </div>
      <div className="h-[40vh]">
        <div className="flex items-center gap-3 ">
          <CardReview title="10+" subTitle="Projects Github" />
          <hr className="h-[100px] border-[#6C63FF] border" />
          <CardReview title="2+" subTitle="Portfolios" />
          <hr className="h-[100px] border-[#6C63FF] border" />
          <CardReview title="10+" subTitle="Projects Github" />
        </div>
        <div>
          <HireMe />
        </div>
      </div>
    </div>
  );
}
