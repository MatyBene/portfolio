import React from "react";

export function Projects() {
  const projects = [
    {
      titulo: "Clean Wave",
      descripcion: "",
      tecnologias: ["JavaScript", "React", "HTML", "CSS"],
      github: "https://github.com/MatyBene/CleanWave",
      demo: "",
    },
    // },
    // {
    //   titulo: "",
    //   descripcion: "",
    //   tecnologias: "",
    //   github: "",
    //   demo: "",
    // },
    // {
    //   titulo: "",
    //   descripcion: "",
    //   tecnologias: "",
    //   github: "",
    //   demo: "",
    // },
    // {
    //   titulo: "",
    //   descripcion: "",
    //   tecnologias: "",
    //   github: "",
    //   demo: "",
    // },
  ];

  return (
    <section>
      <h2>Proyectos</h2>
      <div>
        {projects.map((project, i) => (
          <article key={i}>
            <h3>{project.titulo}</h3>
            <p>{project.descripcion}</p>
            <div>
              {project.tecnologias.map((tech, ii) => (
                <span key={ii}>{tech}</span>
              ))}
            </div>
            <div>
              <a href={project.github}>GitHub</a>
              {project.demo && <a href={project.demo}>Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
