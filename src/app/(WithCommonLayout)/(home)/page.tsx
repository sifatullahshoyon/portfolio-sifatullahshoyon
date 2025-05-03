import AboutMe from "@/components/modules/Home/About/AboutMe";
import Blog from "@/components/modules/Home/Blog/Blog";
import Education from "@/components/modules/Home/Education/Education";
import Header from "@/components/modules/Home/Header";
import PoweredBy from "@/components/modules/Home/PoweredBy/PoweredBy";
import Skills from "@/components/modules/Home/Skills/Skills";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <PoweredBy />
      <Skills />
      <Education />
      <Blog />
    </>
  );
};

export default HomePage;
