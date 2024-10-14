/* eslint-disable react/no-unescaped-entities */

import "./AboutMe.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correo electrónico
import { useState } from "react";

function AboutMe() {
  const email= "bqcount@gmail.com"

  const [toastMessage, setToastMessage] = useState(""); // Mensaje para el toast

  const handleEmailClick = (e) => {
    e.preventDefault();
    const emailUrl = `mailto:${email}`;

    // Intentar abrir la app de correo
    const emailWindow = window.open(emailUrl, "_blank");

    if (emailWindow) {
      // Si la aplicación de correo se abre correctamente
      emailWindow.focus();
    } else {
      // Si no se puede abrir la app de correo, copiar el email al portapapeles
      navigator.clipboard.writeText(email).then(
        () => {
          setToastMessage("Email copiado al portapapeles!"); // Mostrar mensaje de éxito
          setTimeout(() => {
            setToastMessage(""); // Ocultar el mensaje después de 3 segundos
          }, 3000);
        },
        () => {
          setToastMessage("No se pudo copiar el email. Inténtalo manualmente."); // Mensaje de error
        }
      );
    }
  };
  return (
    <section className="content" aria-labelledby="about-me-heading">
      <header className="sr-only" id="about-me-heading">About Me</header>
      
      <div className="content-left">
        <img src="src/assets/me.jpeg" alt="Daniela Romero" className="me-image" />
        <div className="icons-div">
          <a className="link-header" href="https://github.com/bqcount" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a className="link-header" href="https://www.linkedin.com/in/daniela-romero-garcia/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a className="link-header" href="mailto:daniela@example.com" aria-label="Email"
           onClick={handleEmailClick}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          {toastMessage && <div className="toast">{toastMessage}</div>} {/* Toast message */}
        </div>
      </div>

      <div className="content-right">
        <div>
          <h3 className="h3-hello-world">Hello world ...</h3>
          <h1 className="h1-name">I'm Daniela Romero</h1>
          <div className="glow-on-hover">
            <h1 className="h3-fullstack">Full Stack Developer</h1>
          </div>
          <p>Passionate about novelty and creativity.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
