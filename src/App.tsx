import React from "react";
import { Hero } from "./components/Hero";
import { SkillsIcons } from "./components/SkillsIcons";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { About } from "./components/About";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div>
      <div>
        <Hero />
        <SkillsIcons />
      </div>
      <div>
        <div>
          <button>Experiencia</button>
          <button>Proyectos</button>
          <button>Formación</button>
          <button>Sobre mí</button>
        </div>

        {activeTab === "experience" && <Experience />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "education" && <Education />}
        {activeTab === "about" && <About />}
      </div>
    </div>
  );
}

export default App;
