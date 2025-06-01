import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceText from "./ExperienceText";

const ExperienceMain = () => {
  return (
    <div
      id="experience"
      className="relative flex flex-col max-w-[1280px] justify-center scroll-mt-40 mx-auto pb-60"
    >
      <ExperienceHeader />
      <ExperienceText />
    </div>
  );
};

export default ExperienceMain;
