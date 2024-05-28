import  { useEffect } from 'react';

const Sky = () => {
  useEffect(() => {
    const sky = document.querySelector('.sky');

    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 5}s`; // Añadir retraso aleatorio
      sky.appendChild(star);
    }

    function createShootingStar() {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      shootingStar.style.top = `${Math.random() * 100}vh`;
      shootingStar.style.left = `${Math.random() * 100}vw`;
      shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria entre 1 y 3 segundos
      sky.appendChild(shootingStar);

      // Remove shooting star after animation
      shootingStar.addEventListener('animationend', () => {
        shootingStar.remove();
      });
    }

    for (let i = 0; i < 100; i++) {
      createStar();
    }

    const intervalId = setInterval(createShootingStar, 2000); // Reducir la frecuencia a una estrella fugaz cada 5 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="sky"></div>;
};

export default Sky;
