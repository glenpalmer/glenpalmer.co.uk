import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectTimeline from "./ProjectTimeline";

const ProjectMain = () => {
  return (
    <div
      id="project"
      className="max-w-[1180px] scroll-mt-40 mx-auto pb-60 justify-center"
    >
      <ProjectHeader />
      <ProjectTimeline />
    </div>
  );
};

export default ProjectMain;
