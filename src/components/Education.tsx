import { useLanguage } from "../contexts/useLanguage";
import { translations } from "../translations/translations";

export function Education() {
  const { language } = useLanguage();
  const t = translations[language];

  const certificates = [
    "ingenieria-informatica.pdf",
    "benedetti-tup.pdf",
    "benedetti_ingenieria.pdf",
    "benedetti_programacion_dh.pdf",
    "UC-e419a5a5-711e-496f-9e2b-af5ba2dc0bb8.pdf",
    "CERTIFICATE_LANDING_PAGE~5RE5RWVBFC8M.jpeg",
    "Certificado - Curso de testing estático-1.pdf",
    "https://www.credly.com/badges/61775976-3c9f-4e96-87a0-2dd089fb9969",
    "Spring Boot - TodoCode.pdf",
    "Certificado - Curso de Github Copilot.pdf",
    "diploma-javascript-testing.pdf",
    "diploma-testing-java.pdf",
  ];

  return (
    <section>
      <div className="scrollable">
        {t.education.items.map((edu, i) => (
          <div key={i} className="experience-item">
            <h3>{edu.title}</h3>
            <h4>{edu.institution}</h4>
            <span>{edu.period}</span>
            <p>{edu.description}</p>
            <div className="social-links docs-links">
              {certificates[i] && (
                <a href={certificates[i]}>{t.education.certificate}</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
