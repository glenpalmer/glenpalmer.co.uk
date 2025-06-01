import React from "react";
import graphicProjectBoard from "../../../../public/images/graphicProjectBoard.png";

const ProjectsHeader = () => {
  return (
    <div className="flex flex-col w-full justify-start md:flex-row md:justify-center">
      <div>
        <img
          src={graphicProjectBoard}
          className="relative w-[132px] h-[164px] mx-auto md:absolute md:w-[189px] md:h-[234px] md:right-0 md:mr-4"
        />
      </div>
      <div className="pt-6 pb-6">
        <h2 className="text-xl text-center">Review and explore my</h2>
        <h1 className="text-3xl text-center font-bold">Experience</h1>
      </div>
    </div>
  );
};

export default ProjectsHeader;
