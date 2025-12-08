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
  SiAngular,
  SiIonic,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { useLanguage } from "../contexts/useLanguage";
import { translations } from "../translations/translations";

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      technologies: [
        { icon: <SiSpringboot />, name: "SpringBoot" },
        { icon: <SiAngular />, name: "Angular" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiHtml5 />, name: "HTML5" },
        { icon: <SiCss3 />, name: "CSS3" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiJunit5 />, name: "Junit5" },
        { icon: <SiIonic />, name: "Ionic" },
      ],
      code: "https://github.com/MatyBene/Centro-Deportivo",
      demo: "https://d1q3qzgxmthdrt.cloudfront.net",
    },
    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
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
      title: t.projects.items[2].title,
      description: t.projects.items[2].description,
      technologies: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiJunit5 />, name: "Junit5" },
      ],
      code: "https://github.com/MatyBene/tp_final_programacion_2",
      demo: "",
    },
    {
      title: t.projects.items[3].title,
      description: t.projects.items[3].description,
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
                  {tech.name}
                </div>
              ))}
            </div>
            <div className="social-links docs-links">
              <a href={project.code}>
                <FaCode /> {t.projects.repository}
              </a>
              {project.demo && <a href={project.demo}>{t.projects.demo}</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
