import { useLanguage } from "../contexts/useLanguage";
import { translations } from "../translations/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <div className="scrollable">
        <div className="experience-item">
          <p className="inter">{t.about.text}</p>
        </div>
      </div>
    </section>
  );
}
