import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="border border-yellow-500 pt-40 pb-16">
      <div className="border border-blue-500 relative flex max-w-[1180px] mx-auto justify-between items-center px-8">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
