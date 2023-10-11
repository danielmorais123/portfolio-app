import { twMerge } from "tailwind-merge";
import ubereats from "../img/ubereats.png";

export default function Project() {
  const projects = [
    {
      title: "Uber Eats Clone",
      description: "",
      mainDivClassName: "lg:hidden flex-row items-center 2xl:items-start",
      image: ubereats.src,
    },
    {
      title: "Uber Eats Clone",
      description: "",
      mainDivClassName: "lg:hidden items-end flex-row-reverse",
      image: ubereats.src,
    },
  ];
  return (
    <div className="flex items-center flex-col lg:flex-row justify-between gap-2">
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
            <p className="text-sm text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ab illum iure unde aliquid necessitatibus quidem
              tempora omnis asperiores nobis. Vitae expedita rem dolorum porro
              quia sit odio saepe possimus.
            </p>
          </div>
        </div>
      ))}
      <div
        className={twMerge(
          "flex items-start gap-2 hidden lg:flex 2xl:hidden min-h-[400px]",
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
            <p className="text-sm text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ab illum iure unde aliquid necessitatibus quidem
              tempora omnis asperiores nobis. Vitae expedita rem dolorum porro
              quia sit odio saepe possimus.
            </p>
          </div>

          <div className="border flex flex-col p-2 rounded-md dark:border-zinc-600 max-w-[300px] gap-2">
            <p>{projects.at(0)?.title}</p>
            <p className="text-sm text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ab illum iure unde aliquid necessitatibus quidem
              tempora omnis asperiores nobis. Vitae expedita rem dolorum porro
              quia sit odio saepe possimus.
            </p>
          </div>
        </div>
        <img
          src={projects.at(0)?.image}
          alt=""
          className="max-h-[400px] object-contain "
        />
      </div>
    </div>
  );
}
