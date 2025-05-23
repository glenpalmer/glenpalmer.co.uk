import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-60 pb-60">
      <div className="relative flex max-w-[1180px] mx-auto justify-between items-center px-8">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
