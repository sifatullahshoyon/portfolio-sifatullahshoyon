import DualTextEffect from "@/components/shared/DualTextEffect";
import Image from "next/image";
import { TextLoop } from "../../../../../components/motion-primitives/text-loop";
import myImg from "@/assets/images/about.png";
import SocialLinks from "@/components/shared/SocialLinks";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full mt-12 flex items-center justify-center bg-[#0e051a] text-white overflow-hidden"
    >
      {/* Purple glow effect - bottom left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

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
            largeText="ABOUT ME"
            smallText="About Me"
            largeTextColor="text-[#3a2a5e18]" // Subtle translucent purple for large text
            smallTextColor="text-white" // White for small text
            largeTextSize="text-[60px] md:text-[100px] lg:text-[120px]" // Responsive text sizes
            smallTextSize="text-lg md:text-2xl lg:text-[40px]" // Responsive text sizes
          />
        </div>
        {/* End Text Section */}

        {/* start info section */}
        <div className="flex flex-col lg:flex-row flex-wrap mt-8 justify-center lg:justify-around items-center w-full gap-8 ">
          {/* Image Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center"
          >
            <Image
              src={myImg}
              alt="about img"
              width={450}
              height={450}
              placeholder="blur"
              loading="lazy"
              blurDataURL="all"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-2/4 text-center lg:text-left"
          >
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-[#ffffff] font-semibold pb-2 font-poppins">
                Sifat Ullah Shoyon
              </h1>
              <TextLoop className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-normal font-openSans">
                <span>MERN Stack Developer</span>
                <span>Front End Developer</span>
                <span>Full Stack Developer</span>
                <span>Problem Solver</span>
              </TextLoop>
            </div>
            <div className="py-6">
              <p className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light  leading-7 pb-4 text-balance text-justify">
                Hi, I’m Sifat Ullah Shoyon, a passionate and purpose-driven MERN
                Stack Developer from Bangladesh. I enjoy crafting clean,
                scalable, and user-focused web applications using technologies
                like React.js, Node.js, Express.js, and MongoDB, while steadily
                expanding my skills in TypeScript, Next.js, Prisma, and
                PostgreSQL.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light  leading-7 text-balance pb-4 text-justify">
                As a lifelong learner, I believe in writing code that not only
                works—but serves people. Whether it’s building tools that solve
                real-world problems or contributing to community-based tech, I
                love blending creativity with logic to make an impact.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light leading-7 text-balance text-justify">
                Outside of development, I serve as a Campus Ambassador at NUSDF
                and a Campus Hero at Programming Hero, where I actively support
                and mentor fellow learners. I’m also deeply curious about AI,
                ethical tech, and sustainable development, and dream of
                launching my own tech-integrated agri-startup someday.
              </p>
            </div>
            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
        {/* end info section */}
      </div>
    </section>
  );
};

export default AboutMe;
