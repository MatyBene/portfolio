import React from "react";

export function Experience() {
  const experiences = [
    {
      empresa: "CleanWave.com",
      cargo: "Desarrollador web full stack",
      periodo: "jun. 2023 - dic. 2023",
      descripcion:
        "Proyecto integrador realizado en el marco de Digital House. Desarrollo de una aplicacion web que es un e-commerce utilizando HTML para la estructura, CSS para el diseño y Javascript para interacciones y/o validaciones del lado del cliente.",
    },
    {
      empresa: null,
      cargo: "Programador en C",
      periodo: "mar. 2024 - jun. 2024",
      descripcion: "Proyecto 1",
    },
    {
      empresa: null,
      cargo: "Programador en Java",
      periodo: "sep. 2024 - nov. 2024",
      descripcion: "Proyecto 2",
    },
  ];

  return (
    <section>
      <h2>Experiencia profesional</h2>
      <div>
        {experiences.map((exp, i) => (
          <div key={i}>
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
