export function Education() {
  const education = [
    {
      titulo: "Técnico Universitario en Programación",
      institucion:
        "UTN Universidad Tecnológica Nacional, Facultad Regional Mar del Plata",
      periodo: "mar. 2024",
      descripcion: "En curso.",
      certificado: "",
    },
    {
      titulo: "Ingeniero Electricista",
      institucion:
        "Facultad de Ingeniería, Universidad Nacional de Mar del Plata",
      periodo: "mar. 2015",
      descripcion: "50% de materias aprobadas, carrera no terminada.",
      certificado: "benedetti_ingenieria.pdf",
    },
    {
      titulo: "Desarrollador Web Full Stack",
      institucion: "Digital House",
      periodo: "jun. 2022 - ene. 2023",
      descripcion: "",
      certificado: "benedetti_programacion_dh.pdf",
    },
  ];

  return (
    <section>
      <div className="scrollable">
        {education.map((edu, i) => (
          <div key={i} className="experience-item">
            <h3>{edu.titulo}</h3>
            <h4>{edu.institucion}</h4>
            <span>{edu.periodo}</span>
            <p>{edu.descripcion}</p>
            <div className="social-links docs-links">
              {edu.certificado && <a href={edu.certificado}>Certificado</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
