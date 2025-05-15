import { cn } from "@/lib/utils";
import React from "react";

const ProjectDetailsBanner = () => {
  return (
    <div className="relative flex h-[40vh] w-full items-center justify-center bg-transparent dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#444444_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <p className="relative z-20  bg-clip-text  py-8 text-lg md:text-2xl lg:text-[40px] font-bold text-white ">
        Project Details Page
      </p>
    </div>
  );
};

export default ProjectDetailsBanner;
