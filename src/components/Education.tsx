import React from "react";

export function Education() {
  const education = [
    {
      titulo: "",
      institucion: "",
      periodo: "",
      descripcion: "",
    },
  ];

  return (
    <section>
      <h2>Educación</h2>
      <div>
        {education.map((edu, i) => (
          <div key={i}>
            <h3>{edu.titulo}</h3>
            <h4>{edu.institucion}</h4>
            <span>{edu.periodo}</span>
            <p>{edu.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
