import "./Experience.css";
/* import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi"; */
function Experience() {
  const experiences = [
    {
      year: "April 2024-October 2024", // Abril 2024-Octubre 2024
      title: "Junior Developer",
      company: "Binhex Solutions",
      description:
        "Experience using Odoo at user level, including consuming its API and performing small data migrations. In addition, I have developed mobile applications using Flutter and React Native, integrating modern and efficient functionalities in mobile software development.",
    },
    {
      year: "January 2024-April 2024", // Enero 2024-Abril 2024
      title: "Bootcamp Full Stack Javacript developer",
      company: "Reboot Academy",
      description:
        "I developed complete web applications through a Full Stack Web development bootcamp, where I acquired skills in creating robust APIs with Express and frontend development using React. In addition, I managed relational databases, effectively integrating the backend and frontend. This experience provided me with a comprehensive understanding of the software development lifecycle and familiarized me with collaborative work practices and agile methodologies.",
    },
    {
      year: "March 2023-September 2023", // Mazo 2023-Septiembre 2023
      title: "Junior Full Stack Developer",
      company: "Atos",
      description:
        "Development of projects with Spring Boot and Angular, managing relational databases such as MySQL, and using version control systems such as Git and GitHub, applying the SCRUM methodology for agile project management.",
    },
    {
      year: "October 2020-March 2023", // Octubre 2020-Marzo 2023
      title: "Higher Vocational Training in Multiplatform Programming",
      company: "CIP Tenerife",
      description:
        "Development of desktop, web and mobile projects using Java and markup languages, with integration of business management systems (Odoo) and version control through GitHub, in addition to managing and administering computer systems.",
    },
  ];


  return (
    <div className="content-timeline">
    <h1 id="laboral-experience">Experiencia laboral</h1>
    {experiences.map((exp, index) => (
      <div key={index} className="experience-content">
        <section className="left-timeline">
          <p>{exp.year}</p>
          <div className="linepoint">
            <div className="point"></div>
          </div>
        </section>
        <article className="description">
          <h3 id="company">{exp.company}</h3>
          <h2 className="exp-title">{exp.title}</h2>
          <p>{exp.description}</p>
        </article>
      </div>
    ))}
  </div>
  
  );
  
}

export default Experience;
