import "./Projects.css";

import { useState, useEffect } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [projectsInfos, setProjectsInfos] = useState();
  const [qtdProjectsRendered, setQtdProjectsRendered] = useState(3);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await fetch("./data/projects.json");
        const data = await response.json();

        setProjectsInfos(data.projects);
      } catch (error) {

      }
    }

    getProjects()

  }, []);

  const handleAllProjects = () => {
    qtdProjectsRendered === 3 ? setQtdProjectsRendered(projectsInfos.length) : setQtdProjectsRendered(3)
  }

  return (
    <section id="projects">
      <div className="wrapper">
        <div className="content">
          <h2 className="projects__title">Projetos</h2>
          <div className="projects-inner">
            {
              projectsInfos && projectsInfos.slice(0, qtdProjectsRendered).map((project, index) => (
                <ProjectCard key={project.name} projectInfos={project} direction={index % 2 === 0 ? "right" : "left"} />
              ))
            }
          </div>
          {
            projectsInfos && (
              <button className="btn-outline projects__btn" onClick={handleAllProjects}>
                {
                  qtdProjectsRendered === 3 ? "Ver mais" : "Ver menos"
                }
              </button>
            )
          }
        </div>
      </div>
    </section>
  )
};

export default Projects;