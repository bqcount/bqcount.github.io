import "./Experience.css";

function Experience() {
  const experiences = [
    {
      year: "Mar 2025-Currenly", 
      title: "Web content creator",
      company: "Hooba Atlantic",
      description:"Design and layout of web pages using the Hooba CMS. Responsible for structuring visual and written content optimized for SEO, ensuring an attractive and functional user experience. Also perform SEO analysis to improve website visibility."
    },
    {
      year: "Apr 2024-Mar 2025", 
      title: "Full Stack Developer",
      company: "Binhex Solutions",
      description:
        "Experience using Odoo at user level, including consuming its API and performing small data migrations. In addition, I have developed mobile applications using Flutter and React Native, integrating modern and efficient functionalities in mobile software development.",
    },
    
    {
      year: "Mar 2023-Sep 2023",
      title: "Junior Full Stack Developer",
      company: "Atos",
      description:
        "Development of projects with Spring Boot and Angular, managing relational databases such as MySQL, and using version control systems such as Git and GitHub, applying the SCRUM methodology for agile project management.",
    },
   
  ];


  return (
    <div className="content-timeline">
    <h1 id="laboral-experience">Work experience</h1>
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
