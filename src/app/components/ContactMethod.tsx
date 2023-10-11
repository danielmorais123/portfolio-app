"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export default function ContactMethod({
  title,
  description,
  icon,
  iconClassName,
}: any) {
  return (
    <div className="flex group items-center duration-500 cursor-pointer transition hover:bg-[#6C63FF] dark:hover:bg-[#6C63FF] gap-3 bg-zinc-100 dark:bg-transparent dark:border-zinc-600 dark:border p-3 rounded-md">
      <FontAwesomeIcon
        icon={icon}
        className={twMerge(
          "text-white bg-green-500 group-hover:bg-white group-hover:text-[#6C63FF] p-3 rounded-lg h-5 w-4",
          iconClassName
        )}
      />
      <div className="flex flex-col">
        <p className="dark:text-zinc-300 group-hover:text-white text-zinc-500 text-xs">{title}</p>
        <p className="font-bold text-sm group-hover:text-white">{description}</p>
      </div>
    </div>
  );
}
