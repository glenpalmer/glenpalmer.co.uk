import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <div
      id="aboutMe"
      className="relative flex flex-col max-w-[1280px] justify-center scroll-mt-40 mx-auto pb-60"
    >
      <div>
        <AboutMeHeader />
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMeMain;
