import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectTimeline from "./ProjectTimeline";

const ProjectMain = () => {
  return (
    <div
      id="project"
      className="relative flex flex-col max-w-[1280px] justify-center scroll-mt-40 mx-auto pb-60"
    >
      <ProjectHeader />
      <ProjectTimeline />
    </div>
  );
};

export default ProjectMain;
