import './About.css';

const About = () => {
  const skills = ["JavaScript", "React", "CSS3", "HTML5", "Git", "Node.js"];

  return (
    <section id="sobre-mi" className="about">
      <div className="about-container">
        <h2>Sobre Mí</h2>
        <p>
          Soy un desarrollador entusiasta con base en [Tu Ciudad]. 
          Me encanta transformar problemas complejos en interfaces intuitivas.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;