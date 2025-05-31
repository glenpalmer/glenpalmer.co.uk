import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <div
      id="aboutMe"
      className="max-w-[1180px] scroll-mt-40 mx-auto pb-60 justify-center"
    >
      <AboutMeHeader />
      <AboutMeText />
    </div>
  );
};

export default AboutMeMain;
