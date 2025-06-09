import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ExternalLink, Send } from "lucide-react";
import Link from "next/link";
import { TextEffect } from "../../../../../components/motion-primitives/text-effect";
import { Meteors } from "@/components/magicui/meteors";
import HighLightText from "@/components/ui/hero-highlight";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold font-poppins text-balance">
        <TextEffect per="char" preset="fade">
          Hi, I&apos;m Sifat Ullah Shoyon
        </TextEffect>
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-sm md:text-lg leading-relaxed font-open-sans text-balance pt-6 pb-10 text-[#A4A4A4]"
      >
        A MERN Stack Developer specializing in{" "}
        <HighLightText>TypeScript, Next.js, and Node.js</HighLightText>
        – building <br /> secure, high-performance web applications with clean
        architecture that bridges intuitive user interfaces <br /> with scalable
        backend systems
      </p>
      <div data-aos="fade-up" data-aos-duration="1000" className="flex gap-4">
        <Link
          href="https://drive.google.com/file/d/1FoiDLHETnPeHPw5Uwr7xxkO9cPpbAfOb/view?usp=sharing"
          target="_blank"
        >
          <ShimmerButton background="#6000fa" className="shadow-2xl">
            <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
              View My Resume <ExternalLink size={20} />
            </span>
          </ShimmerButton>
        </Link>
        <Link href="/blog">
          <ShimmerButton
            background="#bdacff"
            shimmerColor="#0e051a"
            className="shadow-2xl"
          >
            <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#0e051a] dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
              Learn More <Send size={20} />
            </span>
          </ShimmerButton>
        </Link>
      </div>
      <Meteors number={20} />
    </section>
  );
};

export default Hero;
