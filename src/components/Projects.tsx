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
      titulo: "Clean Wave",
      descripcion:
        "Proyecto integrador realizado en el marco de Digital House. Desarrollo de una aplicacion web que es un e-commerce utilizando HTML para la estructura, CSS para el diseño y Javascript para interacciones y/o validaciones del lado del cliente.",
      tecnologias: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiHtml5 />, name: "HTML5" },
        { icon: <SiCss3 />, name: "CSS3" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
      codigo: "https://github.com/MatyBene/CleanWave",
      demo: "",
    },
    {
      titulo: "Proyecto Final - Programación 1",
      descripcion:
        "Sistema de gestión de biblioteca desarrollado en C que permite administrar libros, usuarios y comentarios. Incluye funcionalidades como autenticación de usuarios, sistema de roles (admin/usuario), gestión de libros con valoraciones, lista de favoritos personalizada, y búsqueda avanzada por múltiples criterios. El proyecto demuestra dominio de programación estructurada, manejo de memoria, estructuras de datos y persistencia mediante archivos.",
      tecnologias: [{ icon: <SiC />, name: "C" }],
      codigo: "https://github.com/MatyBene/progra-1-tp-final",
      demo: "",
    },
    {
      titulo: "Proyecto Final - Programación 2",
      descripcion:
        "Un juego clicker basado en One Piece desarrollado en Java utilizando JavaFX. Testeado con JUnit.",
      tecnologias: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiJunit5 />, name: "Junit5" },
      ],
      codigo: "https://github.com/MatyBene/progra-1-tp-final",
      demo: "",
    },
  ];

  return (
    <section>
      <div className="scrollable">
        {projects.map((project, i) => (
          <article key={i} className="experience-item">
            <h3>{project.titulo}</h3>
            <p>{project.descripcion}</p>
            <div className="skills-icons">
              {project.tecnologias.map((tech, ii) => (
                <div key={ii} className="skill-icon">
                  {tech.icon}
                </div>
              ))}
            </div>
            <div className="social-links">
              <a href={project.codigo}>
                <FaCode /> Repositorio
              </a>
              {project.demo && <a href={project.demo}>Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
