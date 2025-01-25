import { FaCode, FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiJunit5,
  SiC,
} from "react-icons/si";

export function Projects() {
  const projects = [
    {
      title: "Clean Wave",
      description:
        "Integrative project completed as part of Digital House. Development of a web application that functions as an e-commerce platform, using HTML for structure, CSS for design, and JavaScript for client-side interactions and/or validations.",
      technologies: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiHtml5 />, name: "HTML5" },
        { icon: <SiCss3 />, name: "CSS3" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
      code: "https://github.com/MatyBene/CleanWave",
      demo: "",
    },
    {
      title: "One Piece: King of Java",
      description:
        "A clicker game based on One Piece, developed in Java using JavaFX. Tested with JUnit.",
      technologies: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiJunit5 />, name: "Junit5" },
      ],
      code: "https://github.com/MatyBene/tp_final_programacion_2",
      demo: "",
    },
    {
      title: "LibraSys",
      description:
        "Library management system developed in C, designed to manage books, users, and comments. It includes features such as user authentication, a role system (admin/user), book management with ratings, a personalized favorites list, and advanced search by multiple criteria. The project demonstrates proficiency in structured programming, memory management, data structures, and persistence through file handling.",
      technologies: [{ icon: <SiC />, name: "C" }],
      code: "https://github.com/MatyBene/progra-1-tp-final",
      demo: "",
    },
  ];

  return (
    <section>
      <div className="scrollable">
        {projects.map((project, i) => (
          <article key={i} className="experience-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills-icons">
              {project.technologies.map((tech, ii) => (
                <div key={ii} className="skill-icon">
                  {tech.icon}
                </div>
              ))}
            </div>
            <div className="social-links docs-links">
              <a href={project.code}>
                <FaCode /> Repository
              </a>
              {project.demo && <a href={project.demo}>Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
