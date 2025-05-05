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

    //   {
    //     quote:
    //       "I successfully completed the Complete Web Development Course, where I learned and applied a rigorous amount of JavaScript, HTML, CSS, and React to build several hands-on projects. This certificate is a testament to my skills in front-end development and my ability to build dynamic and responsive web applications from scratch.",
    //     name: "Complete Web Development",
    //     designation: "By Programming Hero (Dec, 2023)",
    //     src: "",
    //     link: "",
    //   },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
