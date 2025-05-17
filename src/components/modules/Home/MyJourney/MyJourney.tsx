import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyJourney() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            The Spark Begins
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            Technology, computers, and coding have always attracted me deeply.
            Around 2020, I got my first computer—before that, I used only a
            phone to explore how the internet and websites work. I borrowed a
            friend’s PC and tried creating my first blog site using Google’s
            Blogger, inspired by YouTube videos. That little curiosity opened
            the door to my coding journey.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            First Steps in Coding
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            In 2021, I started learning HTML and CSS by watching YouTube
            tutorials. I began building simple static pages and slowly fell in
            love with writing code and creating things on the web. That was the
            time I realized — this is what I want to do!
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            Serious About Web Development
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            In 2022, I enrolled in the Complete Web Development Course at
            <span className="text-white"> Programming Hero</span>. There I
            learned: HTML, CSS, Tailwind, Bootstrap, JavaScript (ES6), DOM, Git
            & GitHub, React.js, React Router, Firebase, JWT, Node.js,
            Express.js, MongoDB, and more. With these skills, I built my first
            full-stack projects. I stayed curious and kept learning every day —
            always hungry for more.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            Keep Moving, Keep Learning
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            I continued learning through tutorials, YouTube, and real-world
            practice. I built a few project-based applications and sharpened my
            existing skills. My mindset became more focused on industry-standard
            work and real-world problem-solving.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            React Design Scholarship & Deep Practice
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            In 2024, I got a full scholarship at{" "}
            <span className="text-white">With Institute</span> for a Web Design
            with React course. It helped me revisit and strengthen my frontend
            fundamentals like HTML, CSS, JavaScript, React.js, Firebase, and
            Git. I started getting more serious about modern tech, best
            practices, and learning advanced tools — my curiosity kept growing
            stronger.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            React Design Scholarship & Deep Practice
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            At the beginning of 2025, I officially stepped into the tech
            industry. I enrolled in{" "}
            <span className="text-white">Programming Hero</span> Next Level Web
            Development course and learned industry-grade technologies like:
            TypeScript, Advanced React, Node.js, Express.js, MongoDB, Mongoose,
            Redux, Next.js, Prisma, MVC Design Pattern, Zod, OOP, and more.
            Alongside learning, I started working professionally — focusing
            mainly on backend tasks like API development, database integration,
            and designing scalable services.
            <p className="mt-2">
              Currently, I&apos;m also learning PostgreSQL, Prisma ORM, and
              DBMS. Despite facing occasional frustration, I never give up.
              I&apos;m also passionate about video editing and plan to learn it
              soon.
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Next Chapter",
      content: (
        <div>
          <h2 className="mb-8 text-xl md:text-2xl text-[#bdacff] font-bold">
            Looking Ahead
          </h2>
          <p className=" text-sm sm:text-base md:text-base text-[#A4A4A4] font-light  leading-7 text-balance text-justify">
            I dream of becoming a solid full-stack developer with strong
            problem-solving skills, mastering DSA, Docker, AWS, and aiming to
            work at big tech companies like Google, Meta, Microsoft, or NVIDIA.
            One day, I hope to build my own startup — something meaningful that
            can make a difference for my community and country.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
