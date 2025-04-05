import "./Training.css";

function Training() {
  const experiences = [
    
    {
      year: "Jan 2024-Apr 2024", 
      title: "Bootcamp Full Stack Javacript developer",
      company: "Reboot Academy",
      description:"I developed full web applications during a Full Stack Web development bootcamp, gaining skills in building APIs with Express and frontends with React. I also integrated relational databases, connecting backend and frontend seamlessly, and learned agile methodologies and collaborative work practices."    },
   
    {
      year: "Oct 2020-Mar 2023", 
      title: "Higher Vocational Training in Multiplatform Programming",
      company: "CIP Tenerife",
      description:
        "Development of desktop, web and mobile projects using Java and markup languages, with integration of business management systems (Odoo) and version control through GitHub, in addition to managing and administering computer systems.",
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

export default Training;
