import React from "react";
import ProjectData from "./ProjectData.json";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimeLine = () => {
  return (
    <div>
      {ProjectDataSet.map((project) => (
        <div key={project.id}>{project.date}</div>
      ))}
    </div>
  );
};

export default ProjectTimeLine;
