"use client";

import { motion } from "motion/react";
import { LampContainer } from "./LampContainer";
import Link from "next/link";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {/* Build lamps <br /> the right way */}
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="flex flex-col items-center justify-center h-[40rem] ">
            <h1 className="text-rose-500 dark:text-neutral-200 text-7xl  mb-10 mt-36 lg:mt-28">
              404
            </h1>
            {/* <TypewriterEffect words={words} /> */}
            <p className="text-white mb-8 tracking-wide">Page Not Found</p>
            <p className="text-lg tracking-wide text-center text-balance text-[#A4A4A4] font-light">
              It Seems the page you&apos;re looking for doesn&apos;t exist.
              Let&apos;s get you <br />
              back on track.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-6 mt-10 w-full justify-center">
              <button className="md:w-[40%] w-full h-10 rounded-xl bg-gradient-to-r from-[#6000fa] to-[#9850ff] hover:from-[#4d00c7] hover:to-[#7e3af2] text-white font-medium text-sm transition-colors duration-300 cursor-pointer tracking-wide">
                <Link href="/">Return To Home Page</Link>
              </button>
              <button className="md:w-[20%] w-full h-10 rounded-lg bg-[#bdacff] text-[#0e051a] font-medium text-sm transition-colors duration-300 cursor-pointer tracking-wide">
                <Link href="/blog">Read Blog</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
