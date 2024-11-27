export function Experience() {
  const experiences = [
    {
      company: "CleanWave",
      position: "Desarrollador web full stack",
      period: "June 2023 - December 2023",
      description:
        "Integrative project completed as part of Digital House. Development of a web application that functions as an e-commerce platform, using HTML for the structure, CSS for the design, and JavaScript for client-side interactions and/or validations.",
    },
  ];

  return (
    <section>
      <div className="scrollable">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-item">
            <h3>{exp.position}</h3>
            {exp.company && <h4>{exp.company}</h4>}
            <span>{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
