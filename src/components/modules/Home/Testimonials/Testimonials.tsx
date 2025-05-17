import DualTextEffect from "@/components/shared/DualTextEffect";
import React from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";

const Testimonials = () => {
  return (
    <section className="relative w-full mt-12 flex items-center justify-center bg-[#0e051a] text-white overflow-hidden">
      {/* Purple glow effect - bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      {/* Container */}
      <div className="container px-4 md:px-6 lg:px-16">
        {/* start text section */}
        <div
          className="flex flex-col items-center justify-center space-y-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Dual Text Effect */}
          <DualTextEffect
            largeText="ACHIEVEMENT"
            smallText="Achievement"
            largeTextColor="text-[#3a2a5e18]"
            smallTextColor="text-white"
            largeTextSize="text-[60px] md:text-[100px] lg:text-[120px]"
            smallTextSize="text-lg md:text-2xl lg:text-[40px]"
          />
        </div>
        {/* End Text Section */}

        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};

export default Testimonials;
