import { useLanguage } from "../contexts/useLanguage";
import { translations } from "../translations/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <div className="scrollable">
        <div className="experience-item">
          {t.about.text.map((paragraph, index) => (
            <p key={index} className="inter">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
