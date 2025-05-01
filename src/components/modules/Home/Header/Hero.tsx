import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ExternalLink, Send } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl md:text-6xl lg:text-[80px] font-bold font-poppins text-balance">
        Hi, I&apos;m Sifat Ullah Shoyon
      </h1>
      <p className="text-sm md:text-lg  font-open-sans text-balance pt-6 pb-10">
        A Full Stack Developer with expertise in Typescript, Express.js,
        Mongoose & Next.js, building <br /> secure and impactful web
        applications. My work spans from front-end designs to robust back-{" "}
        <br /> end systems.
      </p>
      <div className="flex gap-4">
        <ShimmerButton background="#6000fa" className="shadow-2xl">
          <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
            View My Resume <ExternalLink size={20} />
          </span>
        </ShimmerButton>
        <ShimmerButton
          background="#bdacff"
          shimmerColor="#0e051a"
          className="shadow-2xl"
        >
          <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#0e051a] dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
            Learn More <Send size={20} />
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default Hero;
