import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-30 pb-60 md:pt-60">
      <div className="relative flex flex-col max-w-[1280px] justify-center md:flex-row md:justify-around">
        <div className="md:translate-x-[50%]">
          <HeroText />
        </div>
        <div className="mt-10 md:mt-0">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
