"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl flex flex-col justify-center items-center  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
  <img 
  src="https://avatars.githubusercontent.com/u/88154142?v=4" 
  className="w-40 h-40 rounded-full mx-auto transform transition duration-500 hover:scale-110 animate-pulse shadow-md shadow-gray-700" 
  alt="profile" 
/>
        Hey I am a {" "}
        <Highlight className="text-black dark:text-white">
          Full-Stack Developer
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
