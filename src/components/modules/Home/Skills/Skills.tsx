import DualTextEffect from "@/components/shared/DualTextEffect";
import React from "react";
import { SkillCard } from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full mt-12 flex items-center justify-center bg-[#0e051a] text-white"
    >
      {/* container */}
      <div className="container px-4 md:px-6 lg:px-16">
        {/* start text section */}
        <div
          className="flex flex-col items-center justify-center space-y-6 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Dual Text Effect */}
          <DualTextEffect
            largeText="SKILLS"
            smallText="Skills"
            largeTextColor="text-[#3a2a5e18]"
            smallTextColor="text-white"
            largeTextSize="text-[60px] md:text-[100px] lg:text-[120px]"
            smallTextSize="text-lg md:text-2xl lg:text-[40px]"
          />
        </div>
        {/* End Text Section */}

        <SkillCard />
      </div>
    </section>
  );
};

export default Skills;
