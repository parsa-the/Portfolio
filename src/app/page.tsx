import Hero from "./component/Sections/Hero";
import About from "./component/Sections/About";
import Contact from "./component/Sections/Contact";
import Navbar from "./component/ui/Navbar";
import Project from "./component/Sections/Project";
import Footer from "./component/Sections/footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
