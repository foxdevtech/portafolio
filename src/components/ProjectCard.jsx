import './ProjectCard.css';
import SpotlightCard from './SpotlightCard';

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <div className="project-card">
      <div className="project-info">
      
          <h3>{title}</h3>
          <p>{description}</p>
        
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver Proyecto →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;