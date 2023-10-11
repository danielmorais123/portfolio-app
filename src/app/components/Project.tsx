import { twMerge } from "tailwind-merge";
import ubereats from "../img/ubereats.png";
import ecommerce from "../img/ecommerce.png";

export default function Project() {
  const projects = [
    {
      title: "Uber Eats Clone",
      subTitle: "React Native, Firebase.",
      description:
        "Built an Uber Eats mobile application clone, with a lot of their funcionalities, like Uber Eats UI, authentication, the Map and directions, make requests, I would say everything except payments.",
      mainDivClassName:
        "lg:hidden flex-col sm:flex-row flex items-center 2xl:items-start",
      image: ubereats.src,
    },
    {
      title: "E-Commerce Web",
      subTitle: "Next.JS, React, TypeScript, Supabase.",
      description:
        "Built a E-Commerce web application from scratch with Next.JS, React, TypeScript. The features implemented were Authentication with supabase, roles, selling products, add to cart, like products and so on.  ",
      mainDivClassName:
        "lg:hidden flex-col sm:flex-row-reverse flex items-center 2xl:items-end 2xl:flex-row-reverse",
      image: ecommerce.src,
    },
  ];
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center 2xl:justify-between gap-2">
      {projects.map((proj, idx) => (
        <div
          className={twMerge(
            " 2xl:flex items-start gap-2 w-full",
            proj?.mainDivClassName
          )}
          key={idx}
        >
          <img
            src={proj.image}
            alt=""
            className="max-h-[400px] object-contain "
          />
          <div className="border flex flex-col p-2 rounded-md dark:border-zinc-600 max-w-[300px] gap-2">
            <p>{proj.title}</p>
            <p className="text-xs text-zinc-200">{proj?.subTitle}</p>
            <p className="text-sm text-zinc-300">{proj?.description}</p>
          </div>
        </div>
      ))}
      <div
        className={twMerge(
          " items-start gap-2 flex-row hidden lg:flex 2xl:hidden min-h-[400px]",
          ""
        )}
      >
        <img
          src={projects.at(0)?.image}
          alt=""
          className="max-h-[400px] object-contain "
        />
        <div className="flex flex-col justify-between h-full gap-2">
          <div className="border flex flex-col p-2 rounded-md dark:border-zinc-600 max-w-[300px] gap-2">
            <p>{projects.at(0)?.title}</p>
            <p className="text-xs text-zinc-200">{projects.at(0)?.subTitle}</p>
            <p className="text-sm text-zinc-300">
              {projects.at(0)?.description}
            </p>
          </div>

          <div className="border flex flex-col p-2 rounded-md dark:border-zinc-600 max-w-[300px] gap-2">
            <p>{projects.at(1)?.title}</p>
            <p className="text-sm text-zinc-300">
              {projects.at(1)?.description}
            </p>
          </div>
        </div>
        <img
          src={projects.at(1)?.image}
          alt=""
          className="max-h-[400px] object-contain "
        />
      </div>
    </div>
  );
}
