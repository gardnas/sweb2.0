import React from "react";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <div className="projects-content col-sm-8 col-xs-12">
      <section id="projects">
        <h3 className="projects-title">Projects</h3>
        <div>
          {projectsData.map((project, index) => (
            <div className="project-container" key={index}>
              <h4>
                <img src={project.imagePath} alt={`${project.title} screenshot`} className="img-fluid" loading="lazy"/> 
                <br></br>
                {project.title}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-link github-link"></i>
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-github github-link"></i>
                  </a> 
                )}
              </h4>
              <h5> <i>{project.subtitle}</i>  </h5>
              {/* mapping the technolgies from an array in the json */}
              <div className="tools">
                {Array.isArray(project.technologies) ? (
                  project.technologies.map((tech, techIndex) => (
                    <div className="technology-pill" key={techIndex}>
                      {tech}
                    </div>
                  ))
                ) : (
                  <p>No technologies listed.</p>
                )}
              </div>
              
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
