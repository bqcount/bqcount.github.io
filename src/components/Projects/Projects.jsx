import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (cardIndex) => {
    setFlippedCard(flippedCard === cardIndex ? null : cardIndex); // Alterna el estado
  };

  return (
    <div className="content-projects">
      {/* Tarjeta 1 */}
      <div className={`card ${flippedCard === 1 ? 'flipped' : ''}`}>
        <div className="div-img card-front">
          <img src="src/assets/logocompicar.png" alt="" className="img-project" />
          <div className="div-button-info">
            <button id="compicar-info" className="button-info" onClick={() => handleFlip(1)}>
              More info
            </button>
          </div>
        </div>
        <div className="card-back">
          <h2>Back Side of Project 1</h2>
          <button onClick={() => handleFlip(1)}>Go Back</button>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className={`card ${flippedCard === 2 ? 'flipped' : ''}`}>
        <div className="div-img card-front">
          <img src="src/assets/ludohana.png" alt="" className="img-project" />
          <div className="div-button-info">
            <button className="button-info" onClick={() => handleFlip(2)}>
              More info
            </button>
          </div>
        </div>
        <div className="card-back">
          <h2>Back Side of Project 2</h2>
          <button onClick={() => handleFlip(2)}>Go Back</button>
        </div>
      </div>

      {/* Repite el patrón para las otras tarjetas */}
      <div className={`card ${flippedCard === 3 ? 'flipped' : ''}`}>
        <div className="div-img card-front">
          <img src="src/assets/bloodyrun.png" alt="" className="img-project" />
          <div className="div-button-info">
            <button className="button-info" onClick={() => handleFlip(3)}>
              More info
            </button>
          </div>
        </div>
        <div className="card-back">
          <h2>Back Side of Project 3</h2>
          <button onClick={() => handleFlip(3)}>Go Back</button>
        </div>
      </div>

      {/* Tarjeta 4 */}
      <div className={`card ${flippedCard === 4 ? 'flipped' : ''}`}>
        <div className="div-img card-front">
          <img src="src/assets/bloodyrun.png" alt="" className="img-project" />
          <div className="div-button-info">
            <button className="button-info" onClick={() => handleFlip(4)}>
              More info
            </button>
          </div>
        </div>
        <div className="card-back">
          <h2>Back Side of Project 4</h2>
          <button onClick={() => handleFlip(4)}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
