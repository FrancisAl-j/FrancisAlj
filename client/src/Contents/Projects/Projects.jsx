import React, { useState } from "react";
import "./projects.css";
import { projects_data } from "../../assets/Data";
import Web from "../../assets/images/web.svg";

const Projects = () => {
  const [projects] = useState(projects_data);
  // TODO: Fix the responsiveness tomorrow.
  return (
    <div className="projects" id="project">
      <div className="projects-container">
        {projects.map((data, index) => {
          return (
            <div className="project-container" key={index}>
              <img src={data.image} alt="" className="web" />
              <div className="project-content">
                <div className="stacks-container">
                  {data.stacks &&
                    data.stacks.map((stack, index) => {
                      return (
                        <span key={index} className="stack">
                          {stack}
                        </span>
                      );
                    })}
                </div>
                <h2>{data.name}</h2>
                <p>{data.description}</p>

                {data.link ? (
                  <a href={data.link} target="_blank">
                    <p className="link">{data.link}</p>
                  </a>
                ) : (
                  <p className="soon">Coming soon!</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
