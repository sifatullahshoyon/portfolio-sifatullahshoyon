import React from "react";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";

const DotPatternBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden   ">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      >
        {children}
      </DotPattern>
    </div>
  );
};

export default DotPatternBg;
