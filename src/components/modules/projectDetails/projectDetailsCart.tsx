"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IProjectDetails } from "@/types/project";
import Link from "next/link";

const ProjectDetailsCart = ({ data }: { data: IProjectDetails }) => {
  const {
    images,
    title,
    description,
    coreFeature,
    technology,
    projectChallengeFace,
    liveLink,
    githubClient,
    githubServer,
    projectFeaturePlane,
  } = data;

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="relative px-4 py-10 max-w-7xl mx-auto space-y-12 bg-[#0e051a] text-[#ffffff]"
    >
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#bdacff] text-left lg:pl-4">
        {title}
      </h1>

      {/* Swiper */}
      <div className="w-full">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={img}
                  alt={`Project image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description */}
      <section className="space-y-3 lg:pl-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">
          Project Description
        </h2>
        <p className="text-[#A4A4A4] text-justify leading-relaxed">
          {description}
        </p>
      </section>

      {/* Core Features */}
      <section className="space-y-3 lg:pl-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Core Features</h2>
        <ul className="list-disc list-inside text-[#A4A4A4] space-y-1">
          {coreFeature.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="space-y-3 lg:pl-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {technology.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="space-y-3 lg:pl-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Challenge Faced</h2>
        <p className="text-[#A4A4A4] leading-relaxed">{projectChallengeFace}</p>
      </section>

      {/* Future Plan */}
      <section className="space-y-3 lg:pl-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Future Plan</h2>
        <p className="text-[#A4A4A4] leading-relaxed">{projectFeaturePlane}</p>
      </section>

      {/* Links */}
      <section className="space-y-4 lg:pl-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Project Links</h2>
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6000fa] text-white px-4 py-2 rounded shadow border-0 text-center"
          >
            🔗 Live Site
          </Link>
          <Link
            href={githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#bdacff] text-[#0e051a] px-4 py-2 rounded shadow text-center"
          >
            💻 GitHub Client
          </Link>
          <Link
            href={githubServer}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#bdacff] text-[#0e051a] px-4 py-2 rounded shadow text-center"
          >
            🗄️ GitHub Server
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsCart;
