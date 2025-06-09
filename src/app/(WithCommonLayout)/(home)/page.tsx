import AboutMe from "@/components/modules/Home/About/AboutMe";
import Blog from "@/components/modules/Home/Blog/Blog";
import Contact from "@/components/modules/Home/Contact/Contact";
import Education from "@/components/modules/Home/Education/Education";
import Header from "@/components/modules/Home/Header";
// import { MyJourney } from "@/components/modules/Home/MyJourney/MyJourney";
import PoweredBy from "@/components/modules/Home/PoweredBy/PoweredBy";
// import Project from "@/components/modules/Home/Project/Project";
import Skills from "@/components/modules/Home/Skills/Skills";
// import Testimonials from "@/components/modules/Home/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <PoweredBy />
      <Skills />
      <Education />
      <Blog />
      {/* <Project /> */}
      {/* <MyJourney /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default HomePage;
