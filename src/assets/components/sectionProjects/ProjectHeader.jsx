import React from "react";
import graphicProjectBoard from "../../../../public/images/graphicProjectBoard.png";

const ProjectsHeader = () => {
  return (
    <div className="flex relative w-full justify-center">
      <div>
        <img
          src={graphicProjectBoard}
          className="absolute right-0 h-[234px] w-[189px] z-0"
        />
      </div>
      <div className="pt-6 pb-6">
        <h2 className="text-2xl text-center">Review and explore my</h2>
        <h1 className="text-4xl text-center font-bold">Experience</h1>
      </div>
    </div>
  );
};

export default ProjectsHeader;
