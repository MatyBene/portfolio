import React from "react";

export function Experience() {
  const experiences = [
    {
      empresa: "CleanWave",
      cargo: "Desarrollador web full stack",
      periodo: "jun. 2023 - dic. 2023",
      descripcion:
        "Proyecto integrador realizado en el marco de Digital House. Desarrollo de una aplicacion web que es un e-commerce utilizando HTML para la estructura, CSS para el diseño y Javascript para interacciones y/o validaciones del lado del cliente.",
    },
  ];

  return (
    <section>
      <div className="scrollable">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-item">
            <div>
              <h3>{exp.cargo}</h3>
              {exp.empresa && <h4>{exp.empresa}</h4>}
              <span>{exp.periodo}</span>
              <p>{exp.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
