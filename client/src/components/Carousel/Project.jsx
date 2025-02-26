import React, { useState } from "react";
import "./project.css";
import { project_data } from "../../assets/Data";

const Project = () => {
  const [projects] = useState(project_data);
  //const projects = [...project_data, ...project_data];

  // Adjust the width sizes and gaps
  return (
    <div className="slider-container">
      <div className="list-container">
        {projects &&
          projects.map((img, index) => {
            return (
              <div
                key={index}
                className="item-container"
                style={{ "--positions": (index + 1).toString() }}
              >
                <img src={img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Project;
