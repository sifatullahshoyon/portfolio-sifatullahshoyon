import DualTextEffect from "@/components/shared/DualTextEffect";
import React from "react";
import CirclesOrbiting from "./CirclesOrbiting";

const PoweredBy = () => {
  return (
    <section className="relative w-full mt-12 flex flex-col items-center justify-center bg-[#0e051a] text-white bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px] mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] -webkit-mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] overflow-hidden">
      {/* Purple Glow Effect - section center */}
      <div className="absolute inset-0 m-auto w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

      {/* Start Text Section */}
      <div
        className="flex flex-col items-center justify-center space-y-8 text-center w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Dual Text Effect */}
        <DualTextEffect
          largeText="POWERED BY"
          smallText="Powered by"
          largeTextColor="text-[#3a2a5e18]"
          smallTextColor="text-white"
          largeTextSize="text-[40px] md:text-[80px] lg:text-[100px]"
          smallTextSize="text-lg md:text-2xl lg:text-[40px]"
        />
      </div>
      {/* End Text Section */}

      {/* CirclesOrbiting */}
      <div className="relative w-full flex items-center justify-center p-6">
        <CirclesOrbiting />
      </div>
    </section>
  );
};

export default PoweredBy;
