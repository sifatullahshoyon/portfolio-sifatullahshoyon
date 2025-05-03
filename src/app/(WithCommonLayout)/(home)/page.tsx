import AboutMe from "@/components/modules/Home/About/AboutMe";
import Education from "@/components/modules/Home/Education/Education";
import PoweredBy from "@/components/modules/Home/PoweredBy/PoweredBy";
import Skills from "@/components/modules/Home/Skills/Skills";

const HomePage = () => {
  return (
    <>
      <AboutMe />
      <PoweredBy />
      <Skills />
      <Education />
    </>
  );
};

export default HomePage;
