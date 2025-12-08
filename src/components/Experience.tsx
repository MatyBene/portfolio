import { useLanguage } from "../contexts/useLanguage";
import { translations } from "../translations/translations";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <div className="scrollable">
        {t.experience.items.map((exp, i) => (
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
