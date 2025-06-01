import React from "react";
import graphicDesktop from "../../../../public/images/graphicDesktop.png";

const ExperienceHeader = () => {
  return (
    <div className="flex flex-col w-full justify-start md:justify-center md:flex-row">
      <div>
        <img
          src={graphicDesktop}
          className="relative w-[132px] h-[125px] mx-auto md:absolute md:w-[192px] md:h-[188px] md:right-0 md:mr-4"
        />
      </div>
      <div className="pt-6 pb-6">
        <h2 className="text-xl text-center">Review and explore my</h2>
        <h1 className="text-3xl text-center font-bold">Experience</h1>
      </div>
    </div>
  );
};

export default ExperienceHeader;
