import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceText from "./ExperienceText";

const ExperienceMain = () => {
  return (
    <div
      id="experience"
      className="max-w-[1180px] scroll-mt-40 mx-auto pb-60 justify-center"
    >
      <ExperienceHeader />
      <ExperienceText />
    </div>
  );
};

export default ExperienceMain;
