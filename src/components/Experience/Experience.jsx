import "./Experience.css";
/* import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi"; */

function Experience() {
  const experiences = [
    {
      year: "Abril 2024-Octubre 2024",
      title: "Junior Developer",
      company: "Binhex Solutions",
      description:
        "Experience using Odoo at user level, including consuming its API and performing small data migrations. In addition, I have developed mobile applications using Flutter and React Native, integrating modern and efficient functionalities in mobile software development.",
    },
    {
      year: "Enero 2024-Abril 2024",
      title: "Bootcamp Full Stack Javacript developer",
      company: "Reboot Academy",
      description:
        "I developed complete web applications through a Full Stack Web development bootcamp, where I acquired skills in creating robust APIs with Express and frontend development using React. In addition, I managed relational databases, effectively integrating the backend and frontend. This experience provided me with a comprehensive understanding of the software development lifecycle and familiarized me with collaborative work practices and agile methodologies.",
    },
    {
      year: "Mazo 2023-Septiembre 2023",
      title: "Junior Full Stack Developer",
      company: "Atos",
      description:
        "Development of projects with Spring Boot and Angular, managing relational databases such as MySQL, and using version control systems such as Git and GitHub, applying the SCRUM methodology for agile project management.",
    },
    {
      year: "Octubre 2020-Marzo 2023",
      title: "Higher Vocational Training in Multiplatform Programming",
      company: "International Polytechnic Center of Tenerife",
      description:
        "Development of desktop, web and mobile projects using Java and markup languages, with integration of business management systems (Odoo) and version control through GitHub, in addition to managing and administering computer systems.",
    },
  ];

  return (
    <div className="content-timeline">
    <h1>Experiencia laboral</h1>
    {experiences.map((exp, index) => (
      <div key={index} className="experience-content">
        <section className="left-timeline">
          <p>{exp.year}</p>
          <div className="linepoint">
            <div className="point"></div>
          </div>
        </section>
        <article className="description">
          <h2>{exp.title}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.description}</p>
        </article>
      </div>
    ))}
  </div>
  
  );
  
}

export default Experience;
