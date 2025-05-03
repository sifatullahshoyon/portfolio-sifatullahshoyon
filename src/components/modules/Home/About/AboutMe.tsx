import DualTextEffect from "@/components/shared/DualTextEffect";
import Image from "next/image";
import { TextLoop } from "../../../../../components/motion-primitives/text-loop";
import myImg from "@/assets/images/about.png";
import SocialLinks from "@/components/shared/SocialLinks";

const AboutMe = () => {
  return (
    <section className="relative w-full mt-12 flex items-center justify-center bg-[#0e051a] text-white">
      {/* Purple glow effect - bottom left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Container */}
      <div className="container px-4 md:px-6">
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
        <div className="flex flex-col lg:flex-row flex-wrap mt-8 justify-center lg:justify-around items-center w-full gap-8">
          {/* Image Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center"
          >
            <Image
              src={myImg}
              alt="about img"
              width={500}
              height={500}
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
              <p className="text-sm md:text-base  text-[#A4A4A4] font-light font-poppins leading-7 pb-4 text-balance">
                After more than a year of learning, I have developed a solid
                foundation in the MERN stack and have experience in building
                dynamic and scalable applications. In the coming year, my goal
                is to master modern technologies such as PostgreSQL, Prisma,
                GraphQL, Docker, and AWS to create secure, efficient, and
                future-proof solutions that address real-world challenges. I aim
                to build a strong foundation and increase my versatility by
                exploring these technologies.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light font-poppins leading-7 text-balance">
                Furthermore, I’ll be learning new technologies to stay aligned
                with the industry trends and demand. Ultimately, I aspire to
                become a senior software developer with a comprehensive skill
                set and the confidence to lead projects effectively after 2-4
                years.
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
