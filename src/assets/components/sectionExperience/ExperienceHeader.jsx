import React from "react";
import graphicDesktop from "../../../../public/images/graphicDesktop.png";

const ExperienceHeader = () => {
  return (
    <div className="flex relative w-full justify-center">
      <div>
        <img
          src={graphicDesktop}
          className="absolute left-0 h-[188px] w-[192px] z-10"
        />
      </div>
      <div className="pt-6 pb-6">
        <h2 className="text-2xl text-center">Review and explore my</h2>
        <h1 className="text-4xl text-center font-bold">Experience</h1>
      </div>
    </div>
  );
};

export default ExperienceHeader;
