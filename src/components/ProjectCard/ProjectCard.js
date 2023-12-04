import "./ProjectCard.css";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const ProjectCard = ({ projectInfos, direction }) => {

  const pathProjectImage = require(`../../assets/${projectInfos.image}`)

  return (
    <div className={`project-card project-card--${direction}`}>
      <div className="project-description">
        <h3 className="project-card__title">{projectInfos.name}</h3>
        <p className="project-card__description">
          {projectInfos.description}
        </p>
        <div className="project-technologies">
          {
            projectInfos && projectInfos.technologies.map((technology) => (
              <span key={technology} className="projects__pill">{technology}</span>
            ))
          }
        </div>
        <div className="project-links">
          <a className="project-card__link-site" href={projectInfos.link} target="_blank" rel="noreferrer" > 
            <BsArrowLeft className="project-links__icon-left"/> 
            Visitar 
            <BsArrowRight className="project-links__icon-right"/>
          </a>
          <a className="project-card__link-repository" href={projectInfos.repository} target="_blank" rel="noreferrer">Repositório</a>
        </div>
      </div>
      <img className="project-card__image" src={pathProjectImage} alt={`Imagem do projeto ${projectInfos.name}`} />
    </div>
  )
};

export default ProjectCard;