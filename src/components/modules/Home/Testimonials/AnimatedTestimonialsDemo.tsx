import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I successfully completed the Complete Web Development Course, where I learned and applied a rigorous amount of JavaScript, HTML, CSS, and React to build several hands-on projects. This certificate is a testament to my skills in front-end development and my ability to build dynamic and responsive web applications from scratch.",
      name: "Complete Web Development",
      designation: "By Programming Hero (Dec, 2022)",
      link: "https://drive.google.com/file/d/1uuZZGTAUw3vDu_Vh20z5Gfw2IGNLvc1f/view?usp=sharing",
      src: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746422478/Compleate_Webdevelopment_PH_certificate_qwpcli.jpg",
    },
    {
      quote:
        "I participated in Programming Hero's AI & Professional Resume Building Workshop, where I learned how to create compelling, ATS-friendly resumes using AI tools. The training covered essential techniques, such as keyword optimization, clean design principles, and effective personal branding strategies. I've successfully applied these skills to enhance my own resume and LinkedIn profile.",
      name: "Mastering Resume Building session",
      designation: "By Programming Hero (Feb, 2024)",
      link: "https://drive.google.com/file/d/1mU3P2vocpPcNEIx3rcwRqHOkfQZceX5o/view?usp=sharing",
      src: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746422484/resume_building_zyonti.jpg",
    },
    {
      quote:
        "Alhamdulillah! I’ve completed the NUSDF IT Career Mastermind 2025 session and received a certificate of participation. 🌟 It was a truly inspiring experience where I learned the importance of continuous learning, personal branding, and the 3S formula (Success, Strength, Situation). I was also surprised to discover how IT career opportunities go beyond just development — even sectors like aviation have a growing demand for IT skills. Grateful for the knowledge and motivation this session gave me! 🚀",
      name: "It Career Mastermind",
      designation: "By NUSDF Bangladesh (Feb, 2025)",
      link: "https://drive.google.com/file/d/1hvvjlwt_MOEtRD_pZK_L2PmggfYWPJ3B/view?usp=sharing",
      src: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1747504726/It_Career_Mastermind_by_NUSDF_ozfop8.png",
    },
    {
      quote:
        "Alhamdulillah! Successfully completed the Next Level Web Development course by Programming Hero! Learned: TypeScript, Redux, Next.js, Advanced React, Node.js, Express & Mongoose.This journey taught me real-world development, reusable code, deep thinking & industry practices.Currently exploring: DBMS, SQL, PostgreSQL & Prisma.Grateful for the support! 🚀",
      name: "Next Level Web Development",
      designation: "By Programming Hero (May, 2025)",
      link: "https://drive.google.com/file/d/1hlXBFjwjuFMo0c482na8tmBgNXy8QpSQ/view?usp=sharing",
      src: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1748873198/Next_Level_Web_Development_PH_cbapgg.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
