import { FaGithub, FaFileDownload } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { useLanguage } from "../contexts/useLanguage";
import { translations } from "../translations/translations";
import profileImg from "/benedettiMatias.jpg";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero">
      <div>
        <img src={profileImg} alt="Matias Benedetti" />
        <h1>Matias Benedetti</h1>
        <p>{t.hero.role}</p>
        <div className="social-links">
          <a href="https://github.com/MatyBene" target="_blank" rel="noopener noreferrer">
            <FaGithub /> {t.hero.github}
          </a>
          <a href="https://www.linkedin.com/in/matiasbenedetti/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin /> {t.hero.linkedin}
          </a>
          <a href="CV-Benedetti-Matias.pdf" download>
            <FaFileDownload /> {t.hero.cv}
          </a>
        </div>
      </div>
    </section>
  );
}
