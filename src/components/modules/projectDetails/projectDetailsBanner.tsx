import { cn } from "@/lib/utils";
import React from "react";

export function ProjectDetailsBanner() {
  return (
    <div className="relative flex h-[50vh] w-full items-center justify-center bg-[#0e051a] dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0e051a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-white to-white bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Project Details
      </p>
    </div>
  );
}
