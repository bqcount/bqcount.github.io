import { useState } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Simulamos el JSON con datos de los proyectos
const projects = [
  {
    name: "Compicar",
    image: "src/assets/logocompicar.png",
    description: "The social network that connects you with fellow travelers to the same destination. If you don't have a vehicle, Compicar takes you further - sharing is the beginning of the journey!",
    linkgit: "https://github.com/bqcount/CompicarApp",
    web: ""
  },
  {
    name: "LudOhana",
    image: "src/assets/ludohana.png",
    description: "Where learning and family fun go hand in hand. We organize fun-filled educational events that strengthen family bonds and foster collaboration from a young age. Join us in this adventure of growth and connection!",
    linkgit: "https://github.com/judifede/LudOhana",
    web: "https://ludohana.zeabur.app/"
  },
  {
    name: "Bloody Run",
    image: "src/assets/bloodyrun.png",
    description: "PC Video Game: On a stormy night in the 19th century, guide the vampire Countess Raven back to her castle before dawn. Dodge the storm's lightning and survive the relentless sun - will you manage to get her to safety before it's too late?",
    linkgit: "https://github.com/Yoel96/Bloody-Run",
    web: "https://yoel96.github.io/Bloody-Run/"
  }
];

function Projects() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (cardIndex) => {
    setFlippedCard(flippedCard === cardIndex ? null : cardIndex); // Alterna el estado
  };

  return (
    <div className="content-projects">
      {projects.map((project, index) => (
        <div className={`card ${flippedCard === index ? 'flipped' : ''}`} key={index}>
          <section className="div-img card-front">
            <img src={project.image} alt={project.name} className="img-project" />
            <div className="div-button-info">
              <button className="button-info" onClick={() => handleFlip(index)}>
                More info
              </button>
            </div>
          </section>
          <section className="card-back">
            <article className="description">
              <h3 className="textDescription">{project.description}</h3>
            </article>
            <div className="divIconsProject">
              {project.web && (
                  <a className="link-header" href={project.web} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGlobe} size="2x" />
                  </a>
                )}
                {project.linkgit && (
                  <a className="link-header" href={project.linkgit} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                )}
            </div>
            
            <button className="button-info" onClick={() => handleFlip(index)}>Go Back</button>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Projects;
