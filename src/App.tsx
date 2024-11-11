import { useState } from "react";
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
    <div className="portfolio-container">
      <div className="left-section">
        <Hero />
        <SkillsIcons />
      </div>

      <div className="right-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experiencia
          </button>
          <button
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Proyectos
          </button>
          <button
            className={`tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Formación
          </button>
          <button
            className={`tab ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            Sobre mí
          </button>
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
