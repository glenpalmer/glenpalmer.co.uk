import React from "react";
import ProjectTimelineSample from "./ProjectTimelineSample";
import ProjectHeader from "./ProjectHeader";
import ProjectTimeline from "./ProjectTimeline";

const ProjectMain = () => {
  return (
    <div className="max-w-[1180px] mx-auto pb-60 justify-center">
      <ProjectHeader />
      <ProjectTimelineSample />
    </div>
  );
};

export default ProjectMain;
