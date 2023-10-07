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
    <div className="flex items-center gap-3 bg-zinc-100 dark:bg-transparent dark:border-zinc-600 dark:border p-2 rounded-md">
      <FontAwesomeIcon
        icon={icon}
        className={twMerge(
          "text-white bg-[#6C63FF] p-3 rounded-lg",
          iconClassName
        )}
      />
      <div className="flex flex-col">
        <p className="dark:text-zinc-300 text-zinc-500 text-xs">{title}</p>
        <p className="font-bold text-sm">{description}</p>
      </div>
    </div>
  );
}
