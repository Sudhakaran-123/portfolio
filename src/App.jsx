import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import CustomCursor from "./components/customCursor";
import "./App.css";

function App() {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;