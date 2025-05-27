import React from "react";
import ProjectData from "./ProjectsData.json";

const ProjectsDataSet = ProjectData.Projects;

const ProjectsMain = () => {
  return (
    <div>
      <ul>
        {ProjectsDataSet.map((project) => (
          <li key={project.id}>
            <h2>{project.date}</h2>
            <p>{project.client}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsMain;
