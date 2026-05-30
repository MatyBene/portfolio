import { useState } from "react";
import { Hero } from "./components/Hero";
import { SkillsIcons } from "./components/SkillsIcons";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { useLanguage } from "./contexts/useLanguage";
import { translations } from "./translations/translations";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("experience");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="portfolio-container">
      <button
        onClick={toggleLanguage}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          padding: "4px 16px 8px 16px",
          cursor: "pointer",
          fontSize: "24px",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        title={language === "en" ? "Cambiar a Español" : "Switch to English"}
      >
        {language === "en" ? "🇪🇸" : "🇬🇧"}
      </button>

      <div className="left-section">
        <Hero />
        <div className="scrollable-icons">
          <SkillsIcons />
        </div>
      </div>

      <div className="right-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            {t.tabs.experience}
          </button>
          <button
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            {t.tabs.projects}
          </button>
          <button
            className={`tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            {t.tabs.education}
          </button>
          <button
            className={`tab ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            {t.tabs.about}
          </button>
        </div>

        <div className="scrollable" key={activeTab}>
          {activeTab === "experience" && <Experience />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "education" && <Education />}
          {activeTab === "about" && <About />}
        </div>
      </div>
    </div>
  );
}

export default App;
