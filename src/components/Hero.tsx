import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export function Hero() {
  return (
    <section>
      <div>
        <div>
          <img src="/profile.jpg" alt="Matias Benedetti" />
        </div>
        <h1>Matias Benedetti</h1>
        <p>Desarrollador Web Backend</p>
        <div>
          <a href="https://github.com/MatyBene">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/matiasbenedetti/">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="/cv.pdf">
            <FaFileDownload /> CV
          </a>
        </div>
      </div>
    </section>
  );
}
