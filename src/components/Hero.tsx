import { FaGithub, FaFileDownload } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

export function Hero() {
  return (
    <section className="hero">
      <div>
        <img src="benedettiMatias.jpg" alt="Matias Benedetti" />
        <h1>Matias Benedetti</h1>
        <p>Web Developer</p>
        <div className="social-links">
          <a href="https://github.com/MatyBene">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/matiasbenedetti/">
            <SiLinkedin /> LinkedIn
          </a>
          <a href="CV-Benedetti.pdf">
            <FaFileDownload /> CV
          </a>
        </div>
      </div>
    </section>
  );
}
