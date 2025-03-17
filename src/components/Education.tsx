export function Education() {
  const education = [
    {
      title: "Técnico Universitario en Programación",
      institution:
        "UTN Universidad Tecnológica Nacional, Facultad Regional Mar del Plata",
      period: "March 2024",
      description: "In progress.",
      certificate: "",
    },
    {
      title: "Ingeniero Electricista",
      institution:
        "Facultad de Ingeniería, Universidad Nacional de Mar del Plata",
      period: "March 2015",
      description: "50% of courses completed, degree not finished.",
      certificate: "benedetti_ingenieria.pdf",
    },
    {
      title: "Desarrollador Web Full Stack",
      institution: "Digital House",
      period: "June 2022 - January 2023",
      description: "",
      certificate: "benedetti_programacion_dh.pdf",
    },
    {
      title: "Desarrollo de APIs con Spring Boot",
      institution: "Todo Code",
      period: "November 2024",
      description: "",
      certificate: "Spring Boot - TodoCode.pdf",
    },
    {
      title: "Curso de Github Copilot",
      institution: "Código Facilito",
      period: "March 2024",
      description: "",
      certificate: "Certificado - Curso de Github Copilot.pdf",
    },
    {
      title: "Curso de Introducción al Testing con JavaScript",
      institution: "Platzi",
      period: "November 2024",
      description: "",
      certificate: "diploma-javascript-testing.pdf",
    },
    {
      title: "Curso Básico de Testing en Java",
      institution: "Platzi",
      period: "November 2024",
      description: "",
      certificate: "diploma-testing-java.pdf",
    },
  ];

  return (
    <section>
      <div className="scrollable">
        {education.map((edu, i) => (
          <div key={i} className="experience-item">
            <h3>{edu.title}</h3>
            <h4>{edu.institution}</h4>
            <span>{edu.period}</span>
            <p>{edu.description}</p>
            <div className="social-links docs-links">
              {edu.certificate && <a href={edu.certificate}>Certificate</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
