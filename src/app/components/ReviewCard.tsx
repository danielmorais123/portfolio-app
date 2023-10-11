"use client";
import { Rating } from "flowbite-react";
import { motion } from "framer-motion";
export default function ReviewCard({
  desc,
  image,
  name,
  workType,
  xInitial,
  x,
  yInitial,
  y,
}: any) {
  return (
    <motion.div
      initial={{ x: xInitial, y: yInitial, opacity: 0 }}
      animate={{ x: x, y: y, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className="md:min-w-[380px] p-4 md:max-w-[400px] flex flex-col gap-2 border md:p-2 rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:md:bg-transparent bg-zinc-100"
    >
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
      </Rating>
      <p className="text-sm">{desc}</p>
      <div className="flex items-center gap-3">
        <img src={image} alt="" className="w-10 h-10 rounded-full" />
        <div className="text-sm">
          <p>{name}</p>
          <p className="text-xs">{workType}</p>
        </div>
      </div>
    </motion.div>
  );
}
