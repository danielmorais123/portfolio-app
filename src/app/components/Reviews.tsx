"use client";
import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
export default function Reviews() {
  return (
    <div className="flex flex-col gap-2 " id="reviews">
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="text-[#6C63FF] tracking-wider"
      >
        Reviews
      </motion.p>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        className="text-4xl max-w-[420px] font-bold"
      >
        Our Colleges Say Something About Us
      </motion.p>
      <div className="mt-4 flex items-center gap-3 flex-col md:flex-row md:max-w-[1500px] overflow-x-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-zinc-400 py-2">
        <ReviewCard
          x={0}
          xInitial={-100}
          y={0}
          yInitial={0}
          image="https://scontent.flis5-3.fna.fbcdn.net/v/t1.6435-1/169065877_5341394999235147_7784666479688322805_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=HvClQk9hY8MAX8HGZK_&_nc_ht=scontent.flis5-3.fna&oh=00_AfC8OLjFGSTyqiDxptaskTTW1ZYDIytGmaSMh4eAu8Jp-A&oe=6549F0F6"
          workType="SQL/Java Developer"
          name="António Milheiras"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt
        architecto laudantium laborum aliquam sapiente nulla."
        />
        <ReviewCard
          x={0}
          xInitial={0}
          y={0}
          yInitial={100}
          image="https://scontent.flis5-3.fna.fbcdn.net/v/t1.6435-1/169065877_5341394999235147_7784666479688322805_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=HvClQk9hY8MAX8HGZK_&_nc_ht=scontent.flis5-3.fna&oh=00_AfC8OLjFGSTyqiDxptaskTTW1ZYDIytGmaSMh4eAu8Jp-A&oe=6549F0F6"
          workType="SQL Developer"
          name="António Milheiras"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt
        architecto laudantium laborum aliquam sapiente nulla."
        />
        <ReviewCard
          x={0}
          xInitial={-100}
          y={0}
          yInitial={0}
          image="https://scontent.flis5-3.fna.fbcdn.net/v/t1.6435-1/169065877_5341394999235147_7784666479688322805_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=HvClQk9hY8MAX8HGZK_&_nc_ht=scontent.flis5-3.fna&oh=00_AfC8OLjFGSTyqiDxptaskTTW1ZYDIytGmaSMh4eAu8Jp-A&oe=6549F0F6"
          workType="SQL Developer"
          name="António Milheiras"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt
        architecto laudantium laborum aliquam sapiente nulla."
        />
      </div>
    </div>
  );
}
