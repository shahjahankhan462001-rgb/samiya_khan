// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Cursor from "./Components/Cursor";
// import AnimatedCursor from "react-animated-cursor";

{/* <AnimatedCursor
  innerSize={10}
  outerSize={35}
  color="0,255,255"
  outerAlpha={0.2}
  innerScale={1}
  outerScale={2}
/>
 */}

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Cursor />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}