import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About.jsx";
import Certificate from "../components/Certification";
import FreelanceProjects from "../components/Freelance.jsx";

const Home = () => {
  return (
    <div className="pt-15">
      <Navbar />
      <About />
      <Project />
      <Experience />
      <FreelanceProjects />
      <Contact />
      <Certificate />
      <Footer />
    </div>
  );
};

export default Home;
