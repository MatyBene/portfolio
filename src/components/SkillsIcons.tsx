import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiJunit5,
  SiJest,
  SiGit,
  SiGithub,
  SiDocker,
  SiNpm,
} from "react-icons/si";

export function SkillsIcons() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "SpringBoot" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiJunit5 />, name: "Junit5" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiNpm />, name: "NPM" },
  ];

  return (
    <div className="skills-icons">
      {skills.map((skill, index) => (
        <div key={index} className="skill-icon">
          {skill.icon}
          {/* <span>{skill.name}</span> */}
        </div>
      ))}
    </div>
  );
}
